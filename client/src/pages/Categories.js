import React, { useState, useEffect } from 'react';
import useCategory from '../hooks/useCategory';
import Layout from '../components/Layout/Layout';
import { Link } from 'react-router-dom';

const Categories = () => {
    const categories = useCategory();
  return (
    <Layout>
        <div className='container'>
            <div className='row'>
                { categories.map((c) => (
                    <div className="d-grid gap-2 col-6 mx-auto mt-5 gx-3 gy-3">
                        <Link to={`/category/${c.slug}`} className="btn btn-primary">
                            {c.name}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </Layout>
  )
}

export default Categories;