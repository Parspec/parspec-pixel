import React from 'react';
interface StatusProps {
    color?: 'primary' | 'secondary' | 'tertiary' | 'info' | 'warning' | 'success' | 'error';
    children?: React.ReactNode;
}
export declare const Status: React.FC<StatusProps>;
export {};
