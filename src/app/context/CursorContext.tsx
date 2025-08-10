// src/app/context/CursorContext.tsx
'use client';

import { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context's state
interface CursorContextType {
  isHovering: boolean;
  setIsHovering: (isHovering: boolean) => void;
}

// Create the context with a default value
const CursorContext = createContext<CursorContextType | undefined>(undefined);

// Create a provider component that will wrap our application
export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </CursorContext.Provider>
  );
}

// Create a custom hook for easy access to the context
export function useCursor() {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
}