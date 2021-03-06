import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl, FormLabel, Button} from 'react-bootstrap';
import {addStack} from '../Actions';

class StackForm extends Component {
    constructor() {
        super();

        this.state = {
            title: '',
            cards: []
        }
    }

    addCard() {
        const { cards } = this.state;

        cards.push({id: cards.length, prompt: '', answer: ''});

        this.setState({cards});
    }

    updateCardPart(event, index, part) {
        const {cards} = this.state;

        cards[index][part] = event.target.value;

        this.setState({cards});
    }

    addStack() {
        this.props.addStack(this.state);
    }

    render() {
        return (
            <div>
                <Link to='/'>
                    <h4 className='link-home'>Home</h4>
                </Link>
                <h4>Create a new stack</h4>
                <br/>
                <Form inline>
                    <FormGroup>
                        <FormLabel>Title:</FormLabel>
                        {' '}
                        <FormControl onChange={event => this.setState({title: event.target.value})}/>
                    </FormGroup>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <br/>
                                    <FormGroup>
                                        <FormLabel>Prompt</FormLabel>
                                        {' '}
                                        <FormControl
                                            onChange={event => this.updateCardPart(event, index, 'prompt')}/>
                                        <FormLabel>Answer</FormLabel>
                                        {' '}
                                        <FormControl  onChange={event => this.updateCardPart(event, index, 'answer')}/>
                                    </FormGroup>
                                </div>
                            )
                        })
                    }
                </Form>
                <br/>
                <Button onClick={() => this.addCard()}>Add a card</Button>
                {' '}
                <Button onClick={() => this.addStack()}>Save and add stack</Button>
            </div>
        )
    }
}

export default connect(null, {addStack})(StackForm);