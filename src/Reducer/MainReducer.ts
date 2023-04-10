import { useState, useCallback, memo, useEffect } from "react";
import axios from "axios";
import { ICurrency, GlobalContent, Action } from "../Types/types";
import { MainAction } from "../Action/action";

export const MainReducer = (state: GlobalContent, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case MainAction.AddClick:
      console.log("AddClick");
      return {
        ...state,
        //count: state.test + "reducer",
      };
    case MainAction.PortfolioClick:
      console.log("PortfolioClick");
      return {
        ...state,
        //value: state.test + String(payload),
      };
    default:
      return state;
  }
};
