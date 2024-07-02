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

  const handleSearch = (evnt:React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(evnt.target.value)
    setcurrentPage(0)
  }

  const handleSort = (accessor:string) => {
    let direction : "asc" | "desc" | null =  "asc";
    if(sortConfig && sortConfig.key === accessor) {
      if (sortConfig.direction === "asc") {
        direction = "desc";
      } else if (sortConfig && sortConfig.key === "desc") {
        direction = null
      }
    } 

    setsortConfig({key:accessor, direction});
  }

  return (
    <div>DataTable</div>
  )
}

export default DataTable