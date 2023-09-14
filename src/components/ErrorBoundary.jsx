import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isError: false,
            props: props
        }
    }

    componentDidCatch(error) {
       this.setState({ isError: true });
    }

    render() {
        if(this.state.isError === true) return <h1>oops. something went wrong</h1>
        else return this.props.children;
    }
}

export default ErrorBoundary;