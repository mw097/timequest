// This file is used to declare module types for CSS and SCSS modules in TypeScript
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
