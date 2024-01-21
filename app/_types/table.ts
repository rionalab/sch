export interface TableActions {
  edit?: () => void;
  destroy?: (id: number) => Promise<void>;
}
