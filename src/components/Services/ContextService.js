import React,{createContext,useEffect,useState} from 'react'
import axios from 'axios'


export const NewsContext = createContext();



export const NewsContextProvider = ({children})=>{

    const [news, setNews] = useState([]);

    useEffect(()=>{
     const getNews=()=>
     
     {axios.get('http://localhost:8080/news')
        .then(response => {
         
         
            setNews(response.data)
        })
       
    }

    getNews()
       
        
    },[news])


    
    

    function deleteNews(id){

        axios.delete(`http://localhost:8080/news/${id}`).then(response=>{
            console.log("DETELED")
        })
        
        setNews(news.filter((newsData)=> newsData.Id !==id));
    }


const postNews = async (NewsToPost)=>{
        
        axios.post('http://localhost:8080/news/',NewsToPost).then(response=>{
            setNews([...news,response.data]);


    
        }).catch(err => window.alert(err))
            
    }

    
    const fetchSingleNews = async(id)=>{

        const res = await axios.get(`http://localhost:8080/news/${id}`)
        const dataGot = res.data;
    
    
        return dataGot;
    }

    function editNews(id,updatedNews){

    
        axios.put(`http://localhost:8080/news/${id}`,updatedNews)
    

        
    }

    

    return(
      
        <NewsContext.Provider value={{news,postNews,deleteNews,editNews, fetchSingleNews}}>
            {/* <UpdateNewsContext.Provider> */}

             {children}
            {/* </UpdateNewsContext.Provider> */}
        </NewsContext.Provider>


       
    )
}




