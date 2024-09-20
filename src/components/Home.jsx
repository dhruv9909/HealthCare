import React from 'react'
import { list } from './list'
import { useNavigate, Link } from 'react-router-dom'

export default function Home() {

    let history = useNavigate()

    const handleDelete = (id) => {
        var index = list.map((item) => item.id).indexOf(id)
        list.splice(index, 1)
        history('/')
    }

    const handleEdit = (id,price,name,description) => {
        localStorage.setItem('PRICE',price)
        localStorage.setItem('NAME',name)
        localStorage.setItem('DESCRIPTION',description)
        localStorage.setItem('ID',id)
    }

    return (
        <div className="container my-5">
            <div className="row">
                {
                    list && list.map((item) => {
                        const { id, name, description, price } = item;
                        return (
                            <div key={id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="card h-100 d-flex flex-column p-3">
                                    <div className="mb-2">
                                        <h4 className="card-title">{name}</h4>
                                    </div>
                                    <div className="flex-grow-1 mb-3">
                                        <p className="card-text">{description}</p>
                                    </div>
                                    <div className="mt-auto d-flex justify-content-between align-items-center">
                                        <h3 className="card-price">${price}</h3>
                                        <div>
                                            <Link to='/edit'>
                                            <button className="btn btn-secondary btn-sm me-2" onClick={()=>handleEdit(id,price,name,description)}>Edit</button>
                                            </Link>
                                            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    )
}