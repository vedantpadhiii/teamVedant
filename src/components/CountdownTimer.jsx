import { useEffect, useState } from 'react';

const RACE_TARGET = new Date('2026-07-26T05:15:00-07:00').getTime();

function pad(value) {
  return String(value).padStart(2, '0');
}

export default function CountdownTimer() {
  const [timeLeftMs, setTimeLeftMs] = useState(() => Math.max(0, RACE_TARGET - Date.now()));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeftMs(Math.max(0, RACE_TARGET - Date.now()));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const days = Math.floor(timeLeftMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeftMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeftMs / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeftMs / 1000) % 60);

  return (
    <div className="inline-flex flex-wrap justify-center gap-4 md:gap-6">
      <div className="flex flex-col items-center min-w-[108px]">
        <div className="bg-slate-950/95 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] rounded-3xl px-5 py-4 md:px-6 md:py-5 w-full text-center">
          <div className="text-5xl md:text-6xl font-black text-white leading-none">{pad(days)}</div>
        </div>
        <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-slate-300 font-semibold">Days</div>
      </div>

      <div className="flex items-center text-white text-5xl md:text-6xl">:</div>

      <div className="flex flex-col items-center min-w-[108px]">
        <div className="bg-slate-950/95 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] rounded-3xl px-5 py-4 md:px-6 md:py-5 w-full text-center">
          <div className="text-5xl md:text-6xl font-black text-white leading-none">{pad(hours)}</div>
        </div>
        <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-slate-300 font-semibold">Hours</div>
      </div>

      <div className="flex items-center text-white text-5xl md:text-6xl">:</div>

      <div className="flex flex-col items-center min-w-[108px]">
        <div className="bg-slate-950/95 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] rounded-3xl px-5 py-4 md:px-6 md:py-5 w-full text-center">
          <div className="text-5xl md:text-6xl font-black text-white leading-none">{pad(minutes)}</div>
        </div>
        <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-slate-300 font-semibold">Minutes</div>
      </div>

      <div className="flex items-center text-white text-5xl md:text-6xl">:</div>

      <div className="flex flex-col items-center min-w-[108px]">
        <div className="bg-slate-950/95 border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] rounded-3xl px-5 py-4 md:px-6 md:py-5 w-full text-center">
          <div className="text-5xl md:text-6xl font-black text-white leading-none">{pad(seconds)}</div>
        </div>
        <div className="mt-3 text-xs md:text-sm uppercase tracking-[0.25em] text-slate-300 font-semibold">Seconds</div>
      </div>
    </div>
  );
}

