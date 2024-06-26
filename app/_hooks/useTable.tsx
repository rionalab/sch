import { dMY, isDate } from "@/libs/helpers";
import type React from "react";
import { useEffect, useState } from "react";

interface Props {
  rows: any[];
}

export function useTable<T>(props: Props) {
  const { rows } = props;

  const [defaultRows, setDefaultRows] = useState<T[]>([]);
  const [filteredRows, setFilteredRows] = useState<T[] | undefined>(undefined);
  const [search, setSearch] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setDefaultRows(rows);
  }, [rows]);

  // * search
  useEffect(() => {
    setDefaultRows(rows);

    if (search !== "") {
      const result = defaultRows
        .map((row: T) => {
          // only search on the objValue NOT the objKey
          // if the val is date then transform as displayed on the table
          const cleanRow = Object.values(row as Record<string, any>).map(
            (v: any) => {
              if (isDate(v)) {
                return dMY(v);
              }

              return v;
            },
          );

          const isMatch = JSON.stringify(cleanRow)
            .toLowerCase()
            .includes(search.toLowerCase());

          if (isMatch) {
            return row;
          }

          return null;
        })
        .filter(Boolean);

      setFilteredRows(result as T[]);
    } else {
      setFilteredRows(undefined);
    }
  }, [search]);

  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  return { handleSearch, rows: (filteredRows ?? defaultRows) || [] };
}
