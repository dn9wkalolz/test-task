export const getPageLimit = (
  page: number, rows: number,
): number[] => [page * rows, page * rows + rows - 1];
