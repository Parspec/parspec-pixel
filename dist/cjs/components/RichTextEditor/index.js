"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const LexicalComposer_1 = require("@lexical/react/LexicalComposer");
const LexicalRichTextPlugin_1 = require("@lexical/react/LexicalRichTextPlugin");
const LexicalContentEditable_1 = require("@lexical/react/LexicalContentEditable");
const LexicalHistoryPlugin_1 = require("@lexical/react/LexicalHistoryPlugin");
const LexicalErrorBoundary_1 = __importDefault(require("@lexical/react/LexicalErrorBoundary"));
const LexicalListPlugin_1 = require("@lexical/react/LexicalListPlugin");
const LexicalLinkPlugin_1 = require("@lexical/react/LexicalLinkPlugin");
const LexicalClickableLinkPlugin_1 = __importDefault(require("@lexical/react/LexicalClickableLinkPlugin"));
const LexicalMarkdownShortcutPlugin_1 = require("@lexical/react/LexicalMarkdownShortcutPlugin");
const markdown_1 = require("@lexical/markdown");
const AutoLinkPlugin_1 = __importDefault(require("./AutoLinkPlugin"));
const HtmlPlugin_1 = __importDefault(require("./HtmlPlugin"));
require("./RichText.css");
const PlaceHolder_1 = __importDefault(require("./PlaceHolder"));
const Box_1 = require("../Box");
const ToolBar_1 = __importStar(require("./ToolBar"));
const AutoFocusPlugin_1 = __importDefault(require("./AutoFocusPlugin"));
const DisableEditorPlugin_1 = __importDefault(require("./DisableEditorPlugin"));
const theme = {
    link: 'cursor-pointer',
    text: {
        bold: 'textBold',
        italic: 'textItalic',
        underline: 'textUnderline'
    },
    paragraph: 'richTextParagraph',
    list: {
        listitem: 'richTextListItem',
        ul: 'richTextList',
        ol: 'richTextList'
    }
};
// Catch any errors that occur during Lexical updates and log them
// or throw them as needed. If you don't throw them, Lexical will
// try to recover gracefully without losing user data.
function onError(error) {
    console.error(error);
}
function RichTextEditor({ onFileUpload, onChange, initialHtml = '', editorBgColor = 'white', contentEditableHeight = '150px', isDisableEditorState = false, placeHolderText = 'Enter text...', showAttachements = false, showShareableLinkButton = false, shareableLinkUrl = '#', shareableLinkTitle = '', onBlur = () => { }, onFocus = () => { } }) {
    const initialConfig = {
        namespace: 'ParspecEditor',
        theme,
        onError,
        nodes: ToolBar_1.registeredNodes
    };
    return ((0, jsx_runtime_1.jsx)(LexicalComposer_1.LexicalComposer, Object.assign({ initialConfig: initialConfig }, { children: (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ className: "editor-container" }, { children: (0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ className: "editor-inner" }, { children: [(0, jsx_runtime_1.jsx)(ToolBar_1.default, { onFileUpload: onFileUpload, isDisableEditorState: isDisableEditorState, showAttachements: showAttachements, showShareableLinkButton: showShareableLinkButton, shareableLinkTitle: shareableLinkTitle, shareableLinkUrl: shareableLinkUrl }), (0, jsx_runtime_1.jsx)(LexicalRichTextPlugin_1.RichTextPlugin, { contentEditable: (0, jsx_runtime_1.jsx)(LexicalContentEditable_1.ContentEditable, { onBlur: onBlur, onFocus: onFocus, style: {
                                width: '100%',
                                height: contentEditableHeight,
                                border: '1px solid #ccc',
                                backgroundColor: editorBgColor,
                                paddingTop: '12px',
                                paddingLeft: '12px',
                                overflow: 'auto',
                                borderRadius: '5px'
                            } }), placeholder: (0, jsx_runtime_1.jsx)(PlaceHolder_1.default, { placeHolderText: placeHolderText }), ErrorBoundary: LexicalErrorBoundary_1.default }), (0, jsx_runtime_1.jsx)(LexicalListPlugin_1.ListPlugin, {}), (0, jsx_runtime_1.jsx)(LexicalHistoryPlugin_1.HistoryPlugin, {}), (0, jsx_runtime_1.jsx)(AutoFocusPlugin_1.default, {}), (0, jsx_runtime_1.jsx)(HtmlPlugin_1.default, { initialHtml: initialHtml, onHtmlChanged: onChange }), (0, jsx_runtime_1.jsx)(AutoLinkPlugin_1.default, {}), (0, jsx_runtime_1.jsx)(LexicalLinkPlugin_1.LinkPlugin, {}), (0, jsx_runtime_1.jsx)(LexicalClickableLinkPlugin_1.default, {}), (0, jsx_runtime_1.jsx)(DisableEditorPlugin_1.default, { isDisableEditorState: isDisableEditorState }), (0, jsx_runtime_1.jsx)(LexicalMarkdownShortcutPlugin_1.MarkdownShortcutPlugin, { transformers: markdown_1.TRANSFORMERS })] })) })) })));
}
exports.default = RichTextEditor;
//# sourceMappingURL=index.js.map