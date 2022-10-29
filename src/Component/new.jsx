// import React from "react";
// import { NavLink, Route, Routes } from "react-router-dom";
// import App from "./App";
// import { useState, useEffect } from "react";
// import ReactPaginate from "react-paginate";

// const Users = () => {
//   const [user, setUser] = useState([]);
//   const [error, setError] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [pageNumber, setPageNumber] = useState(0);

//   const usersPerPage = 5;
//   const pagesVisited = pageNumber * usersPerPage;

//   const fetchUsers = () => {
//     fetch("https://randomuser.me/api/?results=100").then((response) =>
//       response.json().then((result) => {
//         setUser(result.results), setIsLoading(false);
//       })
//     );
//   };

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const displayUsers = user
//     .slice(pagesVisited, pagesVisited + usersPerPage)
//     .map((user) => {
//       return (
//         <div className="user">
//           <img src={user.picture.large} alt="" className="user-img" />
//           <div className="details">
//             <h3>{user.name.first}</h3>
//             <h3>{user.name.last}</h3>
//             <h3>{user.gender}</h3>
//           </div>
//         </div>
//       );
//     });

//   const pageCount = Math.ceil(user.length / usersPerPage);
//   const changePage = ({ selected }) => {
//     setPageNumber(selected);
//   };
//   return (
//     <div>
//       <section className="myNav">
//         <NavLink to="/" className="navBar">
//           Home{" "}
//         </NavLink>
//         <NavLink to="/Users" className="navBar">
//           Trainers
//         </NavLink>
//         <NavLink to="/Pricing" className="navBar">
//           {" "}
//           Pricing
//         </NavLink>
//         <NavLink to="/Members" className="navBar">
//           Members
//         </NavLink>
//       </section>
//       <div>
//         {error && <p>{error.message}</p>}
//         {isLoading && <p>Loading...</p>}
//         {displayUsers}
//       </div>

//       <ReactPaginate
//         previousLabel={"Prev"}
//         nextLabel={"Next"}
//         pageCount={pageCount}
//         onPageChange={changePage}
//         containerClassName={"paginationBtn"}
//         previousLinkClassName={"previousBtn"}
//         nextLinkClassName={"nextBtn"}
//         disabledClassName={"disabled"}
//         activeClassName={"activeBtn"}
//       />
//     </div>
//   );
// };

// export default Users;
