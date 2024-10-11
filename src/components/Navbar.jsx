

const Navbar = () => {
  return (
    <div>
      <nav className="container">
        <div className='logo'>
            <img src='/images/logo.jpg' alt='logo' className='logo'/>
        </div>
        <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">About</li>
            <li href="#">Contact</li>
        </ul>

        <button className='btn'>login</button>
      </nav>
    </div>
  )
}

export default Navbar;
