import { useState } from "react"
import { Row } from "./Row";
import { JournalData } from "./types/journal"

const createInitialData = () => ({
  id: crypto.randomUUID(),
  debitSubject: '',
  debitValue: 0,
  creditSubject: '',
  creditValue: 0,
});

export const Journal = () => {
  const [data, setData] = useState<JournalData>([createInitialData()]);

  const addRow = () => {
    setData((prev) => [...prev, createInitialData()])
  }

  return <>{
    data.map((d) => <Row key={d.id} data={d} update={() => {/* 一旦空の関数を渡してごまかす */}} />)
  }
  <button onClick={addRow}>行を追加</button>
  </>
}
