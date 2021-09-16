import React, {useRef, useState} from 'react'

class FocusClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
        this.myRef = React.createRef()
    }
    shouldBlur = (e) => {
        if (e.target.value === 'Hello World!') {
            this.myRef.current.blur();
        }
        this.setState({text: e.target.value})
    }

    render() {
        return (
            <div>
                <input onChange={this.shouldBlur} type="text" ref={this.myRef}/>
                <button onClick={() => {this.myRef.current.focus()}}>Focus Input</button>
            </div>
        )
    }
}

export default FocusClass