import { useEffect, useState } from "react";
import { JournalRow } from "./types/journal";

type ItemsAPI = Readonly<string[]>

type RowProps = Readonly<{
  data: JournalRow
  update: (newData: JournalRow) => void
}>
export const Row: React.VFC<RowProps> = () => {
  const [items, setItems] = useState<ItemsAPI | undefined>(undefined);

  useEffect(() => {
    fetch('/api/items.json')
      .then((res) => res.json())
      .then((json: ItemsAPI) => {
        setItems(json);
      });
  }, []);

  return <div role="row">
    <select>{
      items?.map(item => <option value={item}>{item}</option>)
    }</select>
    <input type='number' />
    <select>{
      items?.map(item => <option value={item}>{item}</option>)
    }</select>
    <input type='number' />
  </div>
}
