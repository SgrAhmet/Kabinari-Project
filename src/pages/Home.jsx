import React, { useState } from "react";
import "./Home.css";
import FormRow from "../components/FormRow";

const Home = () => {
  const [formDataList, setFormDataList] = useState([]);
  const [rows, setRows] = useState([0]);

  const handleExelBtn = () => {
    console.log("Form Verileri:", formDataList);
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

  return (
    <div className="HomeContainer">
      {rows.map((id) => (
        <FormRow
          key={id}
          id={id}
          data={formDataList[id] || {}}
          updateFormData={updateFormData}
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
