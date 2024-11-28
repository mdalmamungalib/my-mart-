import Heading from "components/backoffice/Heading/Heading";
import PageHeader from "components/backoffice/PageHeader/PageHeader";
import TableActions from "components/backoffice/TableActions/TableActions";
import { Plus, Search, Trash2, Download } from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading={"Categories"}
        href={"/dashboard/categories/new"}
        LinkTitle={"Add Category"}
      />
      {/* Table */}
      {/* Export || Bulk Delete || Search */}
      <TableActions/>
      <h1>Welcome to categories page</h1>
    </div>
  );
};

export default page;
