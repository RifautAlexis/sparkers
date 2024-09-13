import { Status } from "./status";

export interface State<T> {
    status: Status;
    data?: T;
}