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
    // Intentar cargar primero desde la memoria local (para rapidez y móviles)
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setRole(user.role);
      setUsername(user.username);
      setId(user.id);
    }

    // Verificar con el servidor en segundo plano
    Axios.get(`${import.meta.env.VITE_API_URL || 'http://localhost:3031'}/login`).then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
        setUsername(response.data.user[0].username);
        setId(response.data.user[0].id);
        localStorage.setItem('user', JSON.stringify(response.data.user[0]));
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
