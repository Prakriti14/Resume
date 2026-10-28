import { useState, useRef } from "react";
import type { CSSProperties } from "react";
import { RiAddLine, RiDeleteBin6Line } from "react-icons/ri";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import TemplatePicker from "../components/TemplatePicker";
import { templates } from "../components/templates";
import type { ExperienceItem, ResumeData } from "../components/types";
import "../components/resume.css";

const newExperience = (): ExperienceItem => ({
  id: crypto.randomUUID(),
  role: "",
  company: "",
  start: "",
  end: "",
  description: "",
});

const makeInitialData = (): ResumeData => ({
  fullName: "",
  email: "",
  phone: "",
  education: "",
  experiences: [newExperience()],
  skills: "",
  template: "template1",
});

type SimpleField =
  | "fullName"
  | "email"
  | "phone"
  | "education"
  | "skills"
  | "template";

const Section = ({
  n,
  title,
  sub,
  children,
}: {
  n: number;
  title: string;
  sub: string;
  children: React.ReactNode;
}) => (
  <section className="rv-section">
    <div className="rv-section-head">
      <span className="rv-badge">{n}</span>
      <div>
        <h3>{title}</h3>
        <p>{sub}</p>
      </div>
    </div>
    {children}
  </section>
);

function ResumeForm({ onUpdate }: { onUpdate: (data: ResumeData) => void }) {
  const [formData, setFormData] = useState<ResumeData>(makeInitialData);

  const commit = (next: ResumeData) => {
    setFormData(next);
    onUpdate(next);
  };

  const setField = (name: SimpleField, value: string) =>
    commit({ ...formData, [name]: value });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setField(e.target.name as SimpleField, e.target.value);

  const addExperience = () =>
    commit({ ...formData, experiences: [...formData.experiences, newExperience()] });

  const updateExperience = (
    id: string,
    key: keyof Omit<ExperienceItem, "id">,
    value: string
  ) =>
    commit({
      ...formData,
      experiences: formData.experiences.map((x) =>
        x.id === id ? { ...x, [key]: value } : x
      ),
    });

  const removeExperience = (id: string) =>
    commit({
      ...formData,
      experiences: formData.experiences.filter((x) => x.id !== id),
    });

  const handleReset = () => commit(makeInitialData());

  return (
    <div className="rv-card rv-form rv-panel">
      <Section n={1} title="Personal details" sub="How employers can reach you">
        <div className="rv-field">
          <label htmlFor="fullName">Full name</label>
          <input id="fullName" className="rv-input" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Jane Doe" />
        </div>
        <div className="rv-row">
          <div className="rv-field">
            <label htmlFor="email">Email</label>
            <input id="email" className="rv-input" name="email" value={formData.email} onChange={handleChange} placeholder="jane@example.com" />
          </div>
          <div className="rv-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" className="rv-input" name="phone" value={formData.phone} onChange={handleChange} placeholder="+977 98XXXXXXXX" />
          </div>
        </div>
      </Section>

      <Section n={2} title="Background" sub="Your experience and education">
        {formData.experiences.map((exp, i) => (
          <div key={exp.id} className="rv-exp">
            <div className="rv-exp-head">
              <span>Experience {i + 1}</span>
              <button
                type="button"
                className="rv-icon-btn"
                onClick={() => removeExperience(exp.id)}
                aria-label={`Remove experience ${i + 1}`}
                title="Remove experience"
              >
                <RiDeleteBin6Line size={16} />
              </button>
            </div>
            <div className="rv-row">
              <div className="rv-field">
                <label htmlFor={`role-${exp.id}`}>Role</label>
                <input id={`role-${exp.id}`} className="rv-input" value={exp.role} onChange={(e) => updateExperience(exp.id, "role", e.target.value)} placeholder="Frontend Developer" />
              </div>
              <div className="rv-field">
                <label htmlFor={`company-${exp.id}`}>Company</label>
                <input id={`company-${exp.id}`} className="rv-input" value={exp.company} onChange={(e) => updateExperience(exp.id, "company", e.target.value)} placeholder="Acme Inc." />
              </div>
            </div>
            <div className="rv-row">
              <div className="rv-field">
                <label htmlFor={`start-${exp.id}`}>Start</label>
                <input id={`start-${exp.id}`} className="rv-input" value={exp.start} onChange={(e) => updateExperience(exp.id, "start", e.target.value)} placeholder="Jan 2022" />
              </div>
              <div className="rv-field">
                <label htmlFor={`end-${exp.id}`}>End</label>
                <input id={`end-${exp.id}`} className="rv-input" value={exp.end} onChange={(e) => updateExperience(exp.id, "end", e.target.value)} placeholder="Present" />
              </div>
            </div>
            <div className="rv-field" style={{ marginBottom: 0 }}>
              <label htmlFor={`desc-${exp.id}`}>Description</label>
              <textarea id={`desc-${exp.id}`} className="rv-input" value={exp.description} onChange={(e) => updateExperience(exp.id, "description", e.target.value)} placeholder="Key responsibilities and achievements" rows={3} style={{ resize: "vertical" }} />
            </div>
          </div>
        ))}

        <button type="button" className="rv-btn-add" onClick={addExperience}>
          <RiAddLine size={18} />
          Add experience
        </button>

        <div className="rv-field" style={{ marginTop: "1.1rem" }}>
          <label htmlFor="education">Education</label>
          <textarea id="education" className="rv-input" name="education" value={formData.education} onChange={handleChange} placeholder="Degree, Institution, Year" rows={3} style={{ resize: "vertical" }} />
        </div>
      </Section>

      <Section n={3} title="Skills" sub="Separate with commas or new lines">
        <div className="rv-field">
          <textarea id="skills" className="rv-input" name="skills" value={formData.skills} onChange={handleChange} placeholder="React, TypeScript, GraphQL" rows={3} style={{ resize: "vertical" }} aria-label="Skills" />
        </div>
      </Section>

      <Section n={4} title="Template" sub="Switch anytime, your content stays">
        <TemplatePicker value={formData.template} onChange={(val) => setField("template", val)} />
      </Section>

      <button type="button" className="rv-btn-ghost" onClick={handleReset}>
        Reset all fields
      </button>
    </div>
  );
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(makeInitialData);
  const [downloading, setDownloading] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const active = templates.find((t) => t.value === resumeData.template) ?? templates[0];
  const Template = active.Component;

 const handleDownload = async () => {
  const el = previewRef.current;
  if (!el || downloading) return;
  setDownloading(true);

  try {
    await document.fonts.ready;
    const canvas = await html2canvas(el, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
      scrollX: 0,
      scrollY: 0,
      onclone: (doc: Document) => {
        const style = doc.createElement("style");
        style.textContent = `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            animation-fill-mode: forwards !important;
            transition: none !important;
          }
          #resume-print { transform: none !important; }
        `;
        doc.head.appendChild(style);
      },
    });

    const pdf = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const imgH = (canvas.height * pageW) / canvas.width;
    const img = canvas.toDataURL("image/png");

    let offset = 0;
    pdf.addImage(img, "PNG", 0, offset, pageW, imgH);
    while (imgH + offset > pageH + 1) {
      offset -= pageH;
      pdf.addPage();
      pdf.addImage(img, "PNG", 0, offset, pageW, imgH);
    }

    const name = resumeData.fullName.trim().replace(/\s+/g, "-") || "resume";
    pdf.save(`${name}-${active.value}.pdf`);
  } catch (err) {
    console.error("PDF generation failed:", err);
  } finally {
    setDownloading(false);
  }
};

  const checks = [
    resumeData.fullName,
    resumeData.email,
    resumeData.phone,
    resumeData.education,
    resumeData.skills,
  ].map((v) => v.trim().length > 0);
  checks.push(
    resumeData.experiences.some((e) => e.role.trim() || e.company.trim() || e.description.trim())
  );
  const filled = checks.filter(Boolean).length;
  const percent = Math.round((filled / checks.length) * 100);

  return (
    <div className="rv-app">
      <nav className="rv-nav">
        <div className="rv-nav-inner">
          <div className="rv-brand">
            <span className="rv-logo">R</span>
            <div>
              <strong>Resume Builder</strong>
              <small>Build a polished resume in minutes</small>
            </div>
          </div>

          <div className="rv-nav-right">
            <div className="rv-meter" title={`${filled} of ${checks.length} sections filled`}>
              <span>{percent}% complete</span>
              <div>
                <i style={{ width: `${percent}%` }} />
              </div>
            </div>
            <button className="rv-btn" onClick={() => { void handleDownload(); }} disabled={downloading}>
              {downloading ? "Generating…" : "⬇ Download PDF"}
            </button>
          </div>
        </div>
      </nav>

      <main className="rv-shell">
        <ResumeForm onUpdate={setResumeData} />

        <div
          className="rv-stage-wrap"
          style={{ "--accent": active.colors[0] } as CSSProperties}
        >
          <div className="rv-toolbar">
            <div className="rv-live">
              <span className="rv-dot" />
              Live preview
            </div>
            <div className="rv-tag">{active.label} · {active.hint}</div>
          </div>

          <div className="rv-stage">
            <div
              id="resume-print"
              ref={previewRef}
              key={resumeData.template}
              className="rv-swap rv-paper"
            >
              <Template data={resumeData} />
            </div>
          </div>

          <p className="rv-tip">
            Downloads as a PDF using the selected template.
          </p>
        </div>
      </main>
    </div>
  );
}