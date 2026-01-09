import React from "react";

const OrientationGuard = () => {
  return (
    <div className="orientation-guard">
      <div className="phone-rotate-icon">
        <img
          src="/assets/Rotate.svg"
          alt="Rotate Device"
          width={142}
          height={80}
        />
      </div>
      <p className="orientation-text">
        Please Hold your device in Portrait Mode
      </p>
    </div>
  );
};

export default OrientationGuard;
