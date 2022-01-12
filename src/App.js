import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSaveButtonDisabled: true,
    };
    this.saveButtonEnable = this.saveButtonEnable.bind(this);
  }

  handleInputChange = ({ target: { id, value, checked } }) => {
    this.setState(id !== 'trunfo' ? { [id]: value } : { [id]: checked },
      this.saveButtonEnable);
  }

  saveButtonEnable = () => {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      imageurl,
      rarity,
    } = this.state;

    const MAX_VALUE = 90;
    const MIN_VALUE = 0;
    const LIMIT_VALUE = 210;
    const SUM_VALUE = Number(attr1) + Number(attr2) + Number(attr3);

    if (name && description && imageurl && rarity !== ''
      && attr1 >= MIN_VALUE
      && attr1 <= MAX_VALUE
      && attr2 >= MIN_VALUE
      && attr2 <= MAX_VALUE
      && attr3 >= MIN_VALUE
      && attr3 <= MAX_VALUE
      && SUM_VALUE <= LIMIT_VALUE) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      name,
      description,
      attr1,
      attr2,
      attr3,
      imageurl,
      rarity,
      trunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleInputChange }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ imageurl }
          cardRare={ rarity }
          cardTrunfo={ trunfo }
        />
      </>
    );
  }
}

export default App;
