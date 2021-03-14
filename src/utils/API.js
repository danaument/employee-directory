import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=100&nat=us";

const API = {
  search: () => {
    console.log("searching...")
    return axios.get(BASEURL);
  },
};

export default API;
