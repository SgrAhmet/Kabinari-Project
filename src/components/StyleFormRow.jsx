import React, { useState ,useEffect} from "react";
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
} from "@mui/material";
import { Check } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import MuiToggleButton from "@mui/material/ToggleButton";

const StyleFormRow = ({ id, data, onChange }) => {
  const [formData, setFormData] = useState({
    kat: data?.kat || "",
    tip: data?.tip || "",
    mahalNo: data?.mahalNo || "",
    mahal: data?.mahal || "",
    en: data?.en || "",
    boy: data?.boy || "",
    duvarKalinligi: data?.duvarKalinligi || "",
    yon: data?.yon || "",
    kanat: data?.kanat || "",
    kasa: data?.kasa || "",
    barel: data?.barel || "",
    kilit: data?.kilit || "",
    cumba: data?.cumba || "",
    kol: data?.kol || "",
    tekmelik: false,
    itmelik: false,
    menfez: false,
    hidrolik: false,
    lumboz: false,
    yangınaD: false,
  });

  // Üst bileşene form verisini iletme
  useEffect(() => {
    onChange(id, formData);
  }, [formData]);

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleToggle = (index, fieldName) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: !prevData[fieldName],
    }));
  };

  const textFieldConfig = [
    { label: "Kat", key: "kat", width: "4%" },
    { label: "Tip", key: "tip", width: "4%" },
    { label: "Mahal-No", key: "mahalNo", width: "4%" },
    { label: "Mahal", key: "mahal", width: "4%" },
    { label: "En", key: "en", width: "7%" },
    { label: "Boy", key: "boy", width: "7%" },
    { label: "D.K", key: "duvarKalinligi", width: "7%" },
    { label: "Kanat", key: "kanat", width: "4%" },
    { label: "Kasa", key: "kasa", width: "7%" },
    { label: "Kilit", key: "kilit", width: "7%" },
  ];

  const selectConfig = [
    { label: "Yön", key: "yon", options: ["Sağ", "Sol", "Dışarı-Sağ", "Dışarı-Sol"] },
    { label: "Barel", key: "barel", options: ["?1", "?2", "?3"] },
    { label: "Cumba", key: "cumba", options: ["PVC", "U"] },
    { label: "Kol", key: "kol", options: ["Baston", "Boru"] },
  ];

  const toggleKeys = [
    "tekmelik",
    "itmelik",
    "menfez",
    "hidrolik",
    "lumboz",
    "yangınaD",
  ];

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
      <Button
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
      </Button>

      {/* TextField'leri Döngüyle Renderla */}
      {textFieldConfig.map((field, index) => (
        <TextField
          key={`textfield-${index}`}
          sx={{ width: field.width }}
          size="small"
          label={field.label}
          value={formData[field.key]}
          onChange={(e) => handleChange(field.key, e.target.value)}
        />
      ))}

      {/* Select'leri Döngüyle Renderla */}
      {selectConfig.map((field, index) => (
        <FormControl key={`select-${index}`} size="small" sx={{ width: "8%" }}>
          <InputLabel>{field.label}</InputLabel>
          <Select
            value={formData[field.key]}
            onChange={(e) => handleChange(field.key, e.target.value)}
          >
            {field.options.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ))}

      {/* ToggleButton'ları Döngüyle Renderla */}
      {toggleKeys.map((key, index) => (
        <MuiToggleButton
          key={`toggle-${index}`}
          size="small"
          value="check"
          selected={formData[key]}
          onChange={() => handleToggle(index, key)}
        >
          <Check />
        </MuiToggleButton>
      ))}
    </Box>
  );
};

export default StyleFormRow;

