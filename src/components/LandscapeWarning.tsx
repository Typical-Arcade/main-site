import { useEffect } from 'react';

export default function LandscapeWarning() {
  function handleOrientationChange() {
    const {
      orientation: { angle },
    } = window.screen;

    if (angle === 90 || angle === -90) {
      alert('Please use portrait mode.');
    }
  }

  useEffect(() => {
    handleOrientationChange();

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return null;
}
