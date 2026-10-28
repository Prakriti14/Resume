import type { ComponentType } from "react";
import type { ResumeData } from "./types";
import ResumePreview1 from "./ResumePreview1";
import ResumePreview2 from "./ResumePreview2";
import ResumePreview3 from "./ResumePreview3";
import ResumePreview4 from "./ResumePreview4";
import ResumePreview5 from "./ResumePreview5";
import ResumePreview6 from "./ResumePreview6";
import ResumePreview7 from "./ResumePreview7";
import ResumePreview8 from "./ResumePreview8";

export type TemplateMeta = {
  value: string;
  label: string;
  hint: string;
  colors: [string, string];
  Component: ComponentType<{ data: ResumeData }>;
};

export const templates: TemplateMeta[] = [
  { value: "template1", label: "Executive", hint: "Classic navy", colors: ["#1e3a8a", "#c9a227"], Component: ResumePreview1 },
  { value: "template2", label: "Midnight", hint: "Dark two-column", colors: ["#0f172a", "#38bdf8"], Component: ResumePreview2 },
  { value: "template3", label: "Minimal", hint: "Clean editorial", colors: ["#111827", "#e5e7eb"], Component: ResumePreview3 },
  { value: "template4", label: "Aurora", hint: "Creative gradient", colors: ["#7c3aed", "#ec4899"], Component: ResumePreview4 },
  { value: "template5", label: "Sunset", hint: "Orange sidebar", colors: ["#ea580c", "#fdba74"], Component: ResumePreview5 },
  { value: "template6", label: "Elegant", hint: "Serif & gold", colors: ["#78350f", "#d4a017"], Component: ResumePreview6 },
  { value: "template7", label: "Timeline", hint: "Teal timeline", colors: ["#0f766e", "#5eead4"], Component: ResumePreview7 },
  { value: "template8", label: "Bold", hint: "Numbered sections", colors: ["#be123c", "#1e293b"], Component: ResumePreview8 },
];