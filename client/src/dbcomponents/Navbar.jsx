
import {SearchOutlined} from '@ant-design/icons'
import {MenuOutlined} from '@ant-design/icons'
import { useState, useEffect } from 'react';
import Card from '../dbcomponents/Card';

function Navbar () {
   const [search, setSearch] = useState('');
   const [url_set, setUrl] = useState('url');
   const [movieData,setData]=useState([]);


    const api_key = `&api_key=c748543571513813034a19f2b64ef48b`;
    let base_url = `https://api.themoviedb.org/3/search/movie?`;
    let url = api_key + "/discover/movie?sort_by=popularity.desc" + base_url;
    let arr=["Popular","Theatre","Kids","Drama","Comedie"]

    useEffect (() => {
        fetch(url_set).then(res => res.json()).then((data) => {
            setData(data.results)
        })
    },[])

    const getData = (getMovie) => {
        if(getMovie == "Popular") {
            url = base_url+"/discover/movie?sort_by=popularity.desc"+api_key;
        }
        
        if(getMovie == "Theatre") {
            url=base_url+"/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22"+api_key;
        }
        if(getMovie == "Kids") {
            url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc"+api_key;
        }
        if(getMovie == "Drama") {
            url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+api_key;
        }
        if(getMovie == "Comedie") {
            url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+api_key;
        }
        setUrl(url);
    }
    const searchMovie=(evt)=>{
        if(evt.key=="Enter")
        {
            url=base_url+"/search/movie?api_key=c748543571513813034a19f2b64ef48b&query="+search;
            setUrl(url);
            setSearch(" ");
        }
    }


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
               {
                (movieData.length==0)?<p className="notfound">Not Found</p>: movieData.map((res,pos)=>{
                    return(
                        <Card info={res} key={pos}/>
                    )
                })
               }
               
           </div>
            </div>
        </div>
    )
}

export default Navbar;