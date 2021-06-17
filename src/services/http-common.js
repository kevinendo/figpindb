import axios from "axios";

export default axios.create({
    baseURL: "https://figpindb-backend.herokuapp.com/api/v1/figpindb",
    headers: {
        "Content-type": "application/json"
    }
});
