import { messages } from ".";

const duration = 2.5;

export const notifDestroyError = (description?: string, title?: string) => ({
  message: title ?? "Delete Fail",
  description: description ?? "Failed to delete data",
  duration,
});

export const notifDestroySuccess = (description?: string, title?: string) => ({
  message: title ?? "Delete Success",
  description: description ?? "Data has been deleted successfully",
  duration,
});

export const notifStoreError = (description?: string, title?: string) => ({
  message: title ?? "Create Fail",
  description: description ?? "Failed to create new data",
  duration,
});

export const notifStoreSuccess = (description?: string, title?: string) => ({
  message: title ?? "Create Success",
  description: description ?? "Data has been created successfully",
  duration,
});

export const notifUpdateSuccess = (description?: string, title?: string) => ({
  message: title ?? "Update Success",
  description: description ?? messages.updateSuccess,
  duration,
});

export const notifUpdateError = (description?: string, title?: string) => ({
  message: title ?? "Update Fail",
  description: description ?? "Failed to update data",
  duration,
});

export const notifApproveError = (description?: string, title?: string) => ({
  message: title ?? "Approve Fail",
  description: description ?? "Failed to Approve data",
  duration,
});

export const notifApproveSuccess = (description?: string, title?: string) => ({
  message: title ?? "Approve Success",
  description: description ?? "Data has been Approved successfully",
  duration,
});

export const notifTryAgain = (description?: string, title?: string) => ({
  message: title ?? "Something went wrong",
  description: description ?? "Please try again later or contact admin",
  duration,
});
