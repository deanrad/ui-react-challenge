export const SeatChooser = ({ seatGroup, handleChange }) => {
  return (
    <ul style={{ listStyle: "none" }}>
      <li>
        <label htmlFor="radio1">
          Seat Group 1 ($100)
          <input
            id="radio1"
            type="radio"
            name="seatGroup"
            value="1"
            checked={seatGroup === 1}
            onChange={() => handleChange(1)}
          />
        </label>
      </li>
      <li>
        <label htmlFor="radio2">
          Seat Group 2 ($150)
          <input
            id="radio2"
            type="radio"
            name="seatGroup"
            value="2"
            checked={seatGroup === 2}
            onChange={() => handleChange(2)}
          />
        </label>
      </li>
    </ul>
  );
};
