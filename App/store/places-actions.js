import * as FileSystem from 'react-native-fs';
import Constants from '../constants/Constants';
import ENV from '../env';

const { ADD_PLACE } = Constants;

export const addPlace = (title, image, location) => {
    return async dispatch => {
        const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${
            location.latitude
        },${
            location.longitude
        }&key=${ENV.googleApiKey}`);  
        
        if (!response.ok) {
            throw new Error('Something went wrong !');
        }
        
        const resData = await response.json();

        if (resData.status !== "OK") {
            throw new Error('Something went wrong !');
        }
        
        const address = resData.results[0].formatted_address;

        if (image) {
            const fileName = image.split('/').pop();
            const newPath = 'file://' + FileSystem.DocumentDirectoryPath + '/' + fileName;
            FileSystem.moveFile(image, newPath)
            .then(() => {
                dispatch({
                    type: ADD_PLACE,
                    placeData: {
                        title,
                        image : newPath,
                        address,
                        latitude: location.latitude,
                        longitude: location.longitude
                    },
                })
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log(location.latitude, location.longitude);
            dispatch({
                type: ADD_PLACE,
                placeData: {
                    title,
                    image,
                    address,
                    latitude: location.latitude,
                    longitude: location.longitude
                },
            })
        }        
    }
}