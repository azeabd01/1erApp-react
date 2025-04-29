import Home from "./data.json";


export function getAll () {
    return Promise.resolve(Home);
}