import axios from "axios";

const pokeApi = {
  get(url, callback) {
    axios.get(url).then((result) => {
      callback(result.data);
    });
  },
};

export default pokeApi;
