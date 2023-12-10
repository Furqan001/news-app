import axios from "axios";

import * as configs from "@/configs/app";

export const axiosInstance = axios.create({
  baseURL: configs.API_DOMAIN,
});
