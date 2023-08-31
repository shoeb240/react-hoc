import React from "react";

function withCounter(OriginalCounter) {
    class NewCounter extends React.Component{
        state = {
            count: 0,
        };

        increment = (inc) => {
            console.log('At withCounter increment');
            
            this.setState((prevState) => ({count: parseInt(prevState.count) + parseInt(inc)}));
        };

        render() {
            console.log('At withCounter');
            let {count} = this.state;

            return (
                <OriginalCounter count={count} increment={this.increment} />
            );
        }
    }

    return NewCounter;
}

export default withCounter;