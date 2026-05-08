import React, {Component} from 'react'

const withOpen = (WrappedComponent) => {

  // (Anonymous class匿名類別)
  return class extends Component {
        state = {
            open: false
        };

        toggleOpen = () => {
            this.setState({
                open: !this.state.open
            });
        };

        render() {
            return (
                <WrappedComponent
                    // topField={this.props.topField}
                    {...this.props}
                    open={this.state.open}
                    toggleOpen={this.toggleOpen}
                />
            );
        };
    };

};

export default withOpen;
