import { useRef} from "react";
import Styles from "./AddMovie.module.css";
const AddMovie = ({movieHandler}) => {
    const titleRef=useRef()
    const openingRef=useRef()
    const releaseRef=useRef()
  
  const formHandler = (e) => {
    e.preventDefault();
    const movie={
        title:titleRef.current.value,
        openingText:openingRef.current.value,
        releaseDate:releaseRef.current.value
    }
    movieHandler(movie)
  };
  return (
    <form className={Styles.form}>
      <label>Title</label>
      <input type="text" name="title" ref={titleRef} />
      <label>Opening Text</label>
      <input type="text" name="openingtext" ref={openingRef} />
      <label>Release Date</label>
      <input type="text" name="releasedate" ref={releaseRef} />
      <button onClick={formHandler}>Add Movie</button>
    </form>
  );
};

export default AddMovie;
