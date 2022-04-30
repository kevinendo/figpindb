import http from "../services/http-common-new";

class NewPinDataService {
    getEditions(number) {
        return http.get(`/newEditions?number=${number}`);
    } 
}

export default new NewPinDataService();

