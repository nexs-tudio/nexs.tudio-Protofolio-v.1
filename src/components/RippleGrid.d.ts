import type { HTMLAttributes } from "react";

type RippleGridProps = Omit<HTMLAttributes<HTMLDivElement>, "color"> & {
  color?: string;
  variant?: "lines" | "dots" | "cross";
  cellSize?: number;
  lineWidth?: number;
  glow?: number;
  rippleStrength?: number;
  rippleSpeed?: number;
  rippleSize?: number;
  autoRipple?: "center" | "random" | "none";
  rippleInterval?: number;
  tilt?: number;
  rotation?: number;
  mouseInteraction?: boolean;
  clickRipple?: boolean;
  intro?: boolean;
  fade?: number;
  opacity?: number;
  lightMode?: boolean;
  paused?: boolean;
  dpr?: number;
};

export function RippleGrid(props: RippleGridProps): React.ReactNode;

export default function RippleGrid(props: RippleGridProps): React.ReactNode;
