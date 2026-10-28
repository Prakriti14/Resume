import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const Title = ({ children }: { children: string }) => (
  <h2
    style={{
      fontSize: "0.8rem",
      letterSpacing: "0.2em",
      textTransform: "uppercase",
      color: "#38bdf8",
      margin: "0 0 0.8rem",
      fontWeight: 600,
    }}
  >
    {children}
  </h2>
);

export default function ResumePreview2({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        background: "linear-gradient(145deg,#0b1120 0%,#1e293b 100%)",
        color: "#e2e8f0",
        borderRadius: 14,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        lineHeight: 1.65,
        boxShadow: "0 25px 50px rgba(2,6,23,0.45)",
      }}
    >
      <header
        className="rv-fade-up"
        style={{
          padding: "2.25rem 2.5rem 1.75rem",
          borderBottom: "1px solid rgba(148,163,184,0.2)",
          background:
            "radial-gradient(circle at 90% 0%, rgba(56,189,248,0.22), transparent 55%)",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.6rem", fontWeight: 300, letterSpacing: "0.02em", color: "#fff" }}>
          {data.fullName || "Your Name"}
        </h1>
        <p style={{ margin: "0.5rem 0 0", color: "#94a3b8" }}>
          <span style={{ color: "#38bdf8" }}>●</span> {data.email || "email@example.com"}
          &nbsp;&nbsp;
          <span style={{ color: "#38bdf8" }}>●</span> {data.phone || "+00 000 000 000"}
        </p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "1.7fr 1fr", gap: "2rem", padding: "2rem 2.5rem" }}>
        <section className="rv-fade-up" style={delay(1)}>
          <Title>Experience</Title>
         <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
        </section>
        <aside style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
          <section className="rv-fade-up" style={delay(2)}>
            <Title>Education</Title>
            <p style={pre}>{data.education || "Add your education here."}</p>
          </section>
          <section className="rv-fade-up" style={delay(3)}>
            <Title>Skills</Title>
            <Chips
              items={data.skills}
              placeholder="Add your skills here."
              style={{
                background: "rgba(56,189,248,0.12)",
                color: "#7dd3fc",
                border: "1px solid rgba(56,189,248,0.3)",
                padding: "0.2rem 0.65rem",
                borderRadius: 6,
                fontSize: "0.82rem",
              }}
            />
          </section>
        </aside>
      </div>
    </div>
  );
}