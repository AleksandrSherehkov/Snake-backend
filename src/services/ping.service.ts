import axios from 'axios';

export const pingServer = async () => {
  try {
    await axios.get('https://snake-backend-jd8e.onrender.com/api/up/ping');
    console.log('Ping successful');
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error pinging server:', error.message);
    } else {
      console.error('Unexpected error:', (error as Error).message);
    }
  }
};
