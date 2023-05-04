import React from 'react'

const WidgetTags = () => {
  const tags = ['c','css','express','firebase' ,'html','java','javascript','mern','mongodb','mysql','next.js','node.js','php','react','python']

  return (

    <div className='tags'>
      <h3>Watched Tags</h3>
      <div className="tags-div">
        {tags.map((tag) => (
          <p key={tag}>{tag}</p>
        ))}
      </div>
      
    </div>
  )
}

export default WidgetTags
