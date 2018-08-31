import React, { Component } from 'react';
import './App.css';
import { decorate, observable, action, computed } from "mobx";
import Form from './components/Form';
import Board from './components/Board';
import Reviews from './components/Reviews';
import Store from './Store/Store';

decorate(Store, {
  reviewList: observable,
  clearReviews: action,
  addReview: action,
  averageScore: computed,
  reviewCount: computed
})

const reviewStore = new Store()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Form store={reviewStore} />
          <Board store={reviewStore} />
          <Reviews store={reviewStore} />
        </div>
      </div>
    );
  }
}

export default App;
