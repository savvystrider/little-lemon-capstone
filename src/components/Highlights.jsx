export default function Highlights() {
  return (
    <section className="highlights">
      <h2>This week's specials!</h2>
      <button className="btn menu-btn">Online menu</button>
      <div className="card-container">
        <div className="card">
          <div className="img-container">
            <img
              src="assets/greek-salad.jpg"
              alt="Greek salad"
              className="card-img"
            />
          </div>
          <div className="card-row">
            <h3>Greek salad</h3>
            <p className="dish-price">$12.99</p>
            <p className="dish-description">
              The famous Greek salad made with crispy lettuce, peppers, olives,
              and our homemade Chicago style feta cheese, garnished with crunch
              garlic and rosemary croutons.
            </p>
            <p>Order delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
