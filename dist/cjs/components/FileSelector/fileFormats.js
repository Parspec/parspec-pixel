"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAcceptedFormats = void 0;
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
const getAcceptedFormats = (formats) => {
    let acceptedFormats = {};
    formats.forEach((format) => {
        let key = fileFormats[format];
        if (key) {
            acceptedFormats[key] = [format];
        }
    });
    return acceptedFormats;
};
exports.getAcceptedFormats = getAcceptedFormats;
//# sourceMappingURL=fileFormats.js.map