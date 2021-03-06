import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BtnDelete from './BtnDelete';
import BtnEdit from './BtnEdit';

class Table extends React.Component {
  render() {
    const { expenses } = this.props;

    return (
      <table border="1">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(({
              id,
              description,
              tag,
              method,
              value,
              currency,
              exchangeRates,
            }) => {
              const ask = parseFloat(exchangeRates[currency].ask);
              const curr = exchangeRates[currency].name.split('/')[0];
              return (
                <tr key={ id }>
                  <td>{ description }</td>
                  <td>{ tag }</td>
                  <td>{ method }</td>
                  <td>{ value }</td>
                  <td>{ curr }</td>
                  <td>{ ask.toFixed(2) }</td>
                  <td>{ (value * ask).toFixed(2) }</td>
                  <td>Real</td>
                  <td style={ { display: 'flex', justifyContent: 'space-evenly' } }>
                    <BtnEdit id={ id } />
                    <BtnDelete id={ id } />
                  </td>
                </tr>
              );
            })
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

Table.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, null)(Table);
