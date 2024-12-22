import React, { useState, useEffect } from "react";
import { AiOutlineClose  } from "react-icons/ai";

const FormRow = ({ id, data, updateFormData, deleteFormRow }) => {
  const [formData, setFormData] = useState({
    kat: data.kat || "",
    tip: data.tip || "",
    mahalNo: data.mahalNo || "",
    mahal: data.mahal || "",
    en: data.en || "",
    boy: data.boy || "",
    duvarKalinligi: data.duvarKalinligi || "",
    yon: data.yon || "",
    kanat: data.kanat || "",
    kasa: data.kasa || "",
    barel: data.barel || "",
    kilit: data.kilit || "",
    cumba: data.cumba || "",
    kol: data.kol || "",
  });

  useEffect(() => {
    updateFormData(id, formData);
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const deleteForm = () => {
    deleteFormRow(id); // `deleteFormRow`'u çağır
  };

  return (
    <div className="formArea">
      <AiOutlineClose onClick={deleteForm} className="deteleIcon"/>
      <p>{id + 1}</p>
      <input
        placeholder="Kat"
        type="text"
        name="kat"
        value={formData.kat}
        onChange={handleInputChange}
      />
      <input
        placeholder="Tip"
        type="text"
        name="tip"
        value={formData.tip}
        onChange={handleInputChange}
      />
      <input
        placeholder="Mahal-No"
        type="text"
        name="mahalNo"
        value={formData.mahalNo}
        onChange={handleInputChange}
      />
      <input
        placeholder="Mahal"
        type="text"
        name="mahal"
        value={formData.mahal}
        onChange={handleInputChange}
      />
      <input
        placeholder="En"
        type="number"
        name="en"
        value={formData.en}
        onChange={handleInputChange}
      />
      <input
        placeholder="Boy"
        type="number"
        name="boy"
        value={formData.boy}
        onChange={handleInputChange}
      />
      <input
        placeholder="Duvar Kalınlığı"
        type="number"
        name="duvarKalinligi"
        value={formData.duvarKalinligi}
        onChange={handleInputChange}
      />
      <select name="yon" value={formData.yon} onChange={handleInputChange}>
        <option value="">Yön</option>
        <option value="Sağ">Sağ</option>
        <option value="Sol">Sol</option>
        <option value="Dışarı Sağ">Dışarı Sağ</option>
        <option value="Dışarı Sol">Dışarı Sol</option>
      </select>
      <input
        placeholder="Kanat"
        type="text"
        name="kanat"
        value={formData.kanat}
        onChange={handleInputChange}
      />
      <input
        placeholder="Kasa"
        type="text"
        name="kasa"
        value={formData.kasa}
        onChange={handleInputChange}
      />
      <select name="barel" value={formData.barel} onChange={handleInputChange}>
        <option value="">Barel</option>
        <option value="?1">?1</option>
        <option value="?2">?2</option>
        <option value="?3">?3</option>
      </select>
      <input
        placeholder="Kilit"
        type="text"
        name="kilit"
        value={formData.kilit}
        onChange={handleInputChange}
      />
      <select name="cumba" value={formData.cumba} onChange={handleInputChange}>
        <option value="">Cumba</option>
        <option value="PVC">PVC</option>
        <option value="U">U</option>
      </select>
      <select name="kol" value={formData.kol} onChange={handleInputChange}>
        <option value="">Kol</option>
        <option value="Baston">Baston</option>
        <option value="Boru">Boru</option>
      </select>
    </div>
  );
};

export default FormRow;