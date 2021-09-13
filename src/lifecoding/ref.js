
import React from 'react'
const RefComponent = () => {

    const ref = React.useRef(null)

    React.useEffect(() =>{
        console.log({ref})
        console.log(ref.current.clientWidth)
        ref.current.focus()
    })
    const handleClick = () => {
        ref.current.focus()
    }
    return (
        <input ref={ref}/>
    )
}

class RefClassComponent extends React.Component {

  ref1 = React.createRef()
  ref2 = React.createRef()

    componentDidMount() {
      console.log(this.ref1)
        // console.log(this.ref.current.clientWidth)
        this.ref1.current.focus()
    }

    handleButtonClick = () => {
        // this1.ref.current.focus()
        this.ref2.current.focus()
    }

    render() {

        return (
            <>
            {/*<div ref={this.ref}>Some div in class component</div>*/}
            <div><input ref={this.ref1}/></div>
            <div><input ref={this.ref2}/></div>
            <div><input/></div>
            <button onClick={this.handleButtonClick}>Select one input</button>
            </>
        )
    }
}


export default RefClassComponent