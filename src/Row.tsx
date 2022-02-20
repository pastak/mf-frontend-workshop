import { JournalRow } from "./types/journal";

type RowProps = Readonly<{
  data: JournalRow
  update: (newData: JournalRow) => void
}>
export const Row: React.VFC<RowProps> = () => null; //一旦中身無いので、nullを返しておく
