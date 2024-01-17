import { useEffect } from 'react';

export default function PreventDragToReload() {
  const removeDragToReload = (e: TouchEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    window.addEventListener('touchmove', removeDragToReload, { passive: false });

    return () => {
      window.removeEventListener('touchmove', removeDragToReload);
    };
  }, []);

  return null;
}