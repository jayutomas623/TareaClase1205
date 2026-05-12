import React, { useState } from "react";
import "./../styles/ContrastChecker.scss";

const ContrastChecker: React.FC = () => {
  const [bgColor, setBgColor] = useState<string>('#b4bcff');

  return (
    <section className="contrast-tool">
      <h3> Contraste </h3>
      <input 
        type="color"
        value={bgColor}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBgColor(e.target.value)}
      />
      
      <div className="preview-box" style={{ backgroundColor: bgColor }}>
        <p style={{ color: '#ffffff' }}>
          Texto Blanco
        </p>

        <p style={{ color: '#000000' }}>
          Texto Negro
        </p>
      </div>
    </section>
  );
};

export default ContrastChecker;