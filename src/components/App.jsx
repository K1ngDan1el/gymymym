import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, CheckCircle, Circle, Activity, Dumbbell, Timer, Flame, ChevronDown, ChevronUp } from 'lucide-react';
import { workoutData } from '../data/workoutData.js';
import * as Machines from './Machines.jsx';
import { RestTimer } from './RestTimer.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('upper');
  const [progress, setProgress] = useState({});
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const initialProgress = {};
    Object.keys(workoutData).forEach(day => {
      workoutData[day].forEach(exercise => {
        initialProgress[exercise.id] = Array(exercise.sets).fill(false);
      });
    });
    setProgress(initialProgress);
  }, []);

  const toggleSet = (exerciseId, setIndex, e) => {
    e.stopPropagation();
    setProgress(prev => {
      const exerciseProgress = [...prev[exerciseId]];
      exerciseProgress[setIndex] = !exerciseProgress[setIndex];
      return { ...prev, [exerciseId]: exerciseProgress };
    });
    
    if (navigator.vibrate) navigator.vibrate(50); 
  };

  const getDayProgress = () => {
    if (Object.keys(progress).length === 0) return 0;
    let totalSets = 0; let completedSets = 0;
    workoutData[activeTab].forEach(ex => {
      totalSets += ex.sets;
      completedSets += progress[ex.id]?.filter(Boolean).length || 0;
    });
    return totalSets === 0 ? 0 : Math.round((completedSets / totalSets) * 100);
  };

  const completionPercentage = getDayProgress();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-32 selection:bg-indigo-500 selection:text-white">

      {/* Header Fijo */}
      <header className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 p-4 shadow-md">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-[22px] font-black text-white flex items-center tracking-tight">
              <Activity className="w-6 h-6 mr-2 text-indigo-500" />
              Rutina Tracker
            </h1>
            <p className="text-slate-400 text-[11px] mt-0.5 font-bold uppercase tracking-widest">Full-Width Sets</p>
          </div>
          <div className="w-14 h-14 relative bg-slate-900 rounded-full p-1 border border-slate-800 shadow-inner">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" />
              <path className="text-indigo-500 transition-all duration-700 ease-out" strokeDasharray={`${completionPercentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-[11px] font-black text-white">
              {completionPercentage}%
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 mt-6">
        {/* Selector */}
        <div className="flex bg-slate-900 p-1.5 rounded-[20px] mb-6 shadow-inner border border-slate-800 h-[64px]">
          <button onClick={() => {setActiveTab('upper'); setExpandedId(null);}} className={`flex-1 flex items-center justify-center rounded-2xl font-bold text-[15px] transition-all duration-300 ${activeTab === 'upper' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 active:bg-slate-800'}`}>
            <Flame className="w-5 h-5 mr-2" /> Upper
          </button>
          <button onClick={() => {setActiveTab('lower'); setExpandedId(null);}} className={`flex-1 flex items-center justify-center rounded-2xl font-bold text-[15px] transition-all duration-300 ${activeTab === 'lower' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25' : 'text-slate-400 active:bg-slate-800'}`}>
            <Dumbbell className="w-5 h-5 mr-2" /> Lower
          </button>
        </div>

        <RestTimer />

        {/* Lista de Ejercicios */}
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-2 px-1">
            <h2 className="text-[22px] font-black text-white">Ejercicios</h2>
            <span className="text-xs font-bold bg-slate-800 text-slate-300 px-3 py-1.5 rounded-full border border-slate-700">
              {workoutData[activeTab].length} Tareas
            </span>
          </div>
          
          {workoutData[activeTab].map((exercise) => {
            const isExpanded = expandedId === exercise.id;
            const RenderAnimation = Machines[exercise.Animation];
            const setsCompleted = progress[exercise.id]?.filter(Boolean).length || 0;
            const isFullyCompleted = setsCompleted === exercise.sets;
            
            return (
              <div key={exercise.id} className={`bg-slate-900 rounded-[28px] border transition-all duration-300 overflow-hidden ${isExpanded ? 'border-indigo-500/60 shadow-2xl shadow-indigo-500/10' : isFullyCompleted ? 'border-emerald-500/40 bg-slate-900/60' : 'border-slate-800 active:border-slate-600'}`}>
                
                {/* Cabecera Clickable (Acordeón) */}
                <div 
                  className="p-5 min-h-[100px] flex justify-between items-start"
                  onClick={() => setExpandedId(isExpanded ? null : exercise.id)}
                  role="button"
                >
                  <div className="flex-1 pr-3 pointer-events-none">
                    <span className={`text-[11px] font-black uppercase tracking-widest mb-1.5 block ${isFullyCompleted ? 'text-emerald-400' : 'text-indigo-400'}`}>
                      {exercise.category}
                    </span>
                    <h3 className={`text-[19px] font-bold leading-tight flex items-center transition-colors ${isFullyCompleted ? 'text-slate-400 line-through decoration-emerald-500/50' : 'text-white'}`}>
                      {exercise.name}
                    </h3>
                    <div className="inline-flex items-center mt-3 text-[13px] font-bold text-slate-400">
                      {isExpanded ? <><ChevronUp className="w-4 h-4 mr-1.5 text-slate-300" /> Ocultar detalles</> : <><ChevronDown className="w-4 h-4 mr-1.5 text-indigo-400" /> Ver detalles</>}
                    </div>
                  </div>
                  
                  {/* Etiqueta de Resumen Total */}
                  <div className="flex flex-col items-end pointer-events-none">
                    <div className={`px-3 py-2.5 rounded-xl border flex flex-col items-center justify-center min-w-[56px] ${isFullyCompleted ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-950 border-slate-800 shadow-inner'}`}>
                      <span className={`text-sm font-black leading-none mb-1 ${isFullyCompleted ? 'text-emerald-400' : 'text-white'}`}>{exercise.sets}</span>
                      <span className="text-[10px] text-slate-500 font-bold leading-none uppercase tracking-wider">Sets</span>
                    </div>
                  </div>
                </div>

                {/* Detalles Expandidos */}
                <div className={`transition-all duration-500 ease-in-out bg-slate-950/60 ${isExpanded ? 'max-h-[1000px] opacity-100 border-t border-slate-800' : 'max-h-0 opacity-0'}`}>
                  <div className="p-5">
                    <div className="w-full h-52 bg-slate-900 rounded-[20px] border border-slate-800 mb-5 relative overflow-hidden flex items-center justify-center shadow-inner">
                      <div className="w-36 h-36">
                        {RenderAnimation && <RenderAnimation />}
                      </div>
                    </div>
                    <div className="space-y-4 text-sm">
                      <div className="bg-slate-900 rounded-[20px] p-5 border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-indigo-500"></div>
                        <h4 className="text-indigo-400 font-black mb-2 flex items-center text-xs uppercase tracking-wider">La Máquina</h4>
                        <p className="text-white font-bold mb-2 text-[15px]">{exercise.exactMachine}</p>
                        <p className="text-slate-400 leading-relaxed text-[14px]">{exercise.machineSetup}</p>
                      </div>
                      <div className="bg-slate-900 rounded-[20px] p-5 border border-slate-800 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-emerald-500"></div>
                        <h4 className="text-emerald-400 font-black mb-2 flex items-center text-xs uppercase tracking-wider">Técnica</h4>
                        <p className="text-slate-300 leading-relaxed text-[14px]">{exercise.technique}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- NUEVOS BOTONES DE SET: VERTICALES Y PANTALLA COMPLETA --- */}
                <div className="p-3 bg-slate-900/90 border-t border-slate-800 rounded-b-[28px]">
                  <div className="flex flex-col gap-3">
                    {progress[exercise.id] && Array.from({ length: exercise.sets }).map((_, idx) => {
                      const isCompleted = progress[exercise.id][idx];
                      return (
                        <button
                          key={idx}
                          onClick={(e) => toggleSet(exercise.id, idx, e)}
                          className={`w-full h-[100px] relative flex items-center justify-center rounded-[22px] transition-all duration-200 shadow-sm active:scale-[0.98] touch-manipulation overflow-hidden ${
                            isCompleted 
                              ? 'bg-emerald-500 text-slate-950 border-none shadow-emerald-500/30 shadow-lg' 
                              : 'bg-slate-800 text-slate-300 border-[1.5px] border-slate-700 active:bg-slate-700'
                          }`}
                        >
                          {/* Ícono de check grande centrado */}
                          <div className="relative flex items-center justify-center">
                            {isCompleted ? (
                              <CheckCircle className="w-16 h-16 opacity-90" />
                            ) : (
                              <>
                                <Circle className="w-16 h-16 opacity-40" />
                                {/* Número del set superpuesto - solo cuando NO está completado */}
                                <span className="absolute text-[24px] font-black text-slate-300">
                                  {idx + 1}
                                </span>
                              </>
                            )}
                          </div>
                          
                          {/* Badge de reps en esquina superior derecha */}
                          <div className={`absolute top-3 right-3 px-2 py-1 rounded-md text-[11px] font-black uppercase tracking-wider ${isCompleted ? 'bg-slate-900/30 text-slate-900' : 'bg-slate-900/60 text-slate-400'}`}>
                            {exercise.reps}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Mensaje Final */}
        {completionPercentage === 100 && (
          <div className="mt-8 p-8 bg-slate-900 border-[1.5px] border-emerald-500/40 rounded-[32px] text-center relative overflow-hidden shadow-2xl shadow-emerald-500/10">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-teal-400"></div>
            <h3 className="text-[26px] font-black text-white mb-2">¡Completado!</h3>
            <p className="text-slate-400 text-[15px]">Excelente entrenamiento.</p>
          </div>
        )}
      </div>
    </div>
  );
}