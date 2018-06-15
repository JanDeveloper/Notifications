import { TYPE_KEY } from "../common/constant";
import rest from "../common/rest";
import { beginLoading, endLoading } from "./loadingSpinner";

const DATA_LOADED = "DATA_LOADED";

export const initialState = {};

export default function reducer( state = initialState, action ) {
    let newState;
    switch ( action[ TYPE_KEY ] ) {

        case DATA_LOADED:
            newState = {
                ...state,
            };
            break;
        default:
            newState = {
                ...state
            };
            break;
    }
    return newState;
}
