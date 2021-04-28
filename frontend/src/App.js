import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Navigation from './components/Navigation';
import ImageUpload from './components/ImageUpload';
import { restoreUser } from './store/session';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <ImageUpload />
    </>
  );
}

export default App;
