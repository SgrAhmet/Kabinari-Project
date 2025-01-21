import React from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const DownloadData = (data, müsteriIsmi) => {
  const createAndSaveExcel = async () => {
    // Yeni bir Excel Çalışma Kitabı oluştur
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(
      müsteriIsmi === "" ? "Project1" : müsteriIsmi
    );

    // Tablo Başlığı (Örneğin AVE İNŞAAT PROJE gibi)
    worksheet.mergeCells("A1:T1"); // Hücreleri birleştir
    const titleRow = worksheet.getRow(1);
    titleRow.getCell(1).value = müsteriIsmi === "" ? "Project1" : müsteriIsmi; // Tablo Başlığı
    titleRow.getCell(1).font = { bold: true, size: 16 };
    titleRow.getCell(1).alignment = { vertical: "middle", horizontal: "center" };
    titleRow.height = 25; // Satır yüksekliği

    // Tablo Başlıkları
    const headers = [
      "NO",
      "TİP",
      "KAT",
      "MAHAL NO",
      "MAHAL",
      "EN",
      "BOY",
      "D.K.",
      "ADET",
      "YÖN",
      "KANAT",
      "KASA",
      "BAREL",
      "KİLİT",
      "LÜBOZ",
      "HİDROLİK",
      "TELEMEK",
      "YANGINA D.",
      "CUMBA",
      "KOL",
    ];

    worksheet.addRow(headers); // 2. Satıra başlıkları ekle

    // Başlık Stilini Belirle
    const headerRow = worksheet.getRow(2);
    headerRow.font = { bold: false, color: { argb: "FFFFFFFF" }, size: 8 };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0070C0" }, // Mavi arka plan
    };
    headerRow.height = 20;

    headerRow.eachCell((cell, colNumber) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };

    });


    // 3. Satırdan itibaren Verileri Ekle
    data.forEach((row) => {
      worksheet.addRow(row);
    });

    // Hücre Stilini Uygula
    worksheet.eachRow((row, rowNumber) => {
      row.eachCell((cell) => {
        cell.alignment = { vertical: "middle", horizontal: "center" };
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        };
      });
    });

    // Sütun Genişliklerini Ayarla
    worksheet.columns = [
      { width: 3 }, // NO sütunu (dar)
      { width: 5 }, // TİP
      { width: 5 }, // KAT
      { width: 10 }, // MAHAL NO
      { width: 15 }, // MAHAL (uzun)
      { width: 5 }, // EN
      { width: 5 }, // BOY
      { width: 5 }, // D.K.
      { width: 5 }, // ADET
      { width: 5 }, // YÖN
      { width: 5 }, // KANAT
      { width: 5 }, // KASA
      { width: 5 }, // BAREL
      { width: 5 }, // KİLİT
      { width: 5 }, // LÜBOZ
      { width: 5 }, // HİDROLİK
      { width: 5 }, // TELEMEK
      { width: 5 }, // YANGINA D.
      { width: 5 }, // CUMBA
      { width: 5 }, // KOL
    ];

    // Excel dosyasını indirilebilir hale getir
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(
      new Blob([buffer]),
      `${müsteriIsmi === "" ? "Project" : müsteriIsmi}.xlsx`
    );
  };

  createAndSaveExcel();

  return <></>;
};

export default DownloadData;
