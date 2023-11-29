import { useProgress } from '@react-three/drei'
import React from 'react'


const Overlay = () => {
    const progress = useProgress()

  return (
    <div className='overlay'>
        <div className={`loader ${progress === 100 ? "loader--disappear" : ""}`}/>
        {progress === 100 && (
            <div className="intro">
                <h1 className='logo'>Atmos</h1>
                <button className='explore'>
                    Explore
                </button>
            </div>
            
        )}
    </div>
  )
}

export default Overlay