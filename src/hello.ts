export function getHello(): string {
  const hello: string = "hello";
  const there: string = "there";
  const space: string = " ";

  const random = Math.ceil(Math.random() * 10000);
  const output: string = hello + space + there + space
       + sums(random) + space + countFactors(random * 10);

  return output;
}

function sums(count: number): number {
  let sums: Array<number> = [];

  for (let i: number = 0; i < count; i++) {
    sums[i] = 0;
    for (let j: number = 0; j < i; j++) {
      sums[i] += j;
    }
  }

  return sums[count - 1];
}

function countFactors(product: number): number {
  let factors: Array<number> = [];
  for (let factor = 1; factor <= product; factor++) {
    if (product % factor == 0) {
      factors.push(factor);
    }
  }

  return factors.length;
}
