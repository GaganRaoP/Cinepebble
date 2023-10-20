import React from 'react';

const ConditionalDisplay = (props) => {
  if (props.show) {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  } else {
    return null;  
  }
}

export default ConditionalDisplay;
