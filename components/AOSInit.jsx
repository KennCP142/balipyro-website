'use client';

import { useEffect } from 'react';

export default function AOSInit() {
  useEffect(() => {
    // Dynamically import AOS
    import('aos').then((AOS) => {
      AOS.init({
        duration: 600,
        once: false,
      });
    });
  }, []);

  return null;
}
