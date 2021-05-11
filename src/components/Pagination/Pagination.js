import React from 'react';
import { Link } from 'react-router-dom';
import './Pagination.scss'

const Pagination = () => {
    return (
        <div>
              <ul className='pagination'>
                <li className='pagination-item'><Link to='#'><button className='pagination__button'><i className='fas fa-chevron-left' /></button></Link></li>
                <li className='pagination-item'><Link to='#'><button className='pagination__button pagination--number'>1</button></Link></li>
                <li className='pagination-item'><Link to='#'><button className='pagination__button pagination--number'>2</button></Link></li>
                <li className='pagination-item'><Link to='#'><button className='pagination__button pagination--number'>3</button></Link></li>
                <li className='pagination-item'><Link to='#'><button className='pagination__button pagination--number'>4</button></Link></li>
                <li className='pagination-item'><Link to='#'><button className='pagination__button pagination--number'>5</button></Link></li>
                <li className='pagination-item'><Link to='#'><button className='pagination__button'><i className='fas fa-chevron-right' /></button></Link></li>
            </ul>
        </div>
    )
}

export default Pagination;
