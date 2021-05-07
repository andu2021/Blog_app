import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <div>
              <ul className='pagination'>
                <li className='page-item'><Link to='#'><i className='fas fa-chevron-left' /></Link></li>
                <li className='page-item'><Link to='#'>1</Link></li>
                <li className='page-item'><Link to='#'>2</Link></li>
                <li className='page-item'><Link to='#'>3</Link></li>
                <li className='page-item'><Link to='#'>4</Link></li>
                <li className='page-item'><Link to='#'>5</Link></li>
                <li className='page-item'><Link to='#'><i className='fas fa-chevron-right' /></Link></li>
            </ul>
        </div>
    )
}

export default Pagination;
