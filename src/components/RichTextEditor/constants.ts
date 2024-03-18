export const URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;

export const EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

export const LOW_PRIORITY = 1;

export const FONT_FAMILY_OPTIONS: { [index: string]: string }[] = [
    { id: 'monospace', name: 'Courier' },
    { id: 'sans-serif', name: 'Halvetica' },
    { id: 'serif', name: 'Times New Roman' }
];
