import React from 'react';
import Address from './Address';

function List(props) {
  return (
    <div style={{padding: 10}}>
      <Address address={props.address} />
    </div>
  );
}

export default List;