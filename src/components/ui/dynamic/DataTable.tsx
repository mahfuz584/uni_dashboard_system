import { Pagination, Table } from "antd";
import { ColumnType } from "antd/es/table";
import React from "react";
import Loader from "../common/Loader";

type TDataProps = {
  limit?: number;
  total?: number;
  page?: number;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  columns: ColumnType<any>[];
  datasource: object[];
  loading: boolean;
  setParams?: React.Dispatch<React.SetStateAction<any[]>>;
};

const DataTable: React.FC<TDataProps> = ({
  limit,
  total,
  columns,
  datasource,
  loading,
  setParams,
  page,
  setPage,
}) => {
  // for unique key error
  const dataSourceKey = datasource?.map((item, indx) => {
    return {
      ...item,
      key: indx,
    };
  });

  //dynamic filter params for table
  const onChange = (
    _pagination: any,
    filters: any,
    _sorter: any,
    extra: any
  ) => {
    if (extra?.action === "filter") {
      const queryParams = [] as any;
      Object.keys(filters)?.forEach((key) => {
        const filterValues = filters[key] as string[];
        filterValues?.forEach((value) => {
          queryParams.push({
            name: key,
            value: value,
          });
        });
      });
      if (setParams) {
        setParams(queryParams);
      }
    }
  };

  const onChangePage = (newPage: number) => {
    const queryParams = [] as any[];

    // Push the pagination params into the params array
    queryParams.push({
      name: "page",
      value: newPage.toString(),
    });
    queryParams.push({
      name: "limit",
      value: limit,
    });

    if (setParams) {
      setParams((prevParams) => {
        const filteredParams = prevParams.filter(
          (param) => param.name !== "page" && param.name !== "limit"
        );
        return [...filteredParams, ...queryParams];
      });
    }

    // Update the page state
    if (setPage) {
      setPage(newPage);
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  return (
    <>
      <Table
        dataSource={dataSourceKey}
        columns={columns}
        onChange={onChange}
        pagination={false}
      />
      <Pagination
        align="end"
        current={page}
        onChange={onChangePage}
        total={total}
      />
    </>
  );
};

export default DataTable;
