import { apiCall } from "./components/titleList.js";

async function app() {
    let data= await apiCall();

    data.results.forEach(List=> {
        console.log("Los titulos son: " + List.title);
        
    });
}

app();