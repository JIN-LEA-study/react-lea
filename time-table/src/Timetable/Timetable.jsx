import React from "react";
import {
  TableContainer,
  //   Typograghy,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import TimeTableRow from "./TimeTableRow";
import { useRecoilValue } from "recoil";
import { timeTableState } from "../store/store";

const hourData = Array.from({ length: 11 }, (i, j) => j + 9);

function TimeTable() {
  //   const timeTableData = useRecoilValue(timeTableState); //입력을 할 때 사용
  return (
    <>
      <TableContainer>
        강의시간표
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" width={100}>
                Time
              </TableCell>
              <TableCell align="center" width={200}>
                Mon
              </TableCell>
              <TableCell align="center" width={200}>
                Tue
              </TableCell>
              <TableCell align="center" width={200}>
                Wed
              </TableCell>
              <TableCell align="center" width={200}>
                The
              </TableCell>
              <TableCell align="center" width={200}>
                Fri
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {hourData.map((time, index) => (
              <TableRow key={index}>
                <TableCell align="center">
                  {`${time}:00 - ${time + 1}:00`}
                </TableCell>
                <TimeTableRow timeNum={time} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default TimeTable;
