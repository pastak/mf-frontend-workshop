import React, { useEffect, useState } from "react";
import { JournalRow } from "./types/journal";

type ItemsAPI = Readonly<string[]>

type RowProps = Readonly<{
  data: JournalRow
  update: (newData: Partial<JournalRow>) => void
}>
export const Row: React.VFC<RowProps> = ({ data, update }) => {
  const [items, setItems] = useState<ItemsAPI | undefined>(undefined);

  useEffect(() => {
    fetch('/api/items.json')
      .then((res) => res.json())
      .then((json: ItemsAPI) => {
        setItems(json);
      });
  }, []);

  return <div role="row">
    <select onChange={(e: React.SyntheticEvent<HTMLSelectElement>) => update({
      debitSubject: e.currentTarget.value
    })} defaultValue={data.debitSubject}>{
      items?.map(item => <option value={item}>{item}</option>)
    }</select>
    <input type='number' onChange={(e: React.SyntheticEvent<HTMLInputElement>) => update({
      debitValue: e.currentTarget.valueAsNumber
    })} defaultValue={data.debitValue}/>
    <select onChange={(e: React.SyntheticEvent<HTMLSelectElement>) => update({
      creditSubject: e.currentTarget.value
    })} defaultValue={data.creditSubject}>{
      items?.map(item => <option value={item}>{item}</option>)
    }</select>
    <input type='number' onChange={(e: React.SyntheticEvent<HTMLInputElement>) => update({
      creditValue: e.currentTarget.valueAsNumber
    })} defaultValue={data.creditValue} />
  </div>
}
