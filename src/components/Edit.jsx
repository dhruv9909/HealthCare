import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { list } from './list'

export default function Edit() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [id, setId] = useState(0)

    useEffect(() => {
        setName(localStorage.getItem('NAME'))
        setDescription(localStorage.getItem('DESCRIPTION'))
        setPrice(localStorage.getItem('PRICE'))
        setId(localStorage.getItem('ID'))
    }, [])

    let history = useNavigate()

    var index = list.map(item => item.id).indexOf((id))

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && price !== null && price !== '' && price > 0) {
            let a = list[index]
            a.name = name
            a.description = description
            a.price = (price)
            history('/')
        }
        else {
            alert('Please Fill full Details')
        }

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <form>
                    <input type="text" className="form-control mb-3" id="inputName" placeholder='Enter Service Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="form-control mb-3" id="inputDescription" placeholder='Enter Service Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="number" className="form-control mb-3" id="inputPrice" placeholder='Enter Service Price' value={price} onChange={(e) => setPrice(e.target.value)} />
                    <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    )
}