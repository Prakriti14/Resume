export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  start: string;
  end: string;
  description: string;
};

export type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  experiences: ExperienceItem[];
  skills: string;
  template: string;
};