import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ArgonTypography from "components/ArgonTypography";
import ArgonBox from "components/ArgonBox";
import SalesTableCell from "examples/Tables/SalesTable/SalesTableCell";

function SalesTable({ title, rows, value }) {
  const renderTableCells = (rowData) => {
    console.log("rowData", rowData);
    if (rowData.length === 0) {
      return (
        <TableRow>
          <TableCell sx={{ textAlign: "center" }} colSpan={10}>
            No record found.
          </TableCell>
        </TableRow>
      );
    }
    return rowData.map((row, key) => {
      const tableRows = [];
      const rowKey = `row-${key}`;

      Object.entries(row).forEach(([cellTitle, cellContent]) =>
        Array.isArray(cellContent)
          ? tableRows.push(
              <SalesTableCell
                key={cellContent[1]}
                title={cellTitle}
                content={cellContent[1]}
                image={cellContent[0]}
                noBorder={key === rowData.length - 1}
              />
            )
          : tableRows.push(
              <SalesTableCell
                key={cellContent}
                title={cellTitle}
                content={cellContent}
                noBorder={key === rowData.length - 1}
              />
            )
      );

      return <TableRow key={rowKey}>{tableRows}</TableRow>;
    });
  };

  const displayedRows =
    value.predict === 1
      ? [{ ...rows[value.predict - 1], Fault_Prediction: `${Math.ceil(value.accuracy)} %` }]
      : value.predict === 2
      ? [{ ...rows[value.predict], Fault_Prediction: `${Math.ceil(value.accuracy)} %` }]
      : value.predict === 3
      ? [{ ...rows[value.predict], Fault_Prediction: `${Math.ceil(value.accuracy)} %` }]
      : value.predict === 4
      ? [{ ...rows[1], Fault_Prediction: `${Math.ceil(value.accuracy)} %` }]
      : [];

  return (
    <TableContainer sx={{ height: "100%" }}>
      <Table>
        <TableHead>
          <ArgonBox component="tr" width="max-content" display="block" mb={1.5}>
            <ArgonTypography variant="h6" component="td">
              {title}
            </ArgonTypography>
          </ArgonBox>
        </TableHead>
        <TableBody>{useMemo(() => renderTableCells(displayedRows), [displayedRows])}</TableBody>
      </Table>
    </TableContainer>
  );
}

SalesTable.defaultProps = {
  rows: [{}],
};

SalesTable.propTypes = {
  title: PropTypes.string.isRequired,
  rows: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.shape({
    accuracy: PropTypes.number.isRequired,
    predict: PropTypes.number.isRequired,
  }).isRequired,
};

export default SalesTable;
