export interface FormFields {
  id: number;
  code: string;
  payment: string;
  requesterId: number;
  status: string;
  purchaseDate: string;
  deliveryDate: string;
  remarks: string;
  active: boolean;
  vendorId: number;
  approverId: number;
  dateFrom: string;
  dateTo: string;
  employeeId: number;
  leaveTypeId: number;
}

export interface FormPurchaseItemFields {
  id: number;
  inventoryId: number;
  remarks: string;
  unitPrice: number;
  quantity: number;
}
