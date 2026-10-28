import type { ResumeData } from "./types";
import { pre, delay } from "./helpers";
import { Chips, ExperienceList } from "./shared";

const Title = ({ children }: { children: string }) => (
  <h2
    style={{
      margin: "0 0 0.8rem",
      color: "#c2410c",
      fontSize: "1.2rem",
      fontWeight: 700,
      paddingBottom: "0.4rem",
      borderBottom: "3px solid #fed7aa",
      width: "fit-content",
    }}
  >
    {children}
  </h2>
);

export default function ResumePreview5({ data }: { data: ResumeData }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "280px 1fr",
        minHeight: 620,
        borderRadius: 14,
        overflow: "hidden",
        fontFamily: "'Segoe UI', Arial, sans-serif",
        lineHeight: 1.65,
        boxShadow: "0 20px 45px rgba(234,88,12,0.2)",
      }}
    >
      <aside
        style={{
          background: "linear-gradient(180deg,#9a3412 0%,#ea580c 60%,#fb923c 100%)",
          color: "#fff",
          padding: "2.25rem 1.5rem",
        }}
      >
        <div className="rv-fade-up" style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div
            style={{
              width: 96,
              height: 96,
              margin: "0 auto 1rem",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.18)",
              border: "3px solid rgba(255,255,255,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.4rem",
              fontWeight: 700,
            }}
          >
            {(data.fullName || "Y")[0].toUpperCase()}
          </div>
          <h1 style={{ margin: 0, fontSize: "1.45rem", wordBreak: "break-word" }}>
            {data.fullName || "Your Name"}
          </h1>
        </div>

        <div className="rv-fade-up" style={{ ...delay(1), marginBottom: "2rem", fontSize: "0.88rem" }}>
          <h3 style={{ margin: "0 0 0.5rem", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.8 }}>
            Contact
          </h3>
          <p style={{ margin: "0 0 0.3rem", wordBreak: "break-word" }}>{data.email || "email@example.com"}</p>
          <p style={{ margin: 0 }}>{data.phone || "+00 000 000 000"}</p>
        </div>

        <div className="rv-fade-up" style={delay(2)}>
          <h3 style={{ margin: "0 0 0.6rem", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.8 }}>
            Skills
          </h3>
          <Chips
            items={data.skills}
            placeholder="Add your skills here."
            style={{
              background: "rgba(255,255,255,0.2)",
              padding: "0.15rem 0.6rem",
              borderRadius: 6,
              fontSize: "0.8rem",
            }}
          />
        </div>
      </aside>

      <main style={{ background: "#fffaf5", padding: "2.25rem 2rem", color: "#431407" }}>
        <section className="rv-fade-up" style={{ ...delay(1), marginBottom: "2rem" }}>
          <Title>Experience</Title>
         <ExperienceList items={data.experiences} placeholder="Add your experience here." accent="#1e3a8a" muted="#64748b" />
        </section>
        <section className="rv-fade-up" style={delay(2)}>
          <Title>Education</Title>
          <p style={pre}>{data.education || "Add your education here."}</p>
        </section>
      </main>
    </div>
  );
}