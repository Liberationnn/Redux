import React from "react";
import PropTypes from 'prop-types';

let connect = (mapStateToProps, mapDispatchToProps) => (Component) => {
    class Proxy extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }

        componentWillMount() {
            this.unSubscribe = this.context.store.subscribe(() => {
                this.setState(mapStateToProps(this.context.store.getState()));
            });
        }

        componentWillUnmount() {
            this.unSubscribe();
        }

        render() {
            return <Component {...this.state} {...mapDispatchToProps(this.context.store.dispatch)}/>
        }
    }

    Proxy.contextTypes = {
        store: PropTypes.object
    };

    return Proxy;
};

export {connect};