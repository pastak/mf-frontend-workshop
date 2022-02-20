import { screen, render, fireEvent } from "@testing-library/react";
import {Journal} from "./Journal";

jest.mock("./Row", () => ({
  Row: () => <div role="row"></div>
}));

test('「行を追加」ボタンをクリックすると1行増える', () => {
  render(<Journal />);
  const button = screen.getByText('行を追加');
  fireEvent.click(button);

  expect(screen.getAllByRole('row').length).toBe(2);
})
