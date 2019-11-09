import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from 'react-native-vector-icons';
import { Colors } from '../constants/Colors';

const PlusHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'ios' ? Colors.primary : Colors.white}
        />
    );
}
export default PlusHeaderButton;