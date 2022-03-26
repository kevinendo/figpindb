import http from "../services/http-external";

class ExtPinDataService {
    get(number) {
        if (number === "421") {
            number = "421 ";
        };
        return http.get(`/figpin/${number}/editions`, { headers: { 'UserAgent': 'FiGPiN/6 CFNetwork/1331.0.7 Darwin/21.4.0' } });
    } 
    getNewsfeed() {
        return http.get(`/newsfeed`);
    }
}


export default new ExtPinDataService();


