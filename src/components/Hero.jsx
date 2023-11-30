export default function Hero() {
  return (
    <section className="hero">
      <h1>Little Lemon</h1>
      <p className="subtitle">Chicago</p>
      <p className="description">
        We are a family-owned Mediterranean resturant, focused on traditional
        recipes served with a modern twist.
      </p>
      <div className="img-container">
        <img
          src="assets\restauranfood.jpg"
          alt="chef holding plate of food"
          className="hero-img"
        />
      </div>
      <button className="btn reserve-btn">Reserve a Table</button>
    </section>
  );
}
