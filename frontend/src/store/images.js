import { csrfFetch } from './csrf';

const SET_IMAGE = 'images/SET_IMAGE';

const setImage = (image) => ({
  type: SET_IMAGE,
  image,
});

export const uploadImage = (imageData, userId) => async (dispatch) => {
  const formData = new FormData();
  formData.append("image", imageData);
  formData.append("userId", userId);
  const res = await csrfFetch('/api/images', {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });
  const image = await res.json();
  dispatch(setImage(image.imageUrl));
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
