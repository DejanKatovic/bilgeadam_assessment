import { getApiClient } from "../modules/axios";

export const getData = () => {
  const apiClient = getApiClient();
  return getApiClient().get("/fid-recruiting/fid-task-4-ffront-products.json");
};
