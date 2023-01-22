import React from 'react'
import './Lists.css'

function Lists(props) {

  const {data, first, loading, error} = props

  return (
    <div className="wrapper">
     {first ? <h1>Welcome to the mini search application! Please enter something in the input box</h1> :
      loading ? <h1>Loading....</h1> : 
      error ? <h1>{error}</h1> :
      data.map(item => 
      <div className="lists" key={item.id}>
        <a href={item.html_url} target="_blank" rel="noreferrer"><img src={item.avatar_url} alt="avatar" /></a>
        <p>{item.login}</p>
      </div>)}
    </div>
  )
}

export default Lists