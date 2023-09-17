import StGalleryItem from './CarGalleryItem.components';
import PropTypes from 'prop-types';

const CarGalleryItem = ({ car, isFavorite, handleSubmit, handleFavorite }) => {
  const addressSplit = car.address.split(',');

  return (
    <StGalleryItem>
      <StGalleryItem.Fav id={car.id} onClick={handleFavorite}>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 16"
          fill={isFavorite ? '#3470FF' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.6301 2.45753C15.247 2.07428 14.7922 1.77026 14.2916 1.56284C13.791 1.35542 13.2545 1.24866 12.7126 1.24866C12.1707 1.24866 11.6342 1.35542 11.1336 1.56284C10.633 1.77026 10.1782 2.07428 9.79509 2.45753L9.00009 3.25253L8.20509 2.45753C7.43132 1.68376 6.38186 1.24906 5.28759 1.24906C4.19331 1.24906 3.14386 1.68376 2.37009 2.45753C1.59632 3.2313 1.16162 4.28075 1.16162 5.37503C1.16162 6.4693 1.59632 7.51876 2.37009 8.29253L3.16509 9.08753L9.00009 14.9225L14.8351 9.08753L15.6301 8.29253C16.0133 7.90946 16.3174 7.45464 16.5248 6.95404C16.7322 6.45345 16.839 5.91689 16.839 5.37503C16.839 4.83316 16.7322 4.2966 16.5248 3.79601C16.3174 3.29542 16.0133 2.84059 15.6301 2.45753Z"
            stroke={isFavorite ? '#3470FF' : 'white'}
            strokeOpacity="0.8"
            strokeWidth={isFavorite ? '0' : '1.5'}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </StGalleryItem.Fav>
      <StGalleryItem.Img src={`${car.img}`} alt={`${car.make} ${car.model}`} />
      <StGalleryItem.Title>
        <StGalleryItem.Name>
          {car.make}&nbsp;
          <StGalleryItem.Model>{car.model}</StGalleryItem.Model>, {car.year}
        </StGalleryItem.Name>
        <StGalleryItem.Name>{car.rentalPrice}</StGalleryItem.Name>
      </StGalleryItem.Title>
      <StGalleryItem.Details>
        <StGalleryItem.Li>{addressSplit[1]}</StGalleryItem.Li>
        <StGalleryItem.Li>{addressSplit[2]}</StGalleryItem.Li>
        <StGalleryItem.Li>{car.rentalCompany}</StGalleryItem.Li>
        <StGalleryItem.Li>{car.type}</StGalleryItem.Li>
        <StGalleryItem.Li>{car.id}</StGalleryItem.Li>
        <StGalleryItem.Li>{car.functionalities[0]}</StGalleryItem.Li>
      </StGalleryItem.Details>
      <StGalleryItem.Button type="button" id={car.id} onClick={handleSubmit}>
        Learn More
      </StGalleryItem.Button>
    </StGalleryItem>
  );
};

CarGalleryItem.propTypes = {
  car: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleFavorite: PropTypes.func.isRequired,
};

export default CarGalleryItem;
