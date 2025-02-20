import React, { useState, useEffect } from "react";
import "./Home.css";
import FormRow from "../components/FormRow";

const Home = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [rows, setRows] = useState([0]);

  const handleExelBtn = () => {
    // console.log("Form Verileri:", formDataList);
  };

  const handleNewRowBtn = () => {
    setRows((prev) => [...prev, prev.length]); // Yeni boş satır ekler
    setFormDataList((prev) => [...prev, {}]); // Yeni boş veri ekler
  };

  const handleSameRowBtn = () => {
    if (formDataList.length === 0) return;

    const lastRowData = formDataList[formDataList.length - 1]; // Son satırın verisi
    setRows((prev) => [...prev, prev.length]); // Yeni satır ekle
    setFormDataList((prev) => [...prev, { ...lastRowData }]); // Son satırın kopyasını ekle
  };

  const updateFormData = (id, data) => {
    setFormDataList((prev) => {
      const updatedData = [...prev];
      updatedData[id] = data; // Belirtilen `id`deki veriyi günceller
      return updatedData;
    });
  };

  const deleteFormRow = (rowId) => {
    setRows((prevRows) => prevRows.filter((row) => row !== rowId)); // Seçilen satırı sil
    setFormDataList((prevData) => prevData.filter((_, index) => index !== rowId)); // Aynı index'teki veriyi sil
    
  };

  useEffect(() => {
    // console.log("Rows:", rows);
    // console.log("Form Data List:", formDataList);
  }, [rows, formDataList]);

  return (
    <div className="HomeContainer">
      {rows.map((id) => (
        <FormRow
          key={id}
          id={id}
          data={formDataList[id] || {}}
          updateFormData={updateFormData}
          deleteFormRow={deleteFormRow}
        />
      ))}

      <button onClick={handleNewRowBtn}>Create New Row</button>
      <button onClick={handleSameRowBtn}>Create Same Row</button>
      <br />
      <button onClick={handleExelBtn}>Create Excel</button>
    </div>
  );
};

export default Home;