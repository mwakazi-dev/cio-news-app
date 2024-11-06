import { Endpoints } from "../types/enums";
import { BASE_URL } from "../constants/urls";
import requestHandler from "../lib/request";

const getNews = () => {
  return requestHandler.get(`${BASE_URL}/${Endpoints.NEWS}`);
};

export const newsService = {
  getNews,
};
