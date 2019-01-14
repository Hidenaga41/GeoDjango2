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

    onStarHover(nextValue, prevalue, name) {
        this.setState({
            rating: nextValue


        });
    }


    onStarHoverOut(nextValue, prevalue, name) {
        this.setState({ rating: nextValue });
    }

    render() {
        const { rating } = this.state;

        return (
            <div>
                <h2>this clinic's rating: {rating}</h2>
                <img src='../../../data/IMG_PROFILE.JPG' />
                <StarRatingComponent
                    name="rate1"
                    starColor='red'
                    starCount={10}
                    value={rating}
                    onStarHoverOut={this.onStarHoverOut.bind(this)}
                />
            </div>
        );
    }
}
export default Children;