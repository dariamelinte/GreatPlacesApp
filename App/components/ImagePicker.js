import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import ImagePicker from 'react-native-image-picker';

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
    },
    imagePreview: {
        width: '100%',
        height: 200,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: Colors.ligthGray,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

const ImgPicker = () => {

    const [ pickedImage, setPickedImage ] = useState();

    const options = {
        tintColor: Colors.primary,
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
        noData: true,
        quality: 0.5,
    }

    const takeImageHandler = () => {
        ImagePicker.launchCamera(options, (response) => {
            setPickedImage(response.uri);
        });
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {pickedImage ? (
                    <Image style={styles.image} source={{uri : pickedImage}} />
                ) : (
                    <Text> No image picked yet . </Text>
                )}                
            </View>
            <Button
                title="Take picture"
                color={Colors.primary}
                onPress={takeImageHandler}
            />
        </View>
    )
}

export default ImgPicker;
