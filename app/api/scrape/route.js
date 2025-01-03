// Import yt-dlp package and required modules
import { YtDlp } from '@yemreak/yt-dlp';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { FilterYouTube } from '../../utils/youtube-filter';

// Handle the GET request
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get('url');

        // Ensure the URL is provided
        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Dynamically get the download path from the environment variable
        const downloadDir = process.env.YT_DLP_DOWNLOAD_DIR || path.resolve('downloads');
        const ytDlpPath = path.join(downloadDir, 'yt-dlp');

        // Ensure the download directory exists
        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir, { recursive: true });
        }

        // Download yt-dlp if it doesn't exist in the specified path
        if (!fs.existsSync(ytDlpPath)) {
            const ytDlp = new YtDlp({ workdir: downloadDir });
            console.log("Downloading yt-dlp...");
            await ytDlp.downloadLatestReleaseIfNotExists();  // Download yt-dlp if not found
        }

        // Initialize yt-dlp and retrieve media info
        const ytDlp = new YtDlp({ workdir: downloadDir });
        const mediaInfo = await ytDlp.retrieveMediaInfoList(url);

        // Handle error if media info is not retrieved
        if (!mediaInfo.length) {
            return NextResponse.json({ error: 'No media info retrieved.' }, { status: 500 });
        }

        const data = mediaInfo[0];
        
        // If the platform is YouTube, filter and return relevant info
        if (data.extractor === "youtube") {
            const info = FilterYouTube(data);
            return NextResponse.json({ success: true, data: info });
        }

        // Return error if the platform is unsupported
        return NextResponse.json({ success: false, error: "That platform is not supported!" });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
