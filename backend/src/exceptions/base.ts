export class Exception extends Error {
  constructor(
    public readonly type: string,
    public readonly name: string,
    public readonly message: string
  ) {
    super(message);
  }
}
