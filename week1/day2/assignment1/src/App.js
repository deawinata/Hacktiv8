import React, {useState} from 'react';
import {Typography, Button, Card, Grid} from "@mui/material";

export default function App() {

    const [calc, setCalc] = useState({
        operator: '',
        num: 0,
        total: 0
    })

    const toLocaleString = (num) =>
        String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

    const removeSpaces = (num) => num.toString().replace(/\s/g, "");

    const numClickHandler = (e) => {
        if (removeSpaces(calc.num).length < 16) {
            setCalc({
                ...calc,
                num:
                    calc.num === 0 && e === "0"
                        ? "0"
                        : removeSpaces(calc.num) % 1 === 0
                            ? toLocaleString(Number(removeSpaces(calc.num + e)))
                            : toLocaleString(calc.num + e),
                res: !calc.sign ? 0 : calc.res,
            });
        }
    };

    const commaClickHandler = (e) => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes(".") ? calc.num + e : calc.num,
        });
    };

    const signClickHandler = (e) => {
        setCalc({
            ...calc,
            sign: e,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0,
        });
    };

    const equalsClickHandler = () => {
        if (calc.sign && calc.num) {
            const math = (a, b, sign) =>
                sign === "+"
                    ? a + b
                    : sign === "-"
                        ? a - b
                        : sign === "*"
                            ? a * b
                            : a / b;

            setCalc({
                ...calc,
                res:
                    calc.num === "0" && calc.sign === "/"
                        ? "Can't divide with 0"
                        : toLocaleString(
                            math(
                                Number(removeSpaces(calc.res)),
                                Number(removeSpaces(calc.num)),
                                calc.sign
                            )
                        ),
                sign: "",
                num: 0,
            });
        }
    };

    const resetClickHandler = () => {
        setCalc({
            ...calc,
            sign: "",
            num: 0,
            res: 0,
        });
    };

    return (
        <Grid align={'center'}>
            <Typography variant={'h4'} mt={3}>ONLINE CALCULATOR</Typography>
            <Grid container direction={'column'} alignItems={'center'} style={{marginTop: 10, width: 350}}>
                <Card style={{backgroundColor: 'lightgrey', padding: 10}}>
                    <Grid container direction={'column'} alignItems={'flex-end'}>
                        <Typography>{calc.num ? calc.num : calc.res ? calc.res : 0}</Typography>
                    </Grid>
                    <Grid container direction={'row'} style={{marginBottom: 10, marginTop: 10}}>
                        <Button variant="contained" onClick={() => resetClickHandler()}>AC</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => resetClickHandler()}>CE</Button>
                        <Button  variant="contained" style={{marginLeft: 10}}
                                onClick={() => signClickHandler('/')}>/</Button>
                        <Button  variant="contained" style={{marginLeft: 10}}
                                onClick={() => signClickHandler('*')}>*</Button>
                    </Grid>
                    <Grid container direction={'row'} style={{marginBottom: 10}}>
                        <Button variant="contained" onClick={() => numClickHandler(7)}>7</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => numClickHandler(8)}>8</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => numClickHandler(9)}>9</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => signClickHandler('-')}>-</Button>
                    </Grid>
                    <Grid container direction={'row'} style={{marginBottom: 10}}>
                        <Button variant="contained" onClick={() => numClickHandler(4)}>4</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => numClickHandler(5)}>5</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => numClickHandler(6)}>6</Button>
                        <Button variant="contained" style={{marginLeft: 10}} onClick={() => signClickHandler('+')}>+</Button>
                    </Grid>
                    <Grid container direction={'row'}>
                        <Grid>
                            <Grid container direction={'row'} justifyContent={'start'} style={{marginBottom: 10}}>
                                <Button variant="contained" onClick={() => numClickHandler(1)}>1</Button>
                                <Button variant="contained" style={{marginLeft: 10}} onClick={() => numClickHandler(2)}>2</Button>
                                <Button variant="contained" style={{marginLeft: 10}} onClick={() => numClickHandler(3)}>3</Button>
                            </Grid>
                            <Grid container direction={'row'} style={{marginBottom: 10}}>
                                <Button variant="contained" style={{width: 140}} onClick={() => numClickHandler(0)}>0</Button>
                                <Button  variant="contained" style={{marginLeft: 10}} onClick={() => commaClickHandler('.')}>.</Button>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Button variant="contained" style={{marginLeft: 8, height: 85}} onClick={equalsClickHandler}>=</Button>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>
        </Grid>
    );
}
