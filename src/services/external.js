import http from "../services/http-external";

class ExtPinDataService {
    get(number) {
        if (number === "421") {
            number = "421 ";
        };
        return http.get(`/figpin/${number}/editions`);
    } 
    getNewsfeed() {
        return http.get(`/newsfeed`);
    }
}


export default new ExtPinDataService();