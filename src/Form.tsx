import { useState } from "react";
import { SeatChooser } from "./components/SeatChooser";
import { OrderQR } from "./components/OrderQR";
import { Gratuity } from "./components/Gratuity";
import { GratuityPrompt } from "./components/GratuityPrompt";
import { sendChanged } from "./analytics";

export function Form() {
  const [seatGroup, setSeatGroup] = useState(1);
  const [gratuity, setGratuity] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="App">
      <h1>Order Your Tickets</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          fetch("https://httpbin.org/delay/2", {
            method: "POST"
          }).then(() => setMessage("Your order was successful!"));
        }}
      >
        <SeatChooser
          seatGroup={seatGroup}
          handleChange={(value) => {
            sendChanged("seatGroup");
            setSeatGroup(value);
          }}
        />
        <OrderQR
          text={`Seat Group ${seatGroup}`}
          onError={() => console.log("oops")}
        />
        <Gratuity
          gratuity={gratuity}
          handleChange={(value) => {
            sendChanged("gratuity");
            setGratuity(value);
          }}
        />
        <GratuityPrompt hasGratuity={gratuity !== ""} />
        <br />
        <div>Total: ${Number(gratuity) + (seatGroup === 1 ? 100 : 150)}</div>
        <div>
          <input type="Submit" value="Purchase" />
        </div>
        <div>{message}</div>
      </form>
    </div>
  );
}
