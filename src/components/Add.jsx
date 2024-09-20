import React, {useState} from 'react'
import { v4 as uuid } from 'uuid'
import { list } from './list'
import { useNavigate } from 'react-router-dom'

export default function Add() {

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)

    let history = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && price !== null && price !== '' && price > 0) {
            let ids = uuid();
            let uniqueid = ids.slice(0,8)
            let a = name
            let b = description
            let c = price
            list.push({'id' : uniqueid,'name' : a, 'description' : b, 'price' : c})
            history('/')
        }
        else {
            alert('Please Fill full Details')
        }

    }

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <form>
                    <input type="text" className="form-control mb-3" id="inputName" value={name} placeholder='Enter Service Name' onChange={(e) => setName(e.target.value)} />
                    <input type="text" className="form-control mb-3" id="inputDescription" value={description} placeholder='Enter Service Description' onChange={(e) => setDescription(e.target.value)} />
                    <input type="number" className="form-control mb-3" id="inputPrice" value={price} placeholder='Enter Service Price' onChange={(e) => setPrice(e.target.value)} />
                    <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSubmit(e)}>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
