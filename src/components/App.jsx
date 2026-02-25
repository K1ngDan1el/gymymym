import React, { useState, useEffect } from 'react';
import { CheckCircle, Activity, Dumbbell, Flame, ChevronDown, ArrowRight, Filter, AlertCircle } from 'lucide-react';
// Asegúrate de que tu archivo exporte 'gymExercises'
import { gymExercises as workoutData } from '../data/workoutData.js'; 
import * as Machines from './Machines.jsx';
import { RestTimer } from './RestTimer.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState(Object.keys(workoutData)[0]);
  const [filter, setFilter] = useState('Todos');
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
      const exerciseProgress = [...(prev[exerciseId] || [])];
      exerciseProgress[setIndex] = !exerciseProgress[setIndex];
      return { ...prev, [exerciseId]: exerciseProgress };
    });
    if (navigator.vibrate) navigator.vibrate(50); 
  };

  const getDayProgress = () => {
    if (Object.keys(progress).length === 0) return 0;
    let totalSets = 0; let completedSets = 0;
    const currentExercises = workoutData[activeTab] || [];
    currentExercises.forEach(ex => {
      totalSets += ex.sets;
      completedSets += progress[ex.id]?.filter(Boolean).length || 0;
    });
    return totalSets === 0 ? 0 : Math.round((completedSets / totalSets) * 100);
  };

  const completionPercentage = getDayProgress();

  const getCategoryIcon = (cat) => {
    const c = cat.toLowerCase();
    if (c.includes('pecho')) return <Flame className="w-5 h-5 mb-1.5" />;
    if (c.includes('pierna') || c.includes('legs')) return <Dumbbell className="w-5 h-5 mb-1.5" />;
    return <Activity className="w-5 h-5 mb-1.5" />;
  };

  // --- LÓGICA DE FILTRADO Y ORDENAMIENTO ---
  let exercisesToShow = (workoutData[activeTab] || []).filter(ex => {
    if (filter === 'Todos') return true;
    return ex.difficulty === filter;
  });

  // Mapa de valor para ordenar
  const difficultyValue = { 'Principiante': 1, 'Intermedio': 2, 'Avanzado': 3 };

  // Ordenar siempre: Menor dificultad primero
  exercisesToShow.sort((a, b) => {
    const valA = difficultyValue[a.difficulty] || 99;
    const valB = difficultyValue[b.difficulty] || 99;
    return valA - valB;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans pb-40 selection:bg-indigo-500 selection:text-white">

      {/* Header */}
      <header className="sticky top-0 z-20 bg-slate-950/90 backdrop-blur-xl border-b border-slate-800 px-4 py-4 shadow-md">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-xl font-black text-white flex items-center tracking-tight">
              <Activity className="w-6 h-6 mr-2 text-indigo-500" />
              Gym Tracker
            </h1>
          </div>
          <div className="flex items-center gap-3">
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
               {completionPercentage}%
             </span>
             <div className="w-7 h-7 relative">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path className="text-slate-800" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" />
                  <path className="text-indigo-500 transition-all duration-700 ease-out" strokeDasharray={`${completionPercentage}, 100`} d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                </svg>
             </div>
          </div>
        </div>
      </header>

      <div className="max-w-xl mx-auto px-4 mt-6">
        
        {/* Selector de Categorías */}
        <div className="mb-8">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1">Grupos Musculares</h2>
            <div className="grid grid-cols-3 gap-3">
            {Object.keys(workoutData).map((category) => (
                <button 
                key={category}
                onClick={() => {setActiveTab(category); setExpandedId(null); setFilter('Todos');}}
                className={`
                    flex flex-col items-center justify-center p-4 rounded-2xl transition-all duration-200
                    border relative overflow-hidden active:scale-95 touch-manipulation
                    ${activeTab === category 
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-500/30' 
                    : 'bg-slate-900 text-slate-400 border-slate-800'}
                `}
                >
                {activeTab === category && <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />}
                {getCategoryIcon(category)}
                <span className="capitalize text-xs font-bold">{category}</span>
                </button>
            ))}
            </div>
        </div>

        <div className="mb-8">
            <RestTimer />
        </div>

        {/* --- FILTROS DE DIFICULTAD GRANDES --- */}
        <div className="mb-8">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-1 flex items-center gap-2">
            <Filter className="w-3 h-3" /> Filtrar por Nivel
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {['Todos', 'Principiante', 'Intermedio', 'Avanzado'].map((level) => (
              <button
                key={level}
                onClick={() => setFilter(level)}
                className={`
                  relative py-3 px-2 rounded-xl text-sm font-bold transition-all border touch-manipulation
                  flex items-center justify-center gap-2
                  ${filter === level 
                    ? 'bg-slate-100 text-slate-950 border-white shadow-md scale-[1.02]' 
                    : 'bg-slate-900 text-slate-400 border-slate-800 active:bg-slate-800'}
                `}
              >
                {/* Indicadores de color para cada nivel */}
                {level === 'Principiante' && <span className="w-2 h-2 rounded-full bg-emerald-500"></span>}
                {level === 'Intermedio' && <span className="w-2 h-2 rounded-full bg-yellow-500"></span>}
                {level === 'Avanzado' && <span className="w-2 h-2 rounded-full bg-red-500"></span>}
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Lista de Ejercicios */}
        <div className="space-y-5">
          <div className="flex items-center justify-between mb-2 px-1">
             <h2 className="text-2xl font-black text-white capitalize">
                {activeTab}
              </h2>
            <span className="text-xs font-bold bg-slate-900 text-slate-400 px-3 py-1.5 rounded-lg border border-slate-800">
              {exercisesToShow.length} Ejercicios
            </span>
          </div>
          
          {exercisesToShow.length === 0 ? (
            <div className="py-16 bg-slate-900/50 rounded-[32px] border border-slate-800 border-dashed flex flex-col items-center justify-center text-center px-6">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-500">
                <AlertCircle className="w-8 h-8" />
              </div>
              <p className="text-slate-300 font-bold text-lg mb-1">Sin resultados</p>
              <p className="text-slate-500 text-sm mb-4">No hay ejercicios de nivel "{filter}" en esta categoría.</p>
              <button onClick={() => setFilter('Todos')} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/25 active:scale-95 transition-transform">
                Ver todos
              </button>
            </div>
          ) : (
            exercisesToShow.map((exercise) => {
              const isExpanded = expandedId === exercise.id;
              const RenderAnimation = Machines[exercise.Animation] || Machines['MachineGeneric'] || (() => <div className="text-slate-500 text-xs flex items-center justify-center h-full">Sin animación</div>);
              
              const setsCompleted = progress[exercise.id]?.filter(Boolean).length || 0;
              const isFullyCompleted = setsCompleted === exercise.sets;
              
              return (
                <div key={exercise.id} className={`bg-slate-900 rounded-[24px] border transition-all duration-300 overflow-hidden ${isExpanded ? 'border-indigo-500/60 shadow-xl shadow-indigo-500/10 scale-[1.01] z-10' : isFullyCompleted ? 'border-emerald-500/40 bg-slate-900/60' : 'border-slate-800 active:bg-slate-800/80 active:border-slate-700'}`}>
                  
                  {/* Cabecera Clickable */}
                  <div 
                    className="p-5 flex justify-between items-start cursor-pointer select-none"
                    onClick={() => setExpandedId(isExpanded ? null : exercise.id)}
                  >
                    <div className="flex-1 pr-4 pointer-events-none">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${isFullyCompleted ? 'text-emerald-400' : 'text-indigo-400'}`}>
                          {exercise.category}
                        </span>
                        {/* Badge de Dificultad */}
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold border flex items-center gap-1 ${
                          exercise.difficulty === 'Principiante' ? 'border-emerald-500/30 text-emerald-400 bg-emerald-500/5' :
                          exercise.difficulty === 'Intermedio' ? 'border-yellow-500/30 text-yellow-400 bg-yellow-500/5' :
                          'border-red-500/30 text-red-400 bg-red-500/5'
                        }`}>
                          {exercise.difficulty === 'Principiante' && <div className="w-1 h-1 rounded-full bg-emerald-400" />}
                          {exercise.difficulty === 'Intermedio' && <div className="w-1 h-1 rounded-full bg-yellow-400" />}
                          {exercise.difficulty === 'Avanzado' && <div className="w-1 h-1 rounded-full bg-red-400" />}
                          {exercise.difficulty}
                        </span>
                      </div>
                      
                      <h3 className={`text-[18px] font-bold leading-tight transition-colors ${isFullyCompleted ? 'text-slate-500 line-through decoration-emerald-500/50' : 'text-slate-100'}`}>
                        {exercise.name}
                      </h3>
                      
                      {!isExpanded && (
                        <div className="inline-flex items-center mt-3 text-[12px] font-bold text-slate-500">
                          <ArrowRight className="w-4 h-4 mr-1.5" /> Toca para detalles
                        </div>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end pointer-events-none">
                      <div className={`px-3 py-2.5 rounded-xl border flex flex-col items-center justify-center min-w-[52px] ${isFullyCompleted ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-slate-950 border-slate-800 shadow-inner'}`}>
                        <span className={`text-base font-black leading-none mb-0.5 ${isFullyCompleted ? 'text-emerald-400' : 'text-white'}`}>{exercise.sets}</span>
                        <span className="text-[9px] text-slate-500 font-bold leading-none uppercase tracking-wider">Sets</span>
                      </div>
                    </div>
                  </div>

                  {/* Detalles Expandidos */}
                  <div className={`transition-all duration-500 ease-in-out bg-slate-950/60 ${isExpanded ? 'max-h-[1000px] opacity-100 border-t border-slate-800' : 'max-h-0 opacity-0'}`}>
                    <div className="p-5">
                      <div className="w-full h-52 bg-slate-900 rounded-[20px] border border-slate-800 mb-5 relative overflow-hidden flex items-center justify-center shadow-inner">
                        <div className="w-36 h-36">
                          <RenderAnimation />
                        </div>
                      </div>
                      <div className="space-y-4 text-sm">
                        <div className="bg-slate-900 rounded-[20px] p-4 border border-slate-800 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500"></div>
                          <h4 className="text-indigo-400 font-black mb-1.5 flex items-center text-[11px] uppercase tracking-wider">La Máquina</h4>
                          <p className="text-white font-bold mb-1 text-[15px]">{exercise.exactMachine}</p>
                          <p className="text-slate-400 leading-relaxed text-[13px]">{exercise.machineSetup}</p>
                        </div>
                        <div className="bg-slate-900 rounded-[20px] p-4 border border-slate-800 relative overflow-hidden">
                          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                          <h4 className="text-emerald-400 font-black mb-1.5 flex items-center text-[11px] uppercase tracking-wider">Técnica</h4>
                          <p className="text-slate-300 leading-relaxed text-[13px]">{exercise.technique}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Botones de Set Grandes */}
                  <div className="p-3 bg-slate-900/90 border-t border-slate-800 rounded-b-[24px]">
                    <div className="flex flex-col gap-3">
                      {progress[exercise.id] && Array.from({ length: exercise.sets }).map((_, idx) => {
                        const isCompleted = progress[exercise.id][idx];
                        return (
                          <button
                            key={idx}
                            onClick={(e) => toggleSet(exercise.id, idx, e)}
                            className={`w-full h-[72px] relative flex items-center justify-center rounded-[18px] transition-all duration-200 shadow-sm active:scale-[0.98] touch-manipulation overflow-hidden ${
                              isCompleted 
                                ? 'bg-emerald-500 text-slate-950 border-none shadow-emerald-500/30 shadow-lg' 
                                : 'bg-slate-800 text-slate-300 border-[1.5px] border-slate-700 active:bg-slate-700'
                            }`}
                          >
                            <div className="relative flex items-center justify-center gap-3">
                              {isCompleted ? (
                                <>
                                  <CheckCircle className="w-8 h-8 opacity-90" />
                                  <span className="text-xl font-black tracking-tight">HECHO</span>
                                </>
                              ) : (
                                <>
                                  <span className="text-xl font-bold text-slate-400 tracking-tight">SET {idx + 1}</span>
                                </>
                              )}
                            </div>
                            <div className={`absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider ${isCompleted ? 'bg-slate-900/30 text-slate-900' : 'bg-slate-900/60 text-slate-400'}`}>
                              {exercise.reps} Reps
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}