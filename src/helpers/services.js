import axios from "axios";

const baseUrl = "http://localhost:4000";

const getBackend = () => {
  try {
    axios.get(`${baseUrl}`)
      .then((res) => res.data)
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
};

export { getBackend };
