declare module "*.svg" {
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const content: any;
  export default content;
}

declare module "*.jpg" {
  export default "" as string;
}

declare module "*.png" {
  export default "" as string;
}

declare module "*.woff";
declare module "*.woff2";
declare module "*.ttf";
