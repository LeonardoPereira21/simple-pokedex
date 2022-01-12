import axios from "axios";

const pokemonService = {
  getList(url, callback) {
    axios({
      url: url,
      method: "get",
    }).then((result) => {
      callback(result.data);
    });
  },
  getDetails(url, callback) {
    axios({
      url: url,
      method: "get",
    }).then((result) => {
      callback(result.data);
    });
  },
  getSpecies(url, callback) {
    axios({
      url: url,
      method: "get",
    }).then((result) => {
      callback(result.data);
    });
  },
};

export default pokemonService;
