import React from 'react';
import PropTypes from 'prop-types';

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

Medical.PropTypes = {
    id: PropTypes.string,

    onMount: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
};

Medical.defaultProps = {
    id: 'odpt.BusroutePattern:Toei.To02.32304.2'
}