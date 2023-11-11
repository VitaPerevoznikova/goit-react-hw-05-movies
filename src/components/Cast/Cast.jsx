import Loader from 'components/Loader/Loader';
import { GetMovieCast, IMAGE_URL, PLACEHOLDER } from 'components/api/api';
import { onHandingError } from 'components/api/error_handling';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      {loading && <Loader />}
      {cast && cast.length > 0 ? (
        <ul>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <li key={id}>
              {/* <img
                src={`${
                  profile_path
                    ? IMAGE_URL + profile_path
                    : PLACEHOLDER + original_name
                }`}
                width="100"
                height="150"
                alt={original_name}
              /> */}
<img src={profile_path ?
                        `${IMAGE_URL}${profile_path}` :
                        PLACEHOLDER}
                        alt={original_name} width="100" height="150" />
              <p>
                <span>Actor:</span>
                {original_name}
              </p>
              <p>
                <span>Character:</span>
                {character}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Sorry! We don't have any informtion about cast</p>
      )}
    </div>
  );
};

export default Cast;
