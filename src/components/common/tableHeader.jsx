import React, { Component } from "react";

//props-> columns, onSort, sortColumn

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.order = "asc";
      sortColumn.path = path;
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (sortColumn.path !== column.path || !column.path) return null;
    if (sortColumn.order === "asc") return <i class="fa fa-sort-asc"></i>;
    return <i class="fa fa-sort-desc"></i>;
  };

  tableheaderStyle = (th) => {
    return th.path ? "pointer" : "";
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              style={{ cursor: this.tableheaderStyle(column) }}
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
