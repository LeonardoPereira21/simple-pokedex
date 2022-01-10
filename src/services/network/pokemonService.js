import axios from "axios";

const BASE_API = "https://pokeapi.co/api/v2/";

const pokemonService = {
  getList(callback) {
    axios({
      url: `${BASE_API}pokemon/`,
      method: "get",
    }).then((result) => {
      callback(result.data.results);
    });
  },
};

export default pokemonService;
