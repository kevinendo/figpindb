import http from "../services/http-common-new";

class NewPinDataService {
    getEditions(number) {
        return http.get(`/newEditions?number=${number}`);
    } 
    getIGLinks() {
        return http.get(`/igLinks`);
    }     
}

export default new NewPinDataService();

