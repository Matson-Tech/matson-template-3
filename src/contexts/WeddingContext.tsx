
import { createContext } from 'react';
import type { WeddingContextType } from './WeddingProvider';

export const WeddingContext = createContext<WeddingContextType | undefined>(undefined);
