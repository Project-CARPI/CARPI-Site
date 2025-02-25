import React, { useEffect, useState } from "react";
import axios from "axios";

const fetchAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.example.com/data") // Replace with actual API URL
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h2>API Data:</h2>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default fetchAPI;
