import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './app.css';

//ACTIONS
import {
  changeNumberOfItem
} from "../../actions/app"

import Container from '../Container/Container';


function App({items, onChangeNumberOfItem}) {

  return (
    <div className="app">
      <div>Ajouter un item:</div>
      <button onClick={onChangeNumberOfItem}>+</button>
      <Container items={items}/>
    </div>
  );
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  onChangeNumberOfItem: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  items: state.app.items
});

const mapDispatchToProps = (dispatch) => ({
    onChangeNumberOfItem: () => {
      dispatch(changeNumberOfItem(""))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
