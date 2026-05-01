import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'; 

// botones en el banner
function BannerButtons() {
  return (
    <div className={styles['banner-buttons']}>
      <Link to="/register" className={`text-decoration-none ${styles.btn}`}>
        <Button variant="light" className={styles.btn}>
          Comienza Ahora
        </Button>
      </Link>
      <Link to="/login" className={`text-decoration-none ${styles.btn}`}>
        <Button variant="light" className={styles.btn}>
          Tengo una cuenta
        </Button>
      </Link>
    </div>
  );
}

// Componente para el banner principal
function Banner() {
  return (
    <div className={styles.banner}>
      <Container>
        <h1>Bienvenido</h1>
        <p>Aprende inglés de manera efectiva.</p>
        <BannerButtons />
      </Container>
    </div>
  );
}

function Home() {
  const navigate = useNavigate();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get('http://localhost:3031/login').then((response) => {
      if (response.data.loggedIn == true) {
        
        navigate('/main');
      }
    });
  }, []);

  return (
    <div>
      <Banner />
    </div>
  );
}

export default Home;
