import React from 'react'

export default ({title='', body=''}) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  )
}
