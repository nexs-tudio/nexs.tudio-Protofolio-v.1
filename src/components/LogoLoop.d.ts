import type { CSSProperties, ReactNode } from "react";

type LogoLoopItem =
  | {
      node: ReactNode;
      title?: string;
      href?: string;
      hoverColor?: string;
      ariaLabel?: string;
    }
  | {
      src: string;
      alt?: string;
      title?: string;
      href?: string;
      hoverColor?: string;
      srcSet?: string;
      sizes?: string;
      width?: number;
      height?: number;
    };

type LogoLoopProps = {
  logos: LogoLoopItem[];
  speed?: number;
  direction?: "left" | "right" | "up" | "down";
  width?: number | string;
  logoHeight?: number;
  gap?: number;
  pauseOnHover?: boolean;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutWidth?: number;
  scaleOnHover?: boolean;
  layout?: "line" | "arc" | "orbit";
  bend?: number;
  focus?: number;
  magnify?: number;
  tiltX?: number;
  tiltY?: number;
  step?: boolean;
  muted?: number;
  labels?: "none" | "inline" | "below" | "hover";
  draggable?: boolean;
  scrollBoost?: number;
  intro?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
};

export default function LogoLoop(props: LogoLoopProps): ReactNode;
