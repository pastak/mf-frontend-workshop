export type JournalRow = Readonly<{
  id: string,
  debitSubject: string,
  debitValue: number
  creditSubject: string,
  creditValue: number,
}>

export type JournalData = Readonly<JournalRow[]>
