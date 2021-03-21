export class Config {
  static readonly defaultUserName: string = 'admin';
  static readonly defaultPassword: string = 'e10adc3949ba59abbe56e057f20f883e'; // 123456
  static readonly tokenExpired: number = 7200000; // 两个小时

  static readonly filePath: string = 'public'; // 两个小时

  static readonly JwtSecret: string = 'qinPlat';
  static readonly JwtExpired: string = '7200s';
}
