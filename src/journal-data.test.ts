import { renderHook } from '@testing-library/react-hooks'
import { act } from 'react-dom/test-utils';
import { useJournalData } from './journal-data';

test('updateDateByIdで特定のデータを更新できる', () => {
  const {result} = renderHook(useJournalData);
  act(() => {
    result.current.addRow();
    result.current.addRow();
    result.current.addRow();
    result.current.addRow();
  })
  const id = result.current.data[2].id;
  act(() => {
    result.current.updateDataById(id, {debitValue: 100});
  });
  expect(result.current.data[2]).toEqual(
    expect.objectContaining({debitValue: 100})
  )
  act(() => {
    result.current.updateDataById(id, {debitSubject: 'test',debitValue: 200});
  })
  expect(result.current.data[2]).toEqual(
    expect.objectContaining({debitSubject: 'test',debitValue: 200})
  )
})
