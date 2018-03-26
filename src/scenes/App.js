import React, {Component} from 'react';
import {RootStack} from './../routes/Route';
import Root from './../redux/Root';
import {View, Text} from "react-native";
// import SocketUtil from "./utils/SocketUtil";
// import LoadingView from "./scenes/LoadingView";

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentWillUnmount(){
        // SocketUtil.close();
    }

    render() {
        return (
            <Root>
                <View style={{width: "100%", height: "100%"}}>
                    <RootStack />
                </View>
            </Root>
        );
    }
}
