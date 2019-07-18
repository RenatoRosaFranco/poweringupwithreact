import React from 'react';
import logo from './logo.svg';
import './App.css';

import StoryBox from './components/StoryBox';
import CommentBox from './components/CommentBox';
import axios from 'axios';
import jquery from 'jquery';

function App() {
  return (
    <div className="App">
      <StoryBox />
      <CommentBox />
    </div>
  );
}

export default App;
