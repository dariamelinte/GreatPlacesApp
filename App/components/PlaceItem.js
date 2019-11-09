import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Colors } from '../constants/Colors';

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: Colors.ligthGray,
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.ligthGray,
        borderColor: Colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: Colors.black,
        fontSize: 18,
        marginBottom: 5,
        textAlign: 'center',
    },
    address: {
        color: Colors.gray,
        fontSize: 16
    }
});

const PlaceItem = ({ item, onSelect }) => {
    const { title, address, image } = item;
    console.log('title PlaceItem', title);
    return (
        <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    );
};

PlaceItem.propTypes = {
    item: PropTypes.instanceOf(Object).isRequired,
    onSelect: PropTypes.func.isRequired,
}

PlaceItem.defaultProps = {
    image: null,
    address: '',
}

export default PlaceItem;
