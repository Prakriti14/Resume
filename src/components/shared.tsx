import type { CSSProperties } from "react";
import { splitList } from "./helpers";
import type { ExperienceItem } from "./types";

export function Chips({
  items,
  placeholder,
  style,
}: {
  items: string;
  placeholder: string;
  style: CSSProperties;
}) {
  const list = splitList(items);
  if (!list.length)
    return (
      <p
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
          opacity: 0.6,
        }}
      >
        {placeholder}
      </p>
    );
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
      {list.map((s, i) => (
  <span
    key={s}
    className="rv-chip"
    style={{ ...style, animationDelay: `${i * 40}ms` }}
  >
    {s}
  </span>
))}
    </div>
  );
}

export function ExperienceList({
  items,
  placeholder,
  accent,
  muted,
}: {
  items: ExperienceItem[];
  placeholder: string;
  accent: string;
  muted: string;
}) {
  const filled = items.filter(
    (e) => e.role || e.company || e.start || e.end || e.description
  );

  if (!filled.length)
    return <p style={{ margin: 0, opacity: 0.6 }}>{placeholder}</p>;

  return (
    <div style={{ display: "grid", gap: "1.1rem" }}>
      {filled.map((e, i) => {
        const dates = [e.start, e.end].filter(Boolean).join(" – ");
        return (
          <div
            key={e.id}
            className="rv-fade-up"
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <div>
                <strong style={{ fontWeight: 700 }}>{e.role}</strong>
                {e.role && e.company && (
                  <span style={{ color: muted }}> · </span>
                )}
                <span style={{ color: accent, fontWeight: 600 }}>
                  {e.company}
                </span>
              </div>
              {dates && (
                <span
                  style={{
                    color: muted,
                    fontSize: "0.82rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {dates}
                </span>
              )}
            </div>
            {e.description && (
              <p
                style={{
                  margin: "0.3rem 0 0",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}
              >
                {e.description}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}