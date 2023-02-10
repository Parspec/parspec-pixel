export type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};
export declare const defaultData: Person[];
export type LastModifiedType = {
    lastModifiedBy: string;
    lastModifiedTime: string;
};
export type QuoteType = {
    quoteStatus: boolean;
    quoteActionTakenBy: string;
};
export type SubmittalType = {
    submittalStatus: boolean;
    submittalActionTakenBy: string;
};
export type Project = {
    wonStatus: boolean;
    bomId: string;
    customer: string;
    lastModified: LastModifiedType;
    quote: QuoteType;
    submittal: SubmittalType;
};
export declare const defaultDataP: Project[];
