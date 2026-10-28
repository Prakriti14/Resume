import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const Row = ({ label, i, children }: { label: string; i: number; children: React.ReactNode }) => (
  <section
    className="rv-fade-up"
    style={{
      ...delay(i),
      display: "grid",
      gridTemplateColumns: "130px 1fr",
      gap: "1.5rem",
      padding: "1.4rem 0",
      borderTop: "1px solid #e5e7eb",
    }}
  >
    <h2
      style={{
        margin: 0,
        fontSize: "0.72rem",
        letterSpacing: "0.22em",
        textTransform: "uppercase",
        color: "#9ca3af",
        fontWeight: 600,
        paddingTop: 4,
      }}
    >
      {label}
    </h2>
    <div>{children}</div>
  </section>
);

export default function ResumePreview3({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "2.75rem 2.5rem",
        borderRadius: 6,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#111827",
        lineHeight: 1.7,
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <header className="rv-fade-up" style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            margin: 0,
            fontSize: "2.8rem",
            fontWeight: 200,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {data.fullName || "Your Name"}
        </h1>
        <p style={{ margin: "0.6rem 0 0", color: "#6b7280", fontSize: "0.9rem", letterSpacing: "0.04em" }}>
          {data.email || "email@example.com"} &nbsp;/&nbsp; {data.phone || "+00 000 000 000"}
        </p>
      </header>

      <Row label="Experience" i={1}>
        <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
      </Row>
      <Row label="Education" i={2}>
        <p style={pre}>{data.education || "Add your education here."}</p>
      </Row>
      <Row label="Skills" i={3}>
        <Chips
          items={data.skills}
          placeholder="Add your skills here."
          style={{
            border: "1px solid #111827",
            padding: "0.1rem 0.65rem",
            fontSize: "0.8rem",
            letterSpacing: "0.03em",
          }}
        />
      </Row>
    </div>
  );
}