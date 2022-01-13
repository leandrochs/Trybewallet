import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteValue, editMode, editValue } from '../actions';

class BtnEdit extends React.Component {
  constructor(props) {
    super(props);
    this.btnEdit = this.btnEdit.bind(this);
  }

  btnEdit(id) {
    const { idDispatch, editModeDispatch, deleteDispatch } = this.props;
    idDispatch(id);
    editModeDispatch(true);
    deleteDispatch(id);
  }

  render() {
    const { id } = this.props;

    return (
      <button data-testid="edit-btn" type="button" onClick={ () => this.btnEdit(id) }>
        <span role="img" aria-label="Excluir">♻️</span>
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  idDispatch: (e) => dispatch(editValue(e)),
  deleteDispatch: (e) => dispatch(deleteValue(e)),
  editModeDispatch: (e) => dispatch(editMode(e)),
});

BtnEdit.propTypes = {
  id: PropTypes.number.isRequired,
  idDispatch: PropTypes.func.isRequired,
  deleteDispatch: PropTypes.func.isRequired,
  editModeDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BtnEdit);
