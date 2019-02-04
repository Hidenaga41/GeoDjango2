import React from 'react';
import propTypes from 'prop-types';

export default class Medical extends React.Component {
    componentWillMount() {
        this.props.onMount(this.props.id);

    }
    componentWillReceiveProps(nextProps) {
        if (this.props.id !== nextProps.id) {
            this.props.onUpdate(nextProps.id);
        }
    }

    render() {
        return (
            <div>
                <h2>
                    Medical id components
                </h2>
                <p>
                    Medical id:{this.props.id}
                </p>
            </div>
        );
    }
}

Medical.propTypes = {
    id: propTypes.string,

    onMount: propTypes.func.isRequired,
    onUpdate: propTypes.func.isRequired
};

Medical.defaultProps = {
    id: 'odpt.BusroutePattern:Toei.To02.32304.2'
}