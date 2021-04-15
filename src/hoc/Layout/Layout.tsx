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
    return (
      <Auxiliary>
        <div className="border-gray-200 border-b">
          <Nav>
            <NavItem href="/movies" isActive={true} exact>
              Home
            </NavItem>
            <NavItem href="/favorites">
              My Favorit ({movieProps.length})
            </NavItem>
          </Nav>
        </div>

        <main>{this.props.children}</main>
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
