export declare const data: ({
    user_details: {
        id: number;
        name: string;
        email: string;
        last_activity: string;
        first_name: string;
        last_name: string;
        product_finder_enabled: boolean;
    };
    roles: {
        role: string;
    }[];
    company_details: {
        company_id: number;
        company_name: string;
    }[];
    company_locations_arr: string[];
    company_locations_str: string;
} | {
    user_details: {
        id: number;
        name: string;
        email: string;
        last_activity: string;
        first_name: null;
        last_name: null;
        product_finder_enabled: boolean;
    };
    roles: {
        role: string;
    }[];
    company_details: {
        company_id: number;
        company_name: string;
    }[];
    company_locations_arr: string[];
    company_locations_str: string;
})[];
