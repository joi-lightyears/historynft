"use client"
import { useEffect, useRef } from 'react';
import "../styles/progressBar.scss"
export default function ProgressBar({percent}) {
  const progressBarRef = useRef(null);

  useEffect(() => {
    const progressBar = progressBarRef.current;

    if (progressBar) {
      const spans = progressBar.querySelectorAll('.meter > span');
      spans.forEach((span) => {
        const origWidth = span.offsetWidth;
        span.style.width = '0';
        setTimeout(() => {
          span.style.transition = 'width 1.2s ease-in-out';
          span.style.width = `${origWidth}px`;
        }, 10);
      });
    }
  }, []);

  return (
    <div ref={progressBarRef} className="meter orange nostripes">
      <span style={{ width: `${percent}%` }}></span>
    </div>
  );
}
