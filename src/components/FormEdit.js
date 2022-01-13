import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { editMode, walletValue } from '../actions';

class FormEdit extends React.Component {
  constructor(props) {
    super(props);
    const { editData } = this.props;
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = editData[0];

    this.state = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    this.onChange = this.onChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  async submit(e) {
    e.preventDefault();
    const {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    } = this.state;

    const expenses = {
      id,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates,
    };

    const { submitDispatch, editModeDispatch } = this.props;
    submitDispatch(expenses);
    editModeDispatch(false);
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;

    return (
      <form>
        <input
          data-testid="value-input"
          type="number"
          name="value"
          onChange={ this.onChange }
          value={ value }
        />

        <input
          data-testid="description-input"
          type="text"
          name="description"
          value={ description }
          onChange={ this.onChange }
        />

        <label htmlFor="moeda">
          Moeda
          <select
            id="moeda"
            data-testid="currency-input"
            name="currency"
            value={ currency }
            onChange={ this.onChange }
          >
            {
              currencies.map((ini) => <option key={ ini } value={ ini }>{ ini }</option>)
            }
          </select>
        </label>

        <select
          data-testid="method-input"
          name="method"
          value={ method }
          onChange={ this.onChange }
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>

        <select
          data-testid="tag-input"
          name="tag"
          value={ tag }
          onChange={ this.onChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>

        <button
          type="submit"
          onClick={ (e) => this.submit(e) }
          style={ { backgroundColor: 'green' } }
        >
          Editar despesa
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  submitDispatch: (e) => dispatch(walletValue(e)),
  editModeDispatch: (e) => dispatch(editMode(e)),
});

const mapStateToProps = (state) => ({
  editData: state.wallet.editData,
  currencies: state.wallet.currencies,
});

FormEdit.propTypes = {
  submitDispatch: PropTypes.func.isRequired,
  editData: PropTypes.arrayOf(PropTypes.object).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  editModeDispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormEdit);
