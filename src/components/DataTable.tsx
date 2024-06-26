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
import { ReportsPopUpContext } from "@/contexts/ReportsPopUpContext";
import { ActiveStaffReportContext } from "@/contexts/ActiveStaffReportContext";
import { ReportsCardContext } from "@/contexts/ReportsCardContext";
import { useLocation, useNavigate } from "react-router-dom";

export interface DataTableProps<TData, TValue> {
  isReports?: boolean;
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  isReports,
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

  const { toggleAppliances } = useContext(AppliancesContext);
  const { openActiveAppliance } = useContext(ActiveAppliancesContext);
  const { isReportsPopUpOpen, toggleReportsPopUp } =
    useContext(ReportsPopUpContext);
  const { makeStaffActive } = useContext(ActiveStaffReportContext);
  const { activeReportsCard } = useContext(ReportsCardContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (row: any) => {
    const name = row.original.nameOfFacility;
    const type = row.original.type;

    if (location.pathname == "/dashboard/manage-facilities") {
      const state = `${name} (${type})`;
      openActiveAppliance(state);

      window.scrollTo({ behavior: "smooth", top: 0 });
      toggleAppliances();
      navigate("/dashboard/manage-facilities/appliances", {
        state: { from: location.pathname },
      });
    } else if (location.pathname == "/dashboard/reports") {
      const staff = `${row.original.staff} - ${activeReportsCard}`;

      window.scrollTo({ behavior: "smooth", top: 0 });
      !isReportsPopUpOpen && (makeStaffActive(staff), toggleReportsPopUp());
    }
  };

  return (
    <section className="flex flex-col gap-2">
      <div className="rounded-md border bg-white font-medium">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header, id) => {
                  return (
                    <TableHead
                      className={`${id == 0 ? "border-none" : "border-l-4"} ${
                        isReports && id == 0 && "lg:min-w-[200px] min-w-[120px]"
                      } ${
                        isReports && id == 2 && "lg:min-w-[200px] min-w-[200px]"
                      } bg-slate-100 border-white text-xs lg:text-sm overflow-ellipsis`}
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
    </section>
  );
}
