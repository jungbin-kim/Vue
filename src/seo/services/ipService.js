import { Rxios } from "rxios";

const baseUrl = "http://ip-api.com/json";
const http = new Rxios();

export const ipService = {
  getCountry$() {
    return http.get(baseUrl, {
      fields: "status,message,country,countryCode"
    });
  }
};
