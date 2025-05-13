const sendPostRequest = async () => {
  const response = await fetch('/api/example', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ key: 'value' }),
  });

  const data = await response.json();
  console.log(data);
};

sendPostRequest();


import { useState } from 'react';

export default function FormComponent() {
  const [data, setData] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents default form submission

    const response = await fetch('/api/example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    });

    const result = await response.json();
    setData(result); // Update state with fetched data
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      {data && <p>Received Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

import { useState } from 'react';

export default function FormComponent() {
  const [data, setData] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission

    fetch('/api/example', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key: 'value' }),
    })
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => console.error('Error:', error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>

      {data && <p>Received Data: {JSON.stringify(data)}</p>}
    </div>
  );
}

