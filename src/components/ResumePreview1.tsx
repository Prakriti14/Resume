import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const Title = ({ children }: { children: string }) => (
  <h2
    style={{
      fontSize: "0.78rem",
      letterSpacing: "0.22em",
      textTransform: "uppercase",
      color: "#1e3a8a",
      fontWeight: 700,
      margin: "0 0 0.7rem",
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
    }}
  >
    {children}
    <span style={{ flex: 1, height: 1, background: "#cbd5e1" }} />
  </h2>
);

export default function ResumePreview1({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: 10,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        color: "#334155",
        lineHeight: 1.65,
        boxShadow: "0 20px 40px rgba(15,23,42,0.12)",
      }}
    >
      <div style={{ height: 10, background: "linear-gradient(90deg,#1e3a8a,#3b82f6)" }} />
      <div style={{ padding: "2.25rem 2.5rem" }}>
        <header className="rv-fade-up" style={{ marginBottom: "1.75rem" }}>
          <h1
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              fontSize: "2.5rem",
              margin: 0,
              color: "#0f172a",
              letterSpacing: "-0.01em",
            }}
          >
            {data.fullName || "Your Name"}
          </h1>
          <div style={{ width: 56, height: 3, background: "#c9a227", margin: "0.7rem 0" }} />
          <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>
            {data.email || "email@example.com"} &nbsp;•&nbsp; {data.phone || "+00 000 000 000"}
          </p>
        </header>

        <section className="rv-fade-up" style={{ ...delay(1), marginBottom: "1.6rem" }}>
          <Title>Experience</Title>
          <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
        </section>

        <section className="rv-fade-up" style={{ ...delay(2), marginBottom: "1.6rem" }}>
          <Title>Education</Title>
          <p style={pre}>{data.education || "Add your education here."}</p>
        </section>

        <section className="rv-fade-up" style={delay(3)}>
          <Title>Skills</Title>
          <Chips
            items={data.skills}
            placeholder="Add your skills here."
            style={{
              background: "#eff6ff",
              color: "#1e3a8a",
              border: "1px solid #bfdbfe",
              padding: "0.2rem 0.7rem",
              borderRadius: 999,
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          />
        </section>
      </div>
    </div>
  );
}