
import {SearchOutlined} from '@ant-design/icons'
import {MenuOutlined} from '@ant-design/icons'
import { useState, useEffect } from 'react';
import Card from '../dbcomponents/Card';
import axios from 'axios';



    let url = `https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&api_key=c748543571513813034a19f2b64ef48b`
    let arr=["Popular","Theatre","Kids","Drama","Comedie"];

  function Navbar () {
   const [search, setSearch] = useState('');
   const [urll, setUrll] = useState('url');
   const [movieData,setData]=useState([]);


    

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
        
        // if(getMovie == "Theatre") {
        //     url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+api_key;
        // }
        // if(getMovie == "Kids") {
        //     url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+api_key;
        // }
        // if(getMovie == "Drama") {
        //     url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+api_key;
        // }
        // if(getMovie == "Comedie") {
        //     url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+api_key;
        // }
        setUrll(url);
    }
    // const searchMovie=(e)=>{
    //     if(e.key=="Enter")
    //     {
    //         url=base_url+"/search/movie?api_key=c748543571513813034a19f2b64ef48b&query="+search;
    //         setUrll(url);
    //         setSearch(" ");
    //     }
    // }


    return (
        <div>
            <div className='navi'>
                <nav>
                    <div className="navbar">
                        <div className="link">
                            <ul className='links'>
                                <li><a href="Comedy">comedy</a></li>
                                <li><a href="Drama">Drama</a></li>
                                <li><a href="Kids">Kids</a></li>
                                <li><a href="Theatre">Theatre</a></li>
                                <li><a href="Popular">Popular</a></li>
                            </ul>
                        </div>
                        <div className="inp">
                            <input type="text" placeholder="Enter movie" className='enter-movie' />
                            <button className='search'>
                                <SearchOutlined  />
                            </button>
                        </div>
                        <div className="toggle">
                            <MenuOutlined />
                        </div>
                    </div>
                </nav>
                <div className="container-home">
               {/* {
                (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                    return(
                        <Card info={res} key={pos}/>
                    )
                })
               } */}
               {
                movieData.map((movie, index) => {
                    return(
                        <Card  key={index} {...movie}/>
                    )
                })
               }
               
           </div>
            </div>
        </div>
    )
}

export default Navbar;