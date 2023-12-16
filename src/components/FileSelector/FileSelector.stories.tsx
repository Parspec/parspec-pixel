import React from 'react';
import { useRef } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileSelector } from './index';
import { Box } from '../Box';

import * as XLSX from 'xlsx';

export default {
    title: 'File Selector',
    component: FileSelector,
    argTypes: { onUpload: { action: 'onUpload' } }
} as ComponentMeta<typeof FileSelector>;

export const fileSelector: ComponentStory<typeof FileSelector> = (args) => {
    const handleFileUpload = async (file: any) => {
        try {
            const isCorrupt = await checkFileCorruptionHandler(file);
            if (isCorrupt) {
                console.log('The file is corrupt.');
            } else {
                console.log('The file is not corrupt.');
            }
        } catch (error) {
            console.log('Error checking file:', error);
        }
    };

    const checkFileCorruptionHandler = async (fileData: any) => {
        // Use appropriate libraries to check file integrity
        const fileType = fileData[0]?.type;
        const file = fileData[0];

        if (fileType === 'application/vnd.ms-excel') {
            return checkExcelCorruption(file);
        } else if (fileType === 'text/csv') {
            return isCsvCorrupt(file);
        } else if (fileType === 'text/XML') {
            return isXMLCorrupt(file);
        } else {
            console.log('Unsupported file type');
            return false;
        }
    };

    function hasUnrecognizableCharacters(inputString) {
        const hasEncodingIssues = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/.test(inputString);
        return hasEncodingIssues;
    }

    function checkExcelCorruption(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();

            reader.onload = async (e) => {
                try {
                    if (!e.target) {
                        resolve(false);
                        return;
                    }
                    // const arrayBuffer = e.target.result;

                    let arrayBuffer: ArrayBuffer;

                    if (e.target.result instanceof ArrayBuffer) {
                        arrayBuffer = e.target.result;
                    } else if (typeof e.target.result === 'string') {
                        // Handle the case where e.target.result is a string (for example, if the file is read as text)
                        // You may need to implement your logic to convert the string to ArrayBuffer if needed
                        // This is just a placeholder, and you may need to adjust it based on your specific requirements
                        arrayBuffer = new TextEncoder().encode(e.target.result).buffer;
                    } else {
                        // Handle other cases as needed
                        resolve(false);
                        return;
                    }

                    const data = new Uint8Array(arrayBuffer);
                    const workbook = XLSX.read(data, { type: 'array' });

                    const sheetName = workbook.SheetNames[0];
                    const sheet = workbook.Sheets[sheetName];

                    // Check if sheet['!ref'] is defined before decoding the range
                    const range = sheet['!ref'] ? XLSX.utils.decode_range(sheet['!ref']) : null;

                    // Check for unrecognizable characters in rows
                    if (range) {
                        for (let row = range.s.r; row <= range.e.r; row++) {
                            for (let col = range.s.c; col <= range.e.c; col++) {
                                const cellAddress = XLSX.utils.encode_cell({ r: row, c: col });
                                const cellValue = sheet[cellAddress]?.v;

                                if (cellValue && typeof cellValue === 'string' && hasUnrecognizableCharacters(cellValue)) {
                                    resolve(true);
                                    return; // File is corrupted, no need to check further
                                }
                            }
                        }
                    }

                    resolve(false); // File is not corrupted
                } catch (error) {
                    console.error('Error reading the file:', error);
                    resolve(false); // Assume the file is not corrupted if there is an error
                }
            };

            reader.readAsArrayBuffer(file);
        });
    }

    const isCsvCorrupt = async (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (e: any) => {
                const content = e.target.result;

                // Check for common encoding issues that might indicate corruption
                const hasEncodingIssues = hasUnrecognizableCharacters(content);
                resolve(hasEncodingIssues);
            };

            reader.onerror = () => {
                console.error('Error reading the file.');
                resolve(true); // Consider the file as corrupt on any read error
            };

            reader.readAsText(file);
        });
    };

    function isXMLCorrupt(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = async (e) => {
                if (!e.target) {
                    resolve(false);
                    return;
                }
                const xmlString = e.target.result as string;
                try {
                    // Attempt to parse the XML string
                    const parser = new DOMParser();
                    const xmlDoc = parser.parseFromString(xmlString, 'application/xml');

                    // Check if there are any parsing errors
                    const parseErrors = xmlDoc.getElementsByTagName('parsererror');

                    // If there are parsing errors, the XML is corrupt
                    const isCorrupt = parseErrors.length > 0;
                    resolve(isCorrupt);
                } catch (error) {
                    // Handle any other errors that may occur during parsing
                    console.error('Error parsing XML:', error);
                    reject(error);
                }
            };

            reader.readAsText(file);
        });
    }

    return (
        <Box width={'217px'} height={'82px'}>
            <FileSelector
                placeholder={'Drag and drop files here, or:'}
                borderColor={'secondary'}
                url="https://hotfix-staging.parspec.xyz/api/generate_signed_url/"
                error="Wrong format"
                maxFiles={2}
                onSelect={(files: any) => {
                    handleFileUpload(files);
                    console.log('onSelect');
                }}
            />
        </Box>
    );
};
