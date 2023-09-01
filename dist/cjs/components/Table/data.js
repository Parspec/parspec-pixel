"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dDataP4 = exports.dDataP2 = exports.dDataP = void 0;
exports.dDataP = [
    {
        id: 123,
        taskID: 123,
        name: 'prod123',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 1234,
        taskID: 1234,
        name: 'prod1234',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 124,
        taskID: 124,
        name: 'prod124',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 1,
        taskID: 1,
        name: 'section1',
        type: 'section',
        reporter: '',
        available: '',
        is_hidden: false,
        subtasks: [
            {
                id: 2,
                taskID: 2,
                name: 'product1',
                type: 'product',
                reporter: 'Jolan',
                available: 'Yes',
                is_hidden: true,
                subtasks: [
                    {
                        id: 3,
                        taskID: 3,
                        name: 'accessory1',
                        type: 'accessory',
                        reporter: 'Forest',
                        available: 'Yes',
                        is_hidden: true
                    },
                    {
                        id: 312,
                        taskID: 312,
                        name: 'accessory112',
                        type: 'accessory',
                        reporter: 'Forest',
                        available: 'Yes',
                        is_hidden: true
                    }
                ]
            },
            {
                id: 5,
                taskID: 5,
                reporter: 'Abhijit',
                name: 'product2',
                type: 'product',
                available: 'Yes',
                is_hidden: false,
                subtasks: [
                    {
                        id: 7,
                        taskID: 7,
                        reporter: 'Abhishek',
                        name: 'accessory2',
                        type: 'accessory',
                        available: 'Yes',
                        is_hidden: false
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        taskID: 8,
        name: 'section2',
        type: 'section',
        reporter: '',
        available: '',
        is_hidden: false,
        subtasks: [
            {
                id: 9,
                taskID: 9,
                name: 'product1',
                type: 'product',
                reporter: 'Atul',
                available: 'Yes',
                is_hidden: false,
                subtasks: [
                    {
                        id: 10,
                        taskID: 10,
                        name: 'accessory1',
                        type: 'accessory',
                        reporter: 'Pratyush',
                        available: 'Yes',
                        is_hidden: false
                    },
                    {
                        id: 11,
                        taskID: 11,
                        name: 'accessory2',
                        type: 'accessory',
                        reporter: 'Sreemukhi',
                        available: 'Yes',
                        is_hidden: false
                    }
                ]
            },
            {
                id: 12,
                taskID: 12,
                name: 'product2',
                type: 'product',
                reporter: 'Komal',
                available: 'Yes',
                is_hidden: false,
                subtasks: [
                    {
                        id: 13,
                        taskID: 13,
                        name: 'accessory1',
                        type: 'accessory',
                        reporter: 'Harsh',
                        available: 'Yes',
                        is_hidden: false
                    },
                    {
                        id: 14,
                        taskID: 14,
                        name: 'accessory2',
                        type: 'accessory',
                        reporter: 'Tarun',
                        available: 'Yes',
                        is_hidden: true
                    }
                ]
            }
        ]
    }
];
exports.dDataP2 = [
    {
        id: 1,
        taskID: 1,
        name: 'section1',
        type: 'section',
        reporter: '',
        available: 'Yes, No',
        is_hidden: false
    },
    {
        id: 8,
        taskID: 8,
        name: 'section2',
        type: 'section',
        reporter: '',
        available: 'Yes, Yes',
        is_hidden: false
    },
    {
        id: 15,
        taskID: 15,
        name: 'section3',
        type: 'section',
        reporter: '',
        available: 'Yes',
        is_hidden: false
    },
    {
        id: 22,
        taskID: 22,
        name: 'section4',
        type: 'section',
        reporter: '',
        available: 'No',
        is_hidden: false
    },
    {
        id: 2,
        taskID: 2,
        name: 'section1',
        type: 'section',
        reporter: '',
        available: 'Yes',
        is_hidden: false
    },
    {
        id: 3,
        taskID: 3,
        name: 'section2',
        type: 'section',
        reporter: '',
        available: 'Yes',
        is_hidden: false
    },
    {
        id: 4,
        taskID: 4,
        name: 'section3',
        type: 'section',
        reporter: '',
        available: 'No',
        is_hidden: false
    },
    {
        id: 5,
        taskID: 5,
        name: 'section4',
        type: 'section',
        reporter: '',
        available: 'Yes',
        is_hidden: false
    }
];
exports.dDataP4 = [
    {
        id: 101,
        taskID: 101,
        name: 'prod101',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 102,
        taskID: 102,
        name: 'acc102',
        type: 'accessories',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 103,
        taskID: 103,
        name: 'prod103',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 104,
        taskID: 104,
        name: 'acc104',
        type: 'accessories',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 105,
        taskID: 105,
        name: 'prod105',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 106,
        taskID: 106,
        name: 'prod106',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 107,
        taskID: 107,
        name: 'prod107',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false,
        subtasks: [
            {
                id: 108,
                taskID: 108,
                name: 'prod108',
                type: 'product',
                reporter: 'Jolan',
                available: 'Yes',
                is_hidden: false
            },
            {
                id: 109,
                taskID: 109,
                reporter: 'Abhijit',
                name: 'product2',
                type: 'product',
                available: 'Yes',
                is_hidden: false
            }
        ]
    },
    {
        id: 110,
        taskID: 110,
        name: 'prod110',
        type: 'product',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 111,
        taskID: 111,
        name: 'acc111',
        type: 'accessories',
        reporter: '',
        available: '',
        is_hidden: false
    },
    {
        id: 112,
        taskID: 112,
        name: 'acc112',
        type: 'accessories',
        reporter: '',
        available: '',
        is_hidden: false
    }
];
//# sourceMappingURL=data.js.map