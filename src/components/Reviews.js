import React, { Component } from 'react';
import { observer } from "mobx-react"

const List = (props) => {
    return (
        <li className="list-group-item">
            <p className="float-left">{props.data.review}</p>
            <p className="float-right">
                {props.data.stars}
                <span className="fa fa-star"></span>
            </p>
        </li>
    )
}

class Reviews extends Component {
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
                                    <List
                                        key={i}
                                        data={e}
                                    />
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Reviews = observer(Reviews);

export default Reviews;