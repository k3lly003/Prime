import { BsBookmark } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
function Card({ year, Image, type, name, character }) {
  return (
    <>
      <div className="all">
        <div className="img-card">
          <BsBookmark className="book1" />
          <img src={Image} />
        </div>
        <div className="ymp">
          <p className="year">{year}</p>
          <p className="movie">
            {<BiCameraMovie />}
            {type}
          </p>
          <p className="type">{character}</p>
        </div>
        <div className="movie-name">{name}</div>
      </div>
    </>
  );
}
export default Card;
