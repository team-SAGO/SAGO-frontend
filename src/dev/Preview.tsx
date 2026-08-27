import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { previewScreens } from "./router";
import PreviewFrame from "./PreviewFrame";
import "./Preview.css";

const devices = [
  { name: "Galaxy S25", width: 393, height: 852 },
  { name: "Galaxy S25 Ultra", width: 412, height: 915 },
  { name: "iPhone 16", width: 393, height: 852 },
  { name: "iPhone 16 Pro Max", width: 430, height: 932 },
];

function PreviewContent() {
  const navigate = useNavigate();

  const [selected, setSelected] = useState(0);
  const [device, setDevice] = useState(0);
  const [zoom, setZoom] = useState(1);

  const [width, setWidth] = useState(devices[0].width);
  const [height, setHeight] = useState(devices[0].height);

  const handleDeviceChange = (index: number) => {
    setDevice(index);
    setWidth(devices[index].width);
    setHeight(devices[index].height);
  };

  const handleScreenSelect = (index: number) => {
    setSelected(index);
    navigate(previewScreens[index].path);
  };

  return (
    <div className="preview">
      <aside className="menu">
        <h2>SAGO Preview</h2>

        {previewScreens.map((screen, index) => (
          <button
            key={screen.name + index}
            className={selected === index ? "selected" : ""}
            onClick={() => handleScreenSelect(index)}
          >
            <small>{screen.category}</small>
            <br />
            {screen.name}
          </button>
        ))}
      </aside>

      <section className="workspace">
        <div className="toolbar">
          <select
            value={device}
            onChange={(e) => {
              handleDeviceChange(Number(e.target.value));
            }}
          >
            {devices.map((d, i) => (
              <option key={d.name} value={i}>
                {d.name}
              </option>
            ))}
          </select>

          <div className="size-control">
            <label>
              가로
              <input
                type="range"
                min="280"
                max="600"
                value={width}
                onChange={(e) => {
                  setWidth(Number(e.target.value));
                }}
              />
              <span>{width}px</span>
            </label>

            <label>
              세로
              <input
                type="range"
                min="500"
                max="1200"
                value={height}
                onChange={(e) => {
                  setHeight(Number(e.target.value));
                }}
              />
              <span>{height}px</span>
            </label>
          </div>

          <button type="button" onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}>
            -
          </button>
          <span>{Math.round(zoom * 100)}%</span>
          <button type="button" onClick={() => setZoom(Math.min(2, zoom + 0.1))}>
            +
          </button>
        </div>

        <main className="viewer">
          <PreviewFrame
            width={width}
            height={height}
            zoom={zoom}
            path={previewScreens[selected].path}
            deviceName={devices[device].name}
          />
        </main>
      </section>
    </div>
  );
}

export default function Preview() {
  return <PreviewContent />;
}