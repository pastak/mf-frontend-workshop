import { useState } from "react";
import { JournalData, JournalRow } from "./types/journal"

const createInitialData = () => ({
  id: crypto.randomUUID(),
  debitSubject: '',
  debitValue: 0,
  creditSubject: '',
  creditValue: 0,
});

export const useJournalData = (): Readonly<{
  data: JournalData,
  updateDataById: (id: string, newData: Partial<JournalRow>) => void;
  addRow: () => void;
}> => {
  const [data, setData] = useState<JournalData>([createInitialData()]);
  
  return {
    data,
    updateDataById: (id: string, newData: Partial<JournalRow>) => {
      setData(prev => prev.map((d) => d.id === id ? { ...d, ...newData } : d))
    },
    addRow: () => { setData((prev) => [...prev, createInitialData()]) }
  }
}
