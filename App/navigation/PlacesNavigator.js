import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import PlacesList from '../screens/PlacesList';
import PlaceDetail from '../screens/PlaceDetail';
import NewPlace from '../screens/NewPlace';
import Map from '../screens/Map';
import { Colors } from '../constants/Colors';

const PlacesNavigator = createStackNavigator(
    {
      PlacesList,
      PlaceDetail,
      NewPlace,
      Map,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? Colors.white : Colors.primary
      }
    }
  );
  
  export default createAppContainer(PlacesNavigator);
  