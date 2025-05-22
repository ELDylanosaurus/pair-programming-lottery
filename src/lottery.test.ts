import { drawLottery, betInLottery, Draft } from "./lottery";

test("drawLottery returns valid numbers", () => {
  const lotteryDraft: Draft = drawLottery();
  expect(lotteryDraft.numbers.length).toBe(42);
  expect(lotteryDraft.extraNumber).toBeGreaterThanOrEqual(1);
  expect(lotteryDraft.extraNumber).toBeLessThanOrEqual(6);
  expect(lotteryDraft.numbers).toBeGreaterThanOrEqual(1);
  expect(lotteryDraft.numbers).toBeLessThanOrEqual(42);



});
