import React from 'react'
import AddSearch from '../Components/AddAd/AddSearch'
import AddWork from '../Components/AddAd/AddWork'

const AddAd = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-around'}}>
            <AddSearch/>
            <AddWork/>

            
        </div>
    )
}

export default AddAd
