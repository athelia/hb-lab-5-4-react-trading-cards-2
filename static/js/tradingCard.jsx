var tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  }
];

class TradingCard extends React.Component {
  render() {
    return (
      <div className="card">
        <p>Name: {this.props.name}</p>
        <img src={this.props.imgUrl} />
        <p>Skill: {this.props.skill} </p>
      </div>
    );
  }
}

class TradingCardContainer extends React.Component {
  constructor() {
    super();

    this.state = { cards: [] }; //initial value empty array
    this.updateCards = this.updateCards.bind(this);
  }

  getCardData() {
    $.get('/cards.json', this.updateCards);
  }

  updateCards(response) {
    const cards = response.cards;
    this.setState({ cards: cards });
  }

  componentDidMount() {
    this.getCardData();
  }

  render() {
    const tradingCards = [];

    for (const currentCard of this.state.cards) {
      tradingCards.push(
        <TradingCard
          key={currentCard.name}
          name={currentCard.name}
          skill={currentCard.skill}
          imgUrl={currentCard.imgUrl}
        />
      );
    }

    return (
      <div>{tradingCards}</div>
    );
  }
}

ReactDOM.render(
  <TradingCardContainer />,
  document.getElementById('container')
);
