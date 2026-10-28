import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const Block = ({ n, title, i, children }: { n: string; title: string; i: number; children: React.ReactNode }) => (
  <section className="rv-fade-up" style={{ ...delay(i), display: "grid", gridTemplateColumns: "64px 1fr", gap: "1rem" }}>
    <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fecdd3", lineHeight: 1 }}>{n}</div>
    <div>
      <h2
        style={{
          margin: "0 0 0.5rem",
          fontSize: "0.95rem",
          fontWeight: 800,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#1e293b",
        }}
      >
        {title}
      </h2>
      {children}
    </div>
  </section>
);

export default function ResumePreview8({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        color: "#475569",
        lineHeight: 1.65,
        boxShadow: "0 20px 40px rgba(30,41,59,0.18)",
      }}
    >
      <header
        className="rv-fade-up"
        style={{
          background: "#1e293b",
          color: "#fff",
          padding: "2rem 2.25rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            background: "#be123c",
            borderRadius: 12,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.4rem",
            fontWeight: 800,
            flexShrink: 0,
            transform: "rotate(-4deg)",
          }}
        >
          {(data.fullName || "Y")[0].toUpperCase()}
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: "2.1rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.04em" }}>
            {data.fullName || "Your Name"}
          </h1>
          <p style={{ margin: "0.3rem 0 0", color: "#cbd5e1", fontSize: "0.92rem" }}>
            {data.email || "email@example.com"} &nbsp;|&nbsp; {data.phone || "+00 000 000 000"}
          </p>
        </div>
      </header>
      <div style={{ height: 5, background: "linear-gradient(90deg,#be123c,#fb7185)" }} />

      <div style={{ padding: "2rem 2.25rem", display: "grid", gap: "1.75rem" }}>
        <Block n="01" title="Experience" i={1}>
        <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
        </Block>
        <Block n="02" title="Education" i={2}>
          <p style={pre}>{data.education || "Add your education here."}</p>
        </Block>
        <Block n="03" title="Skills" i={3}>
          <Chips
            items={data.skills}
            placeholder="Add your skills here."
            style={{
              background: "#fff1f2",
              color: "#be123c",
              padding: "0.2rem 0.7rem",
              borderRadius: 4,
              fontSize: "0.82rem",
              fontWeight: 700,
            }}
          />
        </Block>
      </div>
    </div>
  );
}