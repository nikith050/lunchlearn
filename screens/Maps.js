/* @flow */

import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Alert,
} from 'react-native'

import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
import Permissions from 'react-native-permissions'

export default class Maps extends Component {

  constructor() {
    super()
    this.state = {
      ready: false,
      location: {
        latitude: 0.0, longitude: 0.0
      },
      error: null
    }

    this.checkPermissions = this.checkPermissions.bind(this)
    this.getUserLocation = this.getUserLocation.bind(this)
    this.requestPermission = this.requestPermission.bind(this)
    this.geoSuccess = this.geoSuccess.bind(this)
    this.geoFailure = this.geoFailure.bind(this)

  }

  checkPermissions(success, failure) {
    Permissions.check('location').then(response => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if(response == 'authorized') {
        this.getUserLocation()
      } else {
        this.requestPermission()
      }
    });
  }

  getUserLocation() {
    let geoOptions = {
      enableHighAccuracy: true,
      timeout: 20000,
    }

    this.setState({ready: false})

    Geolocation.getCurrentPosition(
      this.geoSuccess,
      this.geoFailure,
      geoOptions
    )
  }

  requestPermission() {
    Permissions.request('location').then(response => {
      // Returns once the user has chosen to 'allow' or to 'not allow' access
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if (response == 'authorized') {
        this.getUserLocation()
      } else {
        Alert.alert("Failed", "Location permission was denied")
      }
    });
  };

  componentDidMount() {
    this.checkPermissions()
  }

  geoSuccess(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude

    console.log(JSON.stringify(position))

    this.setState({
      ready: true,
      location: {
        latitude,
        longitude
      },
      error: null
    })
  }

  geoFailure(error) {
    Alert.alert("Error fetching Geo location", JSON.stringify(error))
    this.setState({error, ready: false});
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          showsUserLocation={true}
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.location.latitude,
            longitude: this.state.location.longitude,
            // latitude: Number(lat),
            // longitude: Number(lng),
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
          <Marker
            coordinate={
              {latitude: this.state.location.latitude, longitude: this.state.location.longitude}
            }
            title={"You are here!"}
            description={"You are here!"}
            />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
  //  height: 400,
  //  width: 400,
    flex: 1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
