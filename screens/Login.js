import React, { Component } from 'react'
import { Fragment, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, StatusBar } from 'react-native'
import { View } from 'native-base'

export default class Login extends Component {

	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}

		console.log('i am in debugging mode')
	}

	onButtonPress = () => {
		this.props.navigation.navigate('Features')
	}

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<StatusBar barStyle='light-content' />
				<KeyboardAvoidingView behavior="padding" style={styles.container}>
					<View style={styles.container}>
						<View style={styles.loginContainer}>
							<Image source={{ uri: 'http://flbaptist.org/wp-content/uploads/2017/01/Lunch-and-Learn-pic.png' }} style={{
								position: 'absolute',
								width: 200,
								height: 200
							}} />
						</View>
						<View style={styles.formContainer}>
							<TextInput
								style={styles.input}
								onSubmitEditing={() => this.passwordInput.focus()}
								autoCorrect={false}
								returnKeyType="next"
								placeholder='Username'
								placeholderTextColor='rgba(225,225,225,0.7)'
								value={this.state.username}
								onChangeText={e => { this.setState({ username: e }) }}
							/>
							<TextInput
								style={styles.input}
								returnKeyType="go"
								onSubmitEditing={this.onButtonPress}
								ref={(input) => this.passwordInput = input}
								placeholder='Password'
								placeholderTextColor='rgba(225,225,225,0.7)'
								secureTextEntry
								value={this.state.password}
								onChangeText={e => { this.setState({ password: e }) }}
							/>
							<TouchableOpacity
								style={styles.buttonContainer}
								onPress={this.onButtonPress}
							>
								<Text style={styles.buttonText}>LOGIN</Text>
							</TouchableOpacity>
						</View>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2c3e50'
	},
	loginContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	formContainer: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(225,225,225,0.2)',
		marginBottom: 10,
		padding: 10,
		color: '#fff'
	},
	buttonContainer: {
		backgroundColor: '#2980b6',
		paddingVertical: 15
	},
	buttonText: {
		color: '#fff',
		textAlign: 'center',
		fontWeight: '700'
	}
})
