// src/components/tags/TagManager.tsx
import { useState } from 'react';

export default function TagManager() {
  const [tags, setTags] = useState<string[]>(['#Original', '#AI-Free']);
  const [newTag, setNewTag] = useState('');

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  return (
    <div className="bg-white rounded shadow p-4 mt-6">
      <h3 className="text-lg font-semibold mb-2">Manage Tags</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="border rounded p-2 flex-1"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Add a new tag"
        />
        <button onClick={addTag} className="bg-purple-600 text-white px-4 rounded hover:bg-purple-700">
          Add
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
