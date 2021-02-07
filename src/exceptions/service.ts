import { Exception } from "./base";

export class ServiceException extends Exception {
  constructor(
    public readonly response: Response,
    public readonly message: string = "service exception happens"
  ) {
    super("service", response.url, message);
  }
}
