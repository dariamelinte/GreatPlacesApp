import React, { useState } from 'react';
import { View, Button, Text, ActivityIndicator, Alert, StyleSheet } from 'react-native';
import RNLocation from 'react-native-location';
import { Colors } from '../constants/Colors';
import MapPreview from './MapPreview';

const styles = StyleSheet.create({
    locationPicker: {
        marginBottom: 15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: Colors.ligthGray,
        borderWidth: 1,
    },
});

const LocationPicker = () => {
    const [isFetching, setIsFetching] = useState(false);
    const [pickedLocation, setPickedLocation] = useState();

    const getLocationHandler = async () => {
        const hasAccepted = await RNLocation.requestPermission({
            ios: 'whenInUse',
            android: {
              detail: 'fine',
              rationale: {
                title: "We need to access your location",
                message: "We use your location to show where you are on the map",
                buttonPositive: "OK",
                buttonNegative: "Cancel"
              }
            }
        })
        if (hasAccepted) {
            try {
                setIsFetching(true);
                const location = await RNLocation.getLatestLocation({ timeout: 60000 });
                setPickedLocation({
                    latitude: location.latitude,
                    longitude: location.longitude
                });
            } catch (err) {
                console.log(err);
                Alert.alert('Could not find a location .',
                    'Please try again or select a location from the map',
                    [{ text: 'Ok' }]);
            }
            setIsFetching(false);
        }
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation}>
                {isFetching ? (
                    <ActivityIndicator
                        size="large"
                        color={Colors.primary}
                    />
                ) : (
                    <Text> No location chosen yet ! </Text>
                )}
            </MapPreview>
            <Button 
                title="Get user location"
                color={Colors.primary}
                onPress={getLocationHandler}
            />
        </View>
    )
}

export default LocationPicker