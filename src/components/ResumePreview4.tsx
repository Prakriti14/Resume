import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const grad = "linear-gradient(135deg,#7c3aed 0%,#ec4899 100%)";

const Card = ({ title, i, children }: { title: string; i: number; children: React.ReactNode }) => (
  <section
    className="rv-fade-up"
    style={{
      ...delay(i),
      background: "#fff",
      borderRadius: 14,
      padding: "1.3rem 1.5rem",
      borderLeft: "5px solid #a855f7",
      boxShadow: "0 8px 24px rgba(124,58,237,0.1)",
    }}
  >
    <h2
      style={{
        margin: "0 0 0.6rem",
        fontSize: "0.85rem",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        background: grad,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: 700,
        width: "fit-content",
      }}
    >
      {title}
    </h2>
    {children}
  </section>
);

export default function ResumePreview4({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#faf5ff 0%,#fdf2f8 100%)",
        borderRadius: 18,
        padding: "0 0 2rem",
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        color: "#374151",
        lineHeight: 1.65,
        boxShadow: "0 20px 45px rgba(124,58,237,0.18)",
      }}
    >
      <header
        className="rv-fade-up"
        style={{
          background: grad,
          color: "#fff",
          padding: "2.25rem 2rem 3.25rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
          clipPath: "ellipse(120% 100% at 50% 0%)",
        }}
      >
        <div
          style={{
            width: 86,
            height: 86,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.2)",
            border: "3px solid rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2.2rem",
            fontWeight: 700,
            flexShrink: 0,
          }}
        >
          {(data.fullName || "Y")[0].toUpperCase()}
        </div>
        <div>
          <h1 style={{ margin: 0, fontSize: "2.2rem", fontWeight: 700 }}>
            {data.fullName || "Your Name"}
          </h1>
          <p style={{ margin: "0.25rem 0 0", opacity: 0.92 }}>
            {data.email || "email@example.com"} | {data.phone || "+00 000 000 000"}
          </p>
        </div>
      </header>

      <div style={{ display: "grid", gap: "1.1rem", padding: "0 1.75rem", marginTop: "-1.25rem" }}>
        <Card title="Experience" i={1}>
         <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
        </Card>
        <Card title="Education" i={2}>
          <p style={pre}>{data.education || "Add your education here."}</p>
        </Card>
        <Card title="Skills" i={3}>
          <Chips
            items={data.skills}
            placeholder="Add your skills here."
            style={{
              background: grad,
              color: "#fff",
              padding: "0.2rem 0.75rem",
              borderRadius: 999,
              fontSize: "0.82rem",
              fontWeight: 500,
            }}
          />
        </Card>
      </div>
    </div>
  );
}