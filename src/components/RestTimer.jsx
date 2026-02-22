import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Timer } from 'lucide-react';

export const RestTimer = () => {
  const [seconds, setSeconds] = useState(90);
  const [isActive, setIsActive] = useState(false);
  const [initialTime, setInitialTime] = useState(90);

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => setSeconds(s => s - 1), 1000);
    } else if (seconds === 0) {
      setIsActive(false);
      if (navigator.vibrate) navigator.vibrate([300, 100, 300, 100, 300]);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggle = () => setIsActive(!isActive);
  const reset = () => { setIsActive(false); setSeconds(initialTime); };
  const changeTime = (time) => { setInitialTime(time); setSeconds(time); setIsActive(false); };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="bg-slate-800 rounded-[28px] p-5 mb-6 border border-slate-700 shadow-xl">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold flex items-center text-lg">
            <Timer className="w-6 h-6 mr-2 text-indigo-400" />
            Descanso
          </h3>
          <div className="flex space-x-2">
            {[60, 90, 120].map(t => (
              <button 
                key={t} 
                onClick={() => changeTime(t)} 
                className={`min-w-[56px] min-h-[44px] flex items-center justify-center text-sm font-bold rounded-xl transition-all ${initialTime === t ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-900 text-slate-400 border border-slate-700 active:bg-slate-700'}`}
              >
                {formatTime(t)}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center justify-between bg-slate-900 rounded-[20px] p-4 border border-slate-800">
          <div className="text-[2.5rem] font-mono font-black text-white tracking-wider leading-none ml-2">
            {formatTime(seconds)}
          </div>
          <div className="flex space-x-3">
            <button onClick={toggle} className={`w-[60px] h-[60px] flex items-center justify-center rounded-2xl transition-all ${isActive ? 'bg-amber-500 text-slate-900 shadow-amber-500/20 shadow-lg' : 'bg-indigo-500 text-white shadow-indigo-500/30 shadow-xl'} active:scale-95`}>
              {isActive ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
            </button>
            <button onClick={reset} className="w-[60px] h-[60px] flex items-center justify-center bg-slate-800 text-slate-300 rounded-2xl border border-slate-700 active:bg-slate-700 transition-colors active:scale-95">
              <RotateCcw className="w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};