import { BsBookmark } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
function Bigcard({ year, type, character, name }) {
  return (
    <>
      <div className="Big">
        <BsBookmark className="book" />
        <div className="ymp1">
          <p className="year1">{year}</p>
          <p className="movie1">
            <BiCameraMovie />.{type}
          </p>
          <p className="type1">.{character}</p>
        </div>
        <div className="movie-name1">{name}</div>
        <div className="overlay"></div>
      </div>
    </>
  );
}
export default Bigcard;
