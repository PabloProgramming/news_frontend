import { useEffect, useState } from "react";

export const ErrorComponent = ({ message, duration = 5000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);
    
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  return (
    <div className="error-container">
      <p className="error-msg">
        <strong>Error: </strong> {message}
      </p>
    </div>
  );
};