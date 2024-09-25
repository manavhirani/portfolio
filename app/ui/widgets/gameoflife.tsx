'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';

type CellState = boolean;
type GridState = CellState[][];

const GRID_HEIGHT = 10;
const CELL_SIZE = 32;

const Cell: React.FC<{ state: CellState; onClick: () => void }> = ({ state, onClick }) => (
    <div
        onClick={onClick}
        style={{
            width: '100%',
            height: '100%',
            backgroundColor: state ? 'white' : 'transparent',
            border: '1px solid rgba(204, 204, 204, 0.25)',
            cursor: 'pointer',
        }}
    />
);

const createEmptyGrid = (width: number): GridState =>
    Array(GRID_HEIGHT).fill(null).map(() => Array(width).fill(false));

const countNeighbors = (grid: GridState, x: number, y: number): number =>
    [-1, 0, 1].reduce((count, i) =>
        count + [-1, 0, 1].reduce((innerCount, j) =>
            (i === 0 && j === 0) ? innerCount :
                (x + i >= 0 && x + i < GRID_HEIGHT && y + j >= 0 && y + j < grid[0].length && grid[x + i][y + j]) ?
                    innerCount + 1 : innerCount, 0), 0);

const nextGeneration = (grid: GridState): GridState =>
    grid.map((row, x) => row.map((cell, y) => {
        const neighbors = countNeighbors(grid, x, y);
        return cell ? (neighbors === 2 || neighbors === 3) : neighbors === 3;
    }));

export default function GameOfLife() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [gridWidth, setGridWidth] = useState(0);
    const [grid, setGrid] = useState<GridState>([]);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        const updateGridWidth = () => {
            if (containerRef.current) {
                const width = Math.floor(containerRef.current.offsetWidth / CELL_SIZE);
                setGridWidth(width);
                setGrid(createEmptyGrid(width));
            }
        };

        updateGridWidth();
        window.addEventListener('resize', updateGridWidth);
        return () => window.removeEventListener('resize', updateGridWidth);
    }, []);

    const toggleCell = useCallback((x: number, y: number) => {
        setGrid(prevGrid => prevGrid.map((row, i) =>
            i === x ? row.map((cell, j) => j === y ? !cell : cell) : row
        ));
    }, []);

    useEffect(() => {
        let intervalId: NodeJS.Timeout | null = null;
        if (isRunning) {
            intervalId = setInterval(() => setGrid(nextGeneration), 500);
        }
        return () => {
            if (intervalId) clearInterval(intervalId);
        };
    }, [isRunning]);

    const controls = {
        start: () => setIsRunning(true),
        stop: () => setIsRunning(false),
        reset: () => {
            setIsRunning(false);
            setGrid(createEmptyGrid(gridWidth));
        },
        next: () => setGrid(nextGeneration),
    };

    return (
        <div ref={containerRef} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${gridWidth}, 1fr)`,
                width: '100%',
                aspectRatio: `${gridWidth} / ${GRID_HEIGHT}`,
                marginBottom: '20px',
            }}>
                {grid.map((row, x) =>
                    row.map((cell, y) => (
                        <Cell
                            key={`${x}-${y}`}
                            state={cell}
                            onClick={() => toggleCell(x, y)}
                        />
                    ))
                )}
            </div>
            <div>
                {Object.entries(controls).map(([key, handler]) => (
                    <button key={key} onClick={handler} disabled={key === 'start' ? isRunning : key === 'stop' ? !isRunning : false} style={{ marginRight: '10px' }}>
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}
