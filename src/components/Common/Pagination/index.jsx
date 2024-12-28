import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const Pagination = ({ meta, onPageChange }) => {
  const {
    current_page,
    next_page,
    previous_page,
    total_pages,
  } = meta;

  const handlePageChange = (page) => {
    if (page > 0 && page <= total_pages) {
      onPageChange(page);
    }
  };

  return (
    <div className="col-lg-12">
      <div className="flex space-x-1">
        {/* Nút "Prev" */}
        <button
          className={`rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm 
            hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 
            focus:text-white focus:bg-slate-800 focus:border-slate-800 
            active:border-slate-800 active:text-white active:bg-slate-800 
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
          disabled={!previous_page}
          onClick={() => handlePageChange(current_page - 1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        {/* Các nút số trang */}
        {Array.from({ length: total_pages }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`min-w-9 rounded-md py-2 px-3 border text-center text-sm transition-all shadow-sm 
              ${
                page === current_page
                  ? "bg-slate-800 text-white border-transparent shadow-md"
                  : "border-slate-300 text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800"
              }
              focus:bg-slate-700 focus:shadow-none active:bg-slate-700 
              hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}

        {/* Nút "Next" */}
        <button
          className={`rounded-md border border-slate-300 py-2 px-3 text-center text-sm transition-all shadow-sm 
            hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 
            focus:text-white focus:bg-slate-800 focus:border-slate-800 
            active:border-slate-800 active:text-white active:bg-slate-800 
            disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2`}
          disabled={!next_page}
          onClick={() => handlePageChange(current_page + 1)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
