import favoriteTrue from '../favtrue.svg';

function RemoveFavourite(props) {
  const { removeFavourite } = props;

  return (
    <span className="remfav" onClick={removeFavourite}>
      <img src={favoriteTrue} className="" alt="Add Favourite" />
    </span>
  );
}

export default RemoveFavourite;
