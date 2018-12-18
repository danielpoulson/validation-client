import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    projectCount
  }
`;

const P = styled.p`
  cursor: pointer;
  cursor: hand;
  color: #71abff;
`;

type Props = {
  activePage: number,
  numPage: number,
  search: string
};

const Pagination = ({ activePage, numPage, search }: Props) => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>;
      activePage = +activePage;
      const pagnum = Math.ceil(data.projectCount / numPage) || 1;
      const pagDisplay = `${activePage} of ${pagnum}`;
      return (
        <ul>
          <nav className="navbar">
            <div className="navbar-menu">
              <div className="navbar-end dpPag">
                <div aria-disabled={activePage <= 1}>
                  <Link
                    to={{
                      pathname: "/projects",
                      search: `?page=1,search=${search}`
                    }}
                  >
                    <P>First</P>
                  </Link>
                  <Link
                    to={{
                      pathname: "/projects",
                      search: `?page=${
                        activePage <= 1 ? 1 : activePage - 1
                      },search=${search}`
                    }}
                  >
                    <span className="fa fa-chevron-left dpHand" />
                  </Link>
                </div>
                <li className="navbar-item">{pagDisplay}</li>
                <Link
                  to={{
                    pathname: "/projects",
                    search: `?page=${
                      activePage >= pagnum ? pagnum : activePage + 1
                    },search=${search}`
                  }}
                >
                  <span className="fa fa-chevron-right dpHand" />
                </Link>
                <Link
                  to={{
                    pathname: "/projects",
                    search: `?page=${numPage},search=${search}`
                  }}
                >
                  <P>Last</P>
                </Link>
                <li className="navbar-item">Records {data.projectCount}</li>
              </div>
            </div>
          </nav>
        </ul>
      );
    }}
  </Query>
);

export default Pagination;
