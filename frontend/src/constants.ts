
//export const GRAPHQL_URL = "https://api.zach-jones.com/graphql"
const urlParams = new URLSearchParams(window.location.search);
const localBackend = urlParams.get('localBackend');
export const GRAPHQL_URL: string = localBackend ? "http://localhost:8080/graphql" : "https://api.zach-jones.com/graphql"
export const BEST_MODEL_ID = "172f96eb-5c6e-400c-b643-6304f91439f4"