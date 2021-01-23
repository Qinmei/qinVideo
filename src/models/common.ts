import { Methods, Urls } from "@/constants";
import { Model } from "@/action/model";
import { FileListType } from "@/types/common";

export class Common extends Model<Record<string, unknown>> {
  constructor() {
    super("common", {});
  }

  methods = {
    upload: (formData: FormData) =>
      super.init<FileListType[]>(Methods.POST, Urls.queryImage, { formData }),
  };
}
