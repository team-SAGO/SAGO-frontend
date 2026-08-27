export const devices = [
  {
    name: "Galaxy S25",
    width: 393,
    height: 852,
  },
  {
    name: "Galaxy S25 Ultra",
    width: 412,
    height: 915,
  },
  {
    name: "iPhone 16",
    width: 393,
    height: 852,
  },
  {
    name: "figma",
    width: 402,
    height: 874,
  },
  {
    name: "iPhone 16 Pro Max",
    width: 430,
    height: 932,
  },
  {
    name: "Pixel 9",
    width: 412,
    height: 915,
  },
  {
    name: "iPad Mini",
    width: 744,
    height: 1133,
  }
];

import { devices } from "./devices";

const [deviceIndex, setDeviceIndex] = useState(0);

const device = devices[deviceIndex];