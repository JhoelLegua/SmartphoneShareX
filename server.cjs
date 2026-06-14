var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");

// src/data.ts
var cellphoneCatalog = [
  {
    title: "Celular Samsung Galaxy S24 Ultra 12+512gb Gris",
    price: "1,199.00 USD",
    quotes: "en 3 cuotas de 400 USD",
    url: "https://www.amazon.com/dp/B0CSB24ULTR",
    Marca: "SAMSUNG",
    Modelo: "Galaxy S24 Ultra",
    Color: "Titanio Gris",
    Pantalla: 'Dynamic AMOLED 2X de 6.8"',
    Procesador: "Snapdragon 8 Gen 3",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 512 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "162.3 x 79 x 8.6 mm",
    Peso: "232 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (One UI 6.1)",
    Camara_Principal: "Quad: 200 MP + 50 MP + 12 MP + 10 MP",
    Camara_Frontal: "Single: 12 MP Dual Pixel PDAF",
    Conectividad: "5G, Wi-Fi 7, Bluetooth 5.3, UWB, NFC",
    Resistencia_Agua: "IP68 (hasta 1.5m por 30 min)",
    Carga_Rapida: "45W Wired, 15W Wireless (Qi/PMA)",
    Nfc: true,
    Tasa_Refresco: "120 Hz LTPO"
  },
  {
    title: "iPhone 15 Pro Max 256gb Titanio Natural",
    price: "1,099.00 USD",
    quotes: "Sin cuotas",
    url: "https://www.ebay.com/itm/B0CSB15PMAX",
    Marca: "APPLE",
    Modelo: "iPhone 15 Pro Max",
    Color: "Titanio Natural",
    Pantalla: 'Super Retina XDR OLED 6.7"',
    Procesador: "Apple A17 Pro",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "4441 mAh",
    Dimensiones: "159.9 x 76.7 x 8.3 mm",
    Peso: "221 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "iOS 17 (actualizable a iOS 18)",
    Camara_Principal: "Triple: 48 MP + 12 MP + 12 MP",
    Camara_Frontal: "Single: 12 MP SL 3D Biom\xE9trico",
    Conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3, UWB Gen 2, NFC",
    Resistencia_Agua: "IP68 (hasta 6m por 30 min)",
    Carga_Rapida: "25W Wired, 15W MagSafe Wireless",
    Nfc: true,
    Tasa_Refresco: "120 Hz ProMotion"
  },
  {
    title: "Motorola Edge 50 Pro 12GB+512GB Luxe Lavender",
    price: "699.00 USD",
    quotes: "en 6 cuotas de 116.50 USD",
    url: "https://www.mercadolibre.com/p/MLA-EDGE50P",
    Marca: "MOTOROLA",
    Modelo: "Edge 50 Pro",
    Color: "Luxe Lavender",
    Pantalla: 'pOLED de 6.7"',
    Procesador: "Snapdragon 7 Gen 3",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 512 GB",
    Bater\u00EDa: "4500 mAh",
    Dimensiones: "161.2 x 72.4 x 8.2 mm",
    Peso: "186 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (Hello UI)",
    Camara_Principal: "Triple: 50 MP + 13 MP + 10 MP",
    Camara_Frontal: "Single: 50 MP Autofoco",
    Conectividad: "5G, Wi-Fi 6E, Bluetooth 5.4, NFC",
    Resistencia_Agua: "IP68 (hasta 1.5m por 30 min)",
    Carga_Rapida: "125W TurboPower, 50W Wireless",
    Nfc: true,
    Tasa_Refresco: "144 Hz"
  },
  {
    title: "Xiaomi 14 Ultra 5G 16GB+512GB Negro",
    price: "999.00 USD",
    quotes: "en 3 cuotas de 333 USD",
    url: "https://www.amazon.com/dp/B0CX14ULTRA",
    Marca: "XIAOMI",
    Modelo: "Xiaomi 14 Ultra",
    Color: "Negro",
    Pantalla: 'AMOLED LTPO de 6.73"',
    Procesador: "Snapdragon 8 Gen 3",
    Memoria: "Memoria RAM 16 GB | Almacenamiento 512 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "161.4 x 75.3 x 9.2 mm",
    Peso: "220 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (HyperOS)",
    Camara_Principal: "Quad Leica: 50 MP + 50 MP + 50 MP + 50 MP",
    Camara_Frontal: "Single: 32 MP",
    Conectividad: "5G, Wi-Fi 7, Bluetooth 5.4, NFC, Infrarrojo",
    Resistencia_Agua: "IP68 dust/water proof",
    Carga_Rapida: "90W Wired HyperCharge, 80W Wireless",
    Nfc: true,
    Tasa_Refresco: "120 Hz LTPO"
  },
  {
    title: "OnePlus 12 Dual-SIM 16GB+512GB Silky Black",
    price: "799.00 USD",
    quotes: "Sin cuotas",
    url: "https://www.ebay.com/itm/B0CSBONEPLUS12",
    Marca: "ONEPLUS",
    Modelo: "OnePlus 12",
    Color: "Silky Black",
    Pantalla: 'LTPO AMOLED de 6.82"',
    Procesador: "Snapdragon 8 Gen 3",
    Memoria: "Memoria RAM 16 GB | Almacenamiento 512 GB",
    Bater\u00EDa: "5400 mAh",
    Dimensiones: "164.3 x 75.8 x 9.2 mm",
    Peso: "220 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "OxygenOS 14 (Android 14)",
    Camara_Principal: "Triple Hasselblad: 50 MP + 64 MP + 48 MP",
    Camara_Frontal: "Single: 32 MP Auto-HDR",
    Conectividad: "5G, Wi-Fi 7, Bluetooth 5.4, NFC, Infrarrojo",
    Resistencia_Agua: "IP65 resistant",
    Carga_Rapida: "100W SUPERVOOC, 50W AIRVOOC Wireless",
    Nfc: true,
    Tasa_Refresco: "120 Hz adapatativo"
  },
  {
    title: "Samsung Galaxy A55 5G 8GB+256GB Azul Marino",
    price: "379.00 USD",
    quotes: "en 12 cuotas de 31.50 USD",
    url: "https://www.mercadolibre.com/p/MLA-GALAXYA55",
    Marca: "SAMSUNG",
    Modelo: "Galaxy A55",
    Color: "Azul Marino",
    Pantalla: 'Super AMOLED de 6.6"',
    Procesador: "Exynos 1480",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "161.1 x 77.4 x 8.2 mm",
    Peso: "213 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (One UI 6.1)",
    Camara_Principal: "Triple: 50 MP + 12 MP + 5 MP",
    Camara_Frontal: "Single: 32 MP",
    Conectividad: "5G, Wi-Fi 6, Bluetooth 5.3, NFC",
    Resistencia_Agua: "IP67 (hasta 1m por 30 min)",
    Carga_Rapida: "25W Super Fast Charging",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  },
  {
    title: "Apple iPhone 15 128gb Negro",
    price: "799.00 USD",
    quotes: "en 3 cuotas de 266 USD",
    url: "https://www.amazon.com/dp/B0CSBIPHONE15",
    Marca: "APPLE",
    Modelo: "iPhone 15",
    Color: "Negro",
    Pantalla: 'Super Retina XDR OLED 6.1"',
    Procesador: "Apple A16 Bionic",
    Memoria: "Memoria RAM 6 GB | Almacenamiento 128 GB",
    Bater\u00EDa: "3349 mAh",
    Dimensiones: "147.6 x 71.6 x 7.8 mm",
    Peso: "171 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "iOS 17",
    Camara_Principal: "Dual: 48 MP + 12 MP Ultra wide",
    Camara_Frontal: "Single: 12 MP TrueDepth",
    Conectividad: "5G, Wi-Fi 6, Bluetooth 5.3, UWB Gen 2, NFC",
    Resistencia_Agua: "IP68 (hasta 6m por 30 min)",
    Carga_Rapida: "20W Wired, 15W MagSafe Wireless",
    Nfc: true,
    Tasa_Refresco: "60 Hz Super Retina"
  },
  {
    title: "Motorola Moto G84 5G 256GB Azul Met\xE1lico",
    price: "249.00 USD",
    quotes: "Sin cuotas",
    url: "https://www.ebay.com/itm/B0CSBMOTOG84",
    Marca: "MOTOROLA",
    Modelo: "Moto G84",
    Color: "Azul Met\xE1lico",
    Pantalla: 'pOLED de 6.55"',
    Procesador: "Snapdragon 695",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "160.1 x 74.4 x 7.6 mm",
    Peso: "166 g",
    Garant\u00EDa: "6 Meses",
    Sistema_Operativo: "Android 13 (actualizable a 14)",
    Camara_Principal: "Dual: 50 MP (OIS) + 8 MP Ultra wide/Macro",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "5G, Wi-Fi 5, Bluetooth 5.1, NFC, Jack 3.5mm",
    Resistencia_Agua: "IP54 protecci\xF3n a salpicaduras",
    Carga_Rapida: "30W TurboPower",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  },
  {
    title: "Xiaomi Redmi Note 13 Pro+ 5G 12+512GB Purpura",
    price: "399.00 USD",
    quotes: "en 6 cuotas de 66.50 USD",
    url: "https://www.mercadolibre.com/p/MLA-REDMIN13P",
    Marca: "XIAOMI",
    Modelo: "Redmi Note 13 Pro+",
    Color: "Aurora Purple",
    Pantalla: 'AMOLED Curva de 6.67"',
    Procesador: "Dimensity 7200-Ultra",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 512 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "161.4 x 74.2 x 8.9 mm",
    Peso: "204 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 13 (actualizable a HyperOS)",
    Camara_Principal: "Triple: 200 MP (OIS) + 8 MP + 2 MP",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "5G, Wi-Fi 6, Bluetooth 5.3, NFC, Emisor IR",
    Resistencia_Agua: "IP68 dust/water resistant",
    Carga_Rapida: "120W HyperCharge (100% en 19 min)",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  },
  {
    title: "OnePlus Nord 4 5G 12+256GB Silver Metallic",
    price: "499.00 USD",
    quotes: "en 3 cuotas de 166.30 USD",
    url: "https://www.amazon.com/dp/B0CXNORD4",
    Marca: "ONEPLUS",
    Modelo: "Nord 4",
    Color: "Silver Metallic",
    Pantalla: 'Fluid AMOLED de 6.74"',
    Procesador: "Snapdragon 7+ Gen 3",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5500 mAh",
    Dimensiones: "162.6 x 75.0 x 8.0 mm",
    Peso: "199 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "OxygenOS 14.1 (Android 14)",
    Camara_Principal: "Dual: 50 MP (Sony LYT-600 OIS) + 8 MP",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "5G, Wi-Fi 6, Bluetooth 5.4, NFC, Puerto Infrarrojo",
    Resistencia_Agua: "IP65 dust/water resistant",
    Carga_Rapida: "100W SUPERVOOC (100% en 28 min)",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  },
  {
    title: "Samsung Galaxy S24+ plus 12GB+256GB Amarillo",
    price: "949.00 USD",
    quotes: "en 12 cuotas de 79.08 USD",
    url: "https://www.ebay.com/itm/B0CSBS24PLUS",
    Marca: "SAMSUNG",
    Modelo: "Galaxy S24+",
    Color: "Amarillo",
    Pantalla: 'Dynamic AMOLED 2X de 6.7"',
    Procesador: "Exynos 2400 / Snapdragon 8 Gen 3",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "4900 mAh",
    Dimensiones: "158.5 x 75.9 x 7.7 mm",
    Peso: "196 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (One UI 6.1)",
    Camara_Principal: "Triple: 50 MP + 10 MP + 12 MP",
    Camara_Frontal: "Single: 12 MP Dual Pixel PDAF",
    Conectividad: "5G, Wi-Fi 6E/7, Bluetooth 5.3, NFC, UWB",
    Resistencia_Agua: "IP68 (hasta 1.5m por 30 min)",
    Carga_Rapida: "45W Wired, 15W Wireless, 4.5W Reverse",
    Nfc: true,
    Tasa_Refresco: "120 Hz LTPO"
  },
  {
    title: "Apple iPhone 14 128gb Azul Sky",
    price: "649.00 USD",
    quotes: "Sin cuotas",
    url: "https://www.mercadolibre.com/p/MLA-IPHONE14",
    Marca: "APPLE",
    Modelo: "iPhone 14",
    Color: "Azul Sky",
    Pantalla: 'Super Retina XDR OLED 6.1"',
    Procesador: "Apple A15 Bionic",
    Memoria: "Memoria RAM 6 GB | Almacenamiento 128 GB",
    Bater\u00EDa: "3279 mAh",
    Dimensiones: "146.7 x 71.5 x 7.8 mm",
    Peso: "172 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "iOS 16 (actualizable)",
    Camara_Principal: "Dual: 12 MP + 12 MP Ultra wide",
    Camara_Frontal: "Single: 12 MP",
    Conectividad: "5G, Wi-Fi 6, Bluetooth 5.3, NFC",
    Resistencia_Agua: "IP68 dust/water resistant",
    Carga_Rapida: "20W Wired, 15W MagSafe Wireless",
    Nfc: true,
    Tasa_Refresco: "60 Hz"
  },
  {
    title: "Motorola Edge 50 Fusion 8+256GB Hot Pink",
    price: "349.00 USD",
    quotes: "en 3 cuotas de 116.30 USD",
    url: "https://www.amazon.com/dp/B0CXEDGFUS",
    Marca: "MOTOROLA",
    Modelo: "Edge 50 Fusion",
    Color: "Hot Pink (Vegan Leather)",
    Pantalla: 'pOLED de 6.7"',
    Procesador: "Snapdragon 7s Gen 2",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "161.9 x 73.1 x 7.9 mm",
    Peso: "175 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (Hello UI)",
    Camara_Principal: "Dual: 50 MP + 13 MP Ultra wide",
    Camara_Frontal: "Single: 32 MP",
    Conectividad: "5G, Wi-Fi 6, Bluetooth 5.2, NFC",
    Resistencia_Agua: "IP68 dust/water resistant",
    Carga_Rapida: "68W TurboPower",
    Nfc: true,
    Tasa_Refresco: "144 Hz"
  },
  {
    title: "Xiaomi Poco F6 Pro 12+512GB Blanco",
    price: "529.00 USD",
    quotes: "en 6 cuotas de 88.16 USD",
    url: "https://www.ebay.com/itm/B0CXPOCOF6PRO",
    Marca: "XIAOMI",
    Modelo: "Poco F6 Pro",
    Color: "Blanco",
    Pantalla: 'WQHD+ Flow AMOLED 6.67"',
    Procesador: "Snapdragon 8 Gen 2",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 512 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "160.8 x 75.0 x 8.2 mm",
    Peso: "209 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (HyperOS)",
    Camara_Principal: "Triple: 50 MP (OIS) + 8 MP + 2 MP",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "50G, Wi-Fi 7, Bluetooth 5.3, NFC, Infrarrojo",
    Resistencia_Agua: "IP54 splash resistant",
    Carga_Rapida: "120W HyperCharge (100% en 19 min)",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  },
  {
    title: "OnePlus 12R 5G 16GB+256GB Iron Gray",
    price: "599.00 USD",
    quotes: "en 3 cuotas de 199.60 USD",
    url: "https://www.mercadolibre.com/p/MLA-ONEPLUS12R",
    Marca: "ONEPLUS",
    Modelo: "OnePlus 12R",
    Color: "Iron Gray",
    Pantalla: 'LTPO4 AMOLED 6.78"',
    Procesador: "Snapdragon 8 Gen 2",
    Memoria: "Memoria RAM 16 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5500 mAh",
    Dimensiones: "163.3 x 75.3 x 8.8 mm",
    Peso: "207 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "OxygenOS 14 (Android 14)",
    Camara_Principal: "Triple: 50 MP (Sony IMX890 OIS) + 8 MP + 2 MP",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "5G, Wi-Fi 7, Bluetooth 5.3, NFC, IR Blaster",
    Resistencia_Agua: "IP64 dust/water resistant",
    Carga_Rapida: "100W SUPERVOOC Super Charge",
    Nfc: true,
    Tasa_Refresco: "120 Hz LTPO4"
  },
  {
    title: "Celular Samsung Galaxy Z Fold6 12+256gb Silver",
    price: "1,799.00 USD",
    quotes: "en 12 cuotas de 149.90 USD",
    url: "https://www.amazon.com/dp/B0CSZFOLD6",
    Marca: "SAMSUNG",
    Modelo: "Galaxy Z Fold6",
    Color: "Silver Shadow",
    Pantalla: 'Dynamic AMOLED 2X Plegable 7.6"',
    Procesador: "Snapdragon 8 Gen 3 for Galaxy",
    Memoria: "Memoria RAM 12 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "4400 mAh",
    Dimensiones: "153.5 x 132.6 x 5.6 mm (Abierto)",
    Peso: "239 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "Android 14 (One UI 6.1.1 con Galaxy AI)",
    Camara_Principal: "Triple: 50 MP + 10 MP Telephoto + 12 MP Ultra wide",
    Camara_Frontal: "Dual: 4 MP (bajo pantalla) + 10 MP (pantalla cover)",
    Conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3, NFC, UWB",
    Resistencia_Agua: "IP48 water resistant & dust protection",
    Carga_Rapida: "25W Wired, 15W Wireless, 4.5W Reverse",
    Nfc: true,
    Tasa_Refresco: "120 Hz adaptativo"
  },
  {
    title: "Apple iPhone 15 Pro 128gb Titanio Azul",
    price: "999.00 USD",
    quotes: "Sin cuotas",
    url: "https://www.ebay.com/itm/B0CSB15PROBLUE",
    Marca: "APPLE",
    Modelo: "iPhone 15 Pro",
    Color: "Titanio Azul",
    Pantalla: 'Super Retina XDR OLED 6.1"',
    Procesador: "Apple A17 Pro",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 128 GB",
    Bater\u00EDa: "3274 mAh",
    Dimensiones: "146.6 x 70.6 x 8.3 mm",
    Peso: "187 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "iOS 17",
    Camara_Principal: "Triple: 48 MP + 12 MP + 12 MP con zoom 3x",
    Camara_Frontal: "Single: 12 MP TrueDepth",
    Conectividad: "5G, Wi-Fi 6E, Bluetooth 5.3, NFC, UWB Gen 2",
    Resistencia_Agua: "IP68 (hasta 6m por 30 min)",
    Carga_Rapida: "25W Wired, 15W MagSafe Wireless",
    Nfc: true,
    Tasa_Refresco: "120 Hz ProMotion"
  },
  {
    title: "Motorola Moto G54 5G 128GB Verde Menta",
    price: "179.00 USD",
    quotes: "en 3 cuotas de 59.66 USD",
    url: "https://www.mercadolibre.com/p/MLA-MOTOG54",
    Marca: "MOTOROLA",
    Modelo: "Moto G54",
    Color: "Verde Menta",
    Pantalla: 'IPS LCD de 6.5"',
    Procesador: "Dimensity 7020",
    Memoria: "Memoria RAM 4 GB | Almacenamiento 128 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "161.6 x 73.8 x 8.0 mm",
    Peso: "177 g",
    Garant\u00EDa: "6 Meses",
    Sistema_Operativo: "Android 13 (actualizable a 14)",
    Camara_Principal: "Dual: 50 MP (OIS) + 2 MP macro",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "5G, Wi-Fi 5, Bluetooth 5.3, NFC, Jack 3.5mm",
    Resistencia_Agua: "Water-repellent design (salpicaduras)",
    Carga_Rapida: "15W turbo charging",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  },
  {
    title: "Xiaomi Redmi 13C 8GB+256GB Navy Blue",
    price: "139.00 USD",
    quotes: "Sin cuotas",
    url: "https://www.amazon.com/dp/B0CXRED13C",
    Marca: "XIAOMI",
    Modelo: "Redmi 13C",
    Color: "Navy Blue",
    Pantalla: 'IPS LCD de 6.74"',
    Procesador: "MediaTek Helio G85",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5000 mAh",
    Dimensiones: "168.0 x 78.0 x 8.1 mm",
    Peso: "192 g",
    Garant\u00EDa: "6 Meses",
    Sistema_Operativo: "Android 13 (MIUI 14)",
    Camara_Principal: "Triple: 50 MP + 2 MP macro + 0.08 MP lente auxiliar",
    Camara_Frontal: "Single: 8 MP",
    Conectividad: "4G, Wi-Fi 5, Bluetooth 5.3, NFC, Jack 3.5mm, Radio FM",
    Resistencia_Agua: "No especificado",
    Carga_Rapida: "18W Wired PD",
    Nfc: true,
    Tasa_Refresco: "90 Hz"
  },
  {
    title: "OnePlus Nord CE 4 Lite 5G 8+256GB Super Blue",
    price: "269.00 USD",
    quotes: "en 6 cuotas de 44.83 USD",
    url: "https://www.ebay.com/itm/B0CXNORDCE4",
    Marca: "ONEPLUS",
    Modelo: "Nord CE 4 Lite",
    Color: "Super Blue",
    Pantalla: 'AMOLED de 6.67"',
    Procesador: "Snapdragon 695",
    Memoria: "Memoria RAM 8 GB | Almacenamiento 256 GB",
    Bater\u00EDa: "5110 mAh",
    Dimensiones: "162.9 x 75.6 x 8.1 mm",
    Peso: "191 g",
    Garant\u00EDa: "12 Meses",
    Sistema_Operativo: "OxygenOS 14 (Android 14)",
    Camara_Principal: "Dual: 50 MP (Sony LYT-600 OIS) + 2 MP depth",
    Camara_Frontal: "Single: 16 MP",
    Conectividad: "5G, Wi-Fi 5, Bluetooth 5.1, NFC, Jack 3.5mm",
    Resistencia_Agua: "IP54 dust and splash resistant",
    Carga_Rapida: "80W SUPERVOOC Wired (EEUU 55W)",
    Nfc: true,
    Tasa_Refresco: "120 Hz"
  }
];

// server.ts
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  app.get("/api/inventario", (req, res) => {
    let results = [...cellphoneCatalog];
    const { marca, search } = req.query;
    if (marca && typeof marca === "string") {
      const targetMarca = marca.trim().toUpperCase();
      results = results.filter((item) => item.Marca === targetMarca);
    }
    if (search && typeof search === "string") {
      const q = search.trim().toLowerCase();
      results = results.filter(
        (item) => item.title.toLowerCase().includes(q) || item.Modelo.toLowerCase().includes(q) || item.Procesador.toLowerCase().includes(q) || item.Memoria.toLowerCase().includes(q) || item.Sistema_Operativo.toLowerCase().includes(q)
      );
    }
    res.json(results);
  });
  app.get("/api/health", (req, res) => {
    res.json({ status: "online", service: "MarketInsight Inventory API", timestamp: /* @__PURE__ */ new Date() });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[MarketInsight] Servidor activo en puerto ${PORT}`);
  });
}
startServer().catch((err) => {
  console.error("Fallo al iniciar el servidor:", err);
});
//# sourceMappingURL=server.cjs.map
