import React, { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";
import logo from "../imgs/logo2.png";

const DownloadData = (data, müsteriIsmi) => {
  let extrasCheck = {
    tekmelik: false,
    itmelik: false,
    menfez: false,
    hidrolik: false,
    lümboz: false,
    yangınaD: false,
  };
  data.forEach((element) => {
    if (element.tekmelik == true) {
      extrasCheck.tekmelik = true;
    }

    if (element.itmelik == true) {
      extrasCheck.itmelik = true;
    }

    if (element.menfez == true) {
      extrasCheck.menfez = true;
    }

    if (element.hidrolik == true) {
      extrasCheck.hidrolik = true;
    }

    if (element.lumboz == true) {
      extrasCheck.lümboz = true;
    }

    if (element.yangınaD == true) {
      extrasCheck.yangınaD = true;
    }
  });

  const createAndSaveExcel = async () => {
    // Yeni bir Excel Çalışma Kitabı oluştur
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(
      müsteriIsmi === "" ? "Project" : müsteriIsmi
    );

    const worksheet2 = workbook.addWorksheet("Alüminyum Kasa");

    const pageSetup = {
      paperSize: 9, // A4
      orientation: "landscape", // Yatay
      fitToPage: true, // Sayfaya sığdır
      fitToWidth: 1, // Genişlikte 1 sayfaya sığdır
      fitToHeight: 1, // Yükseklikte 1 sayfaya sığdır
      margins: {
        left: 0.3,
        right: 0.3,
        top: 0.3,
        bottom: 0.3,
        header: 0.3,
        footer: 0.3,
      },
    };
    worksheet.pageSetup = {
      paperSize: 9, // A4
      orientation: "landscape", // Yatay
      fitToPage: true, // Sayfaya sığdır
      fitToWidth: 1, // Genişlikte 1 sayfaya sığdır
      fitToHeight: 1, // Yükseklikte 1 sayfaya sığdır
      margins: {
        left: 0.3,
        right: 0.3,
        top: 0.3,
        bottom: 0.3,
        header: 0.3,
        footer: 0.3,
      },
    };
    worksheet2.pageSetup = {
      paperSize: 9, // A4
      orientation: "landscape", // Yatay
      fitToPage: true, // Sayfaya sığdır
      fitToWidth: 1, // Genişlikte 1 sayfaya sığdır
      fitToHeight: 1, // Yükseklikte 1 sayfaya sığdır
      margins: {
        left: 0.3,
        right: 0.3,
        top: 0.3,
        bottom: 0.3,
        header: 0.3,
        footer: 0.3,
      },
    };

    // Tablo Başlığı (Örneğin AVE İNŞAAT PROJE gibi)
    worksheet.mergeCells("A1:V1"); // Hücreleri birleştir
    const titleRow = worksheet.getRow(1);
    titleRow.getCell(1).value = müsteriIsmi === "" ? "Project" : müsteriIsmi; // Tablo Başlığı
    titleRow.getCell(1).font = { bold: true, size: 16 };
    titleRow.getCell(1).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    titleRow.border = {
      top: { style: "bold" },
      left: { style: "bold" },
      bottom: { style: "bold" },
      right: { style: "bold" },
    };
    titleRow.height = 50; // Satır yüksekliği

    worksheet.mergeCells("A2:J2");
    worksheet.mergeCells("K2:L2");
    // worksheet.mergeCells("M2:T2");
    const secondTitleRow = worksheet.getRow(2);
    secondTitleRow.getCell(1).value = "Yerinde Alınan Ölçü";
    secondTitleRow.getCell(1).font = { bold: true, size: 12 };
    secondTitleRow.getCell(11).value = "Renk";
    secondTitleRow.getCell(11).font = { bold: true, size: 12 };

    secondTitleRow.height = 50;

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
    ];

    worksheet.addRow(headers); // 2. Satıra başlıkları ekle

    // Başlık Stilini Belirle
    const headerRow = worksheet.getRow(3);
    headerRow.font = { bold: false, size: 8 };
    headerRow.alignment = {
      vertical: "middle",
      horizontal: "center",
      textRotation: "50",
    };

    headerRow.height = 35;

    headerRow.eachCell((cell, colNumber) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
      cell.font = { bold: true };
    });

    // 3. Satırdan itibaren Verileri Ekle
    data.forEach((singleData, i) => {
      const row = [
        i + 1,
        singleData.tip,
        singleData.kat,
        singleData.mahalNo,
        singleData.mahal,
        singleData.en.toString(),
        singleData.boy.toString(),
        singleData.duvarKalinligi.toString(),
        1,
        singleData.yon,
        singleData.kanat,
        singleData.kasa,
        singleData.barel,
        singleData.kilit,
        extrasCheck.tekmelik ? (singleData.tekmelik == true ? "✔️" : "") : null,
        extrasCheck.itmelik ? (singleData.itmelik == true ? "✔️" : "") : null,
        extrasCheck.menfez ? (singleData.menfez == true ? "✔️" : "") : null,
        extrasCheck.hidrolik ? (singleData.hidrolik == true ? "✔️" : "") : null,
        extrasCheck.lümboz ? (singleData.lumboz == true ? "✔️" : "") : null,
        extrasCheck.yangınaD ? (singleData.yangınaD == true ? "✔️" : "") : null,
        // singleData.itmelik == true ? "✔️" : "",
        // singleData.menfez == true ? "✔️" : "",
        // singleData.hidrolik == true ? "✔️" : "",
        // singleData.lumboz == true ? "✔️" : "", //✓
        // singleData.yangınaD == true ? "✔️" : "",
        singleData.cumba,
        singleData.kol,
      ];

      // Yeni satır ekleme
      let addedRow = worksheet.addRow(row);

      // Satır yüksekliğini ayarlama (örneğin, 25 piksel yapalım)
      addedRow.height = 25;
    });

    // console.log(data)

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
      { width: 6 }, // TİP
      { width: 6 }, // KAT
      { width: 10 }, // MAHAL NO
      { width: 15 }, // MAHAL (uzun)
      { width: 6 }, // EN
      { width: 6 }, // BOY
      { width: 6 }, // D.K.
      { width: 6 }, // ADET
      { width: 6 }, // YÖN
      { width: 10 }, // KANAT
      { width: 10 }, // KASA
      { width: 10 }, // BAREL
      { width: 10 }, // KİLİT
      { width: 5 }, // TEKMELİK
      { width: 5 }, // İTMELİK
      { width: 5 }, // MENFEZ
      { width: 5 }, // HİDROLİK
      { width: 5 }, // LÜMBOZ
      { width: 5 }, // YANGINA D.
      { width: 10 }, // CUMBA
      { width: 10 }, // KOL
    ];
    //!^!^!'^!'^'!^'!^!'^!'^!'^!''!!^!^'!'^!!'
    // Birleştirilmiş hücrelere border ekleme
    const mergeAndApplyBorder = (range, worksheet) => {
      const [startCol, startRow, endCol, endRow] = range; // Başlangıç ve bitiş sütun/satır bilgisi
      for (let row = startRow; row <= endRow; row++) {
        for (let col = startCol; col <= endCol; col++) {
          const cell = worksheet.getCell(row, col);
          cell.border = {
            top: { style: "thin" },
            left: { style: "thin" },
            bottom: { style: "thin" },
            right: { style: "thin" },
          };
        }
      }
    };

    // Birleştirme işlemleri
    worksheet.mergeCells("M2:M3");
    worksheet.mergeCells("N2:N3");
    worksheet.mergeCells("O2:O3");
    worksheet.mergeCells("P2:P3");
    worksheet.mergeCells("Q2:Q3");
    worksheet.mergeCells("R2:R3");
    worksheet.mergeCells("S2:S3");
    worksheet.mergeCells("T2:T3");
    worksheet.mergeCells("U2:U3");
    worksheet.mergeCells("V2:V3");

    // Header değerleri ve stilleri
    const rotateHeaders = [
      "BAREL",
      "KİLİT",
      extrasCheck.tekmelik == true ? "TEKMELİK" : null  ,
      extrasCheck.itmelik == true ? "İTMELİK" : null  ,
      extrasCheck.menfez == true ? "MENFEZ" : null  ,
      extrasCheck.hidrolik == true ? "HİDROLİK" : null  ,
      extrasCheck.lümboz == true ? "LÜMBOZ" : null  ,
      extrasCheck.yangınaD == true ? "YANGINA D." : null  ,
      // "TEKMELİK",
      // "İTMELİK",
      // "MENFEZ",
      // "HİDROLİK",
      // "LÜMBOZ",
      // "YANGINA D.",
      "CUMBA",
      "KOL",
    ];

    rotateHeaders.forEach((header, index) => {
      const columnIndex = 13 + index; // Başlangıç sütunu: 13
      const headerCell = headerRow.getCell(columnIndex);
      headerCell.value = header;
      headerCell.alignment = {
        textRotation: 90,
        vertical: "center",
        horizontal: "center",
      };
      headerCell.font = { bold: true, size: 12 };
    });

    // Birleştirilmiş hücrelere sınır ekleme
    mergeAndApplyBorder([13, 2, 13, 3], worksheet); // M2:M3
    mergeAndApplyBorder([14, 2, 14, 3], worksheet); // N2:N3
    mergeAndApplyBorder([15, 2, 15, 3], worksheet); // O2:O3
    mergeAndApplyBorder([16, 2, 16, 3], worksheet); // P2:P3
    mergeAndApplyBorder([17, 2, 17, 3], worksheet); // Q2:Q3
    mergeAndApplyBorder([18, 2, 18, 3], worksheet); // R2:R3
    mergeAndApplyBorder([19, 2, 19, 3], worksheet); // S2:S3
    mergeAndApplyBorder([20, 2, 20, 3], worksheet); // T2:T3
    mergeAndApplyBorder([21, 2, 21, 3], worksheet); // U2:U3
    mergeAndApplyBorder([22, 2, 22, 3], worksheet); // V2:V3

    //!^!^!'^!'^'!^'!^!'^!'^!'^!''!!^!^'!'^!!'

    // ===========================2. Sayfa============================
    // ===========================2. Sayfa============================
    // ===========================2. Sayfa============================
    worksheet2.mergeCells("A1:N1"); // Hücreleri birleştir
    const titleRow2 = worksheet2.getRow(1);
    titleRow2.getCell(1).value = "ALÜMİNYUM KASA KESİM NET ÖLÇÜSÜ";
    titleRow2.getCell(1).font = { bold: true, size: 16 };
    titleRow2.getCell(1).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    titleRow2.border = {
      top: { style: "bold" },
      left: { style: "bold" },
      bottom: { style: "bold" },
      right: { style: "bold" },
    };
    titleRow2.height = 50; // Satır yüksekliği

    // Tablo Başlıkları
    const headers2 = [
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
      "RENK",
      "KASA",
      "PERVAZ",
      "EK",
    ];

    worksheet2.addRow(headers2); // 2. Satıra başlıkları ekle
    // Başlık Stilini Belirle
    const headerRow2 = worksheet2.getRow(2);
    headerRow2.font = { bold: false, size: 8 };
    headerRow2.alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    headerRow2.height = 30;

    headerRow2.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
      cell.font = { bold: true };
    });

    worksheet2.columns = [
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 10 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
      { width: 8 },
    ];

    data.forEach((singleData, i) => {
      let dk = Number(singleData.duvarKalinligi);
      let kasa = 35;
      let pervaz;
      let ek = "";

      if (dk <= 12.5) {
        pervaz = 60;
      } else if (dk <= 15.5) {
        pervaz = 90;
      } else if (dk <= 18.5) {
        pervaz = 120;
      } else if (dk <= 20.5) {
        pervaz = 140;
      } else if (dk <= 23.5) {
        pervaz = 167;
      } else {
        pervaz = 167;
        ek = 4.5;
      }

      const row = [
        i + 1,
        singleData.tip,
        singleData.kat,
        singleData.mahalNo,
        singleData.mahal,
        singleData.en,
        singleData.boy,
        Number(singleData.duvarKalinligi),
        1,
        singleData.yon,
        singleData.kasa, // Renk
        kasa, // Kasa
        pervaz,
        ek,
      ];
      worksheet2.addRow(row);
    });

    worksheet2.eachRow((row, rowNumber) => {
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
