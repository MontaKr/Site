import { useState } from "react";
import { ColumnData, sortType } from "../../types"

interface DataTableProps {
  data:ColumnData;
  searchbar?:boolean;
  excelExport?:boolean;
  pagination?:boolean;
  removableRows?:boolean;
  pageSizeControl?:boolean;
}

const DataTable:React.FC<DataTableProps> = ({data, searchbar = false, excelExport= false, pagination = false, removableRows = false, pageSizeControl = false }) => {

  const columns = Object.keys(data.columns);
  const rowCount = Math.max(...columns.map((column)=> data[column].values.length));

  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setcurrentPage] = useState(0);
  const [sortConfig, setsortConfig] = useState<sortType | null>(null);
  const [pageSize, setpageSize] = useState(10);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);


  return (
    <div>DataTable</div>
  )
}

export default DataTable