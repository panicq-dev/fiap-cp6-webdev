import axios from "axios";

const contactsApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
});

export default contactsApi;