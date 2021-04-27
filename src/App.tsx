import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NavTabs from './Components/NavTabs';
import { actions } from './store/appReducer';
import { IPhoto } from './intefaces/flickr';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const result = localStorage.getItem('bookmarks');
    if (!result || result.length === 0) return;
    const bookmarks: IPhoto[] = JSON.parse(result);
    dispatch(actions.setBookmarks(bookmarks));
  }, []);

  return (
    <>
      <CssBaseline />
      <Header />
      <NavTabs />
      <Footer />
    </>
  );
};

export default App;
