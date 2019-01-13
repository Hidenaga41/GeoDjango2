import React from 'react';
import ReactDOM, { render } from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';


class Children extends React.Component {
    constructor() {
        super();

        this.state = {
            rating: 1
        };

    }

    onStarClick(nextValue, prevalue, name) {
        this.setState({ rating: nextValue });

    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <h2>Rating from state": {rating}</h2>
                <StarRatingComponent
                    name="rate1"
                    starColor='red'
                    starCount={10}
                    value={rating}
                    onStarClick={this.onStarClick.bind(this)}
                />
            </div>
        );
    }
}
export default Children;