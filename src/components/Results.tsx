import React from 'react';

interface ResultsProps {
  monthlyRepayments: number;
  totalRepayment: number;
}

const Results: React.FC<ResultsProps> = ({ monthlyRepayments, totalRepayment }) => {
  return (
    <div className="bg-slate900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Your results</h2>
      <p className="mb-2">Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.</p>
      <div className="bg-slate700 p-4 rounded-lg">
        <h3 className="text-lg">Your monthly repayments</h3>
        <p className="text-2xl font-bold">{`£${monthlyRepayments.toFixed(2)}`}</p>
      </div>
      <div className="bg-slate700 p-4 rounded-lg mt-4">
        <h3 className="text-lg">Total you'll repay over the term</h3>
        <p className="text-2xl font-bold">{`£${totalRepayment.toFixed(2)}`}</p>
      </div>
    </div>
  );
};

export default Results;
