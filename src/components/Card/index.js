import React from 'react'
import './styles.css'

export default  class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor')
        this.state = {date: new Date()};
    }
    componentDidMount() {
        console.log('componentDidMount')
    }
    
    componentWillUnmount() {
        console.log('componentWillMount')
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('shouldComponentUpdate', nextProps, nextState, nextContext)
    }
    componentDidUpdate() {
        console.log('componentDidUpdate')
    }
    componentDidCatch(errorString, errorInfo){
        console.log('componentDidCatch', errorString, errorInfo)
    }
    render() {
        console.log('rendereo')
        return <div className="card">{this.props.title}</div>;
    }
}
