import React, { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import MapView, { Region, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function MapScreen() {
  const [location, setLocation] = useState<Region | null>(null);
  const [userLocation, setUserLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const getUsersCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const newRegion: Region = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        };
        setLocation(newRegion);
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      error => {
        console.warn('Error getting location:', error);
        Alert.alert('Location Error', 'Could not get your current location');
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getUsersCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'Location permission is required to show your current location on the map',
          );
        }
      } catch (err) {
        console.warn(err);
      }
    } else {
      getUsersCurrentLocation();
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={location || undefined}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        {userLocation && (
          <Marker
            coordinate={userLocation}
            title="Ваше местоположение"
            description="Вы находитесь здесь"
            pinColor="#E391E9"
          >
          </Marker>
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  markerContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  markerBubble: {
    backgroundColor: '#E391E9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
  },
  markerText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  markerArrow: {
    backgroundColor: 'transparent',
    borderWidth: 8,
    borderColor: 'transparent',
    borderTopColor: '#E391E9',
    alignSelf: 'center',
    marginTop: -1,
  },
});
