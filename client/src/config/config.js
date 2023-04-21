const config = {
  development: {
    backendUrl: "http://localhost:8080/api/v1/dalle",//contains the place where we can put the lunks for our backends
  },
  production: {
    backendUrl: "https://devswag.onrender.com/api/v1/dalle",
  },
};

export default config;
