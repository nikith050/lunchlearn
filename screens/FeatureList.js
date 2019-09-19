/* @flow */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	TouchableOpacity
} from 'react-native';

export default class FeatureList extends Component {

	biometricClick = () => {
		this.props.navigation.navigate('Biometric')
	}

	deviceInfoClick = () =>  {
		this.props.navigation.navigate('DeviceInfo')
	}

	mapsClick = () =>  {
		this.props.navigation.navigate('Maps')
	}

	render() {
		return (
			<View style={styles.container}>
				<ScrollView>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.biometricClick}>
						<Text style={styles.buttonText}>
							Biometric
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.deviceInfoClick}>
						<Text style={styles.buttonText}>
							Device Info
						</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.buttonStyle} onPress={this.mapsClick}>
						<Text style={styles.buttonText}>
							Google Maps
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	buttonStyle: {
		borderBottomColor: '#ddd',
		borderBottomWidth: 0.5,
		justifyContent: 'center',
		padding: 15
	},
	buttonText: {
		fontSize: 18
	}
})
