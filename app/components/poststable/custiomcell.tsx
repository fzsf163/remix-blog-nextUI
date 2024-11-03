import {
  Chip,
  ChipProps,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import React from "react";
import { DeleteIcon } from "./DeleteIcon";
import { EditIcon } from "./EditIcon";
import { EyeIcon } from "./EyeIcon";
import "./customcell.css";
import { columns } from "./customuser";
import { SearchIcon } from "./searchIcon";
import { TablePropsTypes } from "./types";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function CustomCells({ posts }: { posts: TablePropsTypes[] }) {
  const [page, setPage] = React.useState(1);
  const [filterValue, setFilterValue] = React.useState("");

  const hasSearchFilter = Boolean(filterValue);
  // console.log("🚀 ~ CustomCells ~ hasSearchFilter:", hasSearchFilter);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...posts];
    // console.log("🚀 ~ filteredItems ~ filteredUsers:", filteredUsers);

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.title.toLowerCase().includes(filterValue.toLowerCase()),
      );
      // console.log("🚀 ~ filteredItems ~ filteredUsers:", filteredUsers);
    }
    // if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
    //   filteredUsers = filteredUsers.filter((user) =>
    //     Array.from(statusFilter).includes(user.status),
    //   );
    // }

    return filteredUsers;
  }, [filterValue, hasSearchFilter, posts]);

  const onSearchChange = React.useCallback((value?: string) => {
    console.log("🚀 ~ onSearchChange ~ value:", value);
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const rowsPerPage = 6;
  // const pages = Math.ceil(users.length / rowsPerPage);
  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    // return users.slice(start, end);
    return filteredItems.slice(start, end);
  }, [page, filteredItems]);

  const topContent = React.useMemo(() => {
    return (
      <Input
        isClearable
        type="search"
        placeholder="Search By Name..."
        variant="bordered"
        startContent={<SearchIcon />}
        value={filterValue}
        onClear={() => onClear()}
        onValueChange={onSearchChange}
      ></Input>
    );
  }, [filterValue, onSearchChange, onClear]);

  const renderCell = React.useCallback(
    (posts: TablePropsTypes, columnKey: React.Key) => {
      const cellValue = posts[columnKey as keyof TablePropsTypes];
      switch (columnKey) {
        case "title":
          return (
            //   <User
            //     avatarProps={{ radius: "lg", src: user.avatar }}
            //     description={user.email}
            //     name={cellValue}
            //   >
            //     {user.email}
            //   </User>
            <div>
              <h1 className="font-bold capitalize">{posts.title}</h1>
            </div>
          );
        case "author":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">
                {posts.author}
              </p>
            </div>
          );
        case "published":
          return (
            <Chip
              className="capitalize"
              color={statusColorMap[posts.published ? "Published" : "Draft"]}
              size="sm"
              variant="flat"
            >
              {cellValue === true ? "Published" : "Draft"}
            </Chip>
          );
        case "thumbnail":
          return <img src={String(cellValue)} alt=""></img>;
        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
                <span
                  className="cursor-pointer text-lg text-default-400 active:opacity-50"
                  onClick={() => console.log(posts.title)}
                >
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="cursor-pointer text-lg text-default-400 active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span className="cursor-pointer text-lg text-danger active:opacity-50">
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [],
  );

  return (
    <Table
      classNames={{
        wrapper: "bg-neutral-300 text-black shadow-lg",
        th: "bg-slate-200 shadow-sm",
      }}
      aria-label="posts"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      topContent={topContent}
    >
      <TableHeader columns={columns} className="bg-blue-300">
        {(column) => (
          <TableColumn
            key={column.uid}
            // align={column.uid === "actions" ? "end" : "start"}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items ?? []} emptyContent="No Data to show">
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
