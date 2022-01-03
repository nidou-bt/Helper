import React, { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteSearchById, getAllSearch } from '../../JS/actions/searchAd'
import { deleteUser, getUsers } from '../../JS/actions/user'
import { deleteWorkById, getAllWork } from '../../JS/actions/workAd'
import Loading from '../Loading'

const ListeUser = () => {
    const user = useSelector(state => state.userReducer.user)
    const dispatch = useDispatch()
    const users = useSelector(state => state.userReducer.users)
    const isLoad= useSelector(state => state.userReducer.isLoad)
    const searchList = useSelector(state => state.searchReducer.searchList)
    const workList = useSelector(state => state.workReducer.workList)
    const token = localStorage.getItem("token");
useEffect(() => {
    if(user&&user.role===1){
        dispatch(getUsers())
        dispatch(getAllSearch())
        dispatch(getAllWork())
        
    }
    
}, [token])


    return (
        <div>
           <h3 style={{marginLeft:'20px'}} >List User</h3> 
{isLoad?<Loading/>:
    <Table striped bordered hover>
        <thead>
        <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Id</th>
        <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          users  ?users.map((el,i)=>(
                <tr key={el._id} >
        <td>{i}</td>
        <td>{el.name}</td>
        <td>{el.LastName}</td>
        <td>{el.email}</td>
        <td>{el._id}</td>
        <td><button onClick={()=>dispatch(deleteUser(el._id))}>delete</button></td>
        </tr>
            )):null  
        }
        
        </tbody>
    </Table> }
    <h3  style={{marginLeft:'20px'}}>SearchTab</h3> 
    <Table striped bordered hover>
        <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>adresse</th>
        <th>Email</th>
        <th>phone</th>
        <th>bio</th>
        <th>Id</th>
        <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          searchList  ?searchList.map((el,i)=>(
                <tr key={el._id} >
        <td>{i}</td>
        <td>{el.name}</td>
        <td>{el.adresse}</td>
        <td>{el.email}</td>
        <td>{el.phone}</td>
        <td>{el.bio}</td>
        <td>{el._id}</td>
        <td><button onClick={()=>dispatch(deleteSearchById(el._id))} >delete</button></td>
        </tr>
            )):null  
        }
        
        </tbody>
    </Table>
    <h3  style={{marginLeft:'20px'}}>WorkTab</h3> 
    <Table striped bordered hover>
        <thead>
        <tr>
        <th>#</th>
        <th>Name</th>
        <th>titre</th>
        <th>Email</th>
        <th>description</th>
        <th>adresse</th>
        <th>phone</th>
        <th>Id</th>
        <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
          workList  ?workList.map((el,i)=>(
                <tr key={el._id} >
        <td>{i}</td>
        <td>{el.name}</td>
        <td>{el.titre}</td>
        <td>{el.email}</td>
        <td>{el.description}</td>
        <td>{el.adresse}</td>
        <td>{el.phone}</td>
        <td>{el._id}</td>
        <td><button onClick={()=>dispatch(deleteWorkById(el._id))} >delete</button></td>
        </tr>
            )):null  
        }
        
        </tbody>
    </Table>
        </div>
    )
}

export default ListeUser
