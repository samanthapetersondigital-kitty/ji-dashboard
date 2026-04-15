import { useState } from "react";

// ─── DATA (auto-generated — update weekly) ────────────────────────────────────
// Auth is handled by Vercel Edge Middleware (middleware.js) — never in source code.
const CLIENT = {
  "name": "Jimmy Gomez",
  "cycle": "2025–2026",
  "lastUpdated": "April 15, 2026",
  "reportWeek": "Week of 4/13",
  "reportMonth": "April 2026",
  "reportQuarter": "Q2 2026"
};
const EMAIL_TOP_LINES = [
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/6",
    "period": "monthly",
    "recipients": 1811,
    "opens": 130,
    "openRate": 19.1,
    "clicks": 502,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 30,
    "openRate": 23.3,
    "clicks": 229,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 40,
    "openRate": 24.6,
    "clicks": 249,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 12,
    "openRate": 20.7,
    "clicks": 229,
    "clickRate": 0.0,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 57,
    "openRate": 22.4,
    "clicks": 225,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 43,
    "openRate": 24.1,
    "clicks": 221,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 63,
    "openRate": 25.7,
    "clicks": 245,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 47,
    "openRate": 25.9,
    "clicks": 254,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 46,
    "openRate": 23.5,
    "clicks": 239,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 28,
    "openRate": 23.0,
    "clicks": 238,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260403_1_1",
    "sendDate": "4/3",
    "period": "monthly",
    "recipients": 540,
    "opens": 44,
    "openRate": 22.0,
    "clicks": 214,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 45,
    "openRate": 18.2,
    "clicks": 283,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 36,
    "openRate": 17.3,
    "clicks": 282,
    "clickRate": 0.0,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 15,
    "openRate": 16.7,
    "clicks": 278,
    "clickRate": 0.0,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 34,
    "openRate": 16.3,
    "clicks": 305,
    "clickRate": 0.0,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 33,
    "openRate": 22.4,
    "clicks": 335,
    "clickRate": 0.0,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 57,
    "openRate": 17.9,
    "clicks": 300,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 40,
    "openRate": 18.1,
    "clicks": 286,
    "clickRate": 0.1,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 33,
    "openRate": 14.2,
    "clicks": 250,
    "clickRate": 0.0,
    "unsubs": 0
  },
  {
    "subject": "JG_EM_PT_90DO_260402_1_1",
    "sendDate": "4/2",
    "period": "monthly",
    "recipients": 780,
    "opens": 67,
    "openRate": 16.8,
    "clicks": 277,
    "clickRate": 0.1,
    "unsubs": 0
  }
];
const EMAIL_MONTHLY_SUMMARY = {
  "sends": 847,
  "totalRecipients": 1180013,
  "avgOpenRate": 22.8,
  "avgClickRate": 0.1,
  "totalUnsubs": 0
};
const EMAIL_QUARTERLY_SUMMARY = {
  "sends": 847,
  "totalRecipients": 1180013,
  "avgOpenRate": 22.8,
  "avgClickRate": 0.1,
  "totalUnsubs": 0
};
const LIST_SIZE = [
  {
    "label": "30-Day Openers",
    "key": "30DO",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "90-Day Openers",
    "key": "90DO",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "180-Day Openers",
    "key": "180DO",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "Monthly New to List",
    "key": "1MNTL",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  },
  {
    "label": "All Subscribed",
    "key": "ALL",
    "current": 0,
    "prev": 0,
    "change": 0.0,
    "goal": null
  }
];
const FINANCES = [
  {
    "period": "Mar 2026",
    "type": "month",
    "totalActBlue": 31848.14,
    "digitalRaise": 0.0
  },
  {
    "period": "Apr 2026",
    "type": "month",
    "totalActBlue": 1167.15,
    "digitalRaise": 0.0
  },
  {
    "period": "Q2 2026 (QTD)",
    "type": "qtd",
    "totalActBlue": 33015.29,
    "digitalRaise": 0.0
  }
];
const DIGITAL_PCT_MIN = 25;
const DIGITAL_PCT_MAX = 30;
const FINANCE_MONTHLY = {
  "period": "April 2026 (MTD)",
  "totalActBlue": 1167.15,
  "digitalRaise": 0.0,
  "projection": 1517
};
const FINANCE_QUARTERLY = {
  "period": "Q2 2026 (QTD)",
  "totalActBlue": 33015.29,
  "digitalRaise": 0.0,
  "projection": 37968
};
const ACQUISITION_ROI = [];
const TEXTING_ROI = [
  {
    "campaign": "JG EOQ #2",
    "sendDate": "9/29",
    "period": "monthly",
    "sent": 995,
    "delivered": 995,
    "responses": 0,
    "optOuts": 97,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "251208 Housing not hate",
    "sendDate": "12/8",
    "period": "monthly",
    "sent": 6302,
    "delivered": 6302,
    "responses": 0,
    "optOuts": 572,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "02/01/26 to JG",
    "sendDate": "2/1",
    "period": "monthly",
    "sent": 8005,
    "delivered": 8005,
    "responses": 0,
    "optOuts": 376,
    "donations": 0,
    "raised": 0
  },
  {
    "campaign": "JG_EOQ_260331",
    "sendDate": "3/31",
    "period": "monthly",
    "sent": 3831,
    "delivered": 3831,
    "responses": 0,
    "optOuts": 180,
    "donations": 0,
    "raised": 0
  }
];
const META_ADS = [];
const GOOGLE_ADS = [];
const GROWTH_CALC = [
  {
    "metric": "List Growth Rate (MoM)",
    "value": "—",
    "benchmark": "+1.5%",
    "status": "above"
  },
  {
    "metric": "Email Churn Rate",
    "value": "—",
    "benchmark": "<0.15%",
    "status": "above"
  },
  {
    "metric": "Avg Open Rate (30d)",
    "value": "22.8%",
    "benchmark": ">14% = Strong",
    "status": "above"
  },
  {
    "metric": "Avg Click Rate (30d)",
    "value": "0.1%",
    "benchmark": ">3.0%",
    "status": "below"
  },
  {
    "metric": "SMS Opt-Out Rate",
    "value": "—",
    "benchmark": "<0.20%",
    "status": "above"
  },
  {
    "metric": "Digital % of ActBlue",
    "value": "0.0%",
    "benchmark": "25–30%",
    "status": "below"
  }
];
const DEFAULT_HIGHLIGHTS = [
  "Dashboard auto-generated for Jimmy Gomez — April 15, 2026",
  "Update this section with key insights for Week of 4/13",
  "Add notable email performance observations here",
  "Add texting campaign highlights here",
  "Add fundraising milestones or anomalies here"
];

