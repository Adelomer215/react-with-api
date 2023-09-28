import { useRef } from "react";
import PropTypes from "prop-types";
import { BsSearch } from "react-icons/bs";
import styled from "styled-components";

const Search = ({ setSearch }) => {
  const searchValue = useRef("");

  const handelSendRequaset = () => {
    setSearch(searchValue.current.value);
    searchValue.current.value = "";
  };

  return (
    <Container className="container">
      <BsSearch className="searchIcon" onClick={handelSendRequaset} />
      <Input type="text" ref={searchValue} placeholder="search" />
    </Container>
  );
};
Search.propTypes = {
  setSearch: PropTypes.func,
};
const Container = styled.div`
  position: relative;
  padding: 1rem;
  display: flex;
  align-items: center;
  .searchIcon {
    position: relative;
    cursor: pointer;
    left: 2rem;
  }
`;
const Input = styled.input`
  width: 80rem;
  cursor: pointer;
  max-width: 90%;
  height: 2rem;
  padding: 0.3rem 3rem;
  font-size: 1rem;
  border: none;
  border-radius: 1rem;
  background-color: #f4f4f4;
`;

export default Search;
