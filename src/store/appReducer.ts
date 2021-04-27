// eslint-disable-next-line import/no-cycle
import { InferActionsTypes, RootState } from './rootReducer';
import { IPhoto } from '../intefaces/flickr';
import {
  SET_PAGE, SET_ROWS_PER_PAGE, SET_PHOTOS, SET_BOOKMARKS,
} from './types';

const InitialState = {
  photos: [] as IPhoto[],
  page: 0,
  rowsPerPage: 10,
  bookmarks: [] as IPhoto[],
};

export const appReducer = (state = InitialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_PHOTOS:
    case SET_ROWS_PER_PAGE:
    case SET_PAGE:
    case SET_BOOKMARKS:
      return { ...state, ...action.payload };
    default: return state;
  }
};

export const actions = {
  setPhotos: (photos: IPhoto[]) => ({
    type: SET_PHOTOS,
    payload: {
      photos,
    },
  } as const),
  setPage: (page: number) => ({
    type: SET_PAGE,
    payload: {
      page,
    },
  } as const),
  setRowsPerPage: (rowsPerPage: number) => ({
    type: SET_ROWS_PER_PAGE,
    payload: {
      rowsPerPage,
    },
  } as const),
  setBookmarks: (bookmarks: IPhoto[]) => ({
    type: SET_BOOKMARKS,
    payload: {
      bookmarks,
    },
  }),
};

export const selectAppState = (state: RootState): InitialStateType => state.app;

type ActionsType = InferActionsTypes<typeof actions>;
type InitialStateType = typeof InitialState;
