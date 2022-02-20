import { JournalData, JournalRow } from "./types/journal"

export const useJournalData = (): Readonly<{
  data: JournalData,
  updateDataById: (id: string, newData: Partial<JournalRow>) => void;
  addRow: () => void;
}> => {
  return {
    data: [],
    updateDataById: (id: string, newData: Partial<JournalRow>) => {},
    addRow: () => {}
  }
}
