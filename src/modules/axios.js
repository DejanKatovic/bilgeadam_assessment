import axios from "axios";
export const getApiClient = () => {
  return axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_CORS_PROXY}${encodeURIComponent(
      process.env.NEXT_PUBLIC_DATA_URL || ""
    )}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
