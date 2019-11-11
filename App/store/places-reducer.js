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
            const { title, image } = placeData;
            const newPlace = new Place(
                new Date().toString(),
                title,
                image,
            );
            return {
                ...state,
                places: state.places.concat(newPlace),
            };
        default: return state;
    }
}