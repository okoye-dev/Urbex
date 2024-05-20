import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { DataTablePageButtons } from "@/components/DataTablePageButtons";
import { useContext } from "react";
import { AppliancesContext } from "@/contexts/AppliancesContext";
import { ActiveAppliancesContext } from "@/contexts/ActiveAppliancesContext";
import { ActiveNavContext } from "@/contexts/ActiveNavContext";

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const currentPage = table.getState().pagination.pageIndex;
  const numberOfPages = table.getPageCount();

  const { isAppliancesOpen, toggleAppliances } = useContext(AppliancesContext);
  const { openActiveAppliance } = useContext(ActiveAppliancesContext);
  const { activeNav } = useContext(ActiveNavContext);

  const handleClick = (row: any) => {
    const name = row.original.nameOfFacility;
    const type = row.original.type;
    const state = `${name} (${type})`;
    if (activeNav == "Manage Facilities") {
      if (!isAppliancesOpen) {
        openActiveAppliance(state);
        toggleAppliances();
      }
    }
  };

  return (
    <>
      <div className="rounded-md border bg-white font-medium">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, id) => {
                  return (
                    <TableHead
                      className={`${
                        id == 0 ? "border-none" : "border-l-4"
                      } bg-slate-100 border-white text-xs lg:text-sm`}
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  onClick={() => {
                    handleClick(row);
                  }}
                  className="cursor-pointer text-xs lg:text-sm"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell className="md:min-w-32" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <DataTablePageButtons
        currentPage={currentPage}
        prevPage={table.previousPage}
        nextPage={table.nextPage}
        getCanPreviousPage={table.getCanPreviousPage}
        getCanNextPage={table.getCanNextPage}
        numberOfPages={numberOfPages}
      />
    </>
  );
}
