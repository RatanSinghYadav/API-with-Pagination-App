import React, { useState, useEffect } from 'react';
import Home from './home';
import Pagination from './pagination';

function Index() {
    const [data, setData] = useState([]);

    const getData = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const newData = await res.json();
        setData(newData);
    }

    useEffect(() => {
        getData();
    }, []);


    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(3);

    const indexOfLastData = currentPage * dataPerPage;
    const indexOfFirstData = indexOfLastData - dataPerPage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);


    return (
        <div>
            <Pagination dataPerPage={dataPerPage} total={data.length} paginate={paginate} />
            <Home data={currentData} />
        </div>
    )
}

export default Index;