import React from 'react';

import './Capital.css'

const Capital = (props) => {
  return (
    <>
        <th>18</th>
        <th>27</th>
        <th>{ props.name }</th>
    </>
  );
}

export default Capital;