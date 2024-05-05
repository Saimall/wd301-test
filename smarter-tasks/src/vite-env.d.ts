/* eslint-disable @typescript-eslint/no-explicit-any */
interface ImportMetaEnv {
    [x: string]: any;
    readonly VITE_API_ENDPOINT: string;
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}