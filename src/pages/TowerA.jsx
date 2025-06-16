import React from "react";
import towerA from "../api/TowerA.json";
export default function TowerA() {
  return (
    <>
      <div>
        <p>doorvi/TowerA</p>
        <div>
          {towerA.map((curData) => {
            const { id, address } = curData;
            return <div key={id}>{address}</div>;
          })}
        </div>
      </div>
    </>
  );
}
