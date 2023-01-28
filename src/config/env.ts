export const env = {
  API_URL:
    String(process.env.NODE_ENV) == "development"
      ? "http://localhost:3000/api"
      : "https://3bee-test-der6.vercel.app/api",
};
