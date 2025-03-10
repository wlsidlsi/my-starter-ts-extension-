// Extend the global Window interface
export {};

declare global {
    interface Window {
        __DEBUG__: boolean;
    }
}