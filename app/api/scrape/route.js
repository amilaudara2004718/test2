// Import yt-dlp package and required modules
import { YtDlp } from '@yemreak/yt-dlp';
import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { FilterYouTube } from '../../utils/youtube-filter';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  

  if (!url) {
    return NextResponse.json({
      error: 'URL is required' }, { status: 400 });
  }

  try {
    // Define the download directory and yt-dlp.exe path
    const downloadDir = path.resolve('downloads');
    const ytDlpPath = path.join(downloadDir, 'yt-dlp.exe');

    // Check if the 'downloads' directory exists, if not, create it
    if (!fs.existsSync(downloadDir)) {
      fs.mkdirSync(downloadDir, { recursive: true });
    }

    // Check if the yt-dlp.exe file exists, if not, download it
    if (!fs.existsSync(ytDlpPath)) {
      const ytDlp = new YtDlp({ workdir: downloadDir });
      await ytDlp.downloadLatestReleaseIfNotExists();
    }

    // Initialize YtDlp instance
    const ytDlp = new YtDlp({ workdir: downloadDir });

    // Fetch video data from yt-dlp
    const mediaInfo = await ytDlp.retrieveMediaInfoList(url);

    const jsonFilePath = path.resolve('test-media-info.json');
    fs.writeFileSync(jsonFilePath, JSON.stringify(mediaInfo, null, 2));

    const data = mediaInfo[0]

  
    if(data.extractor == "youtube"){
      const info = FilterYouTube(data)
      return  NextResponse.json({ success: true, data: info });
    }



    return NextResponse.json({ success: false, error: "That platform is not supported!" });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
