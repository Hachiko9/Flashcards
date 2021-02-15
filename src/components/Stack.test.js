import React from 'react';
import {shallow} from 'enzyme';
import {Stack} from './Stack';

const props = {
    stack: {
        id: 0,
        title: 'test title',
        cards: [{id: 0, prompt: 'prompt', answer: 'answer'}]
    }
}

describe('Stack', () => {
    const stack = shallow(<Stack {...props}/>);

    it('renders title', () => {
        expect(stack.find('h3').text()).toEqual(props.stack.title);
    })

    it('renders link home', () => {
        expect(stack.find('Link h4').text()).toEqual('Home');
    })

    it('renders number of cards', () => {
        expect(stack.find('Card').length).toEqual(props.stack.cards.length);
    })
})