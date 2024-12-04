'use client';

import { createContext, useState } from 'react';

export const DiaryContext = createContext();

export const DiaryProvider = ({ children }) => {
    const [diaryList, setDiaryList] = useState([]);

    const addDiary = (newDiary) => {
        setDiaryList((prev) => [...prev, newDiary]);
    };

    return <DiaryContext.Provider value={{ diaryList, addDiary }}>{children}</DiaryContext.Provider>;
};
