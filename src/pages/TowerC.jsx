import React from "react";
import towerC from "../api/TowerC.json";
export default function TowerC() {
  return (
    <>
      <div>
        <p>doorvi/TowerC </p>
        <div>
          {towerC.map((curData) => {
            const { id, address } = curData;
            return <div key={id}>{address}</div>;
          })}
        </div>
      </div>
    </>
  );
}
