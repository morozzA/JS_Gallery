import axios from 'axios';

const DEFAULT_URL = 'https://pixabay.com/api';
const API_KEY = '31063881-a6a3b1d6d0e89ccdd05453e72';

export default async function fetchImages(input) {
  const data = await axios.get(
    `${DEFAULT_URL}/?key=${API_KEY}&q=${input}&image_type="photo"&orientation="horizontal"`
  );
  console.log(data.data.hits);
  return data;
}
