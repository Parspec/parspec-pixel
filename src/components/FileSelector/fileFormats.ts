const fileFormats = {
    '.png': 'image/png',
    '.jpeg': 'image/jpeg',
    '.jpg': 'image/jpeg',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.pdf': 'application/pdf',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.xml': 'application/xml',
    '.csv': 'text/csv',
    '.xls': 'application/vnd.ms-excel',
    '.xlsm': 'application/vnd.ms-excel.sheet.macroEnabled.12'
};

export const getAcceptedFormats = (formats: string[]) => {
    let acceptedFormats = {} as any;
    formats.forEach((format: string) => {
        let key = fileFormats[format as keyof typeof fileFormats];
        if (key) {
            acceptedFormats[key] = [format];
        }
    });
    return acceptedFormats;
};
