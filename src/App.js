import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  handleInputChange = ({ target: { id, value, checked } }) => {
    this.setState(id !== 'trunfo' ? { [id]: value  } : { [id]: checked });
  }

  render() {
    const { name, description, attr1, attr2, attr3, imageurl, rarity, trunfo } = this.state;
    return (
      <>
        <div>
          <h1>Tryunfo</h1>
        </div>
        <Form onInputChange={this.handleInputChange} />
        <Card
          cardName={name}
          cardDescription={description}
          cardAttr1={attr1}
          cardAttr2={attr2}
          cardAttr3={attr3}
          cardImage={imageurl}
          cardRare={rarity}
          cardTrunfo={trunfo}
        />
      </>
    );
  }
}

export default App;
