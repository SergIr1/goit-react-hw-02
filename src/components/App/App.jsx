import './App.module.css';
import { useState, useEffect } from 'react';

import AppBar from '../AppBar/AppBar';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return state;
    // ======= або варіант 2 через тернарник ============

    // return savedFeedback ? JSON.parse(savedFeedback) : state;

    // ======= /через тернарник ============
  });
  const feedbackTyps = ['good', 'neutral', 'bad'];
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetFeedBack = () => {
    setFeedback(state);
  };

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <AppBar />

      <Options
        textBtns={feedbackTyps}
        totalFeedback={totalFeedback}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedBack}
      />

      {totalFeedback > 0 ? (
        <Feedback
          value={feedback}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
