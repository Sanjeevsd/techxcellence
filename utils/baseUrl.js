const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://techxcellencenpl.com/"
    : "http://localhost:3000";

export default baseUrl;
