import React from 'react'

const SearchForm = ({searchTerm, handleChange}) => {


  return (
    <section className='form-section px-[28px] md:px-[77px]'>
        <p className='search text-[16px] leading-[21px] md:text-[24px] md:leading-[31px] font-light text-[#000000] mb-[4px] font-["DM-Sans"]'>
            Search
        </p>
        <input type='text' value={searchTerm}
          onChange={handleChange}
        //  onChange={(e) => setSearchTerm(e.target.value)}
         className='search-input border border-[#000000] h-[34px] md:h-[54px] w-full mx-auto'/>
    </section>
  )
}

export default SearchForm