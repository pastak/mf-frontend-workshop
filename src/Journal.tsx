import { useState } from "react"
import { Row } from "./Row";
import { JournalData } from "./types/journal"

export const Journal = () => {
  const [data, setData] = useState<JournalData>([]);

  return <>{
    data.map((d) => <Row data={d} update={() => {/* 一旦空の関数を渡してごまかす */}} />)
  }</>
}
