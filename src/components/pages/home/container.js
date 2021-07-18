import {connect} from 'react-redux';
import * as gifActions from '../../../redux/gifs/actions';
import Component from './view';

const mapStateToProps = state => {
return {
    list: state.gifs.list,
    loading: state.gifs.loading,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        initList: () => { dispatch(gifActions.getList()); },
        setItem: (item) => { dispatch(gifActions.setItem(item)); },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Component)
