import React from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const View = () => {
    const item = useParams()
    const history = useHistory()
    console.log(item)

    const handleBack = () => {
        history.goBack()
    }

    return (
        <div>{item['id']}<br /><button onClick={handleBack}>Back</button></div>
    )
}