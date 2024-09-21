import React, { useState } from 'react';
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts';

const questions = [
  {
    id: 1,
    text: "What is your body frame?",
    options: [
      { dosha: "Vata", description: "It's thin" },
      { dosha: "Pitta", description: "It's medium" },
      { dosha: "Kapha", description: "It's heavy or good built" }
    ]
  },
  {
    id: 2,
    text: "Type of Hair",
    options: [
      { dosha: "Vata", description: "Dry and with Splits End" },
      { dosha: "Pitta", description: "Normal,Thin,More Hair Fall" },
      { dosha: "Kapha", description: "Greasy, Heavy" }
    ]
  },
  {
    id: 3,
    text: "Color of Hair",
    options: [
      { dosha: "Vata", description: "Pale Brown" },
      { dosha: "Pitta", description: "Red or Brown" },
      { dosha: "Kapha", description: "Jet Black" }
    ]
  },
  {
    id: 4,
    text: "Skin",
    options: [
      { dosha: "Vata", description: "Dry, Rough" },
      { dosha: "Pitta", description: "Soft, More Sweating, Acne" },
      { dosha: "Kapha", description: "Moist, Greasy" }
    ]
  }
];

function App() {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);

  const handleAnswer = (questionId, dosha) => {
    setAnswers({ ...answers, [questionId]: dosha });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doshaCount = Object.values(answers).reduce((acc, dosha) => {
      acc[dosha] = (acc[dosha] || 0) + 1;
      return acc;
    }, {});

    const totalQuestions = questions.length;
    const results = Object.entries(doshaCount).map(([dosha, count]) => ({
      name: dosha,
      value: (count / totalQuestions) * 100
    }));

    setResults(results);
  };

  const COLORS = ['#FFBB28', '#00C49F', '#0088FE'];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Prakriti Analysis Form</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((question) => (
          <div key={question.id} style={{ marginBottom: '20px', backgroundColor: '#FFF9C4', padding: '15px', borderRadius: '5px' }}>
            <h3 style={{ marginTop: '0', color: '#333' }}>Question {question.id}. {question.text}</h3>
            {question.options.map((option) => (
              <div key={option.dosha} style={{ marginBottom: '10px' }}>
                <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={option.dosha}
                    checked={answers[question.id] === option.dosha}
                    onChange={() => handleAnswer(question.id, option.dosha)}
                    style={{ marginRight: '10px' }}
                  />
                  <span style={{ fontWeight: 'bold', marginRight: '5px' }}>{option.dosha}:</span> {option.description}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button type="submit" style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer'
        }}>
          Submit and See Results
        </button>
      </form>
      {results && (
        <div style={{ marginTop: '30px' }}>
          <h2 style={{ textAlign: 'center', color: '#333' }}>Your Prakriti Analysis Results</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={results}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${percent.toFixed(0)}%`}
              >
                {results.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default App;