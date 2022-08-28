import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

// useState kullanıyoruz çünkü when usersList state change app will rerender

function App() {
  const [usersList , setUsersList] = useState([]); // başlangıçta usersList boş dizi

  const addUserHandler = (uName , uAge) => { // 2 parametre alıyor
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString() }];  // önceki state e yeni gelen parametreleri obje olarak ekle
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/> 
    </div>
  );
}

export default App;
