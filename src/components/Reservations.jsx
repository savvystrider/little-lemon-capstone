export default function Reservations() {
  return (
    <div className="reservations">
      <h2>Reservations</h2>
      <form>
        <div className="input-element">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className="input-element">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" />
        </div>
        <div className="input-element">
          <label htmlFor="date">Choose date</label>
          <input type="date" id="date" />
        </div>
        <div className="input-element">
          <label htmlFor="time">Choose time</label>
          <select name="time" id="time">
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
        </div>
        <div className="input-element">
          <label htmlFor="guests">Number of Guests</label>
          <input type="number" id="guests" placeholder="1" min={1} max={10} />
        </div>
        <div className="input-element">
          <label htmlFor="occassion">Occassion</label>
          <select name="occassion" id="occassion">
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
