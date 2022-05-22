import React, { useState } from 'react';

import Header from '../Header';
import InitialPage from '../InitialPage';
import UserInfo from '../UserInfo';

const Main = () => {
  const [username, setUsername] = useState(null);
  
  return (
      <div>
        <Header setUsername={setUsername}/>
        {!username && <InitialPage />}
        {username && <UserInfo username={username}/>}
      </div>
  );
}

export default Main;