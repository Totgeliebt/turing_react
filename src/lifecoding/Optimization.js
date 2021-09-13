import React from 'react'

class Optimiztion extends React.Component {

    state = {
        count: 0
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate')
       if (nextState.count === this.state.count) {
           return false
       } else {
           return true
       }
    }

    handleButtonClick =() => {
        this.setState({...this.state, count: this.state.count + 1})
    }
    render() {
        return(
            <button onClick={this.handleButtonClick}>Child value: {this.state.count}</button>
        )
    }
}

class PureOptimization extends React.PureComponent {

    state = {
        count: 0
    }

    handleButtonClick =() => {
        this.setState({...this.state, count: this.state.count + 1})
    }
    render() {
        console.log('PureComponent')
        return(
            <button onClick={this.handleButtonClick}>Child Pure Component value: {this.state.count}</button>
        )
    }
}

const FuncOptimization = () => {
    const [value, setValue] = React.useState(0)
    const handleButtonCLick = () => {
        setValue[value + 1]
    }

    console.log('Functional component render')
    return (
        <button onClick={handleButtonCLick}>Functional value: {value}</button>
    )
}


const Main = () => {
    const [value, setValue] = React.useState(10)

    const handleValueChange =() => {
        setValue(value + 1)
    }
    return (
        <div>
            <button onClick={handleValueChange}>Change parent value: {value}</button>
            <Optimiztion/>
            <PureOptimization/>
            <FuncOptimization/>
            <MemoFuncOptimization/>
        </div>
    )
}


export default Main