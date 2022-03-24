import React from 'react';


class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>{this.props.children}</h1>
                <h4>{this.state.date.toLocaleTimeString(this.props.local)}</h4>
            </div>
        );
    }
}
export default Clock;