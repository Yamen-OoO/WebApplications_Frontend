import React, { useEffect } from 'react'

function Filter({setAcitveGenre , activeGenre , setFiltered , popular}) {
    useEffect(()=>{
        if(activeGenre === 0){
            // set all movies
            setFiltered(popular)
            return
        }
        const filtered = popular.filter((movie)=>(
            movie.genre_ids.includes(activeGenre)
        ))
        setFiltered(filtered)

    },[activeGenre])

    return (
        <div className="filter-container">
            <button className={activeGenre === 0 ? "active" : ""} onClick={()=> setAcitveGenre(0)}>All</button>
            <button className={activeGenre === 35 ? "active" : ""} onClick={()=> setAcitveGenre(35)}>Comedy</button>
            <button className={activeGenre === 28 ? "active" : ""} onClick={()=> setAcitveGenre(28)}>Action</button>
        </div>
    )
}

export default Filter