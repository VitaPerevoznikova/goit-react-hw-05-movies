import Loader from 'components/Loader/Loader';
import { GetMovieCast, IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import { onHandingError } from 'components/api/error_handling';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastDescription, CastImg, CastTitle, CastTitleContainer, ListItem, StyledList } from './Cast.style';


const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchCast = async () => {
      try {
        const cast = await GetMovieCast(movieId);
        // console.log('Дані про акторів:', cast);
        setCast(cast);
      } catch (error) {
        onHandingError();
      } finally {
        setLoading(false);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {cast && cast.length > 0 ? (
        <StyledList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <ListItem key={id}>
              <CastImg
                src={profile_path ? `${IMAGE_URL}${profile_path}` : PLACEHOLDER}
                alt={original_name}
                width="182"
                height="150"
              />
              <CastTitleContainer>
              <CastDescription>
                <CastTitle>Actor:</CastTitle>
                {original_name}
              </CastDescription>
              <CastDescription>
                <CastTitle>Character:</CastTitle>
                {character}
              </CastDescription>
              </CastTitleContainer>
            </ListItem>
          ))}
        </StyledList>
      ) : (
        <p>Sorry! We don't have any informtion about cast</p>
      )}
    </>
  );
};

export default Cast;
