import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all'); // Значение по умолчанию для фильтра (может быть 'all', 'videos', 'channels', и т.д.)

  const handleSearch = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику для обработки поискового запроса
    console.log('Поиск:', searchQuery);
    setSearchQuery('');
  };

  const handleFilterChange = (filter) => {
    // Здесь можно добавить логику для применения выбранного фильтра
    console.log('Выбран фильтр:', filter);
    setFilterType(filter);
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12 col-md-8 mx-auto">
          <form onSubmit={handleSearch} className=" mb-2 searchFilterInput">
            <input
              type="text"
              className="form-control"
              placeholder="Поиск"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
         
              <button type="submit" className="btn btn-outline-secondary">
                <BsSearch size={24} />
              </button>
         
          </form>
        </div>
      </div>
      <div className="row ">
        <div className="">
    
            <button
              type="button"
              className={`btn m-3 searchFilterButton  ${filterType === 'all' ? 'active' : ''}`}
              onClick={() => handleFilterChange('all')}
            >
              Все
            </button>
            <button
              type="button"
              className={`btn  m-3  searchFilterButton ${filterType === 'videos' ? 'active' : ''}`}
              onClick={() => handleFilterChange('videos')}
            >
              Вакансии в Германии
            </button>
            <button
              type="button"
              className={`btn  m-3  searchFilterButton ${filterType === 'channels' ? 'active' : ''}`}
              onClick={() => handleFilterChange('channels')}
            >
              Вакансии в Польшу
            </button>
            <button
              type="button"
              className={`btn  m-3  searchFilterButton ${filterType === 'channels' ? 'active' : ''}`}
              onClick={() => handleFilterChange('channels')}
            >
           Вакансии для мужчин
            </button>
            <button
              type="button"
              className={`btn  m-3  searchFilterButton ${filterType === 'channels' ? 'active' : ''}`}
              onClick={() => handleFilterChange('channels')}
            >
             Вакансии для семейных пар и женщин
            </button>

          </div>
        </div>

    </div>
  );
};

export default SearchFilter;
