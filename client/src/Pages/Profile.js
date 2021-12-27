import React from 'react'
import MyAdSearch from '../Components/Profile/MyAdSearch'
import MyAdsWorks from '../Components/Profile/MyAdsWorks'
import Update from '../Components/Profile/Update'
import { useSelector } from 'react-redux'
import Loading from '../Components/Loading'
import ImageGallery from 'react-image-gallery';
const PREFIX_URL = 'https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/';
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
      originalHeight:'auto',
      originalWidth:'150px',
      thumbnailHeight:'50px',
      thumbnailWidth:'50px'
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
      originalHeight:'auto',
      originalWidth:'150px',
      thumbnailHeight:'50px',
      thumbnailWidth:'50px'
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
      originalHeight:'auto',
      originalWidth:'150px',
      thumbnailHeight:'50px',
      thumbnailWidth:'50px'
    },
  ];
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

{/* <Update/> */}
{/* <MyAdSearch/> */}
<MyAdsWorks />
{/* <ImageGallery items={images} infinite='false' /> */}

        </div>
    )
}

export default Profile
