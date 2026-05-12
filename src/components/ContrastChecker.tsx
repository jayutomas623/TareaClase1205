import React, { useState, useEffect } from "react";  // ✅ + useEffect
import "./../styles/ContrastChecker.scss";

const ContrastChecker: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('#b4bcff');
  const [randomHue, setRandomHue] = useState<number>(0); // ✅ NUEVO estado

  // ✅ NUEVA función (mismas fórmulas que ColorHarmonizer)
  const getHarmonies = (h: number) => [
    { type: 'Base',          val: `hsl(${h}, 70%, 50%)` },
    { type: 'Complementario',val: `hsl(${(h + 180) % 360}, 70%, 50%)` },
    { type: 'Triada A',      val: `hsl(${(h + 120) % 360}, 70%, 50%)` },
    { type: 'Triada B',      val: `hsl(${(h + 240) % 360}, 70%, 50%)` },
  ];

  // ✅ NUEVO: cambia el hue random cada 1 segundo
  useEffect(() => {
    const interval = setInterval(() => {
      setRandomHue(Math.floor(Math.random() * 360));
    }, 1000);
    return () => clearInterval(interval); // limpieza al desmontar
  }, []);

  return (
    <section className="contrast-tool">
      <h3> Contraste </h3>
      <input
        type="color"
        value={bgColor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBgColor(e.target.value)}
      />

      <div className="preview-box" style={{ backgroundColor: bgColor }}>
        <p style={{ color: '#ffffff' }}>Texto Blanco</p>
        <p style={{ color: '#000000' }}>Texto Negro</p>
      </div>

      {/* ✅ NUEVO: Objeto 2D con colores armónicos aleatorios */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', width: '240px', height: '240px', margin: '1rem auto' }}>
        {getHarmonies(randomHue).map((c) => (
          <div
            key={c.type}
            style={{
              background: c.val,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'white', textShadow: '1px 1px 4px rgba(0,0,0,0.5)',
              fontWeight: 'bold', fontSize: '0.65rem', textAlign: 'center',
              transition: 'background 0.8s ease'  // transición suave
            }}
          >
            {c.type}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContrastChecker;