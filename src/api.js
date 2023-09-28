import axios from "axios";
const Key = "LtZNpvNW1bM9CwP01nInxrgvKac2qi7XEk0NjZBEi0M";

const searchImages = async (search) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: `Client-ID ${Key}`,
    },
    params: {
      query: search,
    },
  });
  return response.data.results;
};

export default searchImages;
