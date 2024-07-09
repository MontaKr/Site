import { useMemo, useState } from "react";
import { ColumnData, sortType } from "../../types"
import * as XLSX from "xlsx";
import { CaretDownOutline, CaretUpOutline, DownloadOutline, SearchOutline, TrashOutline } from "react-ionicons";

interface DataTableProps {
  data:ColumnData;
  searchbar?:boolean;
  excelExport?:boolean;
  pagination?:boolean;
  removableRows?:boolean;
  pageSizeControl?:boolean;
}

const DataTable: React.FC<DataTableProps> = ({
	data,
	searchBar = false,
	excelExport = false,
	pagination = false,
	removableRows = false,
	pageSizeControl = false,
}) => {
	const columns = Object.keys(data);
	const rowCount = Math.max(...columns.map((column) => data[column].values.length));

	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const [sortConfig, setSortConfig] = useState<sortType | null>(null);
	const [pageSize, setPageSize] = useState(10);
	const [selectedRows, setSelectedRows] = useState<string[]>([]);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
		setCurrentPage(0);
	};

	const handleSort = (accessor: string) => {
		let direction: "asc" | "desc" | null = "asc";
		if (sortConfig && sortConfig.key === accessor) {
			if (sortConfig.direction === "asc") {
				direction = "desc";
			} else if (sortConfig.direction === "desc") {
				direction = null;
			}
		}
		setSortConfig({ key: accessor, direction });
	};

	const exportToExcel = () => {
		const exportData = rows.map((row) => {
			const exportRow: { [key: string]: string | boolean } = {};
			columns.forEach((column) => {
				if (row[column]) {
					exportRow[column] = row[column] as string | boolean;
				} else {
					exportRow[column] = "FALSE";
				}
			});
			return exportRow;
		});

		const worksheet = XLSX.utils.json_to_sheet(exportData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
		XLSX.writeFile(workbook, "data.xlsx");
	};

	const handleRowSelect = (rowIndex: number) => {
		const selectedRowIndex = selectedRows.indexOf(String(rowIndex));
		if (selectedRowIndex === -1) {
			setSelectedRows([...selectedRows, String(rowIndex)]);
		} else {
			const updatedSelectedRows = [...selectedRows];
			updatedSelectedRows.splice(selectedRowIndex, 1);
			setSelectedRows(updatedSelectedRows);
		}
	};

	const handleDeleteSelectedRows = () => {
		const updatedData = { ...data };
		selectedRows.forEach((rowIndexString) => {
			const rowIndex = parseInt(rowIndexString, 10);
			columns.forEach((column) => {
				updatedData[column].values.splice(rowIndex, 1);
			});
		});
		setSelectedRows([]);
	};

	const rows = useMemo(() => {
		return Array.from({ length: rowCount }, (_, index) => {
			return columns.reduce((acc, column) => {
				acc[column] = data[column].values[index] || "";
				return acc;
			}, {} as { [key: string]: string | boolean | number });
		});
	}, [data, columns, rowCount]);

	const sortedRows = useMemo(() => {
		if (!sortConfig || !sortConfig.direction) return rows;

		return [...rows].sort((a, b) => {
			const aValue = a[sortConfig.key] as string;
			const bValue = b[sortConfig.key] as string;

			if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
			if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
			return 0;
		});
	}, [rows, sortConfig]);

	const filteredRows = useMemo(() => {
		return sortedRows.filter((row) =>
			columns.some((column) =>
				String(row[column]).toLowerCase().includes(searchTerm.toLowerCase())
			)
		);
	}, [sortedRows, searchTerm, columns]);

	const paginatedRows = useMemo(() => {
		const start = currentPage * pageSize;
		return filteredRows.slice(start, start + pageSize);
	}, [filteredRows, currentPage, pageSize]);

	const totalPages = Math.ceil(filteredRows.length / pageSize);

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="flex w-full items-center justify-between mb-5">
				{searchBar ? (
					<div className="flex md:w-[30%] w-[70%] items-center gap-5 rounded-lg px-3 py-2 bg-[#303030]">
						<SearchOutline cssClasses={"!text-gray-300"} />
						<input
							type="text"
							placeholder="Search"
							value={searchTerm}
							onChange={handleSearch}
							className="w-full outline-none bg-transparent"
						/>
					</div>
				) : (
					<div></div>
				)}

        <div className="flex items-center gap-5">
          {excelExport && (
            <button onClick={exportToExcel} className="rounded-lg bg-[#303030] p-2">
              <DownloadOutline width={"26px"} height={"26px"} cssClasses={"!text-[#99e5be] cursor-pointer"}></DownloadOutline>
            </button>
          )}
          {removableRows && (
            <button onClick={handleDeleteSelectedRows} className="rounded-lg bg-[#303030] p-2 disabled:opacity-50">
              <TrashOutline width={"26px"} height={"26px"} cssClasses={`${selectedRows.length === 0 ? "cursor-default !text-red-300" : "cursor-pointer !text-red-400"}`}></TrashOutline>
            </button>
          )}
        </div>
      </div>
      <div className="table-container">
        <table className="w-full overflow-x-auto max-w-[100vw]">
          <thead>
            <tr className="bg-[#303030] h-[50px]">
              <th className="hidden">Actions</th>
              <th className="font-medium text-gray-300 text-[16px] pl-5">#</th>
              {columns.map((column,index:number)=>(
                <th key={index} onClick={()=>{handleSort(column)}} className="font-medium text-gray-300 text-[16px] px-5 cursor-pointer">
                  <div className="flex items-center justify-center gap-[1px]">
                    {column}
                    {sortConfig?.key === column ? (
                      sortConfig.direction === "asc" ? (
                        <CaretUpOutline cssClasses={"!fill-blue-400"} />
                      ) : sortConfig.direction === "desc" ? (
                        <CaretDownOutline cssClasses={"!fill-blue-400"}/>
                      ) :  (
                        <CaretDownOutline cssClasses={"hidden"}/>
                      )
                    ) : (
                      <CaretDownOutline cssClasses={"hidden"}/>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default DataTable