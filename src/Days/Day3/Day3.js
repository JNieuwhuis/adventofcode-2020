import React from 'react';
import Input3 from './Input3';
import example3 from './Example3';

const Day3 = () => {
    const treesmap = [];

    const getDataArray = () => {
        Input3.trim().split("\n").map(line => {
            treesmap.push(line.trim());
        });
    }

    const lookforTrees = (treeRow, treesEncountered, sledPosition) => {
        if (treeRow.charAt(sledPosition) === "#") {
            treesEncountered++;
        }
        return treesEncountered;
    }

    const moveToboggan = (treeRow, sledPosition, slopeindex) => {
        sledPosition += slopeindex;
        if (sledPosition > (treeRow.length-1)) {
            sledPosition -= treeRow.length;
        }
        return sledPosition;
    }

    const navigateMap = (slopeindex, rowIndex) => {
        let treesEncountered = 0;
        let sledPosition = 0;

        treesmap.map((treeRow, index) => {
            if (rowIndex) {
                if ((index%rowIndex) === 0) {
                    treesEncountered = lookforTrees(treeRow, treesEncountered, sledPosition);
                    sledPosition = moveToboggan(treeRow, sledPosition, slopeindex);
                }
            } else {
                treesEncountered = lookforTrees(treeRow, treesEncountered, sledPosition);
                sledPosition = moveToboggan(treeRow, sledPosition, slopeindex);
            }         
            index++;
        });

        return treesEncountered;
    }

    const part1 = () => {
        const treesEncountered3 = navigateMap(3);

        return (
            <p>
                <i>Part 1:</i>
                <br/>
                I would encounter {treesEncountered3} trees with this course.
                <br/>
            </p>
        );
    }

    const part2 = () => {
        const treesEncountered1 = navigateMap(1);
        const treesEncountered3 = navigateMap(3);
        const treesEncountered5 = navigateMap(5);
        const treesEncountered7 = navigateMap(7);
        const treesEncountered12 = navigateMap(1, 2);

        const multipliedValue = (treesEncountered1*treesEncountered3*treesEncountered5*treesEncountered7*treesEncountered12);

        return (
            <p>
                <i>Part 2:</i>
                <br/>
                I would encounter {treesEncountered1} trees with a slope of right 1, down 1.
                <br/>
                I would encounter {treesEncountered3} trees with a slope of right 3, down 1.
                <br/>
                I would encounter {treesEncountered5} trees with a slope of right 5, down 1.
                <br/>
                I would encounter {treesEncountered7} trees with a slope of right 7, down 1.
                <br/>
                I would encounter {treesEncountered12} trees with a slope of right 1, down 2.
                <br/>
                Multiplying these numbers results in: {multipliedValue}.
            </p>
        );
    };

    const getData = () => {
        getDataArray();
        
        return (
            <>
                {part1()}
                {part2()}
            </>
        );
    }
    
    return (
        <div>
            <p><b>Day3</b></p>
            {getData()}
        </div>
    );
};

export default Day3;