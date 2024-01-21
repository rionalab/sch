export const notifDestroyError = (description?: string, title?: string) => ({
  message: title || "Delete Fail",
  description: description || "Failed to delete data",
});

export const notifDestroySuccess = (description?: string, title?: string) => ({
  message: title || "Delete Success",
  description: description || "Data has been deleted successfully",
});

export const notifStoreError = (description?: string, title?: string) => ({
  message: title || "Create Fail",
  description: description || "Failed to create new data",
});

export const notifStoreSuccess = (description?: string, title?: string) => ({
  message: title || "Create Success",
  description: description || "Data has been created successfully",
});
