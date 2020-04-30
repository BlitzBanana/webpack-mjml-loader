// @types/loader-utils is still for 1.x, we are using 2.x

declare module 'loader-utils' {
  export function getOptions(
    loaderContext: import('webpack').loader.LoaderContext
  ): Record<string, any>
}
