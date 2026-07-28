import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // Set initial value
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Define listener callback
    const listener = () => setMatches(media.matches);
    
    // Listen for updates
    media.addEventListener('change', listener);
    
    // Clean up listener on unmount
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
}
 