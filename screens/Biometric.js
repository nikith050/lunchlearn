/* @flow */

import React, { Component } from 'react';
import {
	StyleSheet,
	Alert,
	View,
	TouchableOpacity,
	Text
} from 'react-native';

import TouchID from 'react-native-touch-id'

const optionalConfigObject = {
	title: 'Authentication Required',
	imageColor: '#e00606',
	imageErrorColor: '#ff0000',
	sensorDescription: 'Touch sensor',
	sensorErrorDescription: 'Failed',
	cancelText: 'Cancel',
	fallbackLabel: 'Show Passcode',
	unifiedErrors: true,
	passcodeFallback: false,
}

export default class Biometric extends Component {

	authenticate = () => {
		TouchID.authenticate('Authenticate using  Biometric', optionalConfigObject)
			.then(success => {
				Alert.alert("Authentication succeeded!")
			})
			.catch(error => {
				Alert.alert("Authentication failed! \n" + error.code)
			});
	}

	checkBiometric = () => {
		TouchID.isSupported(optionalConfigObject)
			.then(biometryType => {
				if (biometryType === 'FaceID') {
					Alert.alert('FaceID is supported.');
				} else {
					Alert.alert('TouchID is supported.');
				}
			})
			.catch(error => {
				Alert.alert(error);
			});
	}

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity style={[styles.buttonStyle, {marginBottom: 20}]} onPress={this.checkBiometric}>
					<Text style={styles.buttonText}>Check Biometric</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.buttonStyle]} onPress={this.authenticate}>
					<Text style={styles.buttonText}>Authenticate with Biometric</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonStyle: {
		borderColor: '#ddd',
		borderWidth: 0.5,
		padding: 15,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 6
	},
	buttonText: {
		fontSize: 18
	}
});
