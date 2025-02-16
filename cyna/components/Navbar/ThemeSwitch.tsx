'use client'
import { useEffect, useState } from 'react';

const ThemeSwitch = () => {
  const [theme, setTheme] = useState('');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-3 bg-gray-200 rounded-full dark:bg-gray-700 transition-all"
      aria-label="Toggle theme"
    >
      <span className="text-2xl">{theme === 'light' ? '🌞' : '🌙'}</span>
    </button>
  );
};

export default ThemeSwitch;
