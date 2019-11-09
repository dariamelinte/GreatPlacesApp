import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import PlusHeaderButton from '../components/PlusHeaderButton';
import PlaceItem from '../components/PlaceItem';

const styles = StyleSheet.create({
    
});

const PlacesList = ({navigation}) => {
    const places = useSelector(state => state.places.places);
    const onSelect = (placeId, placeTitle) => {
        navigation.navigate('PlaceDetail', {
            placeTitle,
            placeId,
        });
    }
    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
                <PlaceItem
                    item={item}
                    onSelect={() => onSelect(item.id, item.title)}
                />
            )}
        />
    );
}

PlacesList.navigationOptions = ({navigation}) => {
    return {
        headerTitle: 'All Places',
        headerRight: (
            <HeaderButtons
                HeaderButtonComponent={PlusHeaderButton}
            >
                <Item
                    title="Add place"
                    iconName={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                    onPress={() => navigation.navigate('NewPlace')}
                />
            </HeaderButtons>
        ),
    } ;
}

export default PlacesList;