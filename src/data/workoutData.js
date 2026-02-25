export const gymExercises = {
  pecho: [
    { 
      id: 'p1', 
      name: 'Press de Banca Plano', 
      sets: 4, 
      reps: 8, 
      category: 'Pecho Medio', 
      difficulty: 'Intermedio',
      exactMachine: 'Banco Plano + Barra Olímpica', 
      machineSetup: 'Asegura los discos con seguros. Acomoda tus ojos directamente debajo de la barra.', 
      technique: 'Baja la barra controlado hasta tocar la línea media del pecho. Sube explosivo sin bloquear los codos.', 
      Animation: 'MachineBenchPress' 
    },
    { 
      id: 'p2', 
      name: 'Press Inclinado con Mancuernas', 
      sets: 3, 
      reps: 10, 
      category: 'Pecho Superior', 
      difficulty: 'Intermedio',
      exactMachine: 'Banco Inclinado (30°-45°)', 
      machineSetup: 'Eleva el respaldo a 30 o 45 grados. Sube el asiento pequeño para evitar deslizarte.', 
      technique: 'Baja las mancuernas a los lados del pecho superior estirando bien. Empuja hacia arriba y al centro.', 
      Animation: 'MachineInclineDB' 
    },
    { 
      id: 'p3', 
      name: 'Cruce de Poleas (Crossover)', 
      sets: 3, 
      reps: 15, 
      category: 'Pecho General', 
      difficulty: 'Principiante',
      exactMachine: 'Torre de Poleas (Doble)', 
      machineSetup: 'Poleas en la posición más alta. Agarre de estribo en ambas manos.', 
      technique: 'Da un paso al frente, inclina el torso y lleva las manos hacia el centro y abajo, apretando el pecho al final.', 
      Animation: 'MachineCableCrossover' 
    },
    { 
      id: 'p4', 
      name: 'Fondos en Paralelas (Dips)', 
      sets: 3, 
      reps: 'Fallo', 
      category: 'Pecho Inferior', 
      difficulty: 'Avanzado',
      exactMachine: 'Barras Paralelas', 
      machineSetup: 'Usa cinturón con lastre si es necesario, o máquina asistida si eres principiante.', 
      technique: 'Inclina el torso hacia adelante para enfocar en pecho. Baja hasta que el hombro pase el codo.', 
      Animation: 'MachineDips' 
    },
    { 
      id: 'p5', 
      name: 'Aperturas en Máquina (Pec Deck)', 
      sets: 3, 
      reps: 12, 
      category: 'Pecho Aislamiento', 
      difficulty: 'Principiante',
      exactMachine: 'Máquina Pec Deck', 
      machineSetup: 'Ajusta el asiento para que los codos queden a la altura de los hombros.', 
      technique: 'Junta los brazos frente a ti imaginando abrazar un árbol. Abre controladamente sin dejar caer el peso.', 
      Animation: 'MachinePecDeck' 
    }
  ],

  espalda: [
    { 
      id: 'e1', 
      name: 'Dominadas (Pull-ups)', 
      sets: 4, 
      reps: 'Fallo', 
      category: 'Dorsales', 
      difficulty: 'Avanzado',
      exactMachine: 'Barra de Dominadas', 
      machineSetup: 'Barra fija alta. Usa banda elástica en los pies si no puedes subir solo.', 
      technique: 'Agarre prono (palmas al frente). Sube hasta pasar la barbilla por encima de la barra. Baja lento y controlado.', 
      Animation: 'MachinePullUp' 
    },
    { 
      id: 'e2', 
      name: 'Remo con Barra (Bent Over Row)', 
      sets: 4, 
      reps: 8, 
      category: 'Espalda Grosor', 
      difficulty: 'Avanzado',
      exactMachine: 'Barra Olímpica', 
      machineSetup: 'Barra en el suelo. Pies a la anchura de hombros.', 
      technique: 'Espalda recta casi paralela al suelo. Tira la barra hacia la cadera/ombligo apretando escápulas.', 
      Animation: 'MachineBarbellRow' 
    },
    { 
      id: 'e3', 
      name: 'Jalón al Pecho Agarre Neutro', 
      sets: 3, 
      reps: 12, 
      category: 'Dorsales', 
      difficulty: 'Principiante',
      exactMachine: 'Máquina Lat Pulldown', 
      machineSetup: 'Usa el agarre triángulo (V-bar). Ajusta rodillos para bloquear piernas.', 
      technique: 'Lleva el agarre al pecho superior, sacando el pecho y llevando codos hacia abajo.', 
      Animation: 'MachineLatPulldown' 
    },
    { 
      id: 'e4', 
      name: 'Remo Unilateral con Mancuerna', 
      sets: 3, 
      reps: 10, 
      category: 'Dorsal Bajo', 
      difficulty: 'Intermedio',
      exactMachine: 'Banco Plano + Mancuerna', 
      machineSetup: 'Apoya rodilla y mano del mismo lado en el banco.', 
      technique: 'Espalda plana. Tira la mancuerna hacia tu bolsillo trasero simulando arrancar una motosierra.', 
      Animation: 'MachineDumbbellRow' 
    },
    { 
      id: 'e5', 
      name: 'Pull-over en Polea Alta', 
      sets: 3, 
      reps: 15, 
      category: 'Dorsal Aislamiento', 
      difficulty: 'Intermedio',
      exactMachine: 'Polea Alta + Barra Recta', 
      machineSetup: 'Polea arriba del todo. Da unos pasos atrás con el torso inclinado.', 
      technique: 'Brazos casi rectos. Baja la barra desde la altura de los ojos hasta tus muslos usando solo dorsales.', 
      Animation: 'MachineCablePullover' 
    }
  ],

  pierna: [
    { 
      id: 'pi1', 
      name: 'Sentadilla Libre (Squat)', 
      sets: 4, 
      reps: 6, 
      category: 'Cuádriceps/Glúteo', 
      difficulty: 'Avanzado',
      exactMachine: 'Rack de Sentadillas + Barra', 
      machineSetup: 'Barra a la altura del pecho superior. Seguros de seguridad puestos.', 
      technique: 'Pies ancho de hombros. Baja cadera atrás y abajo manteniendo el pecho arriba. Rompe el paralelo.', 
      Animation: 'MachineSquat' 
    },
    { 
      id: 'pi2', 
      name: 'Prensa Inclinada (Leg Press)', 
      sets: 3, 
      reps: 12, 
      category: 'Cuádriceps', 
      difficulty: 'Principiante',
      exactMachine: 'Máquina Prensa 45°', 
      machineSetup: 'Carga los discos. Pies en el centro de la plataforma, anchura de hombros.', 
      technique: 'Baja hasta que las rodillas se acerquen al pecho sin levantar la cadera del asiento. Empuja con talones.', 
      Animation: 'MachineLegPress' 
    },
    { 
      id: 'pi3', 
      name: 'Peso Muerto Rumano', 
      sets: 3, 
      reps: 10, 
      category: 'Isquios/Glúteo', 
      difficulty: 'Intermedio',
      exactMachine: 'Barra Olímpica o Mancuernas', 
      machineSetup: 'Saca la barra del rack o levántala del suelo con espalda recta.', 
      technique: 'Rodillas semi-flexionadas fijas. Empuja la cadera hacia atrás deslizando la barra por las piernas hasta sentir estirón.', 
      Animation: 'MachineRDL' 
    },
    { 
      id: 'pi4', 
      name: 'Zancadas (Lunges)', 
      sets: 3, 
      reps: 10, 
      note: '10 repeticiones por pierna',
      category: 'Glúteo/Cuádriceps', 
      difficulty: 'Intermedio',
      exactMachine: 'Mancuernas', 
      machineSetup: 'Espacio libre para caminar. Mancuernas a los lados.', 
      technique: 'Da un paso largo. Baja la rodilla trasera casi al suelo manteniendo el torso vertical.', 
      Animation: 'MachineLunges' 
    },
    { 
      id: 'pi5', 
      name: 'Curl de Isquios Tumbado', 
      sets: 3, 
      reps: 12, 
      category: 'Isquios', 
      difficulty: 'Principiante',
      exactMachine: 'Máquina de Curl Femoral', 
      machineSetup: 'Ajusta el rodillo para que quede sobre tus talones (tendón de Aquiles).', 
      technique: 'Lleva los talones hacia tus glúteos contrayendo fuerte. Baja controlando el peso.', 
      Animation: 'MachineLegCurl' 
    },
    { 
      id: 'pi6', 
      name: 'Elevación de Talones', 
      sets: 4, 
      reps: 20, 
      category: 'Pantorrilla', 
      difficulty: 'Principiante',
      exactMachine: 'Máquina de Pantorrilla de Pie', 
      machineSetup: 'Hombros bajo las almohadillas. Pies sobre el escalón.', 
      technique: 'Baja el talón lo máximo posible para estirar y sube explosivo hasta la punta de los pies.', 
      Animation: 'MachineCalfRaise' 
    }
  ],

  hombro: [
    { 
      id: 'h1', 
      name: 'Press Militar con Barra', 
      sets: 4, 
      reps: 8, 
      category: 'Hombro Anterior', 
      difficulty: 'Avanzado',
      exactMachine: 'Barra Olímpica (De pie)', 
      machineSetup: 'Barra en rack a altura del pecho.', 
      technique: 'Abdomen tenso. Empuja la barra verticalmente hasta bloquear arriba pasando la cabeza por debajo.', 
      Animation: 'MachineOverheadPress' 
    },
    { 
      id: 'h2', 
      name: 'Elevaciones Laterales', 
      sets: 3, 
      reps: 15, 
      category: 'Hombro Lateral', 
      difficulty: 'Intermedio',
      exactMachine: 'Mancuernas', 
      machineSetup: 'De pie, mancuernas ligeras a los lados.', 
      technique: 'Eleva los brazos hacia los lados hasta la altura de los hombros, codos ligeramente flexionados.', 
      Animation: 'MachineLateralRaise' 
    },
    { 
      id: 'h3', 
      name: 'Face Pull', 
      sets: 3, 
      reps: 15, 
      category: 'Hombro Posterior', 
      difficulty: 'Principiante',
      exactMachine: 'Polea Alta + Cuerda', 
      machineSetup: 'Polea a la altura de la frente con cuerda.', 
      technique: 'Tira de la cuerda hacia tu frente, separando las manos y rotando hombros hacia atrás.', 
      Animation: 'MachineFacePull' 
    }
  ],

  brazo: [
    { 
      id: 'b1', 
      name: 'Curl con Barra Z', 
      sets: 3, 
      reps: 10, 
      category: 'Bíceps', 
      difficulty: 'Principiante',
      exactMachine: 'Barra Z', 
      machineSetup: 'Carga discos en barra ondulada.', 
      technique: 'Codos pegados al cuerpo. Sube la barra sin columpiar la espalda. Aprieta arriba.', 
      Animation: 'MachineBarbellCurl' 
    },
    { 
      id: 'b2', 
      name: 'Curl Martillo', 
      sets: 3, 
      reps: 10, 
      category: 'Braquial/Antebrazo', 
      difficulty: 'Principiante',
      exactMachine: 'Mancuernas', 
      machineSetup: 'De pie con mancuernas a los lados.', 
      technique: 'Palmas mirándose entre sí (agarre neutro). Sube la mancuerna hacia el hombro.', 
      Animation: 'MachineHammerCurl' 
    },
    { 
      id: 'b3', 
      name: 'Rompecráneos (Skullcrushers)', 
      sets: 3, 
      reps: 10, 
      category: 'Tríceps', 
      difficulty: 'Intermedio',
      exactMachine: 'Barra Z + Banco Plano', 
      machineSetup: 'Tumbado boca arriba. Barra sobre el pecho.', 
      technique: 'Dobla solo los codos llevando la barra a la frente y extiende hacia arriba.', 
      Animation: 'MachineSkullCrusher' 
    },
    { 
      id: 'b4', 
      name: 'Extensión de Tríceps en Polea', 
      sets: 3, 
      reps: 12, 
      category: 'Tríceps', 
      difficulty: 'Principiante',
      exactMachine: 'Polea Alta + Cuerda', 
      machineSetup: 'Polea arriba. Agarre de cuerda.', 
      technique: 'Codos pegados al cuerpo. Abre la cuerda al bajar extendiendo el brazo completamente.', 
      Animation: 'MachineTricepPushdown' 
    }
  ],

  abdomen: [
    { 
      id: 'a1', 
      name: 'Plancha Abdominal (Plank)', 
      sets: 3, 
      reps: '60 seg', 
      category: 'Core Estabilidad', 
      difficulty: 'Principiante',
      exactMachine: 'Suelo / Mat', 
      machineSetup: 'Colchoneta en el suelo.', 
      technique: 'Apoya antebrazos y puntas de pies. Cuerpo recto como una tabla. Aprieta glúteo y abdomen fuerte.', 
      Animation: 'MachinePlank' 
    },
    { 
      id: 'a2', 
      name: 'Elevación de Piernas Colgado', 
      sets: 3, 
      reps: 12, 
      category: 'Abdomen Inferior', 
      difficulty: 'Avanzado',
      exactMachine: 'Barra de Dominadas', 
      machineSetup: 'Cuelga de la barra.', 
      technique: 'Eleva las piernas rectas o rodillas hacia el pecho enrollando la pelvis hacia arriba.', 
      Animation: 'MachineHangingLegRaise' 
    },
    { 
      id: 'a3', 
      name: 'Crunch en Polea Alta', 
      sets: 3, 
      reps: 15, 
      category: 'Abdomen Superior', 
      difficulty: 'Intermedio',
      exactMachine: 'Polea Alta + Cuerda', 
      machineSetup: 'De rodillas frente a la polea. Cuerda detrás del cuello.', 
      technique: 'Dobla el torso hacia el suelo intentando llevar la cabeza a las rodillas usando el abdomen, no la cadera.', 
      Animation: 'MachineCableCrunch' 
    }
  ]
};