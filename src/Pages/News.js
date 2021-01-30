import React,{useContext} from 'react'
import New from '../components/News/New';
import { NewsContext } from '../components/Services/ContextService';



function News() {
    const {news} = useContext(NewsContext)
    
    return (
 
 
      
      
            <div className="container" style={{marginTop:'100px'}}>
              
              {/* {news.articles.map((newsData)=>(<New key={newsData.id} da     ta={newsData}/>))} */}
             { news.map((newsData)=> (<New data={newsData} key={newsData.id} />) )}
 
           
           
           
           
           
        
        </div>
        
    )
}


export default News
