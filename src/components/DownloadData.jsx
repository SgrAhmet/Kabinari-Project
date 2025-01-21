import React from 'react'
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const DownloadData =(data,müsteriIsmi) => {

  // console.log(müsteriIsmi)

    const createAndSaveExcel=async()=>{

    // Yeni bir Excel Çalışma Kitabı oluştur
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(müsteriIsmi == "" ? "Project1" : müsteriIsmi);

    // Tablo Başlıkları
    const headers = [
      "NO", "TİP", "KAT", "MAHAL NO", "MAHAL", "EN", "BOY", "D.K.", "ADET", "YÖN",
      "KANAT", "KASA", "BAREL", "KİLİT", "LÜBOZ", "HİDROLİK", "TELEMEK", "YANGINA D.",
      "CUMBA", "KOL"
    ];

    // Tablo Verileri (Bu verileri manuel veya bir API'den alabilirsin)
    const data = [
      [1, "K-OZA", "1.KAT", "Z01", "1 NOLU OFİS", 99, 249, 10, 1, "SAĞ", 7044, "ELOKSAL", "BAREL", "KALE 152 R", "✓", "✓", "", "✓", "PVC", "BASTON"],
      [2, "K-OZA", "1.KAT", "Z02", "2 NOLU OFİS", 99, 249, 10, 1, "SAĞ", 7044, "ELOKSAL", "BAREL", "KALE 152 R", "", "✓", "", "", "PVC", "BASTON"],
      [3, "K-OZA", "2.KAT", "Z03", "3 NOLU OFİS", 99, 249, 10, 1, "SAĞ", 7044, "ELOKSAL", "BAREL", "KALE 152 R", "", "", "", "", "PVC", "BASTON"],
      [4, "K-OZA", "MÜDÜR ODASI", "Z04", "MÜDÜR ODASI", 99, 249, 23, 1, "SAĞ", 7044, "ELOKSAL", "BAREL", "KALE 152 R", "✓", "", "", "", "PVC", "BASTON"],
    ];

    // 1. Satır: Başlıkları Ekle
    worksheet.addRow(headers);

    // Başlık Stilini Belirle
    const headerRow = worksheet.getRow(1);
    headerRow.font = { bold: true, color: { argb: "FFFFFFFF" }, size: 12 };
    headerRow.alignment = { vertical: "middle", horizontal: "center" };
    headerRow.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FF0070C0" }, // Mavi arka plan
    };

    // Kenarlık ekle
    headerRow.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
    });

    // 2. Satırdan itibaren Verileri Ekle
    data.forEach((row) => {
      worksheet.addRow(row);
    });

    // Hücrelere Biçimlendirme Uygula
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
    worksheet.columns.forEach((col) => {
      col.width = 15; // Sütun genişliğini ayarlar
    });

    // Excel dosyasını indirilebilir hale getir
    const buffer = await workbook.xlsx.writeBuffer();
    saveAs(new Blob([buffer]), `${müsteriIsmi == "" ? "Project1" : müsteriIsmi}.xlsx`);

  }

  // createAndSaveExcel();

  return (
    <></>
  )
}

export default DownloadData