import React from "react";
import towerC from "../api/TowerC.json";
import { IoCall } from "react-icons/io5";
export default function TowerC() {
  return (
    <>
      <div>
        <p className="toast">doorvi/TowerC </p>
        <div className="floor">
          {towerC.map((curData) => {
            const { id, address } = curData;
            return (
              <div key={id} className="main-floor">
                {address}
                <span>
                  <IoCall />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
