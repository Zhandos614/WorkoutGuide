import React, { useEffect, useReducer } from "react";
import { Platform } from "react-native";
import { initialState, reducer, context } from "./store";
import { SENTRY_DSN } from "../config/config";

import Mobile from "./mobile/App";
import Web from "./web/App";

// BEGIN INIT SENTRY
import * as Sentry from "sentry-expo";
import Constants from "expo-constants";
Sentry.init({
    dsn: SENTRY_DSN,
    enableInExpoDevelopment: true,
    debug: true,
});
Sentry.setRelease(Constants.manifest.revisionId);
// END INIT SENTRY

export default function Main() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // set platform and capture IP address
    useEffect(() => {
        (async function initialAppLoad() {
            dispatch({
                type: "initial app load",
                payload: {
                    platform: Platform.OS,
                    ipAddress: (
                        await (
                            await fetch("https://api.ipify.org?format=json")
                        ).json()
                    ).ip,
                },
            });
        })();
    }, []);

    return (
        <context.Provider value={[state, dispatch]}>
            {state.platform !== "web" ? (
                <Mobile state={state} />
            ) : (
                <Web state={state} />
            )}
        </context.Provider>
    );
}
