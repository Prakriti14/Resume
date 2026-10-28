import { templates } from "../components/templates";

export default function TemplatePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <div className="rv-tpl-grid">
      {templates.map((t) => {
        const active = t.value === value;
        return (
          <button
            key={t.value}
            type="button"
            className={`rv-tpl ${active ? "rv-tpl-active" : ""}`}
            onClick={() => onChange(t.value)}
            aria-pressed={active}
          >
            <span className="rv-tpl-thumb">
              <span style={{ height: "34%", background: t.colors[0] }} />
              <span style={{ padding: "6px 8px", display: "grid", gap: 4 }}>
                <i style={{ height: 3, width: "70%", background: "#cbd5e1", borderRadius: 2 }} />
                <i style={{ height: 3, width: "90%", background: "#e2e8f0", borderRadius: 2 }} />
                <i style={{ height: 3, width: "45%", background: t.colors[1], borderRadius: 2 }} />
              </span>
              {active && <span className="rv-tpl-check">✓</span>}
            </span>
            <span className="rv-tpl-label">{t.label}</span>
            <span className="rv-tpl-hint">{t.hint}</span>
          </button>
        );
      })}
    </div>
  );
}