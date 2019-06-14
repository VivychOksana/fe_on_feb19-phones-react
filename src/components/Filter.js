import React from 'react';

const Filter = () => {
  return (
    <section>
      <p>
        Search:
        <input />
      </p>

      <p>
        Sort by:
        <select>
          <option value="name">Alphabetical</option>
          <option value="age">Newest</option>
        </select>
      </p>
    </section>
  );
};

export default Filter;
