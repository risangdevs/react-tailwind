import React, { useEffect, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
// import "../../App.css";
export const ProductOverview = ({ plan }) => {
  const premium = [
    { name: "Homeowners Insurance", included: true },
    { name: "Private Mortgage Insurance", included: true },
    { name: "Life Insurance", included: true },
    { name: "Bank Account", included: true },
    { name: "Premium Customer Services", included: true },
  ];
  const classic = [
    { name: "Homeowners Insurance", included: true },
    { name: "Private Mortgage Insurance", included: false },
    { name: "Life Insurance", included: false },
    { name: "Bank Account", included: true },
    { name: "Premium Customer Services", included: false },
  ];
  const [selectedPlan, setSelectedPlan] = useState([]);
  useEffect(() => {
    if (plan === "premium") {
      setSelectedPlan(premium);
    } else if (plan === "classic") {
      setSelectedPlan(classic);
    }
  }, [plan]);

  const isIncluded = (params) => {
    return params ? (
      <CheckCircleOutlineOutlinedIcon style={{ color: "green" }} />
    ) : (
      <CancelOutlinedIcon style={{ color: "red" }} />
    );
  };
  return (
    <>
      {plan && (
        <>
          <h1 className="text-sm font-medium text-gray-700">Plan Overview</h1>
          {selectedPlan.map((e, i) => {
            return (
              <div className="flex" key={i}>
                {isIncluded(e.included)}
                <p>{e.name}</p>
              </div>
            );
          })}
        </>
      )}
      {!plan && null}
    </>
  );
};
