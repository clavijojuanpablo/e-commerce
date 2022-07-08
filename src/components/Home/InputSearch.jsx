import React from 'react'

const InputSearch = ( {setProductSearch} ) => {

  const changeInputText = e => {
    setProductSearch(e.target.value)
  }

  return (
    <form className='form-home'>
      <input type="text" placeholder="What are you locking for?" onChange={changeInputText}/>
      <button><i className="fa-solid fa-magnifying-glass"></i></button>
    </form>
  )
}

export default InputSearch