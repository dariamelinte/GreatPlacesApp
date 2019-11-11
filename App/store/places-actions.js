import * as FileSystem from 'react-native-fs';
import Constants from '../constants/Constants';

const { ADD_PLACE } = Constants;

export const addPlace = (title, image) => {
    return async dispatch => {        
        if (image) {
            const fileName = image.split('/').pop();
            const newPath = 'file://' + FileSystem.DocumentDirectoryPath + '/' + fileName;
            FileSystem.moveFile(image, newPath)
            .then(() => {
                dispatch({
                    type: ADD_PLACE,
                    placeData: {
                        title,
                        image : newPath
                    },
                })
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            dispatch({
                type: ADD_PLACE,
                placeData: {
                    title,
                    image
                },
            })
        }        
    }
}