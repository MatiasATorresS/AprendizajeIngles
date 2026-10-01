# Protocolo de evaluación de la plataforma

**Estado:** propuesta previa a la recogida de datos. Requiere revisión del docente y autorización del establecimiento. No se han realizado pruebas con estudiantes ni se dispone de resultados.

## Pregunta, objetivo e hipótesis

**Pregunta:** ¿Cómo cambia el desempeño en los contenidos gramaticales seleccionados después de utilizar la plataforma durante un período definido?

**Objetivo principal:** describir el cambio individual y grupal en una prueba de inglés revisada por el docente. **Hipótesis de trabajo:** el puntaje promedio final será mayor que el inicial. El diseño antes/después sin grupo de comparación permite observar cambios, pero no atribuirlos por sí solo a la plataforma.

## Diseño propuesto

| Decisión | Propuesta para revisión |
| --- | --- |
| Participantes | Un curso de primer año de enseñanza media; muestreo por conveniencia. Registrar número invitado, consentimientos y participantes con ambas pruebas. |
| Contenidos | *Simple Past* y *Present Perfect*. Si el docente elige otros, actualizar las dos pruebas antes de aplicarlas. |
| Duración | Cuatro semanas, dos sesiones semanales de 20 minutos. Registrar asistencia y cambios de calendario. |
| Medición | Prueba inicial antes del primer uso y prueba final al terminar la cuarta semana. Usar formularios distintos con la misma tabla de especificaciones. |
| Uso de la plataforma | Lecciones y ejercicios de los contenidos elegidos. Las preguntas generadas son práctica; no sustituyen la prueba docente. |
| Comparación opcional | Un curso semejante que siga la enseñanza habitual. Si se incorpora, definir de antemano el criterio de asignación y describir las diferencias iniciales. |

La cantidad de estudiantes y la duración son parámetros propuestos, no hechos observados. Si el establecimiento no puede cumplirlos, documentar el cambio **antes** de iniciar la evaluación.

## Instrumentos

Se incluyen [borradores de dos formularios](pruebas-borrador.md) de 20 preguntas de selección múltiple, cada uno con 10 preguntas de *Simple Past* y 10 de *Present Perfect*. En cada contenido, distribuir 5 preguntas de reconocimiento de forma y 5 de uso en contexto. Cada ítem tendrá cuatro alternativas y una clave única. Asignar 1 punto por respuesta correcta, 0 por incorrecta u omitida; máximo 20 puntos. El docente debe revisar ambas formas con la [ficha de revisión](ficha-revision-docente.md) y comprobar que cubren los mismos objetivos y dificultad comparable. No repetir exactamente los ítems entre pruebas.

Aplicar después de la prueba final una encuesta breve y voluntaria de utilidad y facilidad de uso, con escala de 1 a 5 y una pregunta abierta. Sus respuestas describen experiencia de uso, no aprendizaje demostrado.

## Variables y registro

Usar un identificador seudónimo estable por estudiante. Mantener la correspondencia entre código e identidad fuera del repositorio y separada de los datos de análisis.

| Variable | Definición |
| --- | --- |
| `participant_id` | Código seudónimo; nunca nombre ni correo. |
| `pre_score`, `post_score` | Enteros de 0 a 20 según las claves revisadas por el docente. Vacío si no rindió la prueba. |
| `sessions_attended` | Número de sesiones presenciales o supervisadas completadas, de 0 a 8. |
| `exercises_completed` | Cantidad de ejercicios guardados en la plataforma durante el período. |
| `usability_rating` | Respuesta de 1 a 5 a «La plataforma fue fácil de usar»; vacío si no respondió. |
| `usefulness_rating` | Respuesta de 1 a 5 a «La práctica me ayudó a comprender los contenidos»; percepción, no medida de aprendizaje. |

Registrar por separado fecha, versión de cada instrumento, incidencias técnicas y cambios en la enseñanza habitual. Los puntajes internos de ejercicios sirven para describir uso; las pruebas docentes son la medida principal de desempeño.

## Análisis fijado antes de recoger datos

1. Informar cuántos estudiantes fueron invitados, aceptaron participar, rindieron cada prueba y tienen un par completo. No reemplazar datos faltantes por cero.
2. Para cada estudiante con ambas pruebas, calcular `cambio = post_score - pre_score` y `cambio_porcentual = cambio / 20 × 100` puntos porcentuales.
3. Informar media, mediana y rango de puntajes iniciales, finales y cambios; mostrar también el cambio individual sin nombres.
4. Describir por separado asistencia, ejercicios completados e incidencias. No interpretar correlaciones entre uso y mejora como causalidad.
5. Si se incorpora un grupo de comparación, informar resultados de ambos grupos y diferencias iniciales antes de cualquier contraste; acordar con asesoría metodológica el análisis inferencial adecuado.
6. Declarar pérdidas de seguimiento, tamaño muestral pequeño, diferencias entre formularios, enseñanza simultánea y posibles errores de ejercicios generados.

## Privacidad y condiciones de inicio

Antes de invitar estudiantes, obtener las autorizaciones exigidas por el establecimiento para menores de edad, definir quién puede ver los datos y el plazo de conservación, y revisar el tratamiento de datos enviado al proveedor de IA. Exportar para análisis solo códigos y variables necesarias; no guardar datos identificables ni claves de respuestas en Git.

Hacer primero un piloto técnico pequeño. Verificar acceso por rol, corrección docente de preguntas, inicio de sesión, generación y guardado de resultados. La sesión actual usa el almacén en memoria de Express: posponer su sustitución por uno persistente hasta la fase final acordada, pero no iniciar una evaluación con reinicios frecuentes o varias instancias sin resolverlo y probarlo.
