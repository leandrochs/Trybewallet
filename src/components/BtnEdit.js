import React from 'react';

class BtnEdit extends React.Component {
  constructor(props) {
    super(props);
    this.BtnEdit = this.BtnEdit.bind(this);
  }

  BtnEdit() {
    console.log('Editou');
  }

  render() {
    return (
      <button data-testid="edit-btn" type="button" onClick={ () => this.BtnEdit() }>
        <span role="img" aria-label="Excluir">♻️</span>
      </button>
    );
  }
}

export default BtnEdit;
