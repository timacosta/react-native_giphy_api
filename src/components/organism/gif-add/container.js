import {connect} from 'react-redux';
import * as gifActions from '../../../redux/gifs/actions';
import Component from './view';

const mapStateToProps = (state) => {
    return {
        loading: state.gifs.loading,
        mockGif: state.gifs.mockGif,
    };
}

const mapDispatchToProps = dispatch => {
    return {
      onSubmit: mockGif => dispatch(gifActions.createGif(mockGif)),
    };
  };


export default connect(mapStateToProps, mapDispatchToProps)(Component);
