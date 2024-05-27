import type { TableActions } from "@/types";

export interface TableActionsCmp<T> extends TableActions {
  actionsAsDropdown?: boolean;
  row: T;
  handleEdit: () => void;
  confirmDestroy: () => void;
  confirmApprove: () => void;
}
