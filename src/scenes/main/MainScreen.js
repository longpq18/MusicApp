import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MusicControl from 'react-native-music-control'
import { Icon }  from 'react-native-elements'

export default class MainScreen extends Component {
	render() {
		return(
			<View style={styles.container}>
				<Text>Home Music </Text>
			</View>
		)
	}
} 

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		// backgroundColor: 'rgba(0, 0, 0, 0.7)',
	}
})