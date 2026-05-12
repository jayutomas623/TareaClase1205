import React, { useState } from "react";
import "../styles/ColorHarmonizer.scss";

const ColorHarmonizer: React.FC = () => {
  const [hue, setHue] = useState<number>(180);

  const getHarmonies = (h: number) => [
    { type: 'Base', val: `hsl(${h}, 70%, 50%)` },
    { type: 'Complementario', val: `hsl(${(h + 180) % 360}, 70%, 50%)` },
    { type: 'Triada A', val: `hsl(${(h + 120) % 360}, 70%, 50%)` },
    { type: 'Triada B', val: `hsl(${(h + 240) % 360}, 70%, 50%)` },
  ];

  return (
    <section className="harmonies">
      <input
        type="range"
        min="0"
        max="360"
        value={hue}
        onChange={(e) => setHue(Number(e.target.value))}
      />

      <div className="grid">
        {getHarmonies(hue).map((c: { type: string; val: string }) => (
          <div key={c.type} className="card" style={{ background: c.val }}>
            <span>{c.type}</span>
          </div>
        ))}
      </div>

      {/* ✅ NUEVO: Objeto 2D — cuadrado dividido en 4 cuadrantes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '240px', height: '240px', margin: '1rem auto' }}>
        {getHarmonies(hue).map((c) => (
          <div
            key={c.type + '-sq'}
            style={{
              background: c.val,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              fontWeight: 'bold', fontSize: '0.65rem', textAlign: 'center'
            }}
          >
            {c.type}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ColorHarmonizer;