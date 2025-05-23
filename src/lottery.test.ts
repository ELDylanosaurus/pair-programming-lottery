import { drawLottery, Draft } from "./lottery";

test("drawLottery returns valid extraNumbers", () => {
  const lotteryDraft: Draft = drawLottery();

  expect(lotteryDraft.extraNumber).toBeGreaterThanOrEqual(1);
  expect(lotteryDraft.extraNumber).toBeLessThanOrEqual(6);
});

test("drawLottery returns valid numbers", () => {
  const lotteryDraft: Draft = drawLottery();
  lotteryDraft.numbers.forEach(number => {
    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(42);
  });

  expect(lotteryDraft.numbers.length).toBe(6);
  
});

test("drawLottery does not return duplicate numbers", () => {
  const lotteryDraft: Draft = drawLottery();
 
  lotteryDraft.numbers.forEach(number => {
    expect(lotteryDraft.numbers.includes(number)).toBe(false)});
  
});