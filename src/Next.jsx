import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Next.css';

function NextPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const requestBody = {
        DeviceInfo: {
          deviceId: '12345',
          deviceType: 'mobile',
          os: 'android',
        },
        Referrer: {
          referrerId: '67890',
          referrerType: 'app',
        },
        Request: {
          requestId: 'abcdef',
          requestType: 'login',
        },
      };
      try {
        const response = await axios.post('https://d3398n96t5wqx9.cloudfront.net/UsersAquisition', requestBody, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 0e186445-0647-417c-ae27-8098533f1914'
          },
        });
        setData(response.data)
    }
          catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading"> Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="next-page-container">
      <h1 className="next-page-header">Data from API</h1>
      <div className="data-container">
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
}

export default NextPage;
