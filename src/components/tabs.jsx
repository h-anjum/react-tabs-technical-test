import React, { useState } from "react";
import classNames from "classnames";
import { AiFillCaretUp } from "react-icons/ai";
import "./style.css";

const DonationTabs = () => {
  const [activeMainTab, setActiveMainTab] = useState(0);
  const [activeSubTabMonthly, setActiveSubTabMonthly] = useState(0);
  const [activeSubTabOnce, setActiveSubTabOnce] = useState(0);
  const [selectedAmount, setSelectedAmount] = useState("");

  const handleMainTabClick = (index) => {
    setActiveMainTab(index);
    setActiveSubTabMonthly(0);
    setActiveSubTabOnce(0);
    setSelectedAmount(""); // Clear selected amount when changing tabs
  };

  const handleSubTabMonthlyClick = (index) => {
    setActiveSubTabMonthly(index);
    setSelectedAmount(monthlyMoneyQuantities[index]);
  };

  const handleSubTabOnceClick = (index) => {
    setActiveSubTabOnce(index);
    setSelectedAmount(onceMoneyQuantities[index]);
  };

  const monthlyMoneyQuantities = [
    10,
    40,
    75,
    100,
    "other amount",
    "Donate £40 today",
  ];
  const onceMoneyQuantities = [
    6,
    12,
    18,
    30,
    "other amount",
    "Donate £12 today",
  ];

  return (
    <>
      <div className="tabs-container">
        <div
          onClick={() => handleMainTabClick(0)}
          className={classNames("tab-parent", {
            "active-tab-parent": activeMainTab === 0,
          })}
        >
          Donate Monthly
        </div>
        <div
          onClick={() => handleMainTabClick(1)}
          className={classNames("tab-parent", {
            "active-tab-parent": activeMainTab === 1,
          })}
        >
          Donate Once
        </div>
      </div>
      <div className="tab-content">
        <h1 className="my-1 font-medium">I would like to donate</h1>
        <div className="donation-options">
          {activeMainTab === 0 &&
            monthlyMoneyQuantities.map((quantity, index) => (
              <div
                key={index}
                onClick={() => handleSubTabMonthlyClick(index)}
                className={classNames("donation-option", {
                  "active-tab": activeSubTabMonthly === index,
                  "last-child": index === monthlyMoneyQuantities.length - 1,
                })}
              >
                {index === monthlyMoneyQuantities.length - 1
                  ? selectedAmount
                    ? `£${selectedAmount}`
                    : "Other Amount"
                  : `£${quantity}`}
              </div>
            ))}
          {activeMainTab === 1 &&
            onceMoneyQuantities.map((quantity, index) => (
              <div
                key={index}
                onClick={() => handleSubTabOnceClick(index)}
                className={classNames("donation-option", {
                  "active-tab": activeSubTabOnce === index,
                  "last-child": index === onceMoneyQuantities.length - 1,
                })}
              >
                {index === onceMoneyQuantities.length - 1
                  ? selectedAmount
                    ? `£${selectedAmount}`
                    : "Other Amount"
                  : `£${quantity}`}
              </div>
            ))}
        </div>
        <div className="donation-info">
          <p>
            {activeMainTab === 0
              ? `Donate £40 could help answer an emergency call to our Animal rescue line`
              : `£12 could help answer an emergency call to our Animal rescue line`}
          </p>
          <div className="caret-up">
            <AiFillCaretUp size={30} />
          </div>
        </div>
      </div>
      <div className="payment-options">
        <div className="underline font-medium">I would like to pay</div>
        <div className="payment-methods">
          <img className="logo" src="/image.png" alt="" />
          <img className="logo" src="/mastercard-logo.png" alt="" />
          <img className="logo" src="/paypal-logo.png" alt="" />
          <img className="logo" src="/fund.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default DonationTabs;
