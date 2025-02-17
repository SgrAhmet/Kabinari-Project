import React, { useState,useEffect } from "react";
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
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import { ToastContainer, toast,Bounce } from "react-toastify";
// import DownloadData from "./DownloadData";
import DownloadExcel from "./DownloadExcel";
import addNewData from "./SetDatabase";
import dayjs from "dayjs";
import updateDatabase from "./UpdateDatabase";

const DynamicForm = ({ müsteriIsmi,data,olusturmaTarihi,isNumarası,databaseId}) => {

  // console.log(müsteriIsmi,data,olusturmaTarihi,isNumarası)

  console.log("DynamicForm data is :")
  console.log(data)
  
  const { control, handleSubmit, getValues, setValue } = useForm();
  const [rows, setRows] = useState([{ id: 0 }]);

  const notifySuccess = () => toast.success('Buluta Yüklendi', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });
    
  const notifyError= () => toast.error('Buluta Yüklenirken Bir Hata Oluştu', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
    });

    const controlInbound = () => {
      setRows(prevRows => {
          const newRows = [...prevRows]; // Önceki state'i kopyala
          for (let i = 1; i < data.length; i++) {
              newRows.push({ id: i }); // Yeni elemanları ekle
          }
          return newRows; // Güncellenmiş array'i döndür
      });
  };
  
  useEffect(() => {
      data && controlInbound() 
  }, []);


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

  const onSubmit = (dataX) => {
    const formattedData = rows.map((row) => {
      const rowData = {};
      Object.keys(dataX).forEach((key) => {
        if (key.includes(`-${row.id}`)) {
          const newKey = key.replace(`-${row.id}`, ""); // Örneğin, "kat-0" -> "kat"
          rowData[newKey] = dataX[key];
        }
      });
      return rowData;
    });

    // DownloadData(formattedData,müsteriIsmi)
    DownloadExcel(formattedData, müsteriIsmi);
  };

  const CloudDownload = (dataX) => {
    const formattedData = rows.map((row) => {
      const rowData = {};
      Object.keys(dataX).forEach((key) => {
        if (key.includes(`-${row.id}`)) {
          const newKey = key.replace(`-${row.id}`, ""); // Örneğin, "kat-0" -> "kat"
          rowData[newKey] = dataX[key];
        }
      });
      return rowData;
    });

    // console.log(data)

    if(data){
      updateDatabase(formattedData,müsteriIsmi,olusturmaTarihi,isNumarası,notifySuccess,notifyError,databaseId)
    }else{
      addNewData(formattedData,müsteriIsmi,dayjs(olusturmaTarihi).format('DD/MM/YYYY'),isNumarası,notifySuccess,notifyError)
    }


    

    // console.log(dayjs(olusturmaTarihi).format('DD/MM/YYYY'))


  };

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
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
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
        {/* <Typography>{row.id + 1}</Typography> */}

          <Controller
            name={`kat-${row.id}`}
            control={control}
            defaultValue={data && data[row.id]?.kat ? data[row.id].kat : ""} // Direk o datayı kontrol ettiğimizde de data gelmediğinde undifiendin [i] incisini okuyoamıyr
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
            defaultValue={data && data[row.id]?.tip ? data[row.id].tip : ""} // böyle aptığımızda yeni satır eklenemiyor
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
            defaultValue={data && data[row.id]?.mahalNo ? data[row.id].mahalNo : ""}
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
            defaultValue={data && data[row.id]?.mahal ? data[row.id].mahal : ""}
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
            defaultValue={data && data[row.id]?.en ? data[row.id].en : ""}
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
            defaultValue={data && data[row.id]?.boy ? data[row.id].boy : ""}
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
            defaultValue={data && data[row.id]?.duvarKalinligi ? data[row.id].duvarKalinligi : ""}
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
            defaultValue={data && data[row.id]?.yon ? data[row.id].yon : ""}
            render={({ field }) => (
              <FormControl size="small" sx={{ width: "8%" }}>
                <InputLabel>Yön</InputLabel>
                <Select {...field} label="Yön">
                  <MenuItem value="sağ">Sağ</MenuItem>
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
            defaultValue={data && data[row.id]?.kanat ? data[row.id].kanat : ""}
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
            defaultValue={data && data[row.id]?.kasa ? data[row.id].kasa : ""}
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
            defaultValue={data && data[row.id]?.barel ? data[row.id].barel : ""}
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
            defaultValue={data && data[row.id]?.kilit ? data[row.id].kilit : ""}
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
            defaultValue={data && data[row.id]?.cumba ? data[row.id].cumba : ""}
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
            defaultValue={data && data[row.id]?.kol ? data[row.id].kol : ""}
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
            defaultValue={data && data[row.id]?.tekmelik ? data[row.id].tekmelik : false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`itmelik-${row.id}`}
            control={control}
            defaultValue={data && data[row.id]?.itmelik ? data[row.id].itmelik : false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`menfez-${row.id}`}
            control={control}
            defaultValue={data && data[row.id]?.menfez ? data[row.id].menfez : false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`hidrolik-${row.id}`}
            control={control}
            defaultValue={data && data[row.id]?.hidrolik ? data[row.id].hidrolik : false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`lumboz-${row.id}`}
            control={control}
            defaultValue={data && data[row.id]?.lumboz ? data[row.id].lumboz : false}
            render={({ field }) => (
              <Checkbox {...field} checked={field.value} />
            )}
          />
          <Controller
            name={`yangınaD-${row.id}`}
            control={control}
            defaultValue={data && data[row.id]?.yangınaD ? data[row.id].yangınaD : false}
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
          onClick={handleSubmit(CloudDownload)}
          sx={{
            backgroundColor: "#dad726",
            "&:hover": { backgroundColor: "#cac727" },
          }}
        >
          {data ? "BULUTU GÜNCELLE" : "BULUTA YÜKLE"}
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
