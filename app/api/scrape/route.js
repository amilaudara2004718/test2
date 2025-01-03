// Import yt-dlp package and required modules
import { YtDlp } from '@yemreak/yt-dlp';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { FilterYouTube } from '../../utils/youtube-filter';
export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const url = searchParams.get('url');

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        const downloadDir = path.resolve('downloads');
        const ytDlpPath = path.join(downloadDir, 'yt-dlp.exe');

        if (!fs.existsSync(downloadDir)) {
            fs.mkdirSync(downloadDir, { recursive: true });
        }

        if (!fs.existsSync(ytDlpPath)) {
            const ytDlp = new YtDlp({ workdir: downloadDir });
            await ytDlp.downloadLatestReleaseIfNotExists();
        }

        const ytDlp = new YtDlp({ workdir: downloadDir });
        const mediaInfo = await ytDlp.retrieveMediaInfoList(url);

        if (!mediaInfo.length) {
            return NextResponse.json({ error: 'No media info retrieved.' }, { status: 500 });
        }

        const data = mediaInfo[0];
        if (data.extractor === "youtube") {
            const info = FilterYouTube(data);
            return NextResponse.json({ success: true, data: info });
        }

        return NextResponse.json({ success: false, error: "That platform is not supported!" });
    } catch (error) {
        console.error("API error:", error);
        return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }
}
