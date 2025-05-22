import React, { useState } from 'react';
import axios from 'axios';

const SummaryButton = () => {
  const [message, setMessage] = useState('');

  const handleSummarize = async () => {
    try {
      // Remove unused 'res' variable
      await axios.post('http://localhost:5000/api/summarize');
      setMessage('✅ Summary sent to Slack!');
    } catch (err) {
      setMessage(`❌ Error: ${err.response?.data?.error || 'Failed to send summary'}`);
    }
  };

  return (
    <div className="summary-section">
      <button onClick={handleSummarize}>Generate & Send Summary</button>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SummaryButton;