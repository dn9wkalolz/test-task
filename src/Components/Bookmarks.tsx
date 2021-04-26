import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Cards from './Cards';
import { selectAppState } from '../store/appReducer';
import { BUTTONS_NAME } from '../constants/appconstants';

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const Bookmarks: React.FC = () => {
  const classes = useStyles();
  const { bookmarks } = useSelector(selectAppState);
  const { REMOVE } = BUTTONS_NAME;

  return (
    <>
      <Container className={classes.cardGrid} maxWidth="md">
        {bookmarks.length !== 0
          ? <Cards buttonName={REMOVE} paginatedPhotos={bookmarks} />
          : <div>No image here</div>}
      </Container>
    </>
  );
};

export default Bookmarks;
