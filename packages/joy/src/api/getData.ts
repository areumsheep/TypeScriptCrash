import { BASE_URL } from "../constant/index";

interface configInterface {
  method: string;
  headers: Headers;
  body?: BodyInit;
}

export default async function getData<T>(url: string, method: string, data: T) {
  const config: configInterface = {
    method: method,
    headers: new Headers({ "content-type": "application/json" }),
  };
  if (data) config.body = JSON.stringify(data);
  const response = await fetch(BASE_URL + url, config);
  const parse = await response.json();
  return parse;
}
