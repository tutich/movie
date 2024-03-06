
import {SearchOutlined} from '@ant-design/icons'
import {MenuOutlined} from '@ant-design/icons'
import { useState, useEffect } from 'react';
import Card from '../dbcomponents/Card';
import { FaBars } from "react-icons/fa6";
import { HiX } from "react-icons/hi";
import axios from 'axios';



    let url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c748543571513813034a19f2b64ef48b`
    let arr=["Popular","Now Playing","Top Rated","Upcoming"];

  function Navbar () {
   const [search, setSearch] = useState('');
   const [urll, setUrll] = useState('url');
   const [movieData,setData]=useState([]);
   const [toggleIcon, setToggleIcon] = useState(false);
    

   useEffect(()=>{
    axios.get(url)
    .then((response) => { setData(response.data.results)})
    .catch(error => {
        console.error('Error fetching data:', error);
      });
  },[urll])

    const getData = (getMovie) => {
        if(getMovie == "Popular") {
            url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=c748543571513813034a19f2b64ef48b`;
        }
        
        if(getMovie == "Now Playing") {
            url=`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=c748543571513813034a19f2b64ef48b`;
        }
        if(getMovie == "Top Rated") {
            url=`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=c748543571513813034a19f2b64ef48b`;
        }
        if(getMovie == "Upcoming") {
            url=`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1&api_key=c748543571513813034a19f2b64ef48b`;
        }
        
        setUrll(url);
    }
    const searchMovie=(e)=>{
        
        if(e.key ==="Enter")
        {
            url = `https://api.themoviedb.org/3/search/movie?api_key=c748543571513813034a19f2b64ef48b&query=${search}`
            setUrll(url);
            setSearch(" ");
        }
    }
    const handleOnCLick=(e)=>{
        e.preventDefault();
        if(e)
        {  
            url = `https://api.themoviedb.org/3/search/movie?api_key=c748543571513813034a19f2b64ef48b&query=${search}`
            setUrll(url);
            setSearch(" ");
        
        }
    };
    const handleToggleIcon = (e) => {
        e.preventDefault();
        setToggleIcon(!toggleIcon);
    };

    const handleLinkClick = () => {
        setToggleIcon(false);
      };


    return (
        <div>
            <div className='navi'>
                <nav>
                    <div className="navbar">
                        <div className="link">
                            <ul className={`links ${toggleIcon ? "active" : ""}`}>

                                {
                                    arr.map((value, index) => {
                                        return (
                                            <li key={index} onClick={handleLinkClick}><a href="#" name={value} onClick={() => getData(value)}>{value}</a></li>
                                        )
                                    })
                                }
                                
                            </ul>
                        </div>
                        <div className="inp">
                            <input type="text" placeholder="Enter movie" className='enter-movie' 
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            onKeyDown={searchMovie}
                            />
                            <button className='search' onClick={handleOnCLick}>
                                <SearchOutlined  />
                            </button>
                        </div>
                        <div className="toggle" onClick={handleToggleIcon}>
                        { toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
                        </div>
                    </div>
                </nav>
                <div className="container-home">
               
               {
                movieData.map((movie, index) => {
                    return(
                        <Card  key={index} {...movie}/>
                    )
                })
               }
               {/* {movieData.length === 0 ? (
                  <p className="notfound">Not Found</p>
                  ) : (
                 movieData.map((movie, index) => (
                  <div key={index}>
                  <p>Name: {movie.name}</p>
                  <p>Title: {movie.title}</p>
                 </div>
                 ))
                 )} */}
               
           </div>
            </div>
        </div>
    )
}

export default Navbar;