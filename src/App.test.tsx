import React from 'react';

const checkValue = (check: any, value: any) => {
  let tempData: number[] = [];
  if (check.first) {
    tempData.push(parseInt(value.firstValue) ?? 0);
  }
  if (check.second) {
    tempData.push(parseInt(value.secondValue) ?? 0);
  }
  if (check.third) {
    tempData.push(parseInt(value.thirdValue) ?? 0);
  }
  return tempData;
};

const countResult = (type: string, value: any, check: any) => {
  let sumResult = 0;
  let arrayTemp: number[] = checkValue(check, value);
  if (type === 'tambah') {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arrayTemp && arrayTemp.length !== 0
      ? arrayTemp.map((data) => (sumResult = sumResult + data))
      : null;
  } else if (type === 'kurang') {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arrayTemp && arrayTemp.length !== 0
      ? arrayTemp.map((data) =>
          sumResult === 0 ? (sumResult = data) : (sumResult = sumResult - data),
        )
      : null;
  } else if (type === 'bagi') {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arrayTemp && arrayTemp.length !== 0
      ? arrayTemp.map((data) =>
          sumResult === 0 ? (sumResult = data) : (sumResult = sumResult / data),
        )
      : null;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    arrayTemp && arrayTemp.length !== 0
      ? arrayTemp.map((data) =>
          sumResult === 0 ? (sumResult = data) : (sumResult = sumResult * data),
        )
      : null;
  }
  return sumResult;
};

const value = {
  firstValue: 100,
  secondValue: 10,
  thirdValue: 1000,
};

const check = {
  first: true,
  second: false,
  third: true,
};

test('testing pertama', () => {
  expect(checkValue(check, value)).toStrictEqual([100, 1000]);
});

test('testing', () => {
  expect(countResult('tambah', value, check)).toBe(1100);
});
