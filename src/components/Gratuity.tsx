export const Gratuity = ({ gratuity, handleChange }) => {
  return (
    <div>
      Gratuity:{" "}
      <input
        type="number"
        value={gratuity}
        onChange={({ target }) => {
          handleChange(target.value);
        }}
      />
    </div>
  );
};
