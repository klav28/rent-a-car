import React, { useState, useEffect } from 'react';
import { BASE_URL, LSKEY } from '../Vars';
import axios from 'axios';
import CarsGallery from '../CarsGallery/CarsGallery';

const Favorites = () => {
  const [cars, setCars] = useState([]);
  const [fav, setFav] = useState(null);

  useEffect(() => {
    const parsedFavorites = JSON.parse(localStorage.getItem(LSKEY));
    if (parsedFavorites) {
      setFav([...parsedFavorites]);
    }

    const fetchCars = async () => {
      try {
        const response = await axios.get(`${BASE_URL}cars/`);
        return response.data;
      } catch (error) {
        throw new Error(error);
      }
    };

    fetchCars().then(data => {
      setCars(data);
    });
  }, []);

  const handleFavoriteButton = evt => {
    const favID = evt.currentTarget.id;
    //console.log('Favorited', favID);

    const idx = fav.indexOf(favID);
    // console.log('IDX ', idx);

    if (idx < 0) {
      setFav([...fav, favID]);
      // console.log('ADDED:', favID);
    } else {
      setFav(fav.filter(el => el !== favID));
      // console.log('REMOVED:', favID);
    }
  };

  const favoriteCars = cars.filter(car => fav.includes(car.id.toString()));

  useEffect(() => {
    if (fav !== null) {
      localStorage.setItem(LSKEY, JSON.stringify(fav));
    }
  }, [fav]);

  // useEffect(() => {
  //   const favoriteCars = cars.filter(car => fav.includes(car.id.toString()));
  //   setCars(favoriteCars);
  // }, [cars]);

  return (
    <>
      {favoriteCars.length ? (
        <CarsGallery
          carArray={favoriteCars}
          favArray={fav}
          handleFavorite={handleFavoriteButton}
        />
      ) : (
        <h2>Favorite List Is Empty</h2>
      )}
    </>
  );
};

export default Favorites;