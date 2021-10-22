export const sendChanged = (fieldName: string) => {
  // intentionally delayed for seat group
  const delay = fieldName === "seatGroup" ? 5 : 1;
  return fetch("https://httpbin.org/delay/" + delay, {
    mode: "no-cors"
  });
};
