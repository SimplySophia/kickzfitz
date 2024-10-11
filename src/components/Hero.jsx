
const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>The Best Balance For Your Feet</h1>
        <p>
            Step Up Your Shoe Game With Our Perfect
            Feet Match. Step Up Your Shoe Game With Our Perfect
            Feet Match.
        </p>
        <div className="hero-btn">
            <button>Shop Now</button>
            <button className="sec-btn">Category</button>
        </div>
         
        <div className="shopping">
            <p>Also Available On</p>

            <div className="brand-icons">
            <img src="/images/Amazon icon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
            </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe.png" alt="shoe" />
      </div>
    </main>
  )
}

export default Hero
