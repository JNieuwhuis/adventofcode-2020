import React from 'react';
import passwordDataFile from './Input2.js';
import example from './InputExample2';

const Day2 = () => {
    const passwordData = [];
    let validPasswords = 0;
    let newValidPasswords = 0;

    const getDataArray = () => {
        passwordDataFile.trim().split("\n").map(line => {
            let partLine = line.trim().split(":");
            partLine[1].trim();
            passwordData.push(partLine);
        });
    }

    const inRange = (value, min, max) => {
        return ((value-min)*(value-max) <= 0);
    }

    const atPosition = (value, letterMatch, pos1, pos2) => {
        return ((value.charAt(pos1-1) === letterMatch && !(value.charAt(pos2-1) === letterMatch)) || 
        (!(value.charAt(pos1-1) === letterMatch) && (value.charAt(pos2-1) === letterMatch)));
    }

    const countValidPasswords = () => {
        passwordData.map(kvpair => {
            let matchedLetters = 0;
            const letterConstraints = kvpair[0].trim().split(" ");
            const letterMatch = letterConstraints[1];
            const matchedLetterRange = letterConstraints[0].split("-");
            kvpair[1].trim().split("").map(letter => {
                if (letter === letterMatch) {
                    matchedLetters++;
                }
            });
            if (inRange(matchedLetters, matchedLetterRange[0], matchedLetterRange[1])) {
                validPasswords++;
            }
        });
    }

    const countValidPasswordsAgain = () => {
        passwordData.map(kvpair => {
            const letterConstraints = kvpair[0].trim().split(" ");
            const letterMatch = letterConstraints[1];
            const matchedLetterRange = letterConstraints[0].split("-");
            if (atPosition(kvpair[1].trim(), letterMatch, matchedLetterRange[0], matchedLetterRange[1])) {
                newValidPasswords++;
            }
        })
    }

    const part1 = () => {
        getDataArray();
        countValidPasswords();

        return (
            <p>
                <i>Part 1:</i>
                <br/>
                There are {validPasswords} passwords valid according to their policies.
                <br/>
            </p>
        );
    }

    const part2 = () => {
        countValidPasswordsAgain();
        console.log(newValidPasswords);

        return (
            <p>
                <i>Part 2:</i>
                <br/>
                There are {newValidPasswords} passwords valid according to the new interpretation.
                <br/>
            </p>
        );
    };
    
    return (
        <div>
            <p><b>Day2</b></p>
            {part1()}
            {part2()}
        </div>
    );
};

export default Day2;