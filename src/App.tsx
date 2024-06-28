import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import Results from './components/Results';

const App: React.FC = () => {
  const [monthlyRepayments, setMonthlyRepayments] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);

  const calculateRepayments = (amount: number, term: number, rate: number, type: string) => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = term * 12;
    let monthlyRepayment;
    if (type === 'Repayment') {
      monthlyRepayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    } else {
      monthlyRepayment = amount * monthlyRate;
    }
    setMonthlyRepayments(monthlyRepayment);
    setTotalRepayment(monthlyRepayment * numberOfPayments);
  };

  return (
    <div className="min-h-screen bg-slate100 p-4 flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full grid grid-cols-1 md:grid-cols-2">
        <CalculatorForm calculateRepayments={calculateRepayments} />
        {monthlyRepayments !== null && totalRepayment !== null ? (
          <Results monthlyRepayments={monthlyRepayments} totalRepayment={totalRepayment} />
        ) : (
          <div className="bg-slate900 text-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
            <p>Complete the form and click “calculate repayments” to see what your monthly repayments would be.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
