// import React, { useState } from "react";
import ExcelJS from "exceljs";
import { saveAs } from "file-saver";

const DownloadExcel = (data, müsteriIsmi) => {
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

  let howMuchExtras = 0;
  extrasCheck.tekmelik && howMuchExtras++;
  extrasCheck.itmelik && howMuchExtras++;
  extrasCheck.menfez && howMuchExtras++;
  extrasCheck.hidrolik && howMuchExtras++;
  extrasCheck.lümboz && howMuchExtras++;
  extrasCheck.yangınaD && howMuchExtras++;

  const createAndSaveExcel = async () => {



    // Yeni bir Excel Çalışma Kitabı oluştur
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet(
      müsteriIsmi === "" ? "Project" : müsteriIsmi
    );

    const worksheet2 = workbook.addWorksheet("Alüminyum Kasa");
    const worksheet3 = workbook.addWorksheet("Laminat Kapı Kesim");

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

    worksheet3.pageSetup = {
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

    let cells;

    howMuchExtras == 0 && (cells = "A1:P1");
    howMuchExtras == 1 && (cells = "A1:Q1");
    howMuchExtras == 2 && (cells = "A1:R1");
    howMuchExtras == 3 && (cells = "A1:S1");
    howMuchExtras == 4 && (cells = "A1:T1");
    howMuchExtras == 5 && (cells = "A1:U1");
    howMuchExtras == 6 && (cells = "A1:V1");

    worksheet.mergeCells(cells); // Hücreleri birleştir

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
        singleData.tip.toUpperCase(),
        singleData.kat.toUpperCase(),
        singleData.mahalNo.toUpperCase(),
        singleData.mahal.toUpperCase(),
        Number(singleData.en),
        Number(singleData.boy),
        Number(singleData.duvarKalinligi),
        1,
        singleData.yon.toUpperCase(),
        singleData.kanat.toUpperCase(),
        singleData.kasa.toUpperCase(),
        singleData.barel.toUpperCase(),
        singleData.kilit.toUpperCase(),
        singleData.cumba.toUpperCase(),
        singleData.kol.toUpperCase(),
      ];

      // console.log("extrasCheck", extrasCheck);
      extrasCheck.tekmelik && row.push(singleData.tekmelik == true ? "✔️" : "");
      extrasCheck.itmelik && row.push(singleData.itmelik == true ? "✔️" : "");
      extrasCheck.menfez && row.push(singleData.menfez == true ? "✔️" : "");
      extrasCheck.hidrolik && row.push(singleData.hidrolik == true ? "✔️" : "");
      extrasCheck.lümboz && row.push(singleData.lumboz == true ? "✔️" : "");
      extrasCheck.yangınaD && row.push(singleData.yangınaD == true ? "✔️" : "");

      // Yeni satır ekleme
      let addedRow = worksheet.addRow(row);

      // Satır yüksekliğini ayarlama (örneğin, 25 piksel yapalım)
      addedRow.height = 25;
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
      { width: 5 }, // NO sütunu (dar)
      { width: 10 }, // TİP
      { width: 10 }, // KAT
      { width: 12 }, // MAHAL NO
      { width: 15 }, // MAHAL (uzun)
      { width: 10 }, // EN
      { width: 10 }, // BOY
      { width: 10 }, // D.K.
      { width: 10 }, // ADET
      { width: 10 }, // YÖN
      { width: 10 }, // KANAT
      { width: 10 }, // KASA
      { width: 10 }, // BAREL
      { width: 13 }, // KİLİT
      { width: 10 }, // CUMBA
      { width: 10 }, // KOL
      { width: 5 }, // TEKMELİK
      { width: 5 }, // İTMELİK
      { width: 5 }, // MENFEZ
      { width: 5 }, // HİDROLİK
      { width: 5 }, // LÜMBOZ
      { width: 5 }, // YANGINA D.
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
    const rotateHeaders = ["BAREL", "KİLİT", "CUMBA", "KOL"];

    extrasCheck.tekmelik && rotateHeaders.push("TEKMELİK");
    extrasCheck.itmelik && rotateHeaders.push("İTMELİK");
    extrasCheck.menfez && rotateHeaders.push("MENFEZ");
    extrasCheck.hidrolik && rotateHeaders.push("HİDROLİK");
    extrasCheck.lümboz && rotateHeaders.push("LÜMBOZ");
    extrasCheck.yangınaD && rotateHeaders.push("YANGINA D.");

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

    howMuchExtras >= 1 && mergeAndApplyBorder([17, 2, 17, 3], worksheet); // Q2:Q3
    howMuchExtras >= 2 && mergeAndApplyBorder([18, 2, 18, 3], worksheet); // R2:R3
    howMuchExtras >= 3 && mergeAndApplyBorder([19, 2, 19, 3], worksheet); // S2:S3
    howMuchExtras >= 4 && mergeAndApplyBorder([20, 2, 20, 3], worksheet); // T2:T3
    howMuchExtras >= 5 && mergeAndApplyBorder([21, 2, 21, 3], worksheet); // U2:U3
    howMuchExtras == 6 && mergeAndApplyBorder([22, 2, 22, 3], worksheet); // V2:V3

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
      { width: 5 },
      { width: 10 },
      { width: 10 },
      { width: 15 },
      { width: 15 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
    ];

    data.forEach((singleData, i) => {
      let dk = Number(singleData.duvarKalinligi);
      let kasa = 35;
      let pervaz;
      let ek = "";

      switch (dk) {
        case 9:
        case 10:
        case 11:
          pervaz = 60;
          break;
        case 12:
        case 13:
        case 14:
          pervaz = 90;
          break;

        case 15:
        case 16:
        case 17:
          pervaz = 120;
          break;

        case 18:
        case 19:
        case 20:
          pervaz = 140;
          break;

        case 21:
        case 22:
          pervaz = 120;
          ek = 45;
          break;

        case 23:
        case 24:
          pervaz = 140;
          ek = 45;
          break;

        case 25:
        case 26:
          pervaz = 120;
          ek = 85;
          break;

        case 27:
        case 28:
        case 29:
          pervaz = 140;
          ek = 85;
          break;

        default:
          pervaz ="Geçersiz Duvar Kalınlığı"
          break;
      }

     
      const row = [
        i + 1,
        singleData.tip.toUpperCase(),
        singleData.kat.toUpperCase(),
        singleData.mahalNo.toUpperCase(),
        singleData.mahal.toUpperCase(),
        Number(singleData.en)+4.4,
        Number(singleData.boy-0.3),
        Number(singleData.duvarKalinligi),
        1,
        singleData.yon.toUpperCase(),
        singleData.kasa.toUpperCase(), // Renk
        kasa, // Kasa
        pervaz,
        ek,
      ];
      // worksheet2.addRow(row);
      // Yeni satır ekleme
      let addedRow = worksheet2.addRow(row);

      // Satır yüksekliğini ayarlama (örneğin, 25 piksel yapalım)
      addedRow.height = 25;
      // addedRow.eachCell((cell) => {
      //   cell.font = { bold: true, size: 16 };
      // });
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

    //!^!^!'^!'^'!^'!^!'^!'^!'^!''!!^!^'!'^!!'

    // ===========================3. Sayfa============================
    // ===========================3. Sayfa============================
    // ===========================3. Sayfa============================

    worksheet3.mergeCells("A1:I1"); // Hücreleri birleştir
    worksheet3.mergeCells("J1:K1"); // Hücreleri birleştir
    const titleRow3 = worksheet3.getRow(1);
    titleRow3.getCell(1).value = "LAMİNAT KAPI KESİM NET ÖLÇÜSÜ";
    titleRow3.getCell(11).value = "KAPI CUMBASI";
    titleRow3.getCell(1).font = { bold: true, size: 14 };
    titleRow3.getCell(11).font = { bold: true, size: 14 };
    titleRow3.getCell(1).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    titleRow3.getCell(2).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    titleRow3.getCell(11).alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    // titleRow3.border = {
    //   top: { style: "bold" },
    //   left: { style: "bold" },
    //   bottom: { style: "bold" },
    //   right: { style: "bold" },
    // };
    titleRow3.height = 60; // Satır yüksekliği

    // Tablo Başlıkları
    const headers3 = [
      "NO",
      "TİP",
      "MAHAL",
      "EN",
      "BOY",
      "D.K.",
      "ADET",
      "KİLİT",
      "RENK", // Kanat
      "RENK", // Kapı Cumbası
      "TİP",
    ];

    worksheet3.addRow(headers3);
    // Başlık Stilini Belirle
    const headerRow3 = worksheet3.getRow(2);
    headerRow3.font = { bold: false, size: 8 };
    headerRow3.alignment = {
      vertical: "middle",
      horizontal: "center",
    };
    headerRow3.height = 30;

    headerRow3.eachCell((cell) => {
      cell.border = {
        top: { style: "thin" },
        left: { style: "thin" },
        bottom: { style: "thin" },
        right: { style: "thin" },
      };
      cell.font = { bold: true };
    });

    worksheet3.columns = [
      { width: 5 },
      { width: 10 },
      { width: 15 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 10 },
      { width: 15 },
      { width: 15 },
      { width: 15 },
      { width: 10 },
    ];

    data.forEach((singleData, i) => {
      const row = [
        i + 1,
        singleData.tip.toUpperCase(),
        singleData.mahal.toUpperCase(),
        singleData.cumba =="pvc" ? Number(singleData.en -7.9) : Number(singleData.en -8.1) ,
        Number(singleData.boy - 6),
        Number(singleData.duvarKalinligi),
        1,
        singleData.kilit.toUpperCase(),
        singleData.kanat.toUpperCase(),
        "???".toUpperCase(),
        singleData.cumba.toUpperCase(),
      ];

      let addedRow = worksheet3.addRow(row);

      addedRow.height = 25;
    });

    worksheet3.eachRow((row, rowNumber) => {
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
};

export default DownloadExcel;
