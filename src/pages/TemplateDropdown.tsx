import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine, RiCheckLine } from "react-icons/ri";
import { templates } from "../components/templates";

function Swatch({ colors }: { colors: [string, string] }) {
  return (
    <span
      style={{
        width: 28,
        height: 28,
        borderRadius: 8,
        flexShrink: 0,
        background: `linear-gradient(135deg, ${colors[0]} 55%, ${colors[1]} 55%)`,
        boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      }}
    />
  );
}

function TemplateDropdown({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (val: string) => {
    onChange(val);
    setOpen(false);
  };

  const current = templates.find((t) => t.value === value) ?? templates[0];

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "0.65rem 0.9rem",
          background: "#f8fafc",
          border: `1px solid ${open ? "#6366f1" : "#e2e8f0"}`,
          boxShadow: open ? "0 0 0 4px rgba(99,102,241,0.15)" : "none",
          borderRadius: 10,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          transition: "all 0.2s ease",
        }}
      >
        <Swatch colors={current.colors} />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "0.95rem" }}>{current.label}</div>
          <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{current.hint}</div>
        </div>
        <RiArrowDropDownLine
          size={26}
          color="#64748b"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "0.25s" }}
        />
      </div>

      {open && (
        <div
          className="rv-drop"
          style={{
            position: "absolute",
            top: "calc(100% + 6px)",
            left: 0,
            right: 0,
            background: "#fff",
            borderRadius: 12,
            border: "1px solid #e2e8f0",
            boxShadow: "0 16px 32px rgba(15,23,42,0.18)",
            zIndex: 20,
            overflow: "hidden",
            maxHeight: 320,
            overflowY: "auto",
          }}
        >
          {templates.map((t) => (
            <div
              key={t.value}
              className="rv-opt"
              onClick={() => handleSelect(t.value)}
              style={{
                padding: "0.65rem 1rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                background: t.value === value ? "#eef2ff" : "transparent",
              }}
            >
              <Swatch colors={t.colors} />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, color: "#0f172a", fontSize: "0.92rem" }}>{t.label}</div>
                <div style={{ fontSize: "0.75rem", color: "#64748b" }}>{t.hint}</div>
              </div>
              {t.value === value && <RiCheckLine color="#4f46e5" size={18} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TemplateDropdown;