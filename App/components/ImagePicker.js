import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import ImagePicker from 'react-native-image-picker';

const styles = StyleSheet.create({
    imagePicker: {
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
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
    imageButton: {
        width: '100%',
    }
});

const ImgPicker = ({ onImageTaken }) => {

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
            onImageTaken(response.uri);
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
                style={styles.imageButton}
                width="100vw"
            />
        </View>
    )
}

ImgPicker.defaultProps = {
    pickedImage: 'null'
}

export default ImgPicker;
