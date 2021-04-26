import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IPhoto } from '../intefaces/flickr';
import { actions, selectAppState } from '../store/appReducer';
import { BUTTONS_NAME } from '../constants/appconstants';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

interface ICards {
  buttonName: string
  paginatedPhotos: IPhoto[]
}

const Cards: React.FC<ICards> = ({ buttonName, paginatedPhotos }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { bookmarks } = useSelector(selectAppState);
  const { BOOKMARK } = BUTTONS_NAME;

  const handleClick = (photo: IPhoto) => {
    if (buttonName === BOOKMARK) {
      const updatedBookmarks = [...bookmarks, photo];
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      dispatch(actions.setBookmarks(updatedBookmarks));
    } else {
      const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== photo.id);
      localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
      dispatch(actions.setBookmarks(updatedBookmarks));
    }
  };

  const handleDisabled = (photo: IPhoto) => {
    const isDisabled = bookmarks.some(
      (bookmark) => bookmark.id === photo.id && buttonName === BOOKMARK,
    );
    return isDisabled;
  };

  return (
    <Grid container spacing={4}>
      {paginatedPhotos.map((photo) => (
        <Grid item key={photo.id} xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={photo.url_n}
              title={photo.title}
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {photo.title}
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                size="small"
                color="primary"
                disabled={handleDisabled(photo)}
                onClick={() => handleClick(photo)}
              >
                {buttonName}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
