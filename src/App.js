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
      { dosha: "Pitta", description: "Normal, Thin, More Hair Fall" },
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
  },
  {
    id: 5,
    text: "Complexion",
    options: [
      { dosha: "Vata", description: "Dark, Blackish" },
      { dosha: "Pitta", description: "Pink to Red" },
      { dosha: "Kapha", description: "Glowing, White" }
    ]
  },
  {
    id: 6,
    text: "Body Weight",
    options: [
      { dosha: "Vata", description: "Low, Difficult to Put on Weight" },
      { dosha: "Pitta", description: "Medium, Can Easily Lose or Gain Weight" },
      { dosha: "Kapha", description: "Overweight, Difficult to Lose Weight" }
    ]
  },
  {
    id: 7,
    text: "Nails",
    options: [
      { dosha: "Vata", description: "Blackish, Small, Brittle" },
      { dosha: "Pitta", description: "Reddish, Small" },
      { dosha: "Kapha", description: "Pinkish, Big, Smooth" }
    ]
  },
  {
    id: 8,
    text: "Size and Color of the Teeth",
    options: [
      { dosha: "Vata", description: "Very Big or Very Small, Irregular (Blackish)" },
      { dosha: "Pitta", description: "Medium Sized, Yellowish" },
      { dosha: "Kapha", description: "Large, Shining White" }
    ]
  },
  {
    id: 9,
    text: "Pace of Performing Work",
    options: [
      { dosha: "Vata", description: "Fast, Always in Hurry" },
      { dosha: "Pitta", description: "Medium, Energetic" },
      { dosha: "Kapha", description: "Slow, Steady" }
    ]
  },
  {
    id: 10,
    text: "Mental Activity",
    options: [
      { dosha: "Vata", description: "Quick, Restless" },
      { dosha: "Pitta", description: "Smart-Intellectual, Aggressive" },
      { dosha: "Kapha", description: "Calm, Steady" }
    ]
  },
  {
    id: 11,
    text: "Memory",
    options: [
      { dosha: "Vata", description: "Short Term Recall" },
      { dosha: "Pitta", description: "Good Memory" },
      { dosha: "Kapha", description: "Long Term Best" }
    ]
  },
  {
    id: 12,
    text: "Grasping Power",
    options: [
      { dosha: "Vata", description: "Grasps Quickly but not Completely and Forgets Quickly" },
      { dosha: "Pitta", description: "Grasps Quickly but Completely and Has Good Memory" },
      { dosha: "Kapha", description: "Grasps Late but Retains for Longer Time" }
    ]
  },
  {
    id: 13,
    text: "Sleep Pattern",
    options: [
      { dosha: "Vata", description: "Interrupted, Less" },
      { dosha: "Pitta", description: "Moderate" },
      { dosha: "Kapha", description: "Heavy Sleepy" }
    ]
  },
  {
    id: 14,
    text: "Tolerance to Weather Conditions",
    options: [
      { dosha: "Vata", description: "Aversion to Cold" },
      { dosha: "Pitta", description: "Aversion to Heat" },
      { dosha: "Kapha", description: "Aversion to Moist, Rainy and Cold Weather" }
    ]
  },
  {
    id: 15,
    text: "Reactions Under Adverse Situations",
    options: [
      { dosha: "Vata", description: "Anxiety, Worry, Irritability" },
      { dosha: "Pitta", description: "Anger, Aggression" },
      { dosha: "Kapha", description: "Calm, Reclusive, Sometimes Depressive" }
    ]
  },
  {
    id: 16,
    text: "Mood",
    options: [
      { dosha: "Vata", description: "Changes Quickly, Frequent Mood Swings" },
      { dosha: "Pitta", description: "Changes Slowly" },
      { dosha: "Kapha", description: "Stable, Consistent" }
    ]
  },
  {
    id: 17,
    text: "Eating Habit",
    options: [
      { dosha: "Vata", description: "Eats Quickly Without Chewing Properly" },
      { dosha: "Pitta", description: "Eats at Moderate Speed" },
      { dosha: "Kapha", description: "Chews Food Properly" }
    ]
  },
  {
    id: 18,
    text: "Hunger",
    options: [
      { dosha: "Vata", description: "Irregular, Any Time" },
      { dosha: "Pitta", description: "Sudden Hunger Pangs, Sharp Hunger" },
      { dosha: "Kapha", description: "Can Skip Any Meal Easily" }
    ]
  },
  {
    id: 19,
    text: "Body Temperature",
    options: [
      { dosha: "Vata", description: "Less than Normal, Hands and Feet are Cold" },
      { dosha: "Pitta", description: "More than Normal, Face and Forehead Hot" },
      { dosha: "Kapha", description: "Normal, Hands and Feet Slightly Cold" }
    ]
  },
  {
    id: 20,
    text: "Joints",
    options: [
      { dosha: "Vata", description: "Weak, Noise on Movement" },
      { dosha: "Pitta", description: "Healthy with Optimal Strength" },
      { dosha: "Kapha", description: "Heavy, Weight Bearing" }
    ]
  },
  {
    id: 21,
    text: "Nature",
    options: [
      { dosha: "Vata", description: "Worried, Jealous" },
      { dosha: "Pitta", description: "Anger, Fearless" },
      { dosha: "Kapha", description: "Forgiving, Cheerful, Not Greedy" }
    ]
  },
  {
    id: 22,
    text: "Body Energy",
    options: [
      { dosha: "Vata", description: "Becomes Low in Evening, Fatigues after Less Work" },
      { dosha: "Pitta", description: "Moderate, Gets Tired after Medium Work" },
      { dosha: "Kapha", description: "Excellent Energy Throughout Day, Not Easily Fatigued" }
    ]
  },
  {
    id: 23,
    text: "Eyeball",
    options: [
      { dosha: "Vata", description: "Unsteady, Fast Moving" },
      { dosha: "Pitta", description: "Moving Slowly" },
      { dosha: "Kapha", description: "Steady" }
    ]
  },
  {
    id: 24,
    text: "Quality of Voice",
    options: [
      { dosha: "Vata", description: "Rough with Broken Words" },
      { dosha: "Pitta", description: "Fast, Commanding" },
      { dosha: "Kapha", description: "Soft and Deep" }
    ]
  },
  {
    id: 25,
    text: "Dreams",
    options: [
      { dosha: "Vata", description: "Sky, Wind, Flying Objects, Confusion" },
      { dosha: "Pitta", description: "Fire, Light, Bright Colors, Violence" },
      { dosha: "Kapha", description: "Water Bodies, Gardens, Good Relationships" }
    ]
  },
  {
    id: 26,
    text: "Social Relations",
    options: [
      { dosha: "Vata", description: "Most Likely Prefers Solitude" },
      { dosha: "Pitta", description: "Good No. of Friends" },
      { dosha: "Kapha", description: "Loves to Socialize, Relationships are Longer Lasting" }
    ]
  },
  {
    id: 27,
    text: "Wealth",
    options: [
      { dosha: "Vata", description: "Spends without Thinking Much" },
      { dosha: "Pitta", description: "Saves but Spends on Valuable Things" },
      { dosha: "Kapha", description: "Prefers More Savings" }
    ]
  },
  {
    id: 28,
    text: "Bowel Movements",
    options: [
      { dosha: "Vata", description: "Dry, Hard, Blackish, Scanty Stools" },
      { dosha: "Pitta", description: "Soft, Yellowish, Loose Stools" },
      { dosha: "Kapha", description: "Heavy, Thick, Sticky Stools" }
    ]
  },
  {
    id: 29,
    text: "Walking Pace",
    options: [
      { dosha: "Vata", description: "Quick, Fast With Long Steps" },
      { dosha: "Pitta", description: "Always Steady" },
      { dosha: "Kapha", description: "Slow with Short Steps" }
    ]
  },
  {
    id: 30,
    text: "Communication Skills",
    options: [
      { dosha: "Vata", description: "Fast, Irrelevant Talk, Speech not Clear" },
      { dosha: "Pitta", description: "Good Speaker with Definite Argumentative Skills" },
      { dosha: "Kapha", description: "Authoritative, Few Words, Little Speech" }
    ]
  }
];


