import React from 'react'
import MyAdSearch from '../Components/Profile/MyAdSearch'
import MyAdsWorks from '../Components/Profile/MyAdsWorks'
import Update from '../Components/Profile/Update'
import { useSelector } from 'react-redux'
import Loading from '../Components/Loading'

const Profile = () => {
    const user = useSelector(state => state.userReducer.user)
    const isLoad = useSelector(state => state.userReducer.isLoad)
    return (
        <div>
         {
    isLoad?<Loading/>:
    user ? (
        <div>
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <h3>{user.phone}</h3>
        </div>
      ) : null
}

<Update/>
<MyAdSearch/>
<MyAdsWorks />


        </div>
    )
}

export default Profile
