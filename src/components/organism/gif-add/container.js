import {connect} from 'react-redux';
import * as gifActions from '../../../redux/gifs/actions';
import Component from './view';

const mapStateToProps = (state) => {
    return {
        loading: state.gifs.loading,
    };
}

const mapDispatchToProps = dispatch => {
    return {
      onSubmit: data => dispatch(gifActions.createGif(data)),
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(Component);
