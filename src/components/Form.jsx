import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name">
          Nome
          <input type="text" id="name" data-testid="name-input" />
        </label>
        <br />
        <label htmlFor="description">
          Descrição
          <textarea id="description" data-testid="description-input" />
        </label>
        <br />
        <label htmlFor="attr1">
          Atributo 1
          <input type="number" id="attr1" data-testid="attr1-input" />
        </label>
        <br />
        <label htmlFor="attr2">
          Atributo 2
          <input type="number" id="attr2" data-testid="attr2-input" />
        </label>
        <br />
        <label htmlFor="attr3">
          Atributo 3
          <input type="number" id="attr3" data-testid="attr3-input" />
        </label>
        <br />
        <label htmlFor="imageurl">
          Url da imagem
          <input type="text" id="imageurl" data-testid="image-input" />
        </label>
        <br />
        <label htmlFor="rarity">
          Raridade
          <select id="rarity" data-testid="rare-input">
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <br />
        <label htmlFor="trunfo">
          Super Trunfo
          <input type="checkbox" id="trunfo" data-testid="trunfo-input" />
        </label>
        <br />
        <button type="button" data-testid="save-button">Salvar</button>
      </form>
    );
  }
}

export default Form;
