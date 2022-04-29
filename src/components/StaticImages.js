import React from 'react'

function StaticImages({img}) {
  return (
    <div className="static__images">
      <img src={img} />
      <img src={img} />
      <img src={img} />
    </div>
  );
}

export default StaticImages