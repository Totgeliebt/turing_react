import React from "react";

class ThirdClass extends React.Component {
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    height = [100, 200, 300]

    render() {
        return (
            <>
                {this.height.map((size, index) => (
                    <ContentClass
                        key={this.index}
                        size={size}
                        text={this.text}
                    />
                ))}
            </>
        )
    }
}

class ContentClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fontSize: ''
        }
    }

    heightRef = React.createRef()
    componentDidMount() {
        if(this.heightRef.current.clientHeight === 100) {
            this.setState({fontSize: 15})
        } else if(this.heightRef.current.clientHeight === 200) {
            this.setState({fontSize: 20})
        } else {
            this.setState({fontSize: 30})
        }
    }

    render() {
        return (
            <>
                <div ref={this.heightRef} style={{height: `${this.props.size}px`, fontSize: `${this.state.fontSize}px`, backgroundColor: 'green'}}>
                    {this.props.text}
                </div>
                <br/>
                <br/>
            </>
        )
    }
}

export default ThirdClass