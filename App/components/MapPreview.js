import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import ENV from '../env';

const styles = StyleSheet.create({
    mapImage: {
        width: '100%',
        height: '100%', 
    },
    mapPreview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const MapPreview = props => {
    let imagePreviewUrl;
    if (props.location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
            props.location.latitude
        },${
            props.location.longitude
        }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
            props.location.latitude
        },${
            props.location.longitude
        }&key=${
            ENV.googleApiKey
        }`
    }

    return (
        <TouchableOpacity
            style={[styles.mapPreview, props.style]}
            onPress={props.onPress}
        >
            {props.location ? (
                <Image
                    style={styles.mapImage}
                    source={{uri: imagePreviewUrl}}
                />
            ) : props.children}
        </TouchableOpacity>
    )
}

export default MapPreview;
