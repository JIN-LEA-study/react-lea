import React from "react";

export function ProgressBar({ page, maxPage }) {
  return (
    <>
      <div>
        {page}/{maxPage}
      </div>
      <div className="progress">
        <div className="gauge"></div>
      </div>
    </>
  );
}
