import { connect } from "react-redux";
import PropTypes from 'prop-types';

import './container.css'

import Item from '../item/Item'

// ACTIONS
import {
    changeContainerName, editContainerName
} from '../../actions/container'

export function Container({ name, onChangeEditField, onEditContainerName, items }){

    return(
        <>
        <div className="container">
            <div className="container__name">{name}</div>
            <div className="items__wrapper">
            {items.map(e => <Item />)}
            </div>
        </div>
        <div className="container__input-text">Choisir nom du conteneur :</div>
        <input type="text" onChange={onChangeEditField}></input>
        <button onClick={onEditContainerName}>Valider</button>
        </>
    )
}

Container.propTypes = {
    // From state
    name: PropTypes.string,
    onChangeEditField: PropTypes.func.isRequired,
    onEditContainerName: PropTypes.func.isRequired,

    // From parent
    items: PropTypes.array.isRequired,
}

const mapStateToProps = (state) => ({
    name: state.container.name
});
  
const mapDispatchToProps = (dispatch) => ({
    onChangeEditField: (e) => {
        dispatch(changeContainerName(e.target.value));
      },
    
      onEditContainerName: (e) => {
          dispatch(editContainerName(e.target.value))
      }
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);