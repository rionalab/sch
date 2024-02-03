export interface TableActions {
  edit?: boolean;
  destroy?: (id: number) => Promise<void>;
}
