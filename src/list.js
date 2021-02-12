import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

export const List = () => {
    const initialList = [
        'dopew',
        'dewoew'
      ]
      const [text, setText] = useState('')
      const [list, setList] = useState(initialList)
    
      const ListItem = ({
        index,
        item
      }) => {
        const handleDelete = () => {
          list.splice(index, 1)
    
          const newList = [...list]
          setList(newList)
        }
    
        const handleView = () => {
          
        }
      
        return (
          <li style={{marginBottom: 10}}>{item} <Link to={`/view/${item}/test`}>View</Link><button onClick={handleDelete}>Delete</button></li>
        )
      }
    
      const handleClick = () => {
        const newList = [...list, text]
        setList(newList)
    
        setText('')
      }
    
      const handleChange = event => {
        const currentText = event.target.value
        setText(currentText)
      }

      return (
        <div>
            <input value={text} onChange={handleChange} placeholder='Type something' />
            <button onClick={handleClick}>Add</button><br />
            {list.length > 0 ? (
            <ol>
                {list.map((item, index) => {
                return (
                    <ListItem index={index} item={item} />
                )
                })}
            </ol>
            ) : (
            <div>You have not added any items yet</div>
            )}
        </div>
      )
}