import React, { useState } from 'react'
import './Search.css'
import axios from 'axios'

function Search(props) {

  const [input, setInput] = useState('')

  const {updateData, updateFirst, updateLoading, updateError} = props

  const search = () => {
    updateFirst()
    updateLoading(true)
    axios.get(`https://api.github.com/search/users?q=${input}`).then(
      response => {
        updateLoading(false)
        updateData(response.data.items)}
    ).catch(
      error => {
        updateLoading(false)
        updateError(error.message)}
    )
  }

  return (
    <div className="search">
      <h1>Search github Users</h1>
      <form action="">
        <label>
          <input onChange={(event) => setInput(event.target.value)} type="text" placeholder='enter the name to search'/>
        </label>
        <button type="button" onClick={search}>search</button>
      </form>
    </div>
  )
}

export default Search