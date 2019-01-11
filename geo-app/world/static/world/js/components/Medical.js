import React from 'react';
import PropTypes from 'prop-types';
import recentActors from 'material-ui/svg-icons/av/recent-actors';

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

//Medical.defaultProps = {
//    id: ''
//}