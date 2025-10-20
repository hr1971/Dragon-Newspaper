import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RighAside from '../components/homelayout/RighAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
   const data = useLoaderData(); 
   const {id} = useParams();
   const [news,setNews] = useState({});

   useEffect(() => {

    const NewsDetails = data.find(singleNews => singleNews.id == id);
    setNews(NewsDetails);
   },[data,id])
    return (
        <div>
            <header className='py-3'>
                <Header />
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 py-5'>
            <section className='col-span-9'>
                <h1>News Details</h1>
                <NewsDetailsCard news={news}/>
            </section>
            <aside className='col-span-3'>
                <RighAside />
            </aside>
            </main>
        </div>
    );
};

export default NewsDetails;