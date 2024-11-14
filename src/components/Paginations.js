import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPageData } from "../redux/actions/moviesActions.js";
import { useEffect, useState } from "react";
function Paginations() {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.pageCount);
  const search = useSelector((state) => state.searchWord);
  useEffect(() => {
    setPageCount(count);
  });

  function handlePageClick({ selected }) {
    dispatch(getPageData(selected + 1, search));
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="التالي"
      onPageChange={handlePageClick}
      marginPagesDisplayed={2}
      pageRangeDisplayed={2}
      pageCount={pageCount}
      previousLabel="السابق"
      containerClassName="pagination justify-content-center p-3"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      nextClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      breakClassName="page-item"
      breakLinkClassName="page-link"
      activeClassName="active"
    />
  );
}

export default Paginations;
