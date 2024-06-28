import React, { useState } from 'react';

interface CalculatorFormProps {
  calculateRepayments: (amount: number, term: number, rate: number, type: string) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ calculateRepayments }) => {
  const [amount, setAmount] = useState<number>(300000);
  const [term, setTerm] = useState<number>(25);
  const [rate, setRate] = useState<number>(5.25);
  const [type, setType] = useState<string>('Repayment');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    calculateRepayments(amount, term, rate, type);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Mortgage Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Mortgage Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700">Mortgage Term</label>
            <input
              type="number"
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label className="block text-gray-700">Interest Rate</label>
            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              step="0.01"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Mortgage Type</label>
          <div className="mt-1">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="type"
                value="Repayment"
                checked={type === 'Repayment'}
                onChange={() => setType('Repayment')}
                className="form-radio"
              />
              <span className="ml-2">Repayment</span>
            </label>
            <label className="inline-flex items-center ml-6">
              <input
                type="radio"
                name="type"
                value="Interest Only"
                checked={type === 'Interest Only'}
                onChange={() => setType('Interest Only')}
                className="form-radio"
              />
              <span className="ml-2">Interest Only</span>
            </label>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button type="button" onClick={() => { setAmount(300000); setTerm(25); setRate(5.25); setType('Repayment'); }} className="text-red-500">Clear All</button>
          <button type="submit" className="bg-lime text-white font-bold py-2 px-4 rounded-md">Calculate Repayments</button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;
