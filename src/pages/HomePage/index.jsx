import React from 'react'
import FiltersCategory from './filter-category/FiltersCategory'

const HomePage = () => {
  return (
    <div className='page'>
      <div className='container'>
        <h1>Products</h1>
        <FiltersCategory></FiltersCategory>
      </div>
    </div>
  )
}

export default HomePage