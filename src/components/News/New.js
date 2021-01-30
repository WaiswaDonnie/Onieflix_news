import React,{useContext} from 'react'
import {Route,Link} from 'react-router-dom'
import './News.css'
import './Card.css'
import { NewsContext } from '../Services/ContextService'


function New({data}) {

    const {deleteNews} = useContext(NewsContext)
    return (
        <div>
            <div className="news-container ">
            <div className=" col-lg-6 col-md-6  col-sm-10 d-flex mx-auto">

           
            <div className="feature-card">
                <div className="feature-card-image">
                    {/* <img src='/images/clubs.jpg'></img> */}
                    <img src={data.image}></img>
                </div>
                <div className="feature-card-body">
                   
                   {data.description}
                   </div>
                   <span className="p-2">

                <h5>

                Author: {data.name} 
                </h5>
                <i>

                Date: {data.date} on {data.time}
                </i>
                   </span>
                <div className="feature-card-footer ">
                    <Route>
                            <Link to={`/edit/${data.id}`}>
                            
                        <button className="btn  mt-2 btn-block btn-sm btn-success">Edit <i className="fa fa-cogs" aria-hidden="true"></i></button>
                            </Link>
                            
                        <button className="btn mt-2 btn-block btn-sm btn-danger" onClick={()=>deleteNews(data.id)} >Delete <i className="fa fa-trash" aria-hidden="true"></i></button>
                          
                    </Route>
                </div>
            </div>

          
          
            </div>
            <div className="right-container col-3">

            </div>
        </div>
        </div>
    )
}

export default New
