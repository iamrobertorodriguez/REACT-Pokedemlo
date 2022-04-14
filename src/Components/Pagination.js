import React from 'react';
import '../styles/pagination.css';

const Pagination = ( { 
    cardPerPage, 
    totalCards, 
    setCurrentPage, 
    currentPage 
} ) => {

    const pageNumbers = [  ]

    for ( let i = 1; i <= Math.ceil( totalCards / cardPerPage); i++ ) {
        pageNumbers.push( i )
    }

    return (
        <div className='pagination'>
            <p>Current page: { currentPage }</p>
            <div className='pages'>
                <button
                    onClick={ (  ) => {
                        if ( currentPage > 1 ) {
                            setCurrentPage( currentPage - 1 )
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }
                    } }
                >
                    PREVIOUS
                </button>
                { pageNumbers.map( number => (
                    <button key={ number } onClick={ (  ) => { 
                        setCurrentPage( number )
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        });
                    } }>
                        { number }
                    </button>
                ) ) }
                <button
                    onClick={ (  ) => {
                        if ( currentPage < ( Math.ceil( totalCards / cardPerPage) )  ) {
                            setCurrentPage( currentPage + 1 )
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth'
                            });
                        }
                    } }
                >
                    NEXT
                </button>
            </div>
        </div>
    );
};

export default Pagination;