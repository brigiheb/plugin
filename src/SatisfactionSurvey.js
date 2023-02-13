import React, { useState } from "react";

const SatisfactionSurvey = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating} Feedback: ${feedback}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>How would you rate your experience?</h4>
      
      <div>
        <label htmlFor="feedback">Additional Feedback:</label>
        <textarea
          id="feedback"
          value={feedback}
          onChange={(event) => setFeedback(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SatisfactionSurvey;
