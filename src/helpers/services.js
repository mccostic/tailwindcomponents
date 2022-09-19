import axios from "axios";

const getBackend = () => {
  try {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((res) => res.data)
      .then((data) => console.log(data));
  } catch (err) {
    console.log(err);
  }
};

export { getBackend };
