import { QRCode } from "react-qrcode-logo";
import { memo } from "react";

let renderCount = 0;
export const OrderQR = ({ text, onError }) => {
  console.log(`(${++renderCount})rendering qr code: beep boop`);
  return (
    <div>
      <QRCode value={text} />
    </div>
  );
};
