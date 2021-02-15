import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Stacklist from "./Stacklist";


class App extends Component {
    render() {
        return (
            <div>
                <h2>Flashcards Pro</h2>
                <hr/>
                <Stacklist/>
                <hr/>
                <Link to='stack_form'>Create a new stack</Link>
            </div>
        )
    }
}

export default App;