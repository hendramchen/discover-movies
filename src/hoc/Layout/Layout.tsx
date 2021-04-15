import React, { Component } from "react";
import Auxiliary from "../Auxiliary/Auxiliary";
import Nav from "./../../components/Nav/Nav";
import NavItem from "./../../components/NavItem/NavItem";
import { connect } from "react-redux";
import { IMovie } from "../../types/type.movie";

interface IProps {
  movieProps?: IMovie[];
  children: React.ReactNode;
}
class Layout extends Component<IProps, {}> {
  render() {
    let { movieProps = [] } = this.props;
    let countFav = null;
    if (movieProps.length > 0) {
      countFav = (
        <span className="bg-red-400 text-white rounded-full pt-1 pb-1 pl-3 pr-3">
          {movieProps.length}
        </span>
      );
    }
    return (
      <Auxiliary>
        <div className="border-gray-200 border-b">
          <Nav>
            <NavItem href="/movies" isActive={true} exact>
              Home
            </NavItem>
            <NavItem href="/favorites">My Favorit {countFav}</NavItem>
          </Nav>
        </div>

        <main className="bg-gray-200">{this.props.children}</main>
      </Auxiliary>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    movieProps: state.mov.movies,
  };
};

export default connect(mapStateToProps, null)(Layout);
