import axios from "axios";

export const http = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const externalHttp = axios.create({
  baseURL: process.env.EXTERNAL_API_URL,
});
