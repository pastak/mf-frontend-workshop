import { JournalRow } from "./types/journal";

type RowProps = Readonly<{
  data: JournalRow
  update: (newData: JournalRow) => void
}>
export const Row: React.VFC<RowProps> = () => {

  return <div>
    <select>{/* ここに課目が並ぶ */}</select>
    <input type='number' />
    <select>{/* ここに課目が並ぶ */}</select>
    <input type='number' />
  </div>
}
