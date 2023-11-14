import React from "react";
import { useNavigate } from "react-router-dom";
import { Info } from "./Info";

export const Card = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      {data
        ? data.map((item) => {
            return (
              <div
                className="card"
                key={item.id}
                onClick={() => navigate(`/${item.id}`)}
              >
                <img src={`${item.images.sm}`} />
                <div className="card-title">
                  <h3>{item.name}</h3>
                </div>
              </div>
            );
          })
        : ""}
    </>
  );
};
