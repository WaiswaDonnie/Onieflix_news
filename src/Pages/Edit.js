import React,{useContext,useState,useEffect} from 'react'
import { NewsContext } from '../components/Services/ContextService'
import {useHistory} from 'react-router-dom'
import axios from 'axios';


function Edit({match}) {
const {   editNews} = useContext(NewsContext);
const [editedNews, setEditedNews] =  useState('');

// const {newsData, setNewsData} = useState('');

const urlId = +match.params.id;
const history = useHistory()
useEffect(()=>{
    
   
    axios.get(`http://localhost:8080/news/${urlId}`).then(response =>{

        const data = response.data;
       
        
        setEditedNews(data);

    }).catch(error => console.log(error))

   
},[urlId])


const onSubmit = (e)=>{

    e.preventDefault()





    
    
//   console.log(editedNews)
    editNews(urlId,editedNews)


    history.push('/news')
}

const onChange=(e)=>{
    
    const {name,value} = e.target;

    // setEditedNews({[name]:value,[date]:value})
    setEditedNews({...editedNews,[name]:value})
    

}


const cancelEditting =() =>{
    history.push('/news')
}






    return (
        <div className="form-container">
        <h3 className="text-center">Edit Post</h3>
        <form className="form" onSubmit={onSubmit}>
            <div className="form-group">
          
          
                <textarea cols="20" rows="3" name="description" value={editedNews.description} onChange={onChange}  className="form-control" placeholder="Write article">

                </textarea>
            </div>
            <div className="form-group">
                <input className="form-control" name="image" value={editedNews.image} onChange={onChange}  placeholder="Image url"></input>
            </div>
            <div className="form-group">
                <input type="date" className="form-control" name="date" value={editedNews.date} onChange={onChange} ></input>
            </div>
            <div className="form-group">
                <input type="time" className="form-control" name="time" value={editedNews.time} onChange={onChange} ></input>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="name" value={editedNews.name} onChange={onChange}  placeholder="Author`s Name"></input>
            </div>
            <div className="form-group">
                <button type="submit" className=" btn btn-success btn-block">Save <i className="fa fa-floppy-o" aria-hidden="true"></i></button>
            </div>

            <div className="form-group text-center">
              

                
                <button className="btn btn-danger" onClick={cancelEditting}>Cancel &nbsp; <i className="fa fa-times" aria-hidden="true"></i></button>
            </div>
        </form>
        
        </div>
    )
}

export default Edit
