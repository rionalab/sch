export interface TableActions {
  edit?: boolean;
  destroy?: (id: number) => Promise<void>;
  approve?: (id: number) => Promise<void>;
  others?: React.ReactNode[];
}
