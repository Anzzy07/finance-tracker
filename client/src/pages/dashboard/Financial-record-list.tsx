import { useFinacialRecords } from "../../context/financial-record-context";
import { useTable, Column, CellProps, Row } from "react-table";

export const FinancialRecordList = () => {
  const { records } = useFinacialRecords();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: records });
  return (
    <div className="table-container">
      <table {...getTableBodyProps()} className="table">
        <thead>{headerGroups}</thead>
        <tbody></tbody>
      </table>
    </div>
  );
};
