import type { CSSProperties } from "react";

export const pre: CSSProperties = {
  margin: 0,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
};

export const delay = (i: number): CSSProperties => ({
  animationDelay: `${i * 90}ms`,
});

export const splitList = (s: string) =>
  s
    .split(/[,\n]/)
    .map((x) => x.trim())
    .filter(Boolean);