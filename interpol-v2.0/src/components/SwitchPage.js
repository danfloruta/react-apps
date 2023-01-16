import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import "./SwitchPage.css";

export default function SwitchPage(props) {
  const { data } = props;
  console.log(data);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = props.itemsPerPage;
  console.log(itemsPerPage);

  const endOffset = itemOffset + itemsPerPage;
  //   const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data[0].length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data[0].length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      />
    </>
  );
}
