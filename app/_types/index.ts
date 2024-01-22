import { Route, ActivePage, ModuleName } from "./app";
import { Breadcrumb } from "./component";
import { GeneralError } from "./request";
import { TableActions } from "./table";
import { CreateTodo } from "./todo";

import { BearSlice, CombinedSlicesType, FishSlice } from "./zustand";

export type {
  Route,
  GeneralError,
  TableActions,
  Breadcrumb,
  CreateTodo,
  ActivePage,
  FishSlice,
  BearSlice,
  CombinedSlicesType,
  ModuleName,
};
