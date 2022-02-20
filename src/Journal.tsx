import { useJournalData } from "./journal-data";
import { Row } from "./Row";
import { Sum } from "./Sum";
import { JournalRow } from "./types/journal";

export const Journal = () => {
  const {data, updateDataById, addRow} = useJournalData();

  return <>{
    data.map((d) => {
      const update = (_data: Partial<JournalRow>) => updateDataById(d.id, _data)
      return <Row key={d.id} data={d} update={update} />
    })
  }
  <Sum data={data} />
  <button onClick={addRow}>行を追加</button>
  </>
}
