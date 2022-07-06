import React, { useState } from 'react';
import { Checkbox, Grid, Button, Typography } from '@mui/material';
import './App.css';

const App = () => {
  const [value, setValue] = useState({
    firstValue: '',
    secondValue: '',
    thirdValue: '',
  });
  const [check, setCheck] = useState({
    first: false,
    second: false,
    third: false,
  });

  const [result, setResult] = useState(0);

  const checkValue = () => {
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

  const countResult = (type: string) => {
    let sumResult = 0;
    let arrayTemp: number[] = checkValue();
    if (type === 'tambah') {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      arrayTemp && arrayTemp.length !== 0
        ? arrayTemp.map((data) => (sumResult = sumResult + data))
        : null;
    } else if (type === 'kurang') {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      arrayTemp && arrayTemp.length !== 0
        ? arrayTemp.map((data) =>
            sumResult === 0
              ? (sumResult = data)
              : (sumResult = sumResult - data),
          )
        : null;
    } else if (type === 'bagi') {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      arrayTemp && arrayTemp.length !== 0
        ? arrayTemp.map((data) =>
            sumResult === 0
              ? (sumResult = data)
              : (sumResult = sumResult / data),
          )
        : null;
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      arrayTemp && arrayTemp.length !== 0
        ? arrayTemp.map((data) =>
            sumResult === 0
              ? (sumResult = data)
              : (sumResult = sumResult * data),
          )
        : null;
    }
    setResult(sumResult);
  };
  return (
    <div className="App">
      <header>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 20 }}
        >
          <input
            type="number"
            id="firstValue"
            name="firstValue"
            value={value.firstValue}
            onChange={(e: any) =>
              setValue({ ...value, firstValue: e.target.value })
            }
          />
          <Checkbox
            checked={check.first}
            onChange={(event) =>
              setCheck({ ...check, first: event.target.checked })
            }
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 20 }}
        >
          <input
            type="number"
            id="firstValue"
            name="firstValue"
            value={value.secondValue}
            onChange={(e: any) =>
              setValue({ ...value, secondValue: e.target.value })
            }
          />
          <Checkbox
            checked={check.second}
            onChange={(event) =>
              setCheck({ ...check, second: event.target.checked })
            }
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 20 }}
        >
          <input
            type="number"
            id="firstValue"
            name="firstValue"
            value={value.thirdValue}
            onChange={(e: any) =>
              setValue({ ...value, thirdValue: e.target.value })
            }
          />
          <Checkbox
            checked={check.third}
            onChange={(event) =>
              setCheck({ ...check, third: event.target.checked })
            }
          />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 20 }}
        >
          <Button
            variant="contained"
            style={{ marginRight: 5 }}
            onClick={() => countResult('tambah')}
          >
            +
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: 5 }}
            onClick={() => countResult('kurang')}
          >
            -
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: 5 }}
            onClick={() => countResult('kali')}
          >
            x
          </Button>
          <Button
            variant="contained"
            style={{ marginRight: 5 }}
            onClick={() => countResult('bagi')}
          >
            /
          </Button>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 20 }}
        >
          <div
            style={{
              marginTop: 5,
              height: 1,
              width: '20%',
              borderStyle: 'solid',
              borderWidth: 0.5,
              borderColor: '#ccc',
              alignSelf: 'stretch',
            }}
          ></div>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          style={{ marginBottom: 20 }}
        >
          <Typography variant="body1" style={{ marginRight: '10%' }}>
            Hasil:
          </Typography>
          <Typography variant="body1">{result}</Typography>
        </Grid>
      </header>
    </div>
  );
};

export default App;
