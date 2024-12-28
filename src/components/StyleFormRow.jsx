import React from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  // ToggleButton,
  Checkbox
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";
import NameRow from "./NameRow";

const StyleFormRow = ({ id }) => {

  // const [formData, setFormData] = useState({
  //   kat: data?.kat || "",
  //   tip: data?.tip || "",
  //   mahalNo: data?.mahalNo || "",
  //   mahal: data?.mahal || "",
  //   en: data?.en || "",
  //   boy: data?.boy || "",
  //   duvarKalinligi: data?.duvarKalinligi || "",
  //   yon: data?.yon || "",
  //   kanat: data?.kanat || "",
  //   kasa: data?.kasa || "",
  //   barel: data?.barel || "",
  //   kilit: data?.kilit || "",
  //   cumba: data?.cumba || "",
  //   kol: data?.kol || "",
  //   tekmelik: false,
  //   itmelik: false,
  //   menfez: false,
  //   hidrolik: false,
  //   lumboz: false,
  //   yangınaD: false,
  // });


  const ToggleButton = styled(MuiToggleButton)({
    "&.Mui-selected": {
      color: "white",
    },
    "&.Mui-selected:hover":{
      backgroundColor: '#264f84dd'
    }
  });

  const [selectedStates, setSelectedStates] = React.useState(
    Array(6).fill(false) 
  );

  const handleToggle = (index) => {
    setSelectedStates((prevStates) =>
      prevStates.map((state, i) => (i === index ? !state : state))
    );
  };

  let items = [
    <Button
      key="button-id"
      sx={{
        maxWidth: "30px",
        maxHeight: "30px",
        minWidth: "30px",
        minHeight: "30px",
        bgcolor: "#394c64",
        marginRight: "5px",
      }}
      variant="contained"
    >
      {id + 1}
    </Button>,
  ];

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

    // if (id==0) {
      
    // }

    items.push(
<>
      <TextField
        key={`textfield-${i}`}
        sx={{
          width: i == 4 || i == 5 || i == 6 || i == 0 || i == 1 ? "4%" : "8%",
          position:"relative"
        }}
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
      
  </>
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
    items.push(
      <ToggleButton
        key={`toggle-${i}`}
        size="small"
        value="check"
        // color="error"
        selected={selectedStates[i]}
        onChange={() => handleToggle(i)}
        sx={{
          // bgcolor:"red",
        //   ":hover":{bgcolor:"blue"},
        }}
      >
        <Check />
      </ToggleButton>
      // <Checkbox defaultChecked size="large" />
    );
  }

  return (
    <Box
      sx={{
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: "10px",
        paddingX: "5px",
        borderBottom: "2px solid #DEDDDB",
      }}
    >
      {items}
    </Box>
  );
};

export default StyleFormRow;