import React, { Component } from 'react';

export default class Form extends Component {

    submitReview = () => {

    }

    clearReviews = () => {

    }
    render() {
        return (
            <div className="formSection">
                <div className="form-group">
                    <p>Submit a Review</p>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <div className="form-group">
                            <input type="text" name="review" id="review" placeholder="Write a review" className="form-control" />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <select name="stars" id="stars" className="form-control">
                                <option value="1">1 Star</option>
                                <option value="2">2 Star</option>
                                <option value="3">3 Star</option>
                                <option value="4">4 Star</option>
                                <option value="5">5 Star</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="form-group">
                            <button className="btn btn-success" onClick={this.submitReview}> SUBMIT REVIEW</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}