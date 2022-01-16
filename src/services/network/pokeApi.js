import axios from "axios";

const pokeApi = {
  get(url, callback,errorCallback) {
    axios.get(url).then((result) => {
      callback(result.data);
    }).catch((error) => {
      if(errorCallback){
        errorCallback(error)
      }
    });
  },
};

export default pokeApi;
