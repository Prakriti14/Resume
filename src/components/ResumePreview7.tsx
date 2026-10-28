import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const TL = ({ title, i, last, children }: { title: string; i: number; last?: boolean; children: React.ReactNode }) => (
  <section
    className="rv-fade-up"
    style={{ ...delay(i), position: "relative", paddingLeft: "2rem", paddingBottom: last ? 0 : "1.75rem" }}
  >
    {!last && (
      <span style={{ position: "absolute", left: 6, top: 18, bottom: 0, width: 2, background: "#99f6e4" }} />
    )}
    <span
      style={{
        position: "absolute",
        left: 0,
        top: 4,
        width: 14,
        height: 14,
        borderRadius: "50%",
        background: "#fff",
        border: "3px solid #0f766e",
        boxShadow: "0 0 0 4px #ccfbf1",
      }}
    />
    <h2 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem", color: "#0f766e", fontWeight: 700 }}>{title}</h2>
    {children}
  </section>
);

export default function ResumePreview7({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 14,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        color: "#334155",
        lineHeight: 1.65,
        boxShadow: "0 20px 40px rgba(15,118,110,0.15)",
      }}
    >
      <header
        className="rv-fade-up"
        style={{
          background: "linear-gradient(135deg,#0f766e 0%,#14b8a6 100%)",
          color: "#fff",
          padding: "2.25rem 2.5rem",
        }}
      >
        <h1 style={{ margin: 0, fontSize: "2.4rem", fontWeight: 700 }}>{data.fullName || "Your Name"}</h1>
        <p style={{ margin: "0.4rem 0 0", opacity: 0.92 }}>
          ✉ {data.email || "email@example.com"} &nbsp;&nbsp; ✆ {data.phone || "+00 000 000 000"}
        </p>
      </header>

      <div style={{ padding: "2.25rem 2.5rem" }}>
        <TL title="Experience" i={1}>
   <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
        </TL>
        <TL title="Education" i={2}>
          <p style={pre}>{data.education || "Add your education here."}</p>
        </TL>
        <TL title="Skills" i={3} last>
          <Chips
            items={data.skills}
            placeholder="Add your skills here."
            style={{
              background: "#f0fdfa",
              color: "#0f766e",
              border: "1px solid #99f6e4",
              padding: "0.2rem 0.7rem",
              borderRadius: 8,
              fontSize: "0.85rem",
              fontWeight: 500,
            }}
          />
        </TL>
      </div>
    </div>
  );
}