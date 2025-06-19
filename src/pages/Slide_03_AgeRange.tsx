
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";

export default function Slide_03_AgeRange() {
  const [selected, setSelected] = useState("");

  const options = [
    { label: "18 – 29", value: "18-29" },
    { label: "30 – 39", value: "30-39" },
    { label: "40 – 49", value: "40-49" },
    { label: "50+",     value: "50plus" },
  ];

  return (
    <section
      id="Slide_03_AgeRange"
      data-section="history"
      className="w-full max-w-sm mx-auto bg-gradient-to-b from-[#323743] to-[#0d9c95] min-h-screen"
    >
      {/* Header */}
      <header className="w-full px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <a href="/slide_02_jointselect" className="btn-icon" aria-label="Go back" data-action="back">
            <ArrowLeft size={16} className="text-white" />
          </a>
          <h1 className="text-white text-lg font-semibold">History</h1>
          <span className="text-white/80 text-sm font-medium">3&nbsp;of&nbsp;6</span>
        </div>

        <div className="flex space-x-2">
          <div className="progress-chunk is-complete" />
          <div className="progress-chunk is-complete" />
          <div className="progress-chunk is-complete" />
          <div className="progress-chunk" />
        </div>
      </header>

      {/* Question */}
      <div className="px-6 py-8 text-center">
        <h2 className="question-title">What is your age range?</h2>
        <p className="question-sub">(select&nbsp;one)</p>
      </div>

      {/* Answers */}
      <div className="px-6 flex flex-col space-y-4 mt-8" data-input="ageRange">
        {options.map(opt => (
          <button
            key={opt.value}
            className={`answer-btn ${selected === opt.value ? "is-selected" : ""}`}
            data-value={opt.value}
            onClick={() => setSelected(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Nav */}
      <footer className="px-6 py-6 flex justify-end">
        <a
          href="/slide_04_pain_duration"
          className="btn-primary"
          data-action="next"
          data-next="Slide_04_PainDuration"
        >
          Next
        </a>
      </footer>
    </section>
  );
}
