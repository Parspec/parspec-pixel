export declare const dDataP: {
    taskID: number;
    name: string;
    reporter: string;
    available: string;
    subtasks: ({
        taskID: number;
        name: string;
        reporter: string;
        available: string;
        subtasks: {
            taskID: number;
            name: string;
            reporter: string;
            available: string;
        }[];
    } | {
        taskID: number;
        name: string;
        reporter: string;
        subtasks: {
            taskID: number;
            name: string;
            reporter: string;
            available: string;
        }[];
        available?: undefined;
    })[];
}[];
