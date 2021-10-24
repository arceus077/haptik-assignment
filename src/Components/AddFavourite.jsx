import favoriteFalse from '../favfalse.svg';
import './Components.css';

function AddFavourite(props) {
    const { addFavourite } = props;
  
    return (
      <span className="addfav" onClick={addFavourite}>
        <img src={favoriteFalse} className="" alt="Add Favourite" />
      </span>
    );
  }

export default AddFavourite;
