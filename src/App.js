import {getUsers , getLength} from './api/Users.js';
import './App.css';
import Table from './Components/Table.jsx'; 
import { useState } from 'react';
import Pagination from './Components/Pagination.jsx'; 

function App() {
  const [page, setPage]=useState(1);
  const [limit, setLimit]=useState(5);

  let totalPage =Math.ceil( getLength()/limit);
function handlePageChange(value){
  if(value === "&laquo;" || value ==="... "){
    setPage(1);
  }else if(value === "&lsaquo;"){
    if(page!==1){
      setPage(page-1);
    }
  }else if( value ==="&rsaquo;"){
    if(page!==totalPage){
      setPage(page+1);
    }
  }else if(value ==="&raquo;"|| value===" ..."){
    setPage(totalPage);
  }else{
    setPage(value);
  }
}

  return (
    <div className="Container">
  <Table users={getUsers(page,limit)}/>
  <Pagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange}/>
    </div>
  );
}

export default App;
