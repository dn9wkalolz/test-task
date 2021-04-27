import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TablePaginationDemo from './PageSwitcher';
import SearchArea from './SearchArea';
import Cards from './Cards';
import { selectAppState } from '../store/appReducer';
import { getPageLimit } from '../constants/appMethods';
import { BUTTONS_NAME } from '../constants/appconstants';
import { IPhoto } from '../intefaces/flickr';

const useStyles = makeStyles((theme: Theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

const ImageFinder: React.FC = () => {
  const classes = useStyles();
  const { BOOKMARK } = BUTTONS_NAME;
  const { page, rowsPerPage, photos } = useSelector(selectAppState);
  const [paginatedPhotos, setPaginatedPhotos] = useState<IPhoto[]>([]);

  useEffect(() => {
    const [min, max] = getPageLimit(page, rowsPerPage);
    const paginatedResult = photos.filter((_, idx) => idx >= min && idx <= max);
    setPaginatedPhotos(paginatedResult);
  }, [page, photos]);

  return (
    <>
      <SearchArea />
      <TablePaginationDemo />
      <Container className={classes.cardGrid} maxWidth="md">
        {paginatedPhotos.length !== 0
          ? <Cards buttonName={BOOKMARK} paginatedPhotos={paginatedPhotos} />
          : <div>No image here</div>}
      </Container>
    </>
  );
};

export default ImageFinder;
