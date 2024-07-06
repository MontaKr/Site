import { useMemo, useState } from "react";
import { ColumnData, sortType } from "../../types"
import * as XLSX from "xlsx";
import { SearchOutline } from "react-ionicons";

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

  const exportToExcel = () => {
    const exportData = rows.map((row)=>{
      const exportRow:{[key:string]:string | boolean} = {};

      columns.forEach((column)=>{
        if(row[column]) {
          exportRow[column] = row[column] as string | boolean
        } else {
          exportRow[column] = "FALSE"
        }
      });
      return exportRow;
    });

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "SHEET1");
    XLSX.writeFile(workbook, "data.xlsx");
  }

  const handleRowSelect = (rowIndex:number) => {
    const selectedRowIndex = selectedRows.indexOf(String(rowIndex));

    if(selectedRowIndex === -1) {
      setSelectedRows([...selectedRows, String(rowIndex)]);
    } else {
      const updatedSelectedRows = [...selectedRows];
      updatedSelectedRows.splice(selectedRowIndex, 1);
      setSelectedRows(updatedSelectedRows)
    }
  }

  const handleDeleteSelectedRows = () => {
    const updatedData = {...data};
    selectedRows.forEach((rowIndexString)=>{
      const rowIndex = parseInt(rowIndexString, 10);
      columns.forEach((column)=>{
        updatedData[column].values.splice(rowIndex,1)
      });
    });
    setSelectedRows([]);
  }

  const rows = useMemo(()=>{
    return Array.from({length : rowCount}, (_ , index)=>{
      return columns.reduce((acc, column)=> {
        acc[column] = data[column].values[index] || "";
        return acc;
      }, {} as {[key:string]:string | boolean | number})
    })
  },[data,columns,rowCount])

  const sortedRow = useMemo(()=>{
    if(!sortConfig || !sortConfig.direction) return rows;

    return [...rows].sort((a,b)=>{
      const aValue = a[sortConfig.key] as string
      const bValue = b[sortConfig.key] as string

      if(aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
      if(aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;

      return 0
    })
  },[rows,sortConfig])

  const filterRows = useMemo(()=>{
    return sortedRow.filter((row)=> columns.some((column)=>String(row[column]).toLowerCase().includes(searchTerm.toLowerCase())))
  },[sortedRow, searchTerm, columns])

  const paginatedRows = useMemo(()=>{
    const start = currentPage * pageSize;
    return filterRows.slice(start, start + pageSize);
  },[filterRows, currentPage, pageSize])

  const totalPages = Math.ceil(filterRows.length / pageSize)

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="flex w-full items-center justify-between mb-5">
        {searchbar ? (
          <div className="flex w-[30%] items-center gap-5 rounded-lg px-3 py-2 bg-[#303030]">
            <SearchOutline cssClasses={"!text-gray-300"} />
            <input type="text" placeholder="Search" value={searchTerm} onChange={handleSearch} />
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default DataTable