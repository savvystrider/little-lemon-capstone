import { AiFillStar } from "react-icons/ai";

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonial">
        <h2>Rosana Alexandersen</h2>
        <img
          src="https://i.pravatar.cc/150?img=5"
          alt="Rosana Alexandersen"
          className="avatar"
        />
        <div className="star-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="quote">
          Little Lemon is the best Mediterranean restaurant in Chicago!
        </p>
      </div>
      <div className="testimonial">
        <h2>Eivor Varinsdottir</h2>
        <img
          src="https://i.pravatar.cc/150?img=48"
          alt="Eivor Varinsdottir"
          className="avatar"
        />
        <div className="star-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="quote">
          Can't get enough of the hummus and lemon desserts! Looking forward to
          coming back and trying new dishes.
        </p>
      </div>
      <div className="testimonial">
        <h2>Adele Castillo</h2>
        <img
          src="https://i.pravatar.cc/150?img=31"
          alt="Adele Castillo"
          className="avatar"
        />
        <div className="star-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="quote">
          This food is amazing! Can't recommend the salads enough.
        </p>
      </div>
      <div className="testimonial">
        <h2>Rhys Warszawski</h2>
        <img
          src="https://i.pravatar.cc/150?img=67"
          alt="Rhys Warszawski"
          className="avatar"
        />
        <div className="star-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <p className="quote">
          If you're looking for authentic and tasty Mediterranean food, look no
          further than Little Lemon. You won't regret it.
        </p>
      </div>
    </section>
  );
}
