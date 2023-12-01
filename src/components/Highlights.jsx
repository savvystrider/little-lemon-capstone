export default function Highlights() {
  return (
    <section className="highlights">
      <div className="highlights-row">
        <h2>This week's specials!</h2>
        <button className="btn menu-btn">Online menu</button>
      </div>
      <div className="card-container">
        <div className="card">
          <div className="img-container">
            <img
              src="assets/greek-salad-small.jpg"
              alt="Greek salad"
              className="card-img"
            />
          </div>
          <div className="card-inner">
            <div className="card-row">
              <h3>Greek salad</h3>
              <p className="dish-price">$12.99</p>
            </div>
            <p className="dish-description">
              The famous Greek salad made with crispy lettuce, peppers, olives,
              and our homemade Chicago style feta cheese, garnished with crunch
              garlic and rosemary croutons.
            </p>
            <p className="delivery">Order delivery</p>
          </div>
        </div>
        <div className="card">
          <div className="img-container">
            <img
              src="assets/bruchetta.svg"
              alt="bruschetta"
              className="card-img"
            />
          </div>
          <div className="card-inner">
            <div className="card-row">
              <h3>Bruschetta</h3>
              <p className="dish-price">$5.99</p>
            </div>
            <p className="dish-description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <p className="delivery">Order delivery</p>
          </div>
        </div>
        <div className="card">
          <div className="img-container">
            <img
              src="assets/lemon dessert.jpg"
              alt="lemon dessert"
              className="card-img"
            />
          </div>
          <div className="card-inner">
            <div className="card-row">
              <h3>Lemon Dessert</h3>
              <p className="dish-price">$5.00</p>
            </div>
            <p className="dish-description">
              This comes straight from grandma's recipe book. Every last
              ingredient has been sourced and is authentic as can be imagined.
            </p>
            <p className="delivery">Order delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}
