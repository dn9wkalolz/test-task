import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

export const BUTTONS_NAME = {
  BOOKMARK: 'bookmark it!',
  REMOVE: 'remove it!',
  TAB_BUTTONS: [{ label: 'finder', icon: SearchIcon }, { label: 'bookmarks', icon: BookmarkBorderIcon }],
};

export const API_ADDITIONAL_OPTIONS = '&tag_mode=all&extras=url_n&format=json&nojsoncallback=1';
