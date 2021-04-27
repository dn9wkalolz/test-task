import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TablePagination from '@material-ui/core/TablePagination';
import Container from '@material-ui/core/Container';
import { actions, selectAppState } from '../store/appReducer';

const PageSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const { page, rowsPerPage, photos } = useSelector(selectAppState);

  const handleChangePage = (e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    dispatch(actions.setPage(newPage));
  };

  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const newRowsValue = parseInt(e.target.value, 10);
    dispatch(actions.setRowsPerPage(newRowsValue));
    dispatch(actions.setPage(0));
  };

  return (
    <Container maxWidth="sm">
      <TablePagination
        component="div"
        count={photos.length}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPageOptions={[10, 25]}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Container>
  );
};

export default PageSwitcher;
