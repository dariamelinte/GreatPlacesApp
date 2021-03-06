import React, { useState, useCallback } from 'react';
import { View, Text, TextInput, Button, ScrollView,  StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Colors } from '../constants/Colors';
import * as placesAction from '../store/places-actions';
import ImagePicker from '../components/ImagePicker';
import LocationPicker from '../components/LocationPicker';

const styles = StyleSheet.create({
    form: {
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center',
    },
    textInput: {
        borderBottomColor: Colors.ligthGray,
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2, 
    }, 
});

const NewPlaces = ({ navigation }) => {
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState();
    const [selectedLocation, setSelectedLocation] = useState();

    const dispatch = useDispatch();
    const savePlaceHandler = () => {
        dispatch(placesAction.addPlace(titleValue, selectedImage, selectedLocation));
        navigation.goBack();
    }
    const onLocationPicked = useCallback((location) => {
        setSelectedLocation(location);
    }, []);
    return (
        <ScrollView>
            <View style={styles.form }>
                <Text style={styles.label}> Title  </Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => setTitleValue(value)}
                    multiline
                /> 
                <ImagePicker
                    onImageTaken={(imagePath) => setSelectedImage(imagePath)}
                />
                <LocationPicker
                    navigation={navigation}
                    onLocationPicked={onLocationPicked}
                />
                <Button
                    title="Save Place"
                    color={Colors.primary}
                    value={titleValue}
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
   );
}

NewPlaces.navigationOptions = {
    headerTitle: 'Add Place',
}

export default NewPlaces;