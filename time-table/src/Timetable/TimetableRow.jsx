import React from "react";
import TimeTableCell from "./TimeTableCell";

function TimeTableRow({ ...props }) {
  return (
    <>
      <TimeTableCell day="mon" {...props} />
      <TimeTableCell day="tue" {...props} />
      <TimeTableCell day="wed" {...props} />
      <TimeTableCell day="the" {...props} />
      <TimeTableCell day="fri" {...props} />
    </>
  );
}

export default TimeTableRow;
