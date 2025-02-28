import './App.module.css';
import { useState } from 'react';
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
  const [feedback, setFeedback] = useState(state);
  const feedbackTyps = ['good', 'neutral', 'bad'];
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
    // console.log(clicks);
  };

  const resetFeedBack = () => {
    setFeedback(state);
  };

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
