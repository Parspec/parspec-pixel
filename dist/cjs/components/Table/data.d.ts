export declare const dDataP: {
    id: number;
    taskID: number;
    name: string;
    reporter: string;
    available: string;
    subtasks: ({
        id: number;
        taskID: number;
        name: string;
        reporter: string;
        available: string;
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            reporter: string;
            available: string;
        }[];
    } | {
        id: number;
        taskID: number;
        name: string;
        reporter: string;
        subtasks: {
            id: number;
            taskID: number;
            name: string;
            reporter: string;
            available: string;
        }[];
        available?: undefined;
    })[];
}[];
