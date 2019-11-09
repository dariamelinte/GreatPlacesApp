import Constants from '../constants/Constants';

const { ADD_PLACE } = Constants;

export const addPlace = title => ({
        type: ADD_PLACE,
        placeData: {
            title,
        },
});