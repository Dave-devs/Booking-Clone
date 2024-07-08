// context/DateContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Dates {
    startDate: string | null;
    endDate: string | null;
}

interface DateContextType {
    selectedDates: Dates;
    setSelectedDates: React.Dispatch<React.SetStateAction<Dates>>;
}

const DateContext = createContext<DateContextType | undefined>(undefined);

export const DateProvider = ({ children }: { children: ReactNode }) => {
    const [selectedDates, setSelectedDates] = useState<Dates>({ startDate: null, endDate: null });

    return (
        <DateContext.Provider value={{ selectedDates, setSelectedDates }}>
            {children}
        </DateContext.Provider>
    );
};

export const useDateContext = (): DateContextType => {
    const context = useContext(DateContext);
    if (!context) {
        throw new Error('useDateContext must be used within a DateProvider');
    }
    return context;
};
