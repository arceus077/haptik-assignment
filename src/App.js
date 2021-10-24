import { useState } from 'react';
import AddFavourite from './Components/AddFavourite';
import RemoveFavourite from './Components/RemoveFavourite';
import Delete from './Components/Delete';
import Pagination from './Components/Pagination';
import './App.css';

const limit = 4;
let offset = 0;

function App() {
  const [friends, setFriends] = useState([]);
  const [searchedFriends, setSearchedFriends] = useState([]);
  const [sortBy, setSortBy] = useState('name');
  const [text, setText] = useState('');
  const [display, setDisplay] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const calculatePagination = (total) => {
    const newTotal = Math.ceil(total/limit);
    if (newTotal < totalPage) {
      offset = page > 0 ? (page-1) * limit : 0;
      const newPage = page > 0 ? page - 1 : 0;
      setPage(newPage);
    }
    console.log(newTotal, offset, page);
    setTotalPage(newTotal);
  };

  const searchName = (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    if (!text.trim()) {
      return setDisplay(true);
    }
    setDisplay(false);
    if (text.trim().split(' ').length > 3) {
      return setSearchedFriends([]);
    }
    if (!/^[a-z a-z]+$/i.test(text.trim())) {
      return setSearchedFriends([]);
    }
    const availableFriends = friends.filter(v => v.name.toLowerCase().includes(text.trim().toLowerCase()));
    if (availableFriends?.length > 0 && text.trim()) {
      if (availableFriends.find(v => v.name.toLowerCase() === text.trim().toLowerCase())) {
        setSearchedFriends([...availableFriends]);
      } else {
        setSearchedFriends([{ name: text.trim(), friend: false, favourite: false }, ...availableFriends]);
      }
    } else {
      setSearchedFriends([{ name: text.trim(), friend: false, favourite: false }]);
    }
  };

  const addFriend = ({name}) => {
    let newSearchedFriends = [...searchedFriends];
    let newFriend = [...friends, { name: name, friend: true, favourite: false }].sort((a,b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSortBy('name');
    const searchedIndex = searchedFriends.map(v => v.name).indexOf(name);
    newSearchedFriends[searchedIndex] = { ...newSearchedFriends[searchedIndex], friend: true };
    setFriends(newFriend);
    setSearchedFriends(newSearchedFriends);
    calculatePagination(newFriend.length);
    setDisplay(false);
  };

  const addFavourite = (name) => {
    const friendIndex = friends.map(v => v.name).indexOf(name);
    const searchedIndex = searchedFriends.map(v => v.name).indexOf(name);
    let newData = [...friends].sort((a,b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSortBy('name');
    let newSearchedFriends = [...searchedFriends];
    newData[friendIndex] = { ...friends[friendIndex], favourite: true };
    newSearchedFriends[searchedIndex] = { ...newSearchedFriends[searchedIndex], favourite: true };
    setFriends(newData);
    setSearchedFriends(newSearchedFriends);
  };

  const removeFavourite = (name) => {
    const friendIndex = friends.map(v => v.name).indexOf(name);
    const searchedIndex = searchedFriends.map(v => v.name).indexOf(name);
    let newData = [...friends].sort((a,b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSortBy('name');
    let newSearchedFriends = [...searchedFriends];
    newData[friendIndex] = { ...friends[friendIndex], favourite: false };
    newSearchedFriends[searchedIndex] = { ...newSearchedFriends[searchedIndex], favourite: false };
    setFriends(newData);
    setSearchedFriends(newSearchedFriends);
  };

  const deleteFriend = (name) => {
    let newSearchedFriends = [...searchedFriends];
    const searchedIndex = searchedFriends.map(v => v.name).indexOf(name);
    let newData = friends.filter(v => v.name !== name).sort((a,b) => {
      let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setSortBy('name');
    newSearchedFriends[searchedIndex] = { ...newSearchedFriends[searchedIndex], friend: false, favourite: false };
    setFriends(newData);
    setSearchedFriends(newSearchedFriends);
    calculatePagination(newData.length);
  };

  const searchedList = () => {
    if (searchedFriends?.length === 0) {
      return (
        <div>
          Enter A Valid Name
        </div>
      )
    }
    return (
      searchedFriends.map((f, i) => {
        return (
          <div>
            <div key={i} className="searched">
            <div style={{ paddingLeft: '4px' }}>
              <span style={{ fontSize: '25px', fontWeight: '700px', fontFamily: 'monospace' }}>
                {f.name}
              </span>
              {
                f.friend ? <div style={{ fontSize: '10px' }}>is your friend</div> :
                <div style={{ fontSize: '10px' }}>is not your friend</div>
              }
              </div>
              {!f.friend ? 
                <button onClick={() => addFriend(f)}>
                  Add Friend
                </button> :
                <div style={{ marginTop: '8px' }}>
                  {
                    f.favourite ?
                    <RemoveFavourite removeFavourite={() => removeFavourite(f.name)} /> :
                    <AddFavourite addFavourite={() => addFavourite(f.name)} />
                  }
                  <Delete deleteFriend={() => deleteFriend(f.name)} />
                </div>
              }
            </div>
            <hr/>
          </div>
          
        )
    }));
  }

  const changeValue = (e) => {
    const val = e.target.value;
    if (!val) {
      setDisplay(true);
    }
    setText(val);
  };

  const setPageNo = (value) => {
    offset = value * limit || 0;
    setPage(value || 0);
  };

  const sortValues = (e) => {
    setSortBy(e.target.value);
    let newData = []
    if (e.target.value === 'name') {
      newData = friends.sort((a, b) => {
        let nameA = a.name.toUpperCase(); // ignore upper and lowercase
        let nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
    } else {
      newData = friends.sort((a, b) => {
        let favA = a.favourite;
        let favB = b.favourite;
        return (favA === favB) ? 0 : favA ? -1 : 1;
      });
    }
    setFriends(newData);
  };

  const changeNextPage = () => {
    const newPage = page < totalPage - 1 ? page + 1 : totalPage - 1;
    offset = newPage * limit || 0;
    setPage(newPage);
  };

  const changePreviousPage = () => {
    const newPage = page > 0 ? page - 1 : 0;
    offset = newPage * limit || 0;
    setPage(newPage);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="cont">
          <div className="header">
            <p>Friends List</p>
          </div>
          <div style={{ border: '2px solid bule' }}>
            <div className='drop'>
              <label for="sort-select">Sort By: </label>
              <select
                name="sort"
                id="sort-select"
                value={sortBy} 
                onChange={sortValues}
              >
                  <option value="favourite">Favourites</option>
                  <option value="name">Name</option>
              </select>
            </div>
            <input
              className='search'
              value={text}
              onChange = {changeValue}
              type={'search'}
              placeholder={`Enter your friend's name`}
              onKeyPress={searchName}
            />
            {
              display ? friends.slice(offset, offset + limit).map((f, i) => {
                return (
                  <div>
                    <div key={i} className="searched">
                    <div style={{ paddingLeft: '4px' }}>
                    <span style={{ fontSize: '25px', fontWeight: '700px', fontFamily: 'monospace' }}>
                      {f.name}
                    </span>
                    <div style={{ fontSize: '10px' }}>is your friend</div>
                    </div>
                      <div style={{ marginTop: '8px' }}>
                        {
                          f.favourite ?
                          <RemoveFavourite removeFavourite={() => removeFavourite(f.name)} /> :
                          <AddFavourite addFavourite={() => addFavourite(f.name)} />
                        }
                        <Delete deleteFriend={() => deleteFriend(f.name)} />
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              }) : searchedList()
            }
          </div>
          <Pagination
            totalPage={totalPage}
            page={page}
            display={display}
            setPage={setPageNo}
            nextPage={changeNextPage}
            previousPage={changePreviousPage}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
