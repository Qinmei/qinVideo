/// <reference types="react-scripts" />
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.swf";

declare module "*.module.less" {
  const classes: { [className: string]: string };
  export default classes;
}
