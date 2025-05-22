export type Draft = {
  numbers: number[]; // [1..42]
  extraNumber: number; // [1..6]
};

export function drawLottery(): Draft {
  const numbers: number[] = [];
  const extraNumber: number = 0;

    while(numbers.length > 6){
      const Temp =  0
    }

  return { numbers: [], extraNumber: -1 };
}

export function betInLottery(bet: Draft, draft: Draft): string {
  // TODO: compare bet against draft, return result
  return "";
}
