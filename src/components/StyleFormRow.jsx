import React from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  ToggleButton
} from "@mui/material";
import {
  Check,
} from "@mui/icons-material";

const StyleFormRow = ({id}) => {
  const [selected, setSelected] = React.useState(false);

  let items = [  <Button sx={{maxWidth: '30px', maxHeight: '30px', minWidth: '30px', minHeight: '30px',bgcolor:"#394c64",marginX:"10px"}} variant="contained">
  {id + 1}
</Button>];

  const textFieldLabelNames = [
    "Kat",
    "Tip",
    "Mahal-No",
    "Mahal",
    "En",
    "Boy",
    "D.K.",
    "Kanat",
    "Kasa",
    "Kilit",
  ];
  const selectLabelNames = ["Yön", "Barel", "Cumba", "Kol"];
  const selectLabelOptions = [
    [
      <MenuItem key="sağ" value="sağ">
        Sağ
      </MenuItem>,
      <MenuItem key="sol" value="sol">
        Sol
      </MenuItem>,
      <MenuItem key="dışarı-sağ" value="dışarı-sağ">
        D. Sağ
      </MenuItem>,
      <MenuItem key="dışarı-sol" value="dışarı-sol">
        D. Sol
      </MenuItem>,
    ],
    [
      <MenuItem key="?1" value="?1">
        ?1
      </MenuItem>,
      <MenuItem key="?2" value="?2">
        ?2
      </MenuItem>,
      <MenuItem key="?3" value="?3">
        ?3
      </MenuItem>,
    ],
    [
      <MenuItem key="pvc" value="pvc">
        PVC
      </MenuItem>,
      <MenuItem key="u" value="u">
        U
      </MenuItem>,
    ],
    [
      <MenuItem key="baston" value="baston">
        Baston
      </MenuItem>,
      <MenuItem key="boru" value="boru">
        Boru
      </MenuItem>,
    ],
  ];

  for (let i = 0; i < 9; i++) {
    items.push(
      <TextField
        key={`textfield-${i}`}
        sx={{ width: i== 4 ||i==5 || i==6 || i == 0 || i == 1 ? "4%" : "8%"  }}
        size="small"
        id={`outlined-basic-${i}`}
        variant="outlined"
        label={textFieldLabelNames[i]}
        InputLabelProps={{
          sx: {
            // fontSize: "12px",
          },
        }}
      />
    );
  }

  for (let i = 0; i < 4; i++) {
    items.push(
      <FormControl
        key={`select-${i}`}
        size="small"
        sx={{
          width: "8%",
        }}
      >
        <InputLabel id={`select-label-${i}`}>{selectLabelNames[i]}</InputLabel>
        <Select
          labelId={`select-label-${i}`}
          id={`select-${i}`}
          label={selectLabelNames[i]}
        >
          {selectLabelOptions[i]}
        </Select>
      </FormControl>
    );
  }

  for (let i = 0; i < 6; i++) {
    items.push(    <ToggleButton
      size="small"
      value="check"
      selected={selected}
      onChange={() => setSelected((prevSelected) => !prevSelected)}
    >
      <Check />
    </ToggleButton>)
    
  }

  return (
    <Box
      sx={{
        // bgcolor: "#d0d0d0",
        // boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        // marginTop: "10px",
        marginBottom:"10px",
        // marginY:"10px",
        paddingX:"10px",
        // borderBottom:"2px solid blue",
        borderBottom:"2px solid #DEDDDB",
        // gap:"1px"
      }}
    >
      {items}

    </Box>
  );
};

export default StyleFormRow;
