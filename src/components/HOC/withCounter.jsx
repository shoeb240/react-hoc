import React from "react";

function withCounter(OriginalCounter) {
    class NewCounter extends React.Component{
        state = {
            count: 0,
        };

        increment = (inc) => {
            this.setState((prevState) => ({count: parseInt(prevState.count) + inc}));
        };

        render() {
            let {count} = this.state;
            return (
                <OriginalCounter count={count} increment={this.increment} />
            );
        }
    }

    return NewCounter;
}

export default withCounter;