import React from "react";
import towerB from "../api/TowerB.json";
import { IoCall } from "react-icons/io5";
export default function TowerA() {
  return (
    <>
      <div>
        <p className="toast">doorvi/TowerB</p>
        <div className="floor">
          {towerB.map((curData) => {
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
