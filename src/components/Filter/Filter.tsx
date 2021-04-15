import React, { Component, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions";
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
  onChangeSortType: (val: string) => void;
  onChangeSortBy: (val: string) => void;
  onChangeReleaseStart: (val: string) => void;
  onChangeReleaseEnd: (val: string) => void;
}

class Filter extends Component<IProps> {
  state = {
    startDate: new Date(),
    endDate: new Date(),
  };

  onChange = (dates: any) => {
    const [start, end] = dates;
    this.setState({ startDate: start });
    this.setState({ endDate: end });
    // this.props.onChangeReleaseStart(getISODateFormat(start));
  };

  render() {
    const {
      onChangeSortType,
      onChangeSortBy,
      onChangeReleaseStart,
      onChangeReleaseEnd,
    } = this.props;
    return (
      <div className="flex pt-5 pb-5 pl-7 pr-7">
        <div className="flex flex-1">
          <div className="border m-1" onClick={() => onChangeSortType("asc")}>
            asc
          </div>
          <div className="border m-1" onClick={() => onChangeSortType("desc")}>
            dsc
          </div>
          <div
            className="border m-1"
            onClick={() => onChangeSortBy("popularity")}
          >
            popularity
          </div>
          <div
            className="border m-1"
            onClick={() => onChangeSortBy("release_date")}
          >
            release
          </div>
          <div
            className="border m-1"
            onClick={() => onChangeSortBy("vote_count")}
          >
            vote count
          </div>
          <div className="border m-1">
            <DatePicker
              className="border border-gray-400"
              selected={this.state.startDate}
              value={`${getISODateFormat(
                this.state.startDate
              )} to ${getISODateFormat(this.state.endDate)}`}
              onChange={this.onChange}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              selectsRange
            />
          </div>
        </div>
        <div className="flex justify-end flex-1 text-right">
          <div className="border m-1">prev</div>
          <div className="border m-1">next</div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onChangeSortType: (val: string) => dispatch(actions.changeSortType(val)),
    onChangeSortBy: (val: string) => dispatch(actions.changeSortBy(val)),
    onChangeReleaseStart: (val: string) =>
      dispatch(actions.changeReleaseStart(val)),
    onChangeReleaseEnd: (val: string) =>
      dispatch(actions.changeReleaseEnd(val)),
  };
};

export default connect(null, mapDispatchToProps)(Filter);
