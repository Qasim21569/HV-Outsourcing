// Global TypeScript declarations

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
      closePopupWidget?: () => void;
      initInlineWidget?: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

export {}; 