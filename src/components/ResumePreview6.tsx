import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const gold = "#b8860b";

const Title = ({ children }: { children: string }) => (
  <h2
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      margin: "0 0 0.9rem",
      fontFamily: "Georgia, serif",
      fontWeight: 400,
      fontSize: "1.15rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: "#78350f",
    }}
  >
    <span style={{ flex: 1, height: 1, background: `linear-gradient(90deg,transparent,${gold})` }} />
    {children}
    <span style={{ flex: 1, height: 1, background: `linear-gradient(270deg,transparent,${gold})` }} />
  </h2>
);

export default function ResumePreview6({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        background: "#fffdf7",
        border: `1px solid #e7d9b0`,
        outline: `6px solid #fffdf7`,
        outlineOffset: -14,
        padding: "3rem 3rem 2.5rem",
        borderRadius: 4,
        fontFamily: "Georgia, 'Times New Roman', serif",
        color: "#3f3a30",
        lineHeight: 1.75,
        boxShadow: "0 18px 40px rgba(120,53,15,0.12)",
      }}
    >
      <header className="rv-fade-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h1 style={{ margin: 0, fontSize: "2.7rem", fontWeight: 400, color: "#451a03", letterSpacing: "0.06em" }}>
          {data.fullName || "Your Name"}
        </h1>
        <div style={{ color: gold, margin: "0.5rem 0", letterSpacing: "0.5em" }}>◆ ◆ ◆</div>
        <p style={{ margin: 0, fontStyle: "italic", color: "#78716c" }}>
          {data.email || "email@example.com"} · {data.phone || "+00 000 000 000"}
        </p>
      </header>

      <section className="rv-fade-up" style={{ ...delay(1), marginBottom: "1.75rem" }}>
        <Title>Experience</Title>
       <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
      </section>
      <section className="rv-fade-up" style={{ ...delay(2), marginBottom: "1.75rem" }}>
        <Title>Education</Title>
        <p style={pre}>{data.education || "Add your education here."}</p>
      </section>
      <section className="rv-fade-up" style={delay(3)}>
        <Title>Skills</Title>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Chips
            items={data.skills}
            placeholder="Add your skills here."
            style={{
              borderBottom: `1px solid ${gold}`,
              padding: "0 0.5rem",
              fontSize: "0.92rem",
              fontStyle: "italic",
            }}
          />
        </div>
      </section>
    </div>
  );
}