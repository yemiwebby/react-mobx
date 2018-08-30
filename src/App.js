import React, { Component } from 'react';
import './App.css';
import { decorate, observable, configure, action, computed } from "mobx";
import { observer } from "mobx-react";
import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Store from './Store/Store';

decorate(Store, {
  reviewList: observable,
  clearReviews: action,
  addReview: action,
  totalReviewCount: computed,
  averageScore: computed
})

const reviewStore = new Store()

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Form store={reviewStore} />
          <Dashboard store={reviewStore} />
          <Reviews store={reviewStore} />
        </div>
      </div>
    );
  }
}

export default App;
