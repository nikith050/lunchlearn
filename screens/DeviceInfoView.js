/* @flow */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text
} from 'react-native';

import DeviceInfo from 'react-native-device-info'

export default class DeviceInfoView extends Component {

	constructor() {
		super()

		this.state = {
			deviceInfo: {}
		}
	}

	async componentDidMount() {
		let deviceInfo = {};

		try {
			deviceInfo.manufacturer = DeviceInfo.getManufacturer();
			deviceInfo.model = DeviceInfo.getModel();
			deviceInfo.systemName = DeviceInfo.getSystemName();
			deviceInfo.systemVersion = DeviceInfo.getSystemVersion();
			deviceInfo.totalMemory = DeviceInfo.getTotalMemory();
			deviceInfo.batteryLevel = await DeviceInfo.getBatteryLevel();
		} catch (e) {
			console.log('Trouble getting device info ', e);
		}

		this.setState({
			deviceInfo
		})

		this.forceUpdate()
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.listItem}>
					<Text style={[styles.fontSize, styles.label]}>Manufacturer</Text>
					<Text style={[styles.fontSize]}>{this.state.deviceInfo.manufacturer}</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.fontSize, styles.label]}>Model</Text>
					<Text style={[styles.fontSize]}>{this.state.deviceInfo.model}</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.fontSize, styles.label]}>System Name</Text>
					<Text style={[styles.fontSize]}>{this.state.deviceInfo.systemName}</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.fontSize, styles.label]}>System Version</Text>
					<Text style={[styles.fontSize]}>{this.state.deviceInfo.systemVersion}</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.fontSize, styles.label]}>Total Memory</Text>
					<Text style={[styles.fontSize]}>{this.state.deviceInfo.totalMemory}</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.fontSize, styles.label]}>Battery Level</Text>
					<Text style={[styles.fontSize]}>{this.state.deviceInfo.batteryLevel}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	listItem: {
		padding: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		borderBottomColor: '#ddd',
		borderBottomWidth: 0.5
	},	
	label: {
		fontWeight: 'bold',
	},
	fontSize: {
		fontSize: 16
	}
});
