import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
});

const PlaceDetail = () => {
   return (
       <View>
           <Text> Place Detail Screen </Text>
       </View>
   );
}

PlaceDetail.navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('placeTitle'),
})

export default PlaceDetail;