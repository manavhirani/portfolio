import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      marquee: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          scrollAmount?: number | string;
          behavior?: string;
          direction?: string;
        },
        HTMLElement
      >;
      font: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          size?: string | number;
          face?: string;
          color?: string;
        },
        HTMLElement
      >;
    }
  }
}
