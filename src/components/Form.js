import React,{useContext, useState} from 'react'
import { Link,BrowserRouter as Router, useHistory,Route } from 'react-router-dom'
import './Form.css'
import { NewsContext } from './Services/ContextService'





function Form() {
 const {postNews} = useContext(NewsContext)
const history = useHistory()
 const [description, setDescription] = useState('')
 const [image, setImage] = useState('')
 const [name, setName] = useState('')
 const [date, setDate] = useState('')
 const [time, setTime] = useState('')

 const submitNews =(e)=>{

    e.preventDefault();
   const dataTest =  postNews({description,image,name,date,time})
   console.log("sOMEEEE",{description,image,name,date,time})

    setName('')
    setDate('')
    setDescription('')
    setImage('')
    setTime('')

    
history.push('/news')

 }
const goBack = ()=>{
    history.push('/news')
}
    return (
        
        
        <div className="form-container">
        <h3 className="text-center">CREATE POST</h3>
        <form className="form" onSubmit={submitNews}>
            <div className="form-group">
          
          
                <textarea cols="20" rows="3" value={description} onChange={(e)=>setDescription(e.target.value)}  className="form-control" placeholder="Write article">

                </textarea>
            </div>
            <div className="form-group">
                <input className="form-control" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Image url"></input>
            </div>
            <div className="form-group">
                <input type="date" className="form-control" value={date} onChange={(e)=>setDate(e.target.value)}></input>
            </div>
            <div className="form-group">
                <input type="time" className="form-control" value={time} onChange={(e)=>setTime(e.target.value)}></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Author`s Name"></input>
            </div>
            <div className="form-group">
                <button type="submit" className="btn-post btn-block">Post <i className="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>

            <div className="form-group text-center">
    
    
                <Link onClick={goBack}>Go back</Link>
             
             
             
            </div>
        </form>
        
        </div>
        
        
    )
}

export default Form
