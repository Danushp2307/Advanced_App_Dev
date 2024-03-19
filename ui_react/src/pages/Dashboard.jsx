import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    setUserData(storedUserData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Dashboard</h1>
      {userData && (
        <div>
          <p><strong>Username:</strong> {userData.username}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {/* You can add more user information here */}
        </div>
      )}
    </div>
  );
}

export default Dashboard;
