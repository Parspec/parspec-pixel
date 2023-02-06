export type Person = {
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
};
export declare const defaultData: Person[];
export type Project = {
    wonStatus: boolean;
    bomId: string;
    customer: string;
    lastModified: {
        lastModifiedBy: string;
        lastModifiedTime: string;
    };
    quote: {
        quoteStatus: boolean;
        quoteActionTakenBy: string;
    };
    submittal: {
        submittalStatus: boolean;
        submittalActionTakenBy: string;
    };
};
export declare const defaultDataP: Project[];
