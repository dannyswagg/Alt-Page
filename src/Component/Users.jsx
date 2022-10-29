import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

const Button = styled.a`
  font-size: 1rem;
  margin-right: 0.5rem !important;
  outline: 1px solid #47ccde;
  padding: 3px;
`;

const Users = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const fetchUsers = () => {
    fetch("https://randomuser.me/api/?results=100").then((response) =>
      response.json().then((result) => {
        setUser(result.results) || setIsLoading(false);
      })
    );
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const displayUsers = user
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div
          className="shadow-lg lg:w-[24rem] md:w-[18rem] sm:w-[16rem] text-center p-6 font-bold mx-auto pb-8"
          key={user.login.uuid}
        >
          <img
            className="mx-auto rounded-full"
            src={user.picture.large}
            alt="Profile Picture"
          />
          <h1 className="text-center">{user.name.first}</h1>
          <h2 className="pl-2 text-center">{user.name.last}</h2>
          <h3>{user.location.country}</h3>
          <h4>{user.email}</h4>
        </div>
      );
    });

  const pageCount = Math.ceil(user.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <div>
        {isLoading && (
          <p className="text-center font-bold text-5xl py-4">
            Abeg Wait Fess...
          </p>
        )}
        {displayUsers}
      </div>

      <ReactPaginate
        className="flex bg-[#000814] text-[1xl] text-white w-fit fixed bottom-0 p-2"
        previousLabel={"Prev"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtn"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"disabled"}
        activeClassName={"activeBtn"}
      />
    </div>
  );
};

export default Users;
