import { message } from "antd";
import { stringify } from "qs";
import { RequestOptions, RequestResponse } from "@/types";
import { RequestMethods, RequestUrls } from "@/constants/service";
import { intl, lang } from "@/locales";

export class Request {
  static readonly apiPrefix: string = "";

  static async init<T>(
    methods: RequestMethods,
    url: RequestUrls,
    options: RequestOptions
  ): Promise<RequestResponse<T>> {
    const { params, query, data, formData, ...props } = options;

    let defaultHeader: any = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };

    let link: string = this.apiPrefix + url;
    if (params) {
      link = link.replace(/\/:(\w+)/gm, index => `/${params[`${index.replace(/\/:/g, "")}`]}`);
    }

    if (query) {
      Object.keys(query).forEach(item => {
        if (!query[item] && query[item] !== 0) delete query[item];
      });

      link += `?${stringify(query)}`;
    }

    if (formData) {
      defaultHeader = {};
    }

    return fetch(link, {
      body: formData ? formData : data ? JSON.stringify(data) : null,
      headers: {
        ...defaultHeader,
        Authorization: localStorage.getItem("token") || "",
      },
      method: methods,
      ...props,
    })
      .then(this.statusCheck)
      .then(res => res.json());
  }

  static statusCheck(res: Response) {
    if (res.status === 200 || res.status === 201) {
    } else if (res.status === 401) {
      localStorage.clear();
      message.error(intl.get(lang["common.error.401"]));
    } else {
      message.error(intl.get(lang["common.error.unknown"]));
    }
    return res;
  }
}
