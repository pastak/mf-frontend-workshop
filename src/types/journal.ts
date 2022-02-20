export type JournalRow = Readonly<{
  debitSubject: string,
  debitValue: number
  creditSubject: string,
  creditValue: number,
}>

export type JournalData = Readonly<JournalRow[]>
