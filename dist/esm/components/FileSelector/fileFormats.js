const fileFormats = {
    '.png': 'image/png',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.pdf': 'application/pdf',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.xml': 'pplication/xml'
};
export const getAcceptedFormats = (formats) => {
    let acceptedFormats = {};
    formats.forEach((format) => {
        let key = fileFormats[format];
        if (key) {
            acceptedFormats[key] = [format];
        }
    });
    return acceptedFormats;
};
//# sourceMappingURL=fileFormats.js.map