"use client"

import { useEffect, useState, useCallback } from "react";

const GRID_SIZE = 20;

const createInitialGrid = () => {
    const patterns = [
        [
            [0, 1, 0],
            [0, 0, 1],
            [1, 1, 1]
        ],
        [
            [1, 1, 0],
            [1, 0, 1],
            [0, 1, 0]
        ],
        [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1]
        ]
    ];

    const grid = Array.from({ length: GRID_SIZE }, () =>
        Array.from({ length: GRID_SIZE }, () => false)
    );

    for (let i = 0; i < 3; i++) {
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        const x = Math.floor(Math.random() * (GRID_SIZE - 3));
        const y = Math.floor(Math.random() * (GRID_SIZE - 3));

        for (let px = 0; px < 3; px++) {
            for (let py = 0; py < 3; py++) {
                grid[x + px][y + py] = pattern[px][py] === 1;
            }
        }
    }

    return grid;
};

const GameOfLifeGrid = () => {
    const [grid, setGrid] = useState(() => createInitialGrid());

    const computeNextGeneration = useCallback(() => {
        const newGrid = grid.map((row, i) =>
            row.map((cell, j) => {
                let neighbors = 0;
                for (let x = -1; x <= 1; x++) {
                    for (let y = -1; y <= 1; y++) {
                        if (x === 0 && y === 0) continue;
                        const newI = i + x;
                        const newJ = j + y;
                        if (newI >= 0 && newI < GRID_SIZE && newJ >= 0 && newJ < GRID_SIZE) {
                            neighbors += grid[newI][newJ] ? 1 : 0;
                        }
                    }
                }
                if (cell) return neighbors === 2 || neighbors === 3;
                return neighbors === 3;
            })
        );
        setGrid(newGrid);
    }, [grid]);

    useEffect(() => {
        const generationIntervalId = setInterval(computeNextGeneration, 200);
        const restartIntervalId = setInterval(() => {
            setGrid(createInitialGrid());
        }, 30000);

        return () => {
            clearInterval(generationIntervalId);
            clearInterval(restartIntervalId);
        };
    }, [computeNextGeneration]);

    return (
        <div className="grid" style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`, width: '300px', height: '300px' }}>
            {grid.flat().map((cell, index) => (
                <div
                    key={index}
                    className={`${cell ? 'bg-white/80' : ''}`}
                    style={{ width: '100%', height: '100%' }}
                />
            ))}
        </div>
    );
};

export default function GameOfLife() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <GameOfLifeGrid />
        </div>
    );
}