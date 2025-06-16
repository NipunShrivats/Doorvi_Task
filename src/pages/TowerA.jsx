import React from "react";
import towerA from "../api/TowerA.json";
import { IoCall } from "react-icons/io5";
export default function TowerA() {
  return (
    <>
      <div>
        <p className="toast">doorvi/TowerA</p>
        <div className="floor">
          {towerA.map((curData) => {
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
