
//export const GRAPHQL_URL = "https://api.zach-jones.com/graphql"
const urlParams = new URLSearchParams(window.location.search);
const localBackend = urlParams.get('localBackend');
export const GRAPHQL_URL: string = localBackend ? "http://localhost:8080/graphql" : "https://api.zach-jones.com/graphql"
export const BEST_MODEL_ID = "029b11ec-e2cd-4799-8c53-a485b8f8e6b7"
