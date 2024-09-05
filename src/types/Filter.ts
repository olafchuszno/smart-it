import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export interface Filter {
  name: string,
  placeholder: string,
  value: string,
  action: ActionCreatorWithPayload<string, string>,
}