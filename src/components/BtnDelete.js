import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteValue } from '../actions';

class BtnDelete extends React.Component {
  constructor(props) {
    super(props);
    this.btnDelete = this.btnDelete.bind(this);
  }

  btnDelete(id) {
    const { idDispatch } = this.props;
    idDispatch(id);
  }

  render() {
    const { id } = this.props;

    return (
      <button data-testid="delete-btn" type="button" onClick={ () => this.btnDelete(id) }>
        <span role="img" aria-label="Excluir">❌</span>
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  idDispatch: (e) => dispatch(deleteValue(e)),
});

BtnDelete.propTypes = {
  id: PropTypes.number.isRequired,
  idDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BtnDelete);
