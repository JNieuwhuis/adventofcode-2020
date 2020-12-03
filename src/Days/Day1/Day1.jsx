import React from 'react';
import { entries } from './Input1';

const Day1 = () => {

    //const entriesExample = [1721, 979, 366, 299, 675, 1456];

    const thechosentwo = () => {
        let xValue;
        let yValue;
        let multipliedValue;

        entries.map(x => {
            if (!multipliedValue) {
                entries.map(y => {
                    if (x+y === 2020) {
                        xValue = x;
                        yValue = y;
                        console.log("x:"+ xValue + " + y:" + yValue + " = som:" + (xValue+yValue));
                        return multipliedValue = (xValue * yValue);
                    }
                });
            }
        });

    return (
        <p>
            <i>Part 1:</i>
            <br/>
            The two nummbers that add up to 2020 are: {xValue} and {yValue}.
            <br/>
            Multiplying these numbers results in: {multipliedValue}.
        </p>
        );
    }

    const thechosenthree = () => {
        let xValue;
        let yValue;
        let zValue;
        let multipliedValue;

        entries.map(x => {
            if (!multipliedValue) {
                entries.map(y => {
                    if (!multipliedValue) {
                        entries.map(z => {
                            if ((x+y+z) === 2020) {
                                xValue = x;
                                yValue = y;
                                zValue = z;
                                console.log("x:"+ xValue + " + y:" + yValue + " + z:" + zValue + " = som:" + (xValue+yValue+zValue));
                                multipliedValue = (xValue * yValue *zValue);
                            }
                        });
                    }
                });
            }
        });
    return (
        <p>
            <i>Part 2:</i>
            <br/>
            The three nummbers that add up to 2020 are: {xValue}, {yValue} and {zValue}.
            <br/>
            Multiplying these numbers results in: {multipliedValue}.
        </p>
        );
}

    return (
        <div>
            <p><b>Day1</b></p>
            {thechosentwo()}
            {thechosenthree()}
        </div>
    );
}

export default Day1;
