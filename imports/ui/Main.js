import React from 'react';
import { Link } from 'react-router-dom';

import ResList from '../ui/ResList';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
           <a className="navbar-brand" href="#">Home</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
             <ul className="navbar-nav mr-4">
               
               <li className="nav-item">
                 <a className="nav-link" href="#">About</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link " href="#">Portfolio</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link " href="#">Team</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link " href="#">Post</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link " href="#">Contact</a>
               </li>
             </ul>
             
           </div>
        </nav>
        <ResList/>

      </div>
    );
  }
}
