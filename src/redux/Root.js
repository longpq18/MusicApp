import React, {Component} from 'react';
import {View} from 'react-native'
import {Provider} from 'react-redux';
import {store} from './store/store';

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                {this.props.children}
            </Provider>
        )
    }
}
