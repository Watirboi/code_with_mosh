import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c5d7029ec1724d4ebe33524e046c8f70",
  },
});
