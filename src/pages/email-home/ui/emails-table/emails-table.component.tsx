import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { EmailTableProps } from "./emails-table.type.ts";
import { Loader } from "entities/loader";

export const EmailTable = ({ emails, isLoading }: EmailTableProps) => {
  return (
    <Paper style={{ position: "relative" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Recipient</TableCell>
              <TableCell>Subject</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {emails.length ? (
              <>
                {emails.map((email) => (
                  <TableRow key={email.id}>
                    <TableCell>{email.id}</TableCell>
                    <TableCell>{email.recipient}</TableCell>
                    <TableCell>{email.subject}</TableCell>
                  </TableRow>
                ))}
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={3} style={{ textAlign: "center", minHeight: "53px" }}>
                  No emails data
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {isLoading && <Loader />}
    </Paper>
  );
};
