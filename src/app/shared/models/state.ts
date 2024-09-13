import { Status } from "./status";

export interface State<T> {
    status: Status;
    data?: T;
}

export interface StateWithPagination<T> extends State<T> {
    pagination: {
        pageIndex: number;
        pageSize: number;
        total: number;
    };
}