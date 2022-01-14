import axios from "axios";

const pokemonService = {
  get(url, callback) {
    axios.get(url).then((result) => {
      callback(result.data);
    });
  },
};

export default pokemonService;
