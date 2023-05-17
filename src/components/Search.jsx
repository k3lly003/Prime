import { AiOutlineSearch } from "react-icons/ai";
function Search() {
  return (
    <>
      <div className="search">
        <AiOutlineSearch className="saci" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="in"
        />
      </div>
    </>
  );
}
export default Search;
