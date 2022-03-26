import http from "../services/http-common-new";

class NewPinDataService {
    getEditions(number) {
        return http.get(`/editions?number=${number}`);
    } 
}

export default new NewPinDataService();

