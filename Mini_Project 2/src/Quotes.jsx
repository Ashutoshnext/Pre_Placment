import React, { useEffect } from 'react'

function Quotes() {
    useEffect(() => {
        fetch("fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])


    return (
        <div>Quotes</div>
    )
}

export default Quotes