// ─── HELPERS ──────────────────────────────────────────────────────────────────
const fmt = (n) => n?.toLocaleString() ?? "—";
const fmtD = (n) => n != null ? `$${n.toLocaleString()}` : "—";
const fmtP = (n) => n != null ? `${n}%` : "—";

function openRateColor(r) {
  if (r >= 14) return "#4ade80";
  if (r >= 10) return "#fbbf24";
  return "#f87171";
}
function openRateBadge(r) {
  if (r >= 14) return { label: "Strong",  color: "#4ade80", bg: "#052e16", border: "#166534" };
  if (r >= 10) return { label: "Average", color: "#fbbf24", bg: "#2d1f00", border: "#92400e" };
  return           { label: "Low",     color: "#f87171", bg: "#3f0f0f", border: "#7f1d1d" };
}
function digitalPctStatus(p) {
  if (p >= DIGITAL_PCT_MIN && p <= DIGITAL_PCT_MAX) return { color: "#4ade80", label: "On Target",    bg: "#052e16", border: "#166534" };
  if (p > DIGITAL_PCT_MAX)                          return { color: "#60a5fa", label: "Above Target", bg: "#0c1f3f", border: "#1d4ed8" };
  return                                                   { color: "#f87171", label: "Below Target", bg: "#3f0f0f", border: "#7f1d1d" };
}
function Delta({ val }) {
  if (val == null) return null;
  const up = val >= 0;
  return <span style={{ color: up ? "#22c55e" : "#ef4444", fontWeight: 600, fontSize: 13 }}>{up ? "▲" : "▼"} {Math.abs(val).toFixed(2)}%</span>;
}
function GoalBar({ current, goal }) {
  if (!goal) return null;
  const pct = Math.min((current / goal) * 100, 100);
  return (
    <div style={{ marginTop: 6 }}>
      <div style={{ fontSize: 11, color: "#94a3b8", marginBottom: 3 }}>{fmt(current)} / {fmt(goal)} goal ({pct.toFixed(1)}%)</div>
      <div style={{ background: "#1e3a5f", borderRadius: 99, height: 6, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: "linear-gradient(90deg,#1d4ed8,#60a5fa)", borderRadius: 99 }} />
      </div>
    </div>
  );
}
function DigitalPctBar({ pct }) {
  const status = digitalPctStatus(pct);
  const barWidth = Math.min(pct / 50 * 100, 100);
  const minMark = DIGITAL_PCT_MIN / 50 * 100;
  const maxMark = DIGITAL_PCT_MAX / 50 * 100;
  return (
    <div style={{ marginTop: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4, fontSize: 12 }}>
        <span style={{ color: "#94a3b8" }}>Digital % of Total Raise</span>
        <span style={{ color: status.color, fontWeight: 700 }}>{pct.toFixed(1)}% — {status.label}</span>
      </div>
      <div style={{ position: "relative", background: "#1e3a5f", borderRadius: 99, height: 10 }}>
        <div style={{ position: "absolute", top: 0, bottom: 0, left: `${minMark}%`, width: `${maxMark - minMark}%`, background: "rgba(74,222,128,0.12)", borderLeft: "1px dashed #166534", borderRight: "1px dashed #166534" }} />
        <div style={{ width: `${barWidth}%`, height: "100%", background: `linear-gradient(90deg,#1d4ed8,${status.color})`, borderRadius: 99 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 3, fontSize: 10, color: "#475569" }}>
        <span>0%</span>
        <span style={{ color: "#4ade80" }}>Target zone: {DIGITAL_PCT_MIN}–{DIGITAL_PCT_MAX}%</span>
        <span>50%</span>
      </div>
    </div>
  );
}

// ─── PERIOD TOGGLE ────────────────────────────────────────────────────────────
function PeriodToggle({ active, onChange }) {
  const options = [
    { id: "weekly",    label: "Weekly",    sub: CLIENT.reportWeek },
    { id: "monthly",   label: "Monthly",   sub: CLIENT.reportMonth },
    { id: "quarterly", label: "Quarterly", sub: CLIENT.reportQuarter },
  ];
  return (
    <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
      {options.map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} style={{
          background: active === o.id ? "#1d4ed8" : "#091929",
          border: `1px solid ${active === o.id ? "#3b82f6" : "#1e3a5f"}`,
          borderRadius: 8, padding: "8px 18px", cursor: "pointer", textAlign: "left", transition: "all 0.15s",
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: active === o.id ? "#fff" : "#94a3b8", fontFamily: "'Sora', sans-serif" }}>{o.label}</div>
          <div style={{ fontSize: 11, color: active === o.id ? "#93c5fd" : "#475569" }}>{o.sub}</div>
        </button>
      ))}
    </div>
  );
}

// ─── SUMMARY CALLOUT ──────────────────────────────────────────────────────────
function SummaryCallout({ label, children }) {
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "16px 22px", marginBottom: 20 }}>
      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10 }}>{label}</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>{children}</div>
    </div>
  );
}
function SummaryItem({ label, value, color }) {
  return (
    <div>
      <div style={{ fontSize: 22, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: color || "#60a5fa", lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: 11, color: "#64748b", marginTop: 3 }}>{label}</div>
    </div>
  );
}

// ─── SECTION ──────────────────────────────────────────────────────────────────
function Section({ title, subtitle, children }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: 22, fontWeight: 700, color: "#e2e8f0", margin: 0, letterSpacing: "-0.2px" }}>{title}</h2>
        {subtitle && <p style={{ margin: "4px 0 0", fontSize: 13, color: "#64748b" }}>{subtitle}</p>}
      </div>
      {children}
    </div>
  );
}

