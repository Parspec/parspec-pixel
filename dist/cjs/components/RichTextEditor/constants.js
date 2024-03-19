"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FONT_FAMILY_OPTIONS = exports.LOW_PRIORITY = exports.EMAIL_MATCHER = exports.URL_MATCHER = void 0;
exports.URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
exports.EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
exports.LOW_PRIORITY = 1;
exports.FONT_FAMILY_OPTIONS = [
    { id: 'Arial', name: 'Arial' },
    { id: 'Courier New', name: 'Courier New' },
    { id: 'Georgia', name: 'Georgia' },
    { id: 'Trebuchet MS', name: 'Trebuchet MS' },
    { id: 'Times New Roman', name: 'Times New Roman' },
    { id: 'Verdana', name: 'Verdana' }
];
//# sourceMappingURL=constants.js.map