import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import FetchAlert from './Alert';
import { IResult } from '../intefaces/flickr';
import { actions } from '../store/appReducer';
import { API_ADDITIONAL_OPTIONS } from '../constants/appconstants';

const useStyles = makeStyles((theme: Theme) => ({
  searchArea: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 0, 2),
  },
}));

const SearchArea: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isError, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const fetchInput = async (value: string) => {
    try {
      if (value.length === 0) return;
      const { REACT_APP_API_KEY, REACT_APP_API_URL_BASE } = process.env;
      setLoading(true);
      const response = await fetch(`${REACT_APP_API_URL_BASE}method=flickr.photos.search&api_key=${REACT_APP_API_KEY}&tags=${value}${API_ADDITIONAL_OPTIONS}`);
      const result: IResult = await response.json();
      const { photos: { photo } } = result;
      dispatch(actions.setPhotos(photo));
      setLoading(false);
    } catch (e) {
      setLoading(false);
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return;
    const { value } = e.target as HTMLInputElement;
    fetchInput(value);
  };

  return (
    <div className={classes.searchArea}>
      <Container maxWidth="sm">
        <TextField
          label="Start Typing"
          style={{ margin: 8 }}
          placeholder="Name must be at least one character"
          helperText="Press Enter to start search"
          fullWidth
          margin="normal"
          variant="outlined"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
        />
        {isError && <FetchAlert />}
      </Container>

    </div>
  );
};

export default SearchArea;
