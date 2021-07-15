import {connect} from ' react-redux';
import * as gifActions from '../../redux/gifs/actions';
import Component from './view';

const mapStateToProps = state => {
    /*
  DEVOLVEMOS UN OBJETO PARA DEVOLVER EN ESTA FUNCION QUE CONTENGA TODAS LAS PROPIEDADES
  DEL ESTADO DE REDUX QUE QUEREMOS INYECTAR EN NUESTRO COMPONENTE
  */

  const reduxStateComponentProps = {
      list: state.gifs.list,
      loading: state.gifs.loading,
  };

  return reduxStateComponentProps;

};

const mapDispatchToProps = dispatch => {
    /*
    VAMOS A DECLARAR LAS DISTINTAS ACCIONES DE LAS QUE NUESTRA VISTA PUEDE HACER DISPATCH
    LANZAR UNA ACCIÓN HACE QUE PODAMOS CAMBIAR SU VALOR EN EL ESTADO DE REDUX
    */
   const objectWithFunctionsToDispatchActions = {
       initList: () => {
           dispatch(gifActions.)
       }
   }
}



const connectFunction = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = connectFunction(Component)

export default connectedComponent;
