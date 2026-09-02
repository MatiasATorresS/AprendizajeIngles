import { useState, useEffect } from 'react';
import api from '../services/api';
import User from './User';
import Admin from './Admin';

export default function HomeUser() {
  const [role, setRole] = useState('');
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');

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
    api
      .get('/login')
      .then((response) => {
        if (response.data.loggedIn === true) {
          setRole(response.data.user[0].role);
          setUsername(response.data.user[0].username);
          setId(response.data.user[0].id);
          localStorage.setItem(
            'user',
            JSON.stringify(response.data.user[0])
          );
        }
      })
      .catch((error) => console.error('Error al verificar sesión:', error));
  }, []);

  return (
    <div>
      {/* Verifica si role es 'admin' y username está disponible antes de renderizar Admin */}
      {role === 'admin' && username && <Admin username={username} id={id} />}

      {/* Verifica si role es 'user' y username está disponible antes de renderizar User */}
      {role === 'user' && username && <User username={username} id={id} />}
    </div>
  );
}