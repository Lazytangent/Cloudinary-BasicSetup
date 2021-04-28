import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { uploadImage } from '../../store/images';

const ImageUpload = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [image, setImage] = useState();

  if (!user) return null;

  const updateImage = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(uploadImage(image));
  };

  return (
    <>
      <h3>Placeholder for ImageUpload</h3>
      <form onSubmit={submitHandler}>
        <input
          type="file"
          onChange={updateImage}
        />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default ImageUpload;
