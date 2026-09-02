import { useEffect } from 'react';

const DEFAULT_DESCRIPTION =
  'Plataforma gratuita de aprendizaje de inglés para estudiantes de secundaria: lecciones por unidades, ejercicios personalizados con IA y seguimiento de progreso.';

/**
 * Actualiza document.title y la meta description de la página.
 * Facilita las señales SEO de cada ruta sin dependencias extra.
 */
export default function useDocumentMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', description);
  }, [title, description]);
}