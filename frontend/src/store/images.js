const SET_IMAGE = 'images/SET_IMAGE';

const setImage = (image) => ({
  type: SET_IMAGE,
  image,
});

export const uploadImage = (image) => async (dispatch) => {
  const res = await fetch('/api/images');
  const image = await res.json();
  dispatch(setImage(image.url));
};

const initialState = { image: null, };

const imagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IMAGE:
      return { ...state, image: action.image };
    default:
      return state;
  }
};

export default imagesReducer;
