import deleteSvg from '../delete.svg';

function Delete(props) {
    const { deleteFriend } = props;
  
    return (
      <span className="remove" onClick={deleteFriend}>
        <img src={deleteSvg} className="" alt="Delete Friend" />
      </span>
    );
  }

export default Delete;
