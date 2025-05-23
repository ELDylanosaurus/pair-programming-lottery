export type Draft = {
  numbers: number[]; // [1..42]
  extraNumber: number; // [1..6]
};

export function drawLottery(): Draft {
  const numbers: number[] = [];
  const extraNumber: number = Math.floor(Math.random() * 6) + 1;

    while(numbers.length < 6){
      const randomNumber: number = Math.floor(Math.random() * 42) + 1;

      if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }

  return { numbers: numbers, extraNumber: extraNumber };
}
}

export function betInLottery(bet: Draft, draft: Draft): string {
  // TODO: compare bet against draft, return result
  return "";
}
