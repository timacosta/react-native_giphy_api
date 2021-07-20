import {connect} from 'react-redux';
import Component from './view';

const mapStateToProps = state => {
    console.log(state.gifs.item)
    return {
        details: state.gifs.item
    };
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);