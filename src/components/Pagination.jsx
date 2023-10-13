import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  pageGroup,
  onPageChange,
  onPageGroupChange,
}) => {
  const pagesPerGroup = 3;
  const startPage = (pageGroup - 1) * pagesPerGroup + 1;
  const endPage = Math.min(pageGroup * pagesPerGroup, totalPages);

  const pagination = [];
  for (let i = startPage; i <= endPage; i++) {
    pagination.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`button-add ${currentPage === i ? "active" : ""}`}
        style={{ margin: "0 10px" }}
      >
        {i}
      </button>
    );
  }

  const previousButton = (
    <button
      key="prev"
      onClick={() => onPageGroupChange(pageGroup - 1)}
      disabled={pageGroup === 1}
      className="button-add"
    >
      Previous
    </button>
  );

  const nextButton = (
    <button
      key="next"
      onClick={() => onPageGroupChange(pageGroup + 1)}
      disabled={pageGroup >= Math.ceil(totalPages / pagesPerGroup)}
      className="button-add"
    >
      Next
    </button>
  );

  return (
    <div className="pagination">
      {previousButton}
      {pagination}
      {nextButton}
    </div>
  );
};

export default Pagination;
