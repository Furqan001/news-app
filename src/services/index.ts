import { AxiosHeaders } from "axios";

import * as config from "@/configs/app";

import { axiosInstance } from "./axios";

const defaultHeaders: Partial<AxiosHeaders> = {
  "Cache-Control": "no-cache",
  "Content-Type": "application/json",
};

export function setAuthenticationHeader(token: string) {
  if (token) {
    defaultHeaders.Authorization = `Bearer ${token}`;
  }
}

export function getAuthenticationToken(): string | undefined {
  return defaultHeaders?.Authorization;
}

export function removeAuthenticationHeader() {
  delete defaultHeaders.Authorization;
}

export interface APIArgs {
  url: string;
  method: "GET" | "POST" | "PATCH" | "DELETE";
  body?: any;
  headers?: any;
  queryParams?: Record<string, any>;
  excludeAuthorizationHeader?: boolean;
  baseDomain?: string;
  bodyParsing?: "json" | "formData";
}

export default async function service<T = any>({
  url,
  method = "GET",
  body = {},
  headers = {},
  queryParams = undefined,
  baseDomain = config.API_DOMAIN,
  excludeAuthorizationHeader = false,
  bodyParsing = "json",
  ...extraProps
}: APIArgs): Promise<T> {
  // eslint-disable-next-line no-useless-catch
  const props: Omit<APIArgs, "url"> = {
    method,
    headers: { ...defaultHeaders, ...headers },
    ...extraProps,
  };
  if (excludeAuthorizationHeader) {
    delete props.headers.Authorization;
  }

  if (bodyParsing === "formData") {
    props.body = body;
  } else {
    props.headers["Content-Type"] = "application/json";
    if (method !== "GET") {
      props.body = JSON.stringify(body);
    }
  }

  try {
    const request = await axiosInstance.request<T>({
      method: props?.method,
      baseURL: baseDomain,
      url,
      headers: props?.headers,
      data: method !== "GET" ? body : undefined,
      params: queryParams,
    });

    return request.data;
  } catch (e: any) {
    throw e?.response?.data;
  }
}
