import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
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
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

import DownloadData from "./DownloadData";


const DynamicForm = ({müsteriIsmi}) => {



  const { control, handleSubmit, getValues, setValue } = useForm();
  const [rows, setRows] = useState([{ id: 0 }]);

  const addRow = () => {
    const newRow = { id: rows.length };
    setRows([...rows, newRow]);
  };

  const copyLastRow = () => {
    if (rows.length === 0) return;

    const lastRowId = rows[rows.length - 1].id;
    const lastRowData = getValues();

    const newRow = { id: rows.length };
    setRows([...rows, newRow]);

    setTimeout(() => {
      Object.keys(lastRowData).forEach((key) => {
        if (key.includes(`-${lastRowId}`)) {
          const newKey = key.replace(`-${lastRowId}`, `-${newRow.id}`);
          setValue(newKey, lastRowData[key]);
        }
      });
    }, 0);
  };

  const onSubmit = (data) => {
    const formattedData = rows.map((row) => {
      const rowData = {};
      Object.keys(data).forEach((key) => {
        if (key.includes(`-${row.id}`)) {
          const newKey = key.replace(`-${row.id}`, ""); // Örneğin, "kat-0" -> "kat"
          rowData[newKey] = data[key];
        }
      });
      return rowData;
    });

    DownloadData(formattedData,müsteriIsmi)



  };

  const CloudDownload = ()=>{


  }

  // Sütun başlıkları
  const columnLabels = [
    "Kat",
    "Tip",
    "Mahal No",
    "Mahal",
    "En",
    "Boy",
    "D.K.",
    "Yön",
    "Kanat",
    "Kasa",
    "Barel",
    "Kilit",
    "Cumba",
    "Kol",
    "Tekmelik",
    "İtmelik",
    "Menfez",
    "Hidrolik",
    "Lumboz",
    "Yangına D.",
  ];

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ padding: 2, marginTop: 2 }}
    >
      {/* Sütun Başlıkları */}
      <Box sx={{ display: "flex", gap: 1, marginBottom: 1 }}>
        {columnLabels.map((label, index) => (
          <Box
            key={index}
            sx={{
              width: index >= 14 ? "2.6rem" : "8%",
              paddingLeft: index >= 14 ? "0" : ".5rem",
              fontWeight: "bold",
              textAlign: "start",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              transform:
                index >= 14
                  ? "rotate(-60deg) translateX(.5rem) translateY(-.1rem)"
                  : "none",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </Box>
        ))}
      </Box>

      {/* Form Satırları */}
      {rows.map((row) => (
        <Box key={row.id} sx={{ display: "flex", gap: 1, marginBottom: 1 }}>
          <Controller
            name={`kat-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Kat"
                size="small"
                sx={{ width: "8%" }}
                inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`tip-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Tip"
                size="small"
                sx={{ width: "8%" }}
                 inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`mahalNo-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Mahal No"
                size="small"
                sx={{ width: "8%" }}
                 inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`mahal-${row.id}`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                label="Mahal"
                size="small"
                sx={{ width: "8%" }}
                 inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`en-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="En"
                size="small"
                sx={{ width: "8%" }}
                 inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`boy-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Boy"
                size="small"
                sx={{ width: "8%" }}
                 inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`duvarKalinligi-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="D.K."
                size="small"
                // type="number"  ????
                sx={{ width: "8%" }}
                 inputProps={{ autoComplete: "off" }}
                
              />
            )}
          />
          <Controller
            name={`yon-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl size="small" sx={{ width: "8%" }}>
                <InputLabel>Yön</InputLabel>
                <Select {...field} label="Yön">
                  <MenuItem value="sağ" >Sağ</MenuItem>
                  <MenuItem value="sol">Sol</MenuItem>
                  <MenuItem value="dışarı-sağ">D. Sağ</MenuItem>
                  <MenuItem value="dışarı-sol">D. Sol</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name={`kanat-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Kanat"
                size="small"
                sx={{ width: "8%" }}
                inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`kasa-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Kasa"
                size="small"
                sx={{ width: "8%" }}
                inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`barel-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl size="small" sx={{ width: "8%" }}>
                <InputLabel>Barel</InputLabel>
                <Select {...field} label="Barel">
                  <MenuItem value="?1">?1</MenuItem>
                  <MenuItem value="?2">?2</MenuItem>
                  <MenuItem value="?3">?3</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name={`kilit-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                label="Kilit"
                size="small"
                sx={{ width: "8%" }}
                inputProps={{ autoComplete: "off" }}
              />
            )}
          />
          <Controller
            name={`cumba-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl size="small" sx={{ width: "8%" }}>
                <InputLabel>Cumba</InputLabel>
                <Select {...field} label="Cumba">
                  <MenuItem value="pvc">PVC</MenuItem>
                  <MenuItem value="u">U</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name={`kol-${row.id}`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <FormControl size="small" sx={{ width: "8%" }}>
                <InputLabel>Kol</InputLabel>
                <Select {...field} label="Kol">
                  <MenuItem value="baston">Baston</MenuItem>
                  <MenuItem value="boru">Boru</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name={`tekmelik-${row.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`itmelik-${row.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`menfez-${row.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`hidrolik-${row.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`lumboz-${row.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`yangınaD-${row.id}`}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
        </Box>
      ))}

      {/* Butonlar */}
      <Box
        sx={{
          display: "flex",
          gap: 2,
          marginTop: 2,
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          onClick={addRow}
          startIcon={<AddIcon />}
          sx={{
            backgroundColor: "#4CAF50",
            "&:hover": { backgroundColor: "#45a049" },
          }}
        >
          Yeni Satır Ekle
        </Button>
        <Button
          variant="contained"
          onClick={copyLastRow}
          startIcon={<ContentCopyIcon />}
          sx={{
            backgroundColor: "#2196F3",
            "&:hover": { backgroundColor: "#1e88e5" },
          }}
        >
          Son Satırı Kopyala
        </Button>
        <Button
          variant="contained"
          // type="submit"
          startIcon={<CloudDownloadIcon />}
          onClick={CloudDownload}
          sx={{
            backgroundColor: "#dad726",
            "&:hover": { backgroundColor: "#cac727" },
          }}
        >
          BULUTA YÜKLE
        </Button>

        <Button
          variant="contained"
          type="submit"
          startIcon={<DownloadForOfflineIcon />}
          sx={{
            backgroundColor: "#FF5722",
            "&:hover": { backgroundColor: "#e64a19" },
          }}
        >
          KAYDET
        </Button>
      </Box>
    </Box>
  );
};

export default DynamicForm;
// SON 