function App() {
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [dominantDosha, setDominantDosha] = useState(null);

  const handleAnswer = (questionId, dosha) => {
    setAnswers({ ...answers, [questionId]: dosha });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doshaCount = Object.values(answers).reduce((acc, dosha) => {
      acc[dosha] = (acc[dosha] || 0) + 1;
      return acc;
    }, {});

    const answeredQuestions = Object.keys(answers).length;
    const results = Object.entries(doshaCount).map(([dosha, count]) => ({
      name: dosha,
      value: (count / answeredQuestions) * 100
    }));

    // Add doshas with 0% if they weren't selected in any answer
    const allDoshas = ['Vata', 'Pitta', 'Kapha'];
    allDoshas.forEach(dosha => {
      if (!results.some(result => result.name === dosha)) {
        results.push({ name: dosha, value: 0 });
      }
    });

    setResults(results);

    // Determine the dominant dosha
    const dominant = results.reduce((max, dosha) => dosha.value > max.value ? dosha : max);
    setDominantDosha(dominant.name);
  };

  const COLORS = ['#FFBB28', '#00C49F', '#0088FE'];

  const getDietChartLink = () => {
    switch (dominantDosha) {
      case 'Vata':
        return 'https://drive.google.com/file/d/1cP7csM5mGKZ0LsxYuDSO9trED1h8IP0L/view?usp=sharing';
      case 'Pitta':
        return 'https://drive.google.com/file/d/1cT3CljEaXDI0WG7cAV0htVyiYbk1KrTe/view?usp=sharing';
      case 'Kapha':
        return 'https://drive.google.com/file/d/1cPMfB8eUEm0X9t5NEzMi1xdNNTljTRdJ/view?usp=sharing';
      default:
        return '';
    }
  };

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
          <p style={{ textAlign: 'center', color: '#666' }}>
            Based on {Object.keys(answers).length} answered questions out of {questions.length} total questions.
          </p>
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
                label={({ name, value }) => `${name} ${value.toFixed(1)}%`}
              >
                {results.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
          {dominantDosha && (
            <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <h3>Your Dominant Dosha: {dominantDosha}</h3>
              <a
                href={getDietChartLink()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '10px 20px',
                  backgroundColor: '#3498db',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '5px',
                  fontSize: '16px',
                  marginTop: '10px'
                }}
              >
                View Diet Chart for {dominantDosha}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;