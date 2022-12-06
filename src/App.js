import React, { useEffect, useState } from "react";
import Success from "./Components/Success/Success";
import Users from "./Components/Users/Users";

const API = "https://reqres.in/api/users";

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchval, setSearchVal] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(users => {
        setUsers(users.data);
      })
      .catch(error => console.error(error));
  }, []);

  const onChangeSearchVal = event => {
    setSearchVal(event.target.value);
  };

  const onClickInvite = id => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => _id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div>
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          users={users}
          searchval={searchval}
          invites={invites}
          onChangeSearchVal={onChangeSearchVal}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
};

export default App;
