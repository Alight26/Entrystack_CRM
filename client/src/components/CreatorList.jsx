import { useState } from 'react';
import api from '../api';

export default function CreatorForm({ onAdd }) {
  const [username, setUsername] = useState('');
  const [platform, setPlatform] = useState('');
  const [followers, setFollowers] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.post('/creators', {
      username,
      platform,
      followers: Number(followers)
    });
    onAdd(res.data);
    setUsername('');
    setPlatform('');
    setFollowers('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Creator</h2>
      <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
      <input placeholder="Platform" value={platform} onChange={e => setPlatform(e.target.value)} />
      <input placeholder="Followers" value={followers} onChange={e => setFollowers(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

