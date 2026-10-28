
import { useForm } from "react-hook-form";

type ResumeData = {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string;
  template: string;
};

type Props = {
  onUpdate: (data: ResumeData) => void;
};

export default function ResumeForm({ onUpdate }: Props) {
  const { register, handleSubmit } = useForm<ResumeData>();

  const onSubmit = (data: ResumeData) => onUpdate(data);

  return (
    <form
      onChange={(event) => {
        void handleSubmit(onSubmit)(event);
      }}
      className="card"
    >
      <input {...register("fullName")} placeholder="Full Name" />
      <input {...register("email")} placeholder="Email" />
      <input {...register("phone")} placeholder="Phone" />
      <textarea {...register("education")} placeholder="Education" />
      <textarea {...register("experience")} placeholder="Experience" />
      <textarea {...register("skills")} placeholder="Skills" />

      <select {...register("template")}>
        <option value="template1">Classic (Blue)</option>
        <option value="template2">Modern (Dark)</option>
        <option value="template3">Minimal (Green)</option>
        <option value="template4">Creative (Purple)</option>
        <option value="template5">Professional (Orange)</option>
      </select>
    </form>
  );
}
