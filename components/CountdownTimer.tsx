
import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="flex items-center justify-center space-x-2 font-mono text-xl md:text-2xl font-bold text-red-600">
      <span className="bg-red-100 px-3 py-1 rounded-md">{minutes.toString().padStart(2, '0')}</span>
      <span>:</span>
      <span className="bg-red-100 px-3 py-1 rounded-md">{seconds.toString().padStart(2, '0')}</span>
    </div>
  );
};

export default CountdownTimer;
