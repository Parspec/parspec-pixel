export declare const dDataP: ({
    id: number;
    taskID: number;
    name: string;
    type: string;
    reporter: string;
    available: string;
    is_hidden: boolean;
    subtasks?: undefined;
} | {
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
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            type: string;
            reporter: string;
            available: string;
            is_hidden: boolean;
        }[];
    }[];
})[];
export declare const dDataP2: {
    id: number;
    taskID: number;
    name: string;
    type: string;
    reporter: string;
    available: string;
    is_hidden: boolean;
}[];
export declare let dDataP4: ({
    id: number;
    taskID: number;
    name: string;
    type: string;
    reporter: string;
    available: string;
    is_hidden: boolean;
    subtasks?: undefined;
} | {
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
})[];
