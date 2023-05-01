import React from 'react';
interface StatusProps {
    color?: 'primary' | 'info' | 'success' | 'error' | 'tertiary';
    children?: React.ReactNode;
}
export declare const Status: React.FC<StatusProps>;
export {};
