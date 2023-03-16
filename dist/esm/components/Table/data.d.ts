export declare const dDataP: {
    id: number;
    taskID: number;
    name: string;
    reporter: string;
    available: string;
    hidden: boolean;
    subtasks: ({
        id: number;
        taskID: number;
        name: string;
        reporter: string;
        available: string;
        hidden: boolean;
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            reporter: string;
            available: string;
            hidden: boolean;
        }[];
    } | {
        id: number;
        taskID: number;
        name: string;
        reporter: string;
        hidden: boolean;
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            reporter: string;
            available: string;
            hidden: boolean;
        }[];
        available?: undefined;
    })[];
}[];
export declare const dDataP2: {
    id: number;
    taskID: number;
    name: string;
    reporter: string;
    available: string;
    hidden: boolean;
}[];