// ─── TABLE ────────────────────────────────────────────────────────────────────
function Table({ headers, rows, alignRight = [] }) {
  return (
    <div style={{ overflowX: "auto", borderRadius: 12, border: "1px solid #1e3a5f" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, fontFamily: "'Inter', sans-serif" }}>
        <thead>
          <tr style={{ background: "#0c2340" }}>
            {headers.map((h, i) => (
              <th key={i} style={{ padding: "10px 16px", textAlign: alignRight.includes(i) ? "right" : "left", color: "#94a3b8", fontWeight: 600, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} style={{ borderTop: "1px solid #1e3a5f", background: ri % 2 === 0 ? "#091929" : "#0b1f33" }}>
              {row.map((cell, ci) => (
                <td key={ci} style={{ padding: "10px 16px", textAlign: alignRight.includes(ci) ? "right" : "left", color: "#cbd5e1", whiteSpace: "nowrap" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── STAT CARD ────────────────────────────────────────────────────────────────
function StatCard({ label, value, sub, accent }) {
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px", flex: "1 1 180px", minWidth: 160 }}>
      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: accent || "#60a5fa", lineHeight: 1 }}>{value}</div>
      {sub && <div style={{ marginTop: 6, fontSize: 12, color: "#64748b" }}>{sub}</div>}
    </div>
  );
}

// ─── EDITABLE HIGHLIGHTS ──────────────────────────────────────────────────────
function EditableHighlights({ highlights, onChange }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(highlights.join("\n"));
  const save = () => { onChange(draft.split("\n").map(s => s.trim()).filter(Boolean)); setEditing(false); };
  const cancel = () => { setDraft(highlights.join("\n")); setEditing(false); };
  return (
    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 12, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>Highlights</div>
        {editing ? (
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={save} style={{ background: "#1d4ed8", color: "#fff", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>Save</button>
            <button onClick={cancel} style={{ background: "#1e3a5f", color: "#94a3b8", border: "none", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Cancel</button>
          </div>
        ) : (
          <button onClick={() => { setDraft(highlights.join("\n")); setEditing(true); }} style={{ background: "transparent", color: "#60a5fa", border: "1px solid #1e4976", borderRadius: 6, padding: "5px 14px", fontSize: 12, cursor: "pointer", fontFamily: "'Inter', sans-serif" }}>Edit</button>
        )}
      </div>
      {editing ? (
        <textarea value={draft} onChange={e => setDraft(e.target.value)} style={{ width: "100%", background: "#060f1a", border: "1px solid #1e4976", borderRadius: 8, color: "#e2e8f0", padding: "12px", fontSize: 13, fontFamily: "'Inter', sans-serif", lineHeight: 1.9, resize: "vertical", minHeight: 140, outline: "none", boxSizing: "border-box" }} placeholder="One highlight per line..." />
      ) : (
        <ul style={{ margin: 0, paddingLeft: 20, color: "#94a3b8", fontSize: 13, lineHeight: 2.1 }}>
          {highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}
    </div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
const NAV_ITEMS = [
  { id: "overview",    label: "Digital Overview" },
  { id: "email",       label: "Email" },
  { id: "listsize",    label: "List Size" },
  { id: "finances",    label: "Finances" },
  { id: "acquisition", label: "Acquisition ROI" },
  { id: "texting",     label: "Texting ROI" },
  { id: "ads",         label: "Ad Reporting" },
  { id: "growth",      label: "Growth" },
];

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [active, setActive] = useState("overview");
  const [period, setPeriod] = useState("weekly");
  const [highlights, setHighlights] = useState(DEFAULT_HIGHLIGHTS);
  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const emailRows   = period === "weekly"    ? EMAIL_TOP_LINES.filter(r => r.period === "weekly")
                    : period === "monthly"   ? EMAIL_TOP_LINES.filter(r => ["weekly","monthly"].includes(r.period))
                    : EMAIL_TOP_LINES;
  const textingRows = TEXTING_ROI.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const metaRows    = META_ADS.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const googleRows  = GOOGLE_ADS.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const acquisRows  = ACQUISITION_ROI.filter(r => period === "weekly" ? r.period === "weekly" : period === "monthly" ? ["weekly","monthly"].includes(r.period) : true);
  const financeRows = period === "quarterly" ? FINANCES : FINANCES.filter(r => r.type === "month");

  const totalActBlue = FINANCES.filter(r => r.type === "month").reduce((s, r) => s + r.totalActBlue, 0);
  const totalDigital = FINANCES.filter(r => r.type === "month").reduce((s, r) => s + r.digitalRaise, 0);
  const overallPct   = totalActBlue > 0 ? (totalDigital / totalActBlue) * 100 : 0;
  const overallStatus = digitalPctStatus(overallPct);

  const periodLabel = period === "weekly" ? CLIENT.reportWeek : period === "monthly" ? CLIENT.reportMonth : CLIENT.reportQuarter;

  const initials = CLIENT.name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  return (
      <div style={{ minHeight: "100vh", background: "#060f1a", color: "#e2e8f0", fontFamily: "'Inter', sans-serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap');
          * { box-sizing: border-box; }
          ::-webkit-scrollbar { width: 6px; height: 6px; }
          ::-webkit-scrollbar-track { background: #060f1a; }
          ::-webkit-scrollbar-thumb { background: #1e3a5f; border-radius: 3px; }
          .nav-item { cursor: pointer; transition: color 0.15s; }
          .nav-item:hover { color: #60a5fa !important; }
          .badge-above { background: #052e16; color: #4ade80; border: 1px solid #166534; }
          .badge-below { background: #3f0f0f; color: #f87171; border: 1px solid #7f1d1d; }
        `}</style>

        {/* HEADER */}
        <header style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(6,15,26,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid #1e3a5f", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: "linear-gradient(135deg,#1d4ed8,#3b82f6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 800, fontFamily: "'Sora', sans-serif", color: "#fff", flexShrink: 0 }}>{initials}</div>
            <div>
              <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 15, color: "#e2e8f0", lineHeight: 1.1 }}>{CLIENT.name}</div>
              <div style={{ fontSize: 11, color: "#475569", letterSpacing: "0.06em" }}>{CLIENT.cycle} CAMPAIGN REPORT</div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", background: "#091929", border: "1px solid #1e3a5f", borderRadius: 8, overflow: "hidden" }}>
              {["weekly","monthly","quarterly"].map(p => (
                <button key={p} onClick={() => setPeriod(p)} style={{ background: period === p ? "#1d4ed8" : "transparent", border: "none", color: period === p ? "#fff" : "#64748b", padding: "6px 14px", fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "'Inter', sans-serif", textTransform: "capitalize", transition: "all 0.15s" }}>{p}</button>
              ))}
            </div>
            <div style={{ fontSize: 12, color: "#475569" }}>Updated <span style={{ color: "#60a5fa" }}>{CLIENT.lastUpdated}</span></div>
          </div>
        </header>

        <div style={{ display: "flex" }}>
          {/* SIDEBAR */}
          <nav style={{ width: 200, flexShrink: 0, position: "sticky", top: 64, height: "calc(100vh - 64px)", overflowY: "auto", borderRight: "1px solid #1e3a5f", padding: "24px 0", background: "#07121e" }}>
            {NAV_ITEMS.map(item => (
              <div key={item.id} className="nav-item" onClick={() => scrollTo(item.id)} style={{ padding: "9px 24px", fontSize: 13, fontWeight: active === item.id ? 600 : 400, color: active === item.id ? "#60a5fa" : "#64748b", borderLeft: active === item.id ? "2px solid #3b82f6" : "2px solid transparent" }}>
                {item.label}
              </div>
            ))}
            <div style={{ margin: "24px 24px 0", padding: "12px 16px", background: "#0c2340", borderRadius: 8, border: "1px solid #1e3a5f" }}>
              <div style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>Viewing</div>
              <div style={{ fontSize: 12, color: "#94a3b8", textTransform: "capitalize", fontWeight: 600 }}>{period}</div>
              <div style={{ fontSize: 11, color: "#475569", marginTop: 2 }}>{periodLabel}</div>
            </div>
          </nav>

          <main style={{ flex: 1, padding: "40px 48px", maxWidth: "calc(100% - 200px)", overflowX: "hidden" }}>

            {/* DIGITAL OVERVIEW */}
            <div id="overview">
              <Section title="Digital Overview" subtitle={`${periodLabel} · ${CLIENT.lastUpdated}`}>
                <PeriodToggle active={period} onChange={setPeriod} />
                {period === "monthly" && (
                  <SummaryCallout label={`${CLIENT.reportMonth} — Monthly Summary`}>
                    <SummaryItem label="Email Sends" value={EMAIL_MONTHLY_SUMMARY.sends} color="#60a5fa" />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} color="#fbbf24" />
                    <SummaryItem label="Digital Raised (MTD)" value={fmtD(FINANCE_MONTHLY.digitalRaise)} color="#4ade80" />
                    <SummaryItem label="% to Projection" value={FINANCE_MONTHLY.projection > 0 ? `${((FINANCE_MONTHLY.totalActBlue / FINANCE_MONTHLY.projection) * 100).toFixed(1)}%` : "—"} color="#a78bfa" />
                  </SummaryCallout>
                )}
                {period === "quarterly" && (
                  <SummaryCallout label={`${CLIENT.reportQuarter} — Quarterly Summary`}>
                    <SummaryItem label="Email Sends" value={EMAIL_QUARTERLY_SUMMARY.sends} color="#60a5fa" />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_QUARTERLY_SUMMARY.avgOpenRate}%`} color="#fbbf24" />
                    <SummaryItem label="Digital Raised (QTD)" value={fmtD(FINANCE_QUARTERLY.digitalRaise)} color="#4ade80" />
                    <SummaryItem label="Total ActBlue (QTD)" value={fmtD(FINANCE_QUARTERLY.totalActBlue)} color="#a78bfa" />
                    <SummaryItem label="% to Q Projection" value={FINANCE_QUARTERLY.projection > 0 ? `${((FINANCE_QUARTERLY.totalActBlue / FINANCE_QUARTERLY.projection) * 100).toFixed(1)}%` : "—"} color="#fb923c" />
                  </SummaryCallout>
                )}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
                  <StatCard label="Total Subscribers" value={fmt(LIST_SIZE.find(r => r.key === "ALL")?.current || 0)} sub={LIST_SIZE.find(r => r.key === "ALL")?.goal ? `Goal: ${fmt(LIST_SIZE.find(r => r.key === "ALL").goal)}` : null} />
                  <StatCard label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} sub="14%+ = Strong" accent="#fbbf24" />
                  <StatCard label={period === "quarterly" ? "Digital Raised (QTD)" : "Digital Raised (MTD)"} value={period === "quarterly" ? fmtD(FINANCE_QUARTERLY.digitalRaise) : fmtD(FINANCE_MONTHLY.digitalRaise)} sub={`${((period === "quarterly" ? FINANCE_QUARTERLY.digitalRaise / (FINANCE_QUARTERLY.totalActBlue || 1) : FINANCE_MONTHLY.digitalRaise / (FINANCE_MONTHLY.totalActBlue || 1)) * 100).toFixed(1)}% of ActBlue`} accent="#34d399" />
                  <StatCard label="SMS List" value={fmt(LIST_SIZE.find(r => r.key === "180DO")?.current || 0)} sub="180-Day Openers" accent="#fb923c" />
                  <StatCard label="Total Ad Spend" value={fmtD(META_ADS.reduce((s,r) => s + (r.spend||0), 0) + GOOGLE_ADS.reduce((s,r) => s + (r.spend||0), 0))} sub="Meta + Google" accent="#f472b6" />
                </div>
                <EditableHighlights highlights={highlights} onChange={setHighlights} />
              </Section>
            </div>

            {/* EMAIL */}
            <div id="email">
              <Section title="Email" subtitle="Broadcast performance from EveryAction">
                <PeriodToggle active={period} onChange={setPeriod} />
                {period === "monthly" && (
                  <SummaryCallout label={`${CLIENT.reportMonth} — Email Summary`}>
                    <SummaryItem label="Total Sends" value={EMAIL_MONTHLY_SUMMARY.sends} />
                    <SummaryItem label="Total Recipients" value={fmt(EMAIL_MONTHLY_SUMMARY.totalRecipients)} />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgOpenRate}%`} color={openRateColor(EMAIL_MONTHLY_SUMMARY.avgOpenRate)} />
                    <SummaryItem label="Avg Click Rate" value={`${EMAIL_MONTHLY_SUMMARY.avgClickRate}%`} color="#a78bfa" />
                    <SummaryItem label="Total Unsubs" value={EMAIL_MONTHLY_SUMMARY.totalUnsubs} color="#f87171" />
                  </SummaryCallout>
                )}
                {period === "quarterly" && (
                  <SummaryCallout label={`${CLIENT.reportQuarter} — Email Summary`}>
                    <SummaryItem label="Total Sends" value={EMAIL_QUARTERLY_SUMMARY.sends} />
                    <SummaryItem label="Total Recipients" value={fmt(EMAIL_QUARTERLY_SUMMARY.totalRecipients)} />
                    <SummaryItem label="Avg Open Rate" value={`${EMAIL_QUARTERLY_SUMMARY.avgOpenRate}%`} color={openRateColor(EMAIL_QUARTERLY_SUMMARY.avgOpenRate)} />
                    <SummaryItem label="Avg Click Rate" value={`${EMAIL_QUARTERLY_SUMMARY.avgClickRate}%`} color="#a78bfa" />
                    <SummaryItem label="Total Unsubs" value={EMAIL_QUARTERLY_SUMMARY.totalUnsubs} color="#f87171" />
                  </SummaryCallout>
                )}
                {emailRows.length > 0 ? (
                  <Table
                    headers={["Subject Line", "Date", "Recipients", "Opens", "Open Rate", "Rating", "Clicks", "Click Rate", "Unsubs"]}
                    alignRight={[2,3,4,6,7,8]}
                    rows={emailRows.map(r => {
                      const badge = openRateBadge(r.openRate);
                      return [
                        <span style={{ color: "#e2e8f0" }}>{r.subject}</span>,
                        r.sendDate, fmt(r.recipients), fmt(r.opens),
                        <span style={{ color: openRateColor(r.openRate), fontWeight: 600 }}>{fmtP(r.openRate)}</span>,
                        <span style={{ padding: "2px 9px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>{badge.label}</span>,
                        fmt(r.clicks), fmtP(r.clickRate), fmt(r.unsubs),
                      ];
                    })}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No sends recorded for this period yet.</div>}
                <div style={{ display: "flex", gap: 20, marginTop: 12, flexWrap: "wrap" }}>
                  {[["Strong","≥14%","#4ade80","#052e16","#166534"],["Average","10–13.9%","#fbbf24","#2d1f00","#92400e"],["Low","<10%","#f87171","#3f0f0f","#7f1d1d"]].map(([label,range,color,bg,border]) => (
                    <div key={label} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 12 }}>
                      <span style={{ padding: "2px 9px", borderRadius: 10, fontWeight: 600, background: bg, color, border: `1px solid ${border}`, fontSize: 11 }}>{label}</span>
                      <span style={{ color: "#475569" }}>{range} open rate</span>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* LIST SIZE */}
            <div id="listsize">
              <Section title="List Size" subtitle="Subscriber segment counts — week-over-week">
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {LIST_SIZE.map(row => (
                    <div key={row.key} style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "18px 24px", display: "flex", alignItems: "center", gap: 24 }}>
                      <div style={{ minWidth: 160 }}>
                        <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.06em" }}>{row.key}</div>
                        <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 600, fontSize: 14, color: "#e2e8f0", marginTop: 2 }}>{row.label}</div>
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 28, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: "#60a5fa", lineHeight: 1 }}>{fmt(row.current)}</div>
                        <div style={{ fontSize: 12, color: "#475569", marginTop: 2 }}>prev: {fmt(row.prev)} &nbsp; <Delta val={row.change} /></div>
                        <GoalBar current={row.current} goal={row.goal} />
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            {/* FINANCES */}
            <div id="finances">
              <Section title="Finances" subtitle="ActBlue fundraising — digital raise target: 25–30% of total">
                <PeriodToggle active={period} onChange={setPeriod} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 20 }}>
                  {period === "quarterly" ? (
                    <>
                      <StatCard label="Total ActBlue (QTD)" value={fmtD(FINANCE_QUARTERLY.totalActBlue)} accent="#60a5fa" />
                      <StatCard label="Digital Raise (QTD)" value={fmtD(FINANCE_QUARTERLY.digitalRaise)} sub="Email + SMS + Ads" accent="#4ade80" />
                      {FINANCE_QUARTERLY.projection > 0 && <StatCard label="Q Projection" value={fmtD(FINANCE_QUARTERLY.projection)} sub={`${((FINANCE_QUARTERLY.totalActBlue/FINANCE_QUARTERLY.projection)*100).toFixed(1)}% to goal`} accent="#a78bfa" />}
                    </>
                  ) : (
                    <>
                      <StatCard label="Total ActBlue (MTD)" value={fmtD(FINANCE_MONTHLY.totalActBlue)} accent="#60a5fa" />
                      <StatCard label="Digital Raise (MTD)" value={fmtD(FINANCE_MONTHLY.digitalRaise)} sub="Email + SMS + Ads" accent="#4ade80" />
                      {FINANCE_MONTHLY.projection > 0 && <StatCard label="Monthly Projection" value={fmtD(FINANCE_MONTHLY.projection)} sub={`${((FINANCE_MONTHLY.totalActBlue/FINANCE_MONTHLY.projection)*100).toFixed(1)}% to goal`} accent="#a78bfa" />}
                    </>
                  )}
                  {overallPct > 0 && (
                    <div style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 12, padding: "20px 24px", flex: "2 1 260px", minWidth: 220 }}>
                      <div style={{ fontSize: 11, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>Digital % of ActBlue</div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                        <div style={{ fontSize: 26, fontWeight: 700, fontFamily: "'Sora', sans-serif", color: overallStatus.color }}>{overallPct.toFixed(1)}%</div>
                        <span style={{ padding: "2px 9px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: overallStatus.bg, color: overallStatus.color, border: `1px solid ${overallStatus.border}` }}>{overallStatus.label}</span>
                      </div>
                      <DigitalPctBar pct={overallPct} />
                    </div>
                  )}
                </div>
                {financeRows.length > 0 ? (
                  <Table
                    headers={["Period", "Total ActBlue", "Digital Raise", "Digital %", "vs Target"]}
                    alignRight={[1,2,3]}
                    rows={financeRows.map(r => {
                      const pct = r.totalActBlue > 0 ? (r.digitalRaise / r.totalActBlue) * 100 : 0;
                      const s = digitalPctStatus(pct);
                      return [
                        <span style={{ fontWeight: r.type === "qtd" ? 700 : 400, color: r.type === "qtd" ? "#e2e8f0" : "#cbd5e1" }}>{r.period}</span>,
                        <span style={{ color: "#60a5fa", fontWeight: r.type === "qtd" ? 700 : 400 }}>{fmtD(r.totalActBlue)}</span>,
                        <span style={{ color: "#4ade80", fontWeight: r.type === "qtd" ? 700 : 400 }}>{fmtD(r.digitalRaise)}</span>,
                        <span style={{ color: s.color, fontWeight: 600 }}>{pct.toFixed(1)}%</span>,
                        <span style={{ padding: "2px 9px", borderRadius: 10, fontSize: 11, fontWeight: 600, background: s.bg, color: s.color, border: `1px solid ${s.border}` }}>{s.label}</span>,
                      ];
                    })}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No finance data available yet.</div>}
              </Section>
            </div>

            {/* ACQUISITION ROI */}
            <div id="acquisition">
              <Section title="Acquisition ROI" subtitle="Conversion = any donation by an acquired contact (ActBlue)">
                <PeriodToggle active={period} onChange={setPeriod} />
                {acquisRows.length > 0 ? (
                  <Table
                    headers={["Source", "Acquired", "Donated", "Conv. Rate", "Total Raised", "Cost/Acq.", "ROI"]}
                    alignRight={[1,2,3,4,5,6]}
                    rows={acquisRows.map(r => [
                      r.source, fmt(r.acquired), fmt(r.donated), fmtP(r.convRate),
                      <span style={{ color: "#4ade80" }}>{fmtD(r.totalRaised)}</span>,
                      fmtD(r.costPerAcq),
                      <span style={{ color: r.roi >= 3 ? "#4ade80" : "#fbbf24", fontWeight: 600 }}>{r.roi}x</span>,
                    ])}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No acquisition data for this period yet. Add rows to ACQUISITION_ROI in the data section.</div>}
              </Section>
            </div>

            {/* TEXTING ROI */}
            <div id="texting">
              <Section title="Texting ROI" subtitle="SMS campaign performance">
                <PeriodToggle active={period} onChange={setPeriod} />
                {textingRows.length > 0 ? (
                  <Table
                    headers={["Campaign", "Date", "Sent", "Delivered", "Responses", "Opt-Outs", "Donations", "Raised"]}
                    alignRight={[2,3,4,5,6,7]}
                    rows={textingRows.map(r => [
                      r.campaign, r.sendDate, fmt(r.sent), fmt(r.delivered),
                      fmt(r.responses), fmt(r.optOuts), fmt(r.donations),
                      <span style={{ color: "#4ade80" }}>{fmtD(r.raised)}</span>,
                    ])}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No texting campaigns for this period yet.</div>}
              </Section>
            </div>

            {/* AD REPORTING */}
            <div id="ads">
              <Section title="Ad Reporting" subtitle="Meta Ads + Google Ads">
                <PeriodToggle active={period} onChange={setPeriod} />
                <div style={{ marginBottom: 8, fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Meta Ads</div>
                {metaRows.length > 0 ? (
                  <Table
                    headers={["Campaign", "Spend", "Impressions", "Reach", "Clicks", "CTR", "CPC", "Results", "Cost/Result", "Type"]}
                    alignRight={[1,2,3,4,5,6,7,8]}
                    rows={metaRows.map(r => [
                      r.campaign, fmtD(r.spend), fmt(r.impressions), fmt(r.reach), fmt(r.clicks),
                      fmtP(r.ctr), fmtD(r.cpc),
                      r.results ? fmt(r.results) : "—",
                      r.costPerResult ? fmtD(r.costPerResult) : "—",
                      <span style={{ fontSize: 11, color: "#94a3b8" }}>{r.resultType}</span>,
                    ])}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No Meta campaigns for this period yet. Add rows to META_ADS in the data section.</div>}
                <div style={{ marginTop: 28, marginBottom: 8, fontSize: 11, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Google Ads</div>
                {googleRows.length > 0 ? (
                  <Table
                    headers={["Campaign", "Spend", "Impressions", "Clicks", "CTR", "CPC", "Conversions", "Cost/Conv."]}
                    alignRight={[1,2,3,4,5,6,7]}
                    rows={googleRows.map(r => [
                      r.campaign, fmtD(r.spend), fmt(r.impressions), fmt(r.clicks),
                      fmtP(r.ctr), fmtD(r.cpc), fmt(r.conversions), fmtD(r.costPerConv),
                    ])}
                  />
                ) : <div style={{ color: "#475569", fontSize: 13, padding: "20px 0" }}>No Google campaigns for this period yet. Add rows to GOOGLE_ADS in the data section.</div>}
              </Section>
            </div>

            {/* GROWTH */}
            <div id="growth">
              <Section title="Growth Calculations" subtitle="Key metrics vs benchmarks">
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {GROWTH_CALC.map((row, i) => (
                    <div key={i} style={{ background: "#091929", border: "1px solid #1e3a5f", borderRadius: 10, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ fontSize: 14, color: "#cbd5e1" }}>{row.metric}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, fontSize: 18, color: "#60a5fa" }}>{row.value}</div>
                          <div style={{ fontSize: 11, color: "#475569" }}>Benchmark: {row.benchmark}</div>
                        </div>
                        <span className={row.status === "above" ? "badge-above" : "badge-below"} style={{ padding: "4px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, whiteSpace: "nowrap" }}>
                          {row.status === "above" ? "✓ On Track" : "↓ Needs Attention"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div style={{ borderTop: "1px solid #1e3a5f", paddingTop: 24, marginTop: 24, fontSize: 12, color: "#334155", textAlign: "center" }}>
              Report generated for {CLIENT.name} · {CLIENT.cycle} · {CLIENT.lastUpdated} · Confidential
            </div>
          </main>
        </div>
      </div>
  );
}
