const express = require("express");
const fs = require("fs");
const csv = require("csv-parser");
const path = require("path");

const router = express.Router();

let storedData = [];

const loadCsvFile = "../public/live.csv";

router.get("/", async (req, res) => {
  res.send("Server is Running Successfully!!.");
});

router.get("/api/getTrainData", async (req, res) => {
  res.status(200).json({ message: "true", data: storedData });
});

router.post("/api/postModelData", async (req, res) => {
  storedData = [];
  console.log("bodybodybody", req.body);
  const { values } = req.body;
  console.log("valuesvalues", values);
  storedData.push(values);

  res.status(200).json({ message: true, data: values });
});

router.get("/api/loadcsv", async (req, res) => {
  try {
    const data = [];
    const averages = {};
    const sums = {};
    const counts = {};

    const columnsToAverage = [
      {
        name: "CONTROL_MODULE_VOLTAGE ()",
        avgNo: 0,
      },
      {
        name: "ENGINE_RPM ()",
        avgNo: 0,
      },
      {
        name: "VEHICLE_SPEED ()",
        avgNo: 0,
      },
      {
        name: "FUEL_TANK ()",
        avgNo: 0,
      },
      {
        name: "LONG_TERM_FUEL_TRIM_BANK_1 ()",
        avgNo: 0,
      },
    ];

    const absolutePath = path.join(__dirname, loadCsvFile);

    columnsToAverage.forEach((item) => {
      sums[item.name] = 0;
      counts[item.name] = 0;
    });

    fs.createReadStream(absolutePath)
      .pipe(csv())
      .on("data", (row) => {
        columnsToAverage.forEach((item) => {
          if (item.name in row) {
            const getColumnValues = parseFloat(row[item.name]);

            if (!isNaN(getColumnValues)) {
              sums[item.name] += getColumnValues;

              counts[item.name]++;
            }
          }
        });

        data.push(row);
      })
      .on("end", () => {
        columnsToAverage.forEach((item) => {
          const average =
            counts[item.name] === 0 ? 0 : sums[item.name] / counts[item.name];
          averages[item.name] = Number(average.toFixed(2));
        });

        res.status(200).json({ message: true, averageData: averages });
      });
  } catch (error) {
    console.error("Error loading CSV:", error);
    res.status(500).json({ message: false, error: "Internal Server Error" });
  }
});

module.exports = router;
