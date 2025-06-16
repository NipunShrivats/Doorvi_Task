import React from "react";
import towerD from "../api/TowerD.json";
import { IoCall } from "react-icons/io5";
export default function TowerA() {
  return (
    <>
      <div>
        <p className="toast">doorvi/TowerD</p>
        <div className="floor">
          {towerD.map((curData) => {
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
