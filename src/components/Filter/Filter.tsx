import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const getISODate = (date: number, month: number, year: number) => {
  const sMonth = `${month + 1}`.padStart(2, "0");
  const sYear = `${year}`.padStart(4, "0");
  const sDate = `${date}`.padStart(2, "0");
  return `${sYear}-${sMonth}-${sDate}`;
};

export const getISODateFormat = (obj: Date) => {
  const dDate = obj;
  if (dDate) {
    return getISODate(dDate.getDate(), dDate.getMonth(), dDate.getFullYear());
  }
};

interface IProps {
  onChangePage: (val: number) => void;
  onChangeSortType: (val: string) => void;
  onChangeSortBy: (val: string) => void;
  onChangeRelease: (start: string, end: string) => void;
}

const Filter = ({
  onChangePage,
  onChangeSortType,
  onChangeSortBy,
  onChangeRelease,
}: IProps) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [page, setPage] = useState(1);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    const stDate = getISODateFormat(start);
    const enDate = getISODateFormat(end);
    if (stDate && enDate) {
      onChangeRelease(stDate, enDate);
    }
  };

  const onNextPage = () => {
    let newPage = page;
    newPage++;
    onChangePage(newPage);
    setPage(newPage);
  };

  const onPrevPage = () => {
    let newPage = page;
    if (newPage > 1) {
      newPage--;
      onChangePage(newPage);
      setPage(newPage);
    }
  };

  return (
    <div className="flex pt-5 pb-5 pl-7 pr-7">
      <div className="flex flex-1">
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={() => onChangeSortType("asc")}
        >
          asc
        </button>
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={() => onChangeSortType("desc")}
        >
          dsc
        </button>
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={() => onChangeSortBy("popularity")}
        >
          popularity
        </button>
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={() => onChangeSortBy("release_date")}
        >
          release
        </button>
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={() => onChangeSortBy("vote_count")}
        >
          vote count
        </button>
        <div className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2">
          <DatePicker
            className="border border-gray-400 pt-1 pb-1 pl-2 pr-2 rounded text-sm w-48"
            selected={startDate}
            value={`${getISODateFormat(startDate)} to ${getISODateFormat(
              endDate
            )}`}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
          />
        </div>
      </div>
      <div className="flex justify-end flex-1 text-right">
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={onPrevPage}
        >
          prev
        </button>
        <button
          className="border m-1 border-gray-500 rounded pt-1 pb-1 pl-2 pr-2"
          onClick={onNextPage}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default Filter;
