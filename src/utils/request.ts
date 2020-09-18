import { message } from "antd";
import intl from "react-intl-universal";
import { stringify } from "qs";
import { Options, ResponseData } from "@/types/request";
import { RequestMethods, RequestUrls } from "@/constants/service";

export class Request {
  static readonly apiPrefix: string = "/api/v1";

  static async init(
    methods: RequestMethods,
    url: RequestUrls,
    options: Options
  ) {
    const { params, query, data, formData, ...props } = options;

    let defaultHeader: any = {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    };

    let link: string = url;
    if (params) {
      link = link.replace(
        /\/:(\w+)/gm,
        index => `/${params[`${index.replace(/\/:/g, "")}`]}`
      );
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

    return fetch(this.apiPrefix + link, {
      body: formData ? formData : data ? JSON.stringify(data) : null,
      headers: {
        ...defaultHeader,
        Authorization: localStorage.getItem("token") || null,
      },
      method: methods,
      ...props,
    })
      .then(this.statusCheck)
      .then(res => res.json())
      .then(this.codeCheck);
  }

  static statusCheck(res: Response) {
    if (res.status === 200 || res.status === 201) {
    } else if (res.status === 401) {
      localStorage.clear();
      message.error(intl.get("request.error.401"));
      window.location.href = "/login";
    } else {
      message.error(intl.get("request.error.unknown"));
    }
    return res;
  }

  static codeCheck(res: ResponseData) {
    if (res.code) {
      message.error(res.msg);
    } else {
      return res.data;
    }
  }
}
