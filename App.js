/**
 * Main App Component
 */
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import Biometric from './screens/Biometric'
import DeviceInfo from './screens/DeviceInfoView'
import FeatureList from './screens/FeatureList'
import Login from './screens/Login'
import Maps from './screens/Maps'




const AppNavigator = createStackNavigator({
	Home: {
		screen: Login,
		navigationOptions: () => {
			return { header: null }
		}
	},
	Features: {
		screen: FeatureList,
		navigationOptions: () => {
			return {
				title: 'Features',
				headerLeft: null,
				headerTitleStyle: {
					flex: 1,
				}
			}
		}
	},
	Biometric: {
		screen: Biometric,
		navigationOptions: ({ navigation }) => {
			return {
				title: 'Features',
				headerTitleStyle: {
					flex: 1,
				},
				headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
			}
		}
	},
	DeviceInfo: {
		screen: DeviceInfo,
		navigationOptions: ({ navigation }) => {
			return {
				title: 'DeviceInfo',
				headerTitleStyle: {
					flex: 1,
				},
				headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
			}
		}
	},
	Maps: {
		screen: Maps,
		navigationOptions: ({ navigation }) => {
			return {
				title: 'Maps',
				headerTitleStyle: {
					flex: 1,
				},
				headerLeft: <HeaderBackButton onPress={() => navigation.goBack(null)} />,
			}
		}
	}
})

export default createAppContainer(AppNavigator)
