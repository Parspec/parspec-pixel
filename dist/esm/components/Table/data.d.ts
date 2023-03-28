export declare const dDataP: {
    id: number;
    taskID: number;
    name: string;
    type: string;
    reporter: string;
    available: string;
    is_hidden: boolean;
    subtasks: ({
        id: number;
        taskID: number;
        name: string;
        type: string;
        reporter: string;
        available: string;
        is_hidden: boolean;
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            type: string;
            reporter: string;
            available: string;
            is_hidden: boolean;
        }[];
    } | {
        id: number;
        taskID: number;
        name: string;
        reporter: string;
        type: string;
        is_hidden: boolean;
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            type: string;
            reporter: string;
            available: string;
            is_hidden: boolean;
        }[];
        available?: undefined;
    })[];
}[];
export declare const dDataP2: {
    id: number;
    taskID: number;
    name: string;
    type: string;
    reporter: string;
    available: string;
    is_hidden: boolean;
}[];
