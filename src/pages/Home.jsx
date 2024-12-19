import React, { useState } from "react";
import "./Home.css";

const Home = () => {
  const [formData, setFormData] = useState({
    kat: "",
    tip: "",
    mahalNo: "",
    mahal: "",
    en: "",
    boy: "",
    duvarKalinligi: "",
    yon: "",
    kanat: "",
    kasa: "",
    barel: "",
    kilit: "",
    cumba: "",
    kol: "",
  });



  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const handleBtn = () => {
    const data2 = {
      tip: formData.tip,
      kat: formData.kat,
      mahalNo: formData.mahalNo,
      mahal: formData.mahal,
      en: parseInt(formData.en) || 0,
      boy: parseInt(formData.boy) || 0,
      duvarKalinligi: parseInt(formData.duvarKalinligi) || 0,
      adet: 1, // Varsayılan olarak 1
      yon: formData.yon,
      kanat: formData.kanat,
      kasa: formData.kasa,
      barel: formData.barel,
      kilit: formData.kilit,
      cumba: formData.cumba,
      kol: formData.kol,
    };

    console.log(data2);
  };

  return (
    <div className="HomeContainer">
      <div className="formArea">
        <input
          placeholder="Kat"
          type="text"
          name="kat"
          onChange={handleInputChange}
        />
        <input
          placeholder="Tip"
          type="text"
          name="tip"
          onChange={handleInputChange}
        />
        <input
          placeholder="Mahal-No"
          type="text"
          name="mahalNo"
          onChange={handleInputChange}
        />
        <input
          placeholder="Mahal"
          type="text"
          name="mahal"
          onChange={handleInputChange}
        />
        <input
          placeholder="En"
          type="number"
          name="en"
          onChange={handleInputChange}
        />
        <input
          placeholder="Boy"
          type="number"
          name="boy"
          onChange={handleInputChange}
        />
        <input
          placeholder="Duvar Kalınlığı"
          type="number"
          name="duvarKalinligi"
          onChange={handleInputChange}
        />
        <select name="yon" onChange={handleInputChange}>
          <option value="">Yön Seç</option>
          <option value="Sağ">Sağ</option>
          <option value="Sol">Sol</option>
          <option value="Dışarı Sağ">Dışarı Sağ</option>
          <option value="Dışarı Sol">Dışarı Sol</option>
        </select>
        <input
          placeholder="Kanat"
          type="text"
          name="kanat"
          onChange={handleInputChange}
        />
        <input
          placeholder="Kasa"
          type="text"
          name="kasa"
          onChange={handleInputChange}
        />
        <select name="barel" onChange={handleInputChange}>
          <option value="">Barel Seç</option>
          <option value="?1">?1</option>
          <option value="?2">?2</option>
          <option value="?3">?3</option>
        </select>
        <input
          placeholder="Kilit"
          type="text"
          name="kilit"
          onChange={handleInputChange}
        />
        <select name="cumba" onChange={handleInputChange}>
          <option value="">Cumba Seç</option>
          <option value="PVC">PVC</option>
          <option value="U">U</option>
        </select>
        <select name="kol" onChange={handleInputChange}>
          <option value="">Kol Seç</option>
          <option value="Baston">Baston</option>
          <option value="Boru">Boru</option>
        </select>
      </div>
      <button onClick={handleBtn}>Create Exel</button>
    </div>
  );
};

export default Home;
