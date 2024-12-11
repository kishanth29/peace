import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Appbar from '../components/Appbar';
import Footer from '../components/Footer';
import Product from '../components/layouts/product/Product';
import { getProducts } from '../actions/productActions';
import video from '../assets/videos/meditation.mp4';
import ArticleList from '../components/layouts/articles/ArticleList';
import RecipeList from '../components/layouts/recipes/RecipeList';
import MetaData from '../components/layouts/MetaData';

export default function Programs() { 
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsState);
  const [currentPage] = useState(1);
  const location = useLocation();
  const hash = location.hash;

  useEffect(() => {
    dispatch(getProducts(currentPage));
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  // Inline styles
  const styles = {
    videoContainer: {
      position: 'relative',
      width: '100%',
      height: 'auto',
      overflow: 'hidden',
      margin: 0,
      padding: 0,
    },
    videoOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      color: 'white',
      textAlign: 'right',
      background: 'rgba(0, 0, 0, 0)',
      padding: '20px',
      boxSizing: 'border-box',
      zIndex: 1,
    },
    video: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
  };

  return (
    <Fragment>
      <MetaData title={"Programs"}/>
      <Appbar />
      <div style={styles.videoContainer}>
        <video
          autoPlay
          loop
          muted
          style={styles.video}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div style={styles.videoOverlay}>
          <h1>Feel Amazing in Both Body and Mind</h1>
          <p>
          Access a variety of workouts, healthy recipes, <br /> relaxing meditations, and expert articles <br /> for a complete approach to feeling great
          </p>
        </div>
      </div>
      <h1 id='workouts' className='container mt-5'>Latest Workouts & Yoga</h1>
      <section id='products_heading' className='container mt-5'>
        <div className="row">
          {products && products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </section>
      <hr />
      <ArticleList id='article'/>
      <hr />
      <RecipeList id='recipe' />
      <Footer />
    </Fragment>
  );
}
