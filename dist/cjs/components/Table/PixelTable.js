"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixelTable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_table_1 = require("@tanstack/react-table");
const LeftTable_1 = require("./LeftTable");
const RightTable_1 = require("./RightTable");
const CenterTable_1 = require("./CenterTable");
const Pagination_1 = __importDefault(require("./Pagination"));
const Box_1 = require("../Box");
const react_beautiful_dnd_1 = require("react-beautiful-dnd");
const PixelTable = ({ defaultData, columns: propsColumns, leftPinnedColumnKeys, rightPinnedColumnKeys, pagination: paginationRequired, sortableColumnIds }) => {
    (0, react_1.useEffect)(() => {
        if (!paginationRequired) {
            setPagination({ pageSize: defaultData.length, pageIndex: 0 });
        }
    }, [paginationRequired]);
    const [sorting, setSorting] = react_1.default.useState([]);
    const [pagination, setPagination] = react_1.default.useState({
        pageSize: 10,
        pageIndex: 0
    });
    const [rowSelection, setRowSelection] = react_1.default.useState({});
    const [data, setData] = react_1.default.useState(() => [...defaultData]);
    const [columnPinning, setColumnPinning] = react_1.default.useState({});
    const columns = react_1.default.useMemo(() => propsColumns, []);
    const table = (0, react_table_1.useReactTable)({
        data,
        columns,
        state: {
            sorting,
            pagination,
            rowSelection,
            columnPinning
        },
        onRowSelectionChange: setRowSelection,
        onPaginationChange: setPagination,
        onSortingChange: setSorting,
        getCoreRowModel: (0, react_table_1.getCoreRowModel)(),
        getSortedRowModel: (0, react_table_1.getSortedRowModel)(),
        getPaginationRowModel: (0, react_table_1.getPaginationRowModel)(),
        onColumnPinningChange: setColumnPinning,
        debugTable: true,
        debugHeaders: true,
        debugColumns: true
    });
    const handleDragEnd = (e) => {
        if (!e.destination)
            return;
        let tempData = Array.from(data);
        let [source_data] = tempData.splice(e.source.index, 1);
        tempData.splice(e.destination.index, 0, source_data);
        setData(tempData);
    };
    (0, react_1.useEffect)(() => {
        var _a;
        (_a = table === null || table === void 0 ? void 0 : table.getCenterHeaderGroups()) === null || _a === void 0 ? void 0 : _a.forEach((headerGroup) => {
            headerGroup.headers.forEach((header) => (!header.isPlaceholder && header.column.getCanPin() && (leftPinnedColumnKeys === null || leftPinnedColumnKeys === void 0 ? void 0 : leftPinnedColumnKeys.includes(header.column.id)) ? header.column.pin('left') : null));
            headerGroup.headers.forEach((header) => (!header.isPlaceholder && header.column.getCanPin() && (rightPinnedColumnKeys === null || rightPinnedColumnKeys === void 0 ? void 0 : rightPinnedColumnKeys.includes(header.column.id)) ? header.column.pin('right') : null));
        });
    }, [table]);
    return ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ height: '100%', width: '100%' }, { children: (0, jsx_runtime_1.jsx)(react_beautiful_dnd_1.DragDropContext, Object.assign({ onDragEnd: handleDragEnd }, { children: (0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsxs)(Box_1.Box, Object.assign({ display: 'flex' }, { children: [leftPinnedColumnKeys.length > 0 && (0, jsx_runtime_1.jsx)(LeftTable_1.LeftTable, { table: table, sortableColumnIds: sortableColumnIds }), (0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ overflow: 'auto', width: "100%" }, { children: (0, jsx_runtime_1.jsx)(CenterTable_1.CenterTable, { table: table, sortableColumnIds: sortableColumnIds }) })), rightPinnedColumnKeys.length > 0 && (0, jsx_runtime_1.jsx)(RightTable_1.RightTable, { table: table, sortableColumnIds: sortableColumnIds })] })), paginationRequired && ((0, jsx_runtime_1.jsx)(Box_1.Box, Object.assign({ textAlign: 'center', marginTop: 8 }, { children: (0, jsx_runtime_1.jsx)(Pagination_1.default, { pagination: pagination, table: table }) })))] }) })) })));
};
exports.PixelTable = PixelTable;
exports.PixelTable.defaultProps = {
    pagination: true,
    sortableColumnIds: [''],
    leftPinnedColumnKeys: [],
    rightPinnedColumnKeys: []
};
//# sourceMappingURL=PixelTable.js.map