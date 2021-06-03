import axios from "axios";

export const fetchNews = async (search = "") => {
  const response = await axios.get(
    `http://hn.algolia.com/api/v1/search?query=${search}&tags=story`
  );

  return response.data.hits;
};
