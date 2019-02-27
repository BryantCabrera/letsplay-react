import React, { Component } from 'react';

// const Boardgame = ({boardgames}) => {
//     const boardgamesList = boardgames.map((games, i) => {
//         return (
//             <div>
//             <li key={i}>{games.title}</li>
//             <li key={i+1}>{games.image}</li>
//             <li key={i+2}>{games.description}</li>
//           </div>
//         )
//     })
//   return (
//       <div id="all-board-games">
//       <h1>News</h1>
//       <ul>
//           {boardgamesList}
//       </ul>
//       </div>

//   )
// }


class Boardgame extends Component {
  
    
  render() {
    return (
      <div>
<div className="card-deck">
  <div className="card">
    <img src="https://i.imgur.com/ebQByqW.jpg"
     className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">Settlers of Catan</h5>
    </div>
  </div>
  <div className="card">
    <img src="https://i.imgur.com/imKfZFV.jpg"
     className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">Euphoria</h5>
    </div>
  </div>
  <div className="card">
    <img src="https://i.imgur.com/aZ1IIZ9.jpg" className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">King of Tokyo</h5>
    </div>
  </div>
</div>


<div className="card-deck">
  <div className="card">
    <img src="https://images-na.ssl-images-amazon.com/images/I/61v4C8o6thL._SY300_QL70_.jpg"
     className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">Life</h5>
    </div>
  </div>
  <div className="card">
    <img src="https://target.scene7.com/is/image/Target/GUEST_0decc452-9d0a-4cb8-9782-9f888df07aa7?wid=488&hei=488&fmt=pjpeg"
     className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">Perfection</h5>
    </div>
  </div>
  <div className="card">
    <img src="https://target.scene7.com/is/image/Target/GUEST_b73e0cff-d90c-4fd5-8741-8e3f90f388fc?wid=488&hei=488&fmt=pjpeg" className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">Candy Land</h5>
    </div>
  </div>
  <div className="card">
    <img src="https://images-na.ssl-images-amazon.com/images/I/91j3ey6HyRL._SX425_.jpg" className="card-img-top" alt="boardgame"/>
    <div className="card-body">
      <h5 className="card-title">Kingdomino</h5>
    </div>
  </div>
</div>
      </div>
    )
  }
}
export default Boardgame;
