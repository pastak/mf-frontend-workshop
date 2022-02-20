import { useState } from "react"
import { Row } from "./Row";
import { JournalData } from "./types/journal"

const createInitialData = () => ({
  debitSubject: '',
  debitValue: 0,
  creditSubject: '',
  creditValue: 0,
});

export const Journal = () => {
  const [data, setData] = useState<JournalData>([createInitialData()]);

  return <>{
    data.map((d) => <Row data={d} update={() => {/* 一旦空の関数を渡してごまかす */}} />)
  }</>
}