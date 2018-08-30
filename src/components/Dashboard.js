import React, { Component } from 'react';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardSection">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="card text-white bg-primary mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-comments fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p id="reviewCount">3</p>
                                        <p className="announcement-text">Reviews</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="card text-white bg-success mb-6">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-6">
                                        <i className="fa fa-star fa-5x"></i>

                                    </div>
                                    <div className="col-md-6 text-right">
                                        <p id="averageScores">2</p>
                                        <p className="announcement-text"> Average Scores </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}