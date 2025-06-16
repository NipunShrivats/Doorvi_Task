import React from "react";
import towerD from "../api/TowerD.json";
export default function TowerA() {
  return (
    <>
      <div>
        <p>doorvi/TowerD</p>
        <div>
          {towerD.map((curData) => {
            const { id, address } = curData;
            return <div key={id}>{address}</div>;
          })}
        </div>
      </div>
    </>
  );
}
