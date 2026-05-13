import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [result, setResult] = useState(0);

    const handleSum = () => setResult(Number(num1) + Number(num2));
    const handleSubtract = () => setResult(Number(num1) - Number(num2));
    const handleMultiply = () => setResult(Number(num1) * Number(num2));
    const handleDivide = () => {
        if (Number(num2) === 0) {
            setResult('Error');
        } else {
            setResult(Number(num1) / Number(num2));
        }
    };

    return (
        <div className="calculator-container">
            <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="Num 1"
            />
            <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="Num 2"
            />
            <button onClick={handleSum}>+</button>
            <button onClick={handleSubtract}>-</button>
            <button onClick={handleMultiply}>*</button>
            <button onClick={handleDivide}>/</button>
            <input
                type="text"
                value={result}
                readOnly
                placeholder="Resultado"
            />
        </div>
    );
};

export default Calculator;