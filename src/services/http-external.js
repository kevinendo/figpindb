import axios from "axios";

export default axios.create({
    baseURL: "https://api.figpinvault.com/api/v1/",
    headers: {
        "Content-type": "application/json"
    }
});
