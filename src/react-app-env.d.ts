/// <reference types="react-scripts" />
declare module "*.svg";
declare module "*.png";
declare module "*.jpg";
declare module "*.swf";

declare module "*.less" {
  const classes: { [className: string]: CSSProperties | undefined };
  export default classes;
}
