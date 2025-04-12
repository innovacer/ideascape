import { useState } from 'react';

export default function TagManager() {
  const [tags, setTags] = useState(['Idea', 'Research', 'Important']);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold">Tags</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {tags.map(tag => (
          <span key={tag} className="bg-purple-200 text-purple-800 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
