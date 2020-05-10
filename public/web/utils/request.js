import { stringify } from "qs";
import fetch from "isomorphic-unfetch";

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [option] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */

const codeStatus = res => {
  if (res.code === 10000) {
    return res.data;
  }
  return false;
};

const urlInit = (url, options, method) => {
  let link = url;
  const result = { method };
  let defaultHeader = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8"
  };
  const { params, query, data, formData, headers } = options;

  /* eslint-disable*/
  if (params) {
    Object.keys(params).map(item => {
      if (!params[item] && params[item] !== 0) delete params[item];
    });

    link = link.replace(
      /\/:(\w+)/gm,
      index => `/${params[`${index.replace(/\/:/g, "")}`]}`
    );
  }

  if (query) {
    Object.keys(query).map(item => {
      if (!query[item] && query[item] !== 0) delete query[item];
    });

    link += `?${stringify(query)}`;
  }

  if (data) {
    const newData = data;
    Object.keys(newData).map(item => {
      if (!newData[item] && newData[item] !== 0) delete newData[item];
    });

    result.body = JSON.stringify(newData);
  }

  if (formData) {
    defaultHeader = null;
    result.body = formData;
  }

  result.headers = {
    ...defaultHeader,
    ...headers
  };

  return {
    url: link,
    body: {
      ...result
    }
  };
};

const fetchPromise = async ({ url, body }) => {
  return fetch(url, body)
    .then(res => res.json())
    .then(codeStatus);
};

const request = async (url, option, method) => {
  const result = urlInit(url, option, method);
  return fetchPromise(result);
};

export default request;
