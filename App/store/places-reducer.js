import Constants from '../constants/Constants';
import Place from '../models/place';

const { ADD_PLACE } = Constants;

const initialState = {
    places: [],
};

export default (state = initialState, action) => {
    const { type, placeData } = action;
    switch (type) {
        case ADD_PLACE: 
            const newPlace = new Place(new Date().toString(), placeData.title);
            return {
                ...state,
                places: [...state.places, newPlace],
            };
        default: return state;
    }
}