import React from 'react';
import './style.css';


const Pagination = ({ dataPerPage, total, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(total / dataPerPage); i++) {
        pageNumbers.push(i);
    }
    

    return (
        <div>
            <nav>
                <ul className='pagination mt-4'>
                    {pageNumbers.map(number => (
                        <li key={number} className='page-item'>
                            <span onClick={() => paginate(number)}  className='page-link'>
                                {number}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Pagination;
