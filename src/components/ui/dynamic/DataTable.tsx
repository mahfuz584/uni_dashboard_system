import { Table } from "antd";
import { ColumnType } from "antd/es/table";
import React from "react";
import Loader from "../common/Loader";

type TDataProps = {
  columns: ColumnType<any>[];
  datasource: object[];
  loading: boolean;
  setParams?: React.Dispatch<React.SetStateAction<any[]>>;
};

const DataTable: React.FC<TDataProps> = ({
  columns,
  datasource,
  loading,
  setParams,
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

  // filter params
  // const onChange = (
  //   pagination,
  //   filters: Record<string, string[]>,
  //   sorter,
  //   extra: any
  //   console.log("extra:", extra); // Verify extra parameter

  //   if (extra?.action === "filter") {
  //     const queryParams: { name: string; value: string }[] = [];

  //     Object.keys(filters).forEach((key) => {
  //       const filterValues = filters[key];
  //       filterValues.forEach((value) => {
  //         queryParams.push({
  //           name: key,
  //           value: value,
  //         });
  //       });
  //     });

  //     console.log("queryParams:", queryParams); // Verify queryParams

  //     if (setParams) {
  //       setParams(queryParams);
  //     }
  //   }
  // };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );

  return (
    <>
      <Table dataSource={dataSourceKey} columns={columns} onChange={onChange} />
      {/* <Table dataSource={dataSourceKey} columns={modifiedColumns} bordered /> */}
    </>
  );
};

export default DataTable;
