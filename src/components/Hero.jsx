export default function Hero() {
  return (
    <section className="hero">
      <div className="wrapper">
        <div className="hero-text">
          <h1>Little Lemon</h1>
          <p className="subtitle">Chicago</p>
          <p className="description">
            We are a family-owned Mediterranean resturant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button className="btn reserve-btn">Reserve a Table</button>
        </div>
        <div className="img-container">
          <img
            src="assets\restauranfood.jpg"
            alt="chef holding plate of food"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
}
