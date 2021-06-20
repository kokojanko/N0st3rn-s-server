import React from 'react'


function Sidebar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bgg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">N0st3rn</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/main">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/features">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Something</a>
        </li>
        <div class="dropdown">
            <button class="dropbtn bgg">Lore &darr;</button>
            <div class="dropdown-content">
            <a href="/past">The age of ancient</a>
            <a href="/Now">Age of finding</a>
        </div>
        </div> 
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Sidebar