import { useState } from 'react';

export default function CreatorForm({ onAdd }) {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('');
  const [followers, setFollowers] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create new creator object
    const newCreator = {
      username,
      platform,
      followers: Number(followers),
    };

    // Call the onAdd function (which is passed from App)
    onAdd(newCreator);

    // Clear form fields
    setUsername('');
    setPlatform('');
    setFollowers('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Creator</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Platform:</label>
        <input
          type="text"
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        />
      </div>
      <div>
        <label>Followers:</label>
        <input
          type="number"
          value={followers}
          onChange={(e) => setFollowers(e.target.value)}
        />
      </div>
      <button type="submit">Add Creator</button>
    </form>
  );
}
