import { Action } from "redux";

export enum ActionType {
    OPEN_DRAWER,
    CLOSE_DRAWER,
    OPEN_ALERT,
    CLOSE_ALERT,
    OPEN_SPINNER,
    CLOSE_SPINNER,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGOUT_REQUEST,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL,
    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
    GET_EVENTS_REQUEST,
    GET_EVENTS_SUCCESS,
    GET_EVENTS_FAIL,
    SAVE_EVENT_REQUEST,
    SAVE_EVENT_SUCCESS,
    SAVE_EVENT_FAIL,
    SELECT_EVENT,
    SET_USER_CLAIMS_REQUEST,
    SET_USER_CLAIMS_SUCCESS,
    SET_USER_CLAIMS_FAIL,
    SELECT_USER,
    SET_USER_TABLE_PAGE,
    EDIT_USER,
    CURRENT_USER,
    TOGGLE_APP_LOADING,
    SET_ANCHOR_ELEMENT,
    SET_NOTIFICATION_ELEMENT,
    EDIT_EVENT,
    CHANGE_EVENT_SELECTION,
    TOOGLE_PROGRESS
}

export interface IAppAction extends Action<ActionType | string> {
    payload?: any;
}
