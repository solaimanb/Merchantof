'use client';

import { ThemeProvider, useTheme } from '@/providers/ThemeProvider';
import { ReactNode } from 'react';

const ThemedComponent: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div
      className={`${
        isDark ? 'bg-gray-950 text-white' : 'bg-white text-black'
      } transition duration-300 ease-in-out`}
    >
      {children}
    </div>
  );
};

const ClientThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <ThemedComponent>{children}</ThemedComponent>
    </ThemeProvider>
  );
};

export default ClientThemeProvider;
