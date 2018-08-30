import React, { Component } from 'react';

export default class Reviews extends Component {
    render() {
        const { store } = this.props
        return (
            <div className="reviewsWrapper">
                <div className="row">
                    <div className="col-md-12 col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <i className="fa fa-comments"></i> &nbsp;&nbsp;&nbsp;Reviews
                        </div>
                            <ul className="list-group list-group-flush">
                                {store.reviewList.map((e, i) =>
                                    <li className="list-group-item">
                                        <p className="float-left">{i}</p>
                                        <p className="float-right">
                                            <span className="fa fa-star">{i}</span>
                                        </p>
                                    </li>

                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}