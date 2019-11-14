import React, { useState, useEffect, useCallback } from 'react';
import { Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../constants/Colors';

const styles = StyleSheet.create({
    map: {
        flex: 1,
    },
    headerButton: {
        marginHorizontal: 20
    },
    headerButtonText: {
        fontSize: 16,
        color: Platform.OS ==='ios' ? Colors.primary : Colors.white
    }
});

const Map = ({ navigation }) => {
    const initialLocation = navigation.getParam('initialLocation');
    const readOnly = navigation.getParam('readonly');
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);

    const mapRegion = {
        latitude: initialLocation ? initialLocation.latitude : 47.1585, 
        longitude: initialLocation ? initialLocation.longitude : 27.6014,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    };

    const selectLocationHandler = ({ nativeEvent }) => {
        if (readOnly) {
            return;
        }
        setSelectedLocation(nativeEvent.coordinate);
    }

    let markerCoordinates;

    if (selectedLocation) {
        markerCoordinates = {...selectedLocation};
    }

    const saveLocation = useCallback(() => {
        if (!selectedLocation) {
            return;
        }
        navigation.navigate('NewPlace', {selectedLocation});
    }, [selectedLocation]);
    
    useEffect(() => {
        navigation.setParams({ saveLocation });
    }, [saveLocation]);

    return (
        <MapView
            style={styles.map}
            region={mapRegion}
            onPress={selectLocationHandler}
        >
            {markerCoordinates ? (
                <Marker
                    title="Picked Location"
                    coordinate={markerCoordinates}
                />
            ) : null}
            
        </MapView>
    );
}

Map.navigationOptions = ({ navigation }) => {
    const saveLocation = navigation.getParam('saveLocation');
    const readOnly = navigation.getParam('readonly');
    if (!readOnly) {
        return {
            headerRight: (
                <TouchableOpacity
                    style={styles.headerButton}
                    onPress={saveLocation}
                >
                    <Text style={styles.headerButtonText}> Save </Text>
                </TouchableOpacity>        
            )
        };
    }
}

export default Map;