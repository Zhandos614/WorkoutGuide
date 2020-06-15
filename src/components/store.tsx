import { createContext } from "react";

export const context = createContext(initialState);

export const initialState = {
    jwt: null,
};

export const reducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_SINGLE_VALUE": {
            return {
                ...state,
                [payload.property]: payload.value,
            };
        }
        case "initial app load": {
            return {
                ...state,
                platform: payload.platform,
                ipAddress: payload.ipAddress,
            };
        }
        default:
            console.error("The dispatch TYPE '" + type + "' does not exist.");
            return state;
    }
};
