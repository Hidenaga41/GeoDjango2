import { connect } from 'react-redux';
import Medical from '../components/Medical';
import * as actions from '../actions/Ranking';

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.id
});

const mapDispatchToProps = dispatch => ({
    onMount(id) {
        dispatch(actions.fetchMed(id));
    },
    onUpdate(id) {
        dispatch(actions.fetchMed(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Medical)