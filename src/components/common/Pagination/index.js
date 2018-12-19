import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const P = styled.p`
  cursor: pointer;
  cursor: hand;
  color: #71abff;
  padding-left: 10px;
  padding-right: 10px;
`;

const Pagin = styled.div`
  padding: 5px;
  span {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

type Props = {
  activePage: number,
  perPage: number,
  search: string,
  count: string,
  mode: string
};

const Pagination = ({ activePage, perPage, search, count, mode }: Props) => {
  activePage = +activePage;
  const pages = Math.ceil(count / perPage) || 1;
  const pagDisplay = `${activePage} of ${pages}`;
  return (
    <div className="navbar-menu">
      <Pagin className="navbar-end dpPag">
        <Link
          to={{
            pathname: `/${mode}`,
            search: `?page=1,search=${search}`
          }}
        >
          <P>First</P>
        </Link>
        <Link
          to={{
            pathname: `/${mode}`,
            search: `?page=${
              activePage <= 1 ? 1 : activePage - 1
            },search=${search}`
          }}
        >
          <span className="fa fa-chevron-left dpHand" />
        </Link>
        <span>{pagDisplay}</span>
        <Link
          to={{
            pathname: `/${mode}`,
            search: `?page=${
              activePage >= pages ? pages : activePage + 1
            },search=${search}`
          }}
        >
          <span className="fa fa-chevron-right dpHand" />
        </Link>
        <Link
          to={{
            pathname: `/${mode}`,
            search: `?page=${pages},search=${search}`
          }}
        >
          <P>Last</P>
        </Link>
        <span>Records {count}</span>
      </Pagin>
    </div>
  );
};

export default Pagination;
