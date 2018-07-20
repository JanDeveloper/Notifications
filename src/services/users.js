import { TYPE_KEY } from "../common/constant";
import rest from "../common/rest";

const DATA_LOADED = "DATA_LOADED";

export const DATA = "data";

export const initialState = {
    [DATA]: null
};

export default function reducer( state = initialState, action ) {
    let newState;
    switch ( action[ TYPE_KEY ] ) {

        case DATA_LOADED:
            newState = {
                ...state,
                [DATA]: action[DATA]
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

export function fetchDataFromBackend() {
    return (dispatch) => {
        rest.doGet("./src/common/db.json").then(data => {
            dispatch(dataLoadedFromDB(data));
        });
    };
}

function dataLoadedFromDB(data){
    return{
        [TYPE_KEY]: DATA_LOADED,
        [DATA]: data
    };
}
