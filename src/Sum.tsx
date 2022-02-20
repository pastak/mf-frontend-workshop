import { JournalData } from "./types/journal"

type SumProps = Readonly<{
  data: JournalData
}>
export const Sum: React.VFC<SumProps> = ({data}) => {
  const debit = data.reduce((sum, d) => sum + d.debitValue, 0);
  const credit = data.reduce((sum, d) => sum + d.creditValue, 0);
  return <div role="row">
    借方の合計 {debit}円<br/>
    貸方の合計 {credit}円<br/>
    {
      debit !== credit ?
        <span style={{color: 'red'}}>
          {debit > credit ? "貸方" : "借方"}の不足額: {Math.abs(debit - credit)}円
        </span>
        : null
    }
  </div>
}
