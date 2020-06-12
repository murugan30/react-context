import React from 'react';

function Address(props) {
  return (
    <div style={{padding: 10}}>
      <h5>Address: {props.address}</h5>
    </div>
  );
}

export default Address;