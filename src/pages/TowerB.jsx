import React from "react";
import towerB from "../api/TowerB.json";
export default function TowerA() {
  return (
    <>
      <div>
        <p>doorvi/TowerB</p>
        <div>
          {towerB.map((curData) => {
            const { id, address } = curData;
            return <div key={id}>{address}</div>;
          })}
        </div>
      </div>
    </>
  );
}
