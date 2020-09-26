import { message } from "antd";
import { stringify } from "qs";
import { RequestType } from "@/types";
import { Service } from "@/constants";
import { intl } from "@/locales";

export class Request {
  static readonly apiPrefix: string = "";

  static async init<T>(
    methods: Service.Methods,
    url: Service.Urls,
    options: RequestType.Options
  ): Promise<RequestType.Response<T>> {
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
      .then(res => res && res.json());
  }

  static statusCheck(res: Response): Response | void {
    if (res.status === 200 || res.status === 201) {
      return res;
    }
    if (res.status === 401) {
      localStorage.clear();
      message.error(intl.get("common.error.needAuth"));
    } else {
      message.error(intl.get("common.error.unknown"));
    }
  }
}
