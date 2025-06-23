'use client';

import { useEffect } from 'react';
import useDarkModeStore from '@/store/DarkMode';

export default function DarkModeProvider() {
  const { isDarkMode } = useDarkModeStore();

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add('dark'); // Add 'dark' class for dark mode
    } else {
      htmlElement.classList.remove('dark'); // Remove 'dark' class for light mode
    }
  }, [isDarkMode]);

  return null; // This component doesn't render anything
}