import { createApolloFetch } from "apollo-fetch";
import { apolloClientConnectionURI } from "../config/config";

export const apolloFetch = createApolloFetch({
    uri: apolloClientConnectionURI,
});
