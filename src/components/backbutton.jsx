import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackButton = () => {
  const history = useNavigate();

  const handleGoBack = () => {
    history.goBack();
  };

  return (
    <button onClick={handleGoBack}>Back</button>
  );
};

export default BackButton;