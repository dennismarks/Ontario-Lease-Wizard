import React, {useState, useEffect, useRef} from "react";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import { nominalTypeHack } from "prop-types";
import {getData, sendData} from "../../shared/functions";
import ToolTip from "../../util/tooltip";
import Title from "../../shared/components/title";

const textInfo = (
  <p>
    Utilities and servies are listed in the left column: the checked options
    will be added to your lease. To add a custom option, type in utility or
    service at the bottom of the list. <br />
    <br /> For each utility or service covered by the Lease Agreement, check one
    of the three boxes: <br />
    1. Included in the Base Rent. <br />
    2. Managed by the Landlord and billed to the Tenant periodically. <br />
    3. Managed by the Tenant independently. <br />
    <br />
    For each utility or service, you can include additional informaton to help
    your tenant using Custom Notes, e.g. utility company information, account
    numbers, etc.
  </p>
);

function createData(utility) {
  return {
    utility,
    includedInBaseRent: false,
    managedByLandlord: false,
    managedByTenant: false,
    note: ""
  };
}

const rowNames = [
  "Electricity",
  "Heat",
  "Gas",
  "Water",
  "Air Conditioning",
  "Washer/Dryer",
  "Internet",
  "Landline",
  "Cable",
  "Tenant Parking",
  "Guest Parking",
  "Lawn Care",
  "Snow Removal",
  "Tenant Insurance",
  "Cleaning Services"
];

const useStyles = makeStyles(theme => ({
  content: {
    "margin-right": 10
  },
  button: {
    margin: theme.spacing(1)
  },
  modalTextField: {
    height: 130
  },
  utilityName: {
    color: "#006689"
  }
}));

function NoteDialog(props) {
  const classes = useStyles();
  let textInput;

  return (
    <Dialog
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        Modify Note - {props.utility}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          What would you like the tenant to know?
          <br />
          You can add information about payment frequency, the provider’s name
          and contact information, account information, and more.
        </DialogContentText>
        <TextField
          className={classes.modalTextField}
          defaultValue={props.currNote}
          inputRef={el => (textInput = el)}
          autoFocus
          multiline
          rows="6"
          margin="dense"
          variant="outlined"
          label="Add notes for the tenant here"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          id="modifyButton"
          onClick={e => props.handleSave(e, textInput.value)}
          color="primary"
        >
          Modify Note
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default function UtilitiesServices() {
  const classes = useStyles();
  const [rows, setRows] = useState(
    rowNames.reduce(
      (accumulator, current) => ({
        ...accumulator,
        [current]: createData(current)
      }),
      {}
    )
  );
  const data = useRef({});

  useEffect(() => {
    return () => {
      data.current = {rows};
    }
  });

  useEffect(() => {
    getData().then(([data]) => {
      const { rows } = data;
      if (rows) {
        setRows(rows);
      }
    });

    return () => {
      sendData(data.current);
    }
  }, []);

  const handleRowChange = (utility, option, value) => event => {
    setRows(prevState => ({
      ...prevState,
      [utility]: {
        ...prevState[utility],
        [option]: value,
      }
    }));
  };

  //hooks for the note dialogs
  const [open, setOpen] = useState(false);
  const [noteUtility, setNoteUtility] = useState("");
  const [currNote, setCurrNote] = useState("");

  const handleOpenNoteDialog = utility => {
    setNoteUtility(utility);
    setCurrNote(rows[utility].note);
    setOpen(true);
  };

  const handleCloseNoteDialog = () => {
    setOpen(false);
  };

  const handleSaveNote = utility => (event, note) => {
    handleRowChange(utility, "note", note)(event);
    handleCloseNoteDialog();
  };

  const noteDialog = NoteDialog({
    open: open,
    handleClose: handleCloseNoteDialog,
    handleSave: handleSaveNote(noteUtility),
    currNote: currNote,
    utility: noteUtility
  });

  const getUtilityRow = row => {
    let noteButton;
    noteButton = (
      <Button
        // variant="outlined"
        className={classes.button}
        startIcon={row.note == "" ? <AddIcon /> : <EditIcon />}
        onClick={() => handleOpenNoteDialog(row.utility)}
      >
        {row.note == "" ? "Add Note" : "Edit Note"}
      </Button>
    );

    return (
      <React.Fragment>
        {noteDialog}
        <TableRow key={row.utility}>
          <TableCell className={classes.utilityName}>{row.utility}</TableCell>
          <TableCell align="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={row.includedInBaseRent}
                  onChange={handleRowChange(
                    row.utility,
                    "includedInBaseRent",
                    !row.includedInBaseRent
                  )}
                  value="includedInBaseRent"
                  color="default"
                  name="includedInBaseRent"
                />
              }
            />
          </TableCell>
          <TableCell align="center">
            <FormControlLabel
              control={
                <Checkbox
                  checked={row.managedByLandlord}
                  onChange={handleRowChange(
                    row.utility,
                    "managedByLandlord",
                    !row.managedByLandlord
                  )}
                  color="default"
                  name="managedByLandlord"
                />
              }
            />
          </TableCell>
          <TableCell align="center">
            <FormControlLabel
              control={
                <Checkbox
                  type="checkbox"
                  checked={row.managedByTenant}
                  onChange={handleRowChange(
                    row.utility,
                    "managedByTenant",
                    !row.managedByTenant
                  )}
                  color="default"
                  name="managedByTenant"
                />
              }
            />
          </TableCell>
          <TableCell>{noteButton}</TableCell>
        </TableRow>
      </React.Fragment>
    );
  };

  return (
    <div id="utilities">
      <Title>Utilities and Services</Title>
      {textInfo}
      <Paper>
        <hr color="#006689" />
        <Table>
          <TableHead>
            <TableRow >
              <TableCell>Utility or Service</TableCell>

              <TableCell>
                <div style={{ display: "flex"}}>
                  <p>Included in Base Rent</p>
                  <ToolTip style={{ paddingLeft: 4 }}>More Info on Base Rent</ToolTip>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex"}}>
                  <p>Managed by Landlord</p>
                  <ToolTip style={{ paddingLeft: 4 }}>This Utility will be handled by the landlord</ToolTip>
                </div>
              </TableCell>
              <TableCell>
                <div style={{ display: "flex"}}>
                  <p>Managed by Tenant</p>
                  <ToolTip style={{ paddingLeft: 4 }}>This Utility will be handled by the tenant </ToolTip>
                </div>
              </TableCell>
              <TableCell>Custom Notes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{Object.values(rows).map(getUtilityRow)}</TableBody>
        </Table>
      </Paper>
    </div>
  );
}

