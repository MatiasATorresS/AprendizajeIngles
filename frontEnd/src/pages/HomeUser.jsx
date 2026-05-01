import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import User from './User';
import Admin from './Admin';

export default function HomeUser() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState(''); // Variable para almacenar el nombre de usuario o del administrador
  const [id, setId] = useState('');
  Axios.defaults.withCredentials = true;

  useEffect(() => {
    Axios.get('http://localhost:3031/login').then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
        setUsername(response.data.user[0].username); // Almacenar el nombre de usuario o del administrador
        setId(response.data.user[0].id);
      }
    });
  }, []);

  return (
    <div>
      {/* Verifica si role es 'admin' y username está disponible antes de renderizar Admin */}
      {role === 'admin' && username && <Admin username={username} id={id}/>}

      {/* Verifica si role es 'user' y username está disponible antes de renderizar User */}
      {role === 'user' && username && <User username={username} id={id}/>}
    </div>
  );
}
