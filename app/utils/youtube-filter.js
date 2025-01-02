import { formatTime } from "./duration-cal";

// Utility function to convert bytes to a readable format
function formatFileSize(size) {
    if (!size || isNaN(size)) return null;
    const units = ["B", "KB", "MB", "GB", "TB"];
    let i = 0;
    let readableSize = size;
    while (readableSize >= 1024 && i < units.length - 1) {
        readableSize /= 1024;
        i++;
    }
    return `${readableSize.toFixed(2)} ${units[i]}`;
}

export function FilterYouTube(mediaInfo) {
    const formats = mediaInfo.formats;

    // Categorize formats
    const videoWithAudio = formats.filter(
        (format) => format.vcodec !== "none" && format.acodec !== "none"
    );

    const audioOnly = formats.filter(
        (format) => format.vcodec === "none" && format.acodec !== "none"
    );

    const webmFormats = formats.filter(
        (format) => format.ext === "webm" && format.vcodec !== "none"
    );

    const videoWithoutAudio = formats.filter(
        (format) => format.vcodec !== "none" && format.acodec === "none"
    );

    // Sort by resolution (highest to lowest)
    const sortByResolution = (a, b) => {
        const resolutionA = parseInt(a.height || 0, 10);
        const resolutionB = parseInt(b.height || 0, 10);
        return resolutionB - resolutionA;
    };

    // Prepare items
    const prepareItems = (format, icon) => {
        const exactFileSize = format.filesize ? formatFileSize(format.filesize) : null;
        const approxFileSize = format.filesize_approx ? formatFileSize(format.filesize_approx) : null;

        return {
            name: `${format.ext.toUpperCase()}`,
            url: format.url,
            resolution: format.resolution || "Unknown",
            fileSize: exactFileSize || (approxFileSize ? `~${approxFileSize}` : null),
            icon: icon,
        };
    };

    const items = [
        ...videoWithAudio.sort(sortByResolution).map((format) => prepareItems(format, "none")),
        ...audioOnly.sort(sortByResolution).map((format) => prepareItems(format, "none")),
        ...webmFormats.sort(sortByResolution).map((format) => prepareItems(format, "none")),
        ...videoWithoutAudio.sort(sortByResolution).map((format) => prepareItems(format, "show")),
    ];

    const filteredInfo = {
        title: mediaInfo.title,
        duration: formatTime(mediaInfo.duration),
        thumbnail: mediaInfo.thumbnail,
        items: items,
    };

    return filteredInfo;
}
