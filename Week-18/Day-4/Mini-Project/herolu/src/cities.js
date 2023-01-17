
export const cities = [ {
    "Version": 1,
    "Key": "213230",
    "Type": "City",
    "Rank": 55,
    "LocalizedName": "Bet Shemesh",
    "EnglishName": "Bet Shemesh",
    "PrimaryPostalCode": "",
    "Region": {
      "ID": "MEA",
      "LocalizedName": "Middle East",
      "EnglishName": "Middle East"
    },
    "Country": {
      "ID": "IL",
      "LocalizedName": "Israel",
      "EnglishName": "Israel"
    },
    "AdministrativeArea": {
      "ID": "JM",
      "LocalizedName": "Jerusalem",
      "EnglishName": "Jerusalem",
      "Level": 1,
      "LocalizedType": "District",
      "EnglishType": "District",
      "CountryID": "IL"
    },
    "TimeZone": {
      "Code": "IST",
      "Name": "Asia/Jerusalem",
      "GmtOffset": 2,
      "IsDaylightSaving": false,
      "NextOffsetChange": "2023-03-24T00:00:00Z"
    },
    "GeoPosition": {
      "Latitude": 31.75,
      "Longitude": 35,
      "Elevation": {
        "Metric": {
          "Value": 331,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 1085,
          "Unit": "ft",
          "UnitType": 0
        }
      }
    },
    "IsAlias": false,
    "SupplementalAdminAreas": [],
    "DataSets": [
      "AirQualityCurrentConditions",
      "AirQualityForecasts",
      "Alerts",
      "DailyPollenForecast",
      "ForecastConfidence",
      "FutureRadar",
      "MinuteCast"
    ]
  },
  
  {
        "Version": 1,
        "Key": "55488",
        "Type": "City",
        "Rank": 21,
        "LocalizedName": "Toronto",
        "EnglishName": "Toronto",
        "PrimaryPostalCode": "M5H",
        "Region": {
          "ID": "NAM",
          "LocalizedName": "North America",
          "EnglishName": "North America"
        },
        "Country": {
          "ID": "CA",
          "LocalizedName": "Canada",
          "EnglishName": "Canada"
        },
        "AdministrativeArea": {
          "ID": "ON",
          "LocalizedName": "Ontario",
          "EnglishName": "Ontario",
          "Level": 1,
          "LocalizedType": "Province",
          "EnglishType": "Province",
          "CountryID": "CA"
        },
        "TimeZone": {
          "Code": "EDT",
          "Name": "America/Toronto",
          "GmtOffset": -4,
          "IsDaylightSaving": true,
          "NextOffsetChange": "2022-11-06T06:00:00Z"
        },
        "GeoPosition": {
          "Latitude": 43.649,
          "Longitude": -79.38,
          "Elevation": {
            "Metric": {
              "Value": 81,
              "Unit": "m",
              "UnitType": 5
            },
            "Imperial": {
              "Value": 265,
              "Unit": "ft",
              "UnitType": 0
            }
          }
        },
        "IsAlias": false,
        "SupplementalAdminAreas": [
          {
            "Level": 2,
            "LocalizedName": "Toronto",
            "EnglishName": "Toronto"
          }
        ],
        "DataSets": [
          "AirQualityCurrentConditions",
          "AirQualityForecasts",
          "Alerts",
          "ForecastConfidence",
          "FutureRadar",
          "MinuteCast",
          "Radar"
        ]
  },
  {
      "Version": 1,
      "Key": "215854",
      "Type": "City",
      "Rank": 31,
      "LocalizedName": "Tel Aviv",
      "EnglishName": "Tel Aviv",
      "PrimaryPostalCode": "",
      "Region": {
        "ID": "MEA",
        "LocalizedName": "Middle East",
        "EnglishName": "Middle East"
      },
      "Country": {
        "ID": "IL",
        "LocalizedName": "Israel",
        "EnglishName": "Israel"
      },
      "AdministrativeArea": {
        "ID": "TA",
        "LocalizedName": "Tel Aviv",
        "EnglishName": "Tel Aviv",
        "Level": 1,
        "LocalizedType": "District",
        "EnglishType": "District",
        "CountryID": "IL"
      },
      "TimeZone": {
        "Code": "IST",
        "Name": "Asia/Jerusalem",
        "GmtOffset": 2,
        "IsDaylightSaving": false,
        "NextOffsetChange": "2023-03-24T00:00:00Z"
      },
      "GeoPosition": {
        "Latitude": 32.045,
        "Longitude": 34.77,
        "Elevation": {
          "Metric": {
            "Value": 34,
            "Unit": "m",
            "UnitType": 5
          },
          "Imperial": {
            "Value": 111,
            "Unit": "ft",
            "UnitType": 0
          }
        }
      },
      "IsAlias": false,
      "SupplementalAdminAreas": [],
      "DataSets": [
        "AirQualityCurrentConditions",
        "AirQualityForecasts",
        "Alerts",
        "DailyPollenForecast",
        "ForecastConfidence",
        "FutureRadar",
        "MinuteCast"
      ]
  }]

  export const weather = [
    {
        "Headline": {
          "EffectiveDate": "2022-11-05T07:00:00+02:00",
          "EffectiveEpochDate": 1667624400,
          "Severity": 4,
          "Text": "Pleasant this weekend",
          "Category": "mild",
          "EndDate": null,
          "EndEpochDate": null,
          "MobileLink": "http://www.accuweather.com/en/il/bet-shemesh/213230/daily-weather-forecast/213230?lang=en-us",
          "Link": "http://www.accuweather.com/en/il/bet-shemesh/213230/daily-weather-forecast/213230?lang=en-us"
        },
        "DailyForecasts": [
          {
            "Date": "2022-11-02T07:00:00+02:00",
            "EpochDate": 1667365200,
            "Temperature": {
              "Minimum": {
                "Value": 53,
                "Unit": "F",
                "UnitType": 18
              },
              "Maximum": {
                "Value": 72,
                "Unit": "F",
                "UnitType": 18
              }
            },
            "Day": {
              "Icon": 2,
              "IconPhrase": "Mostly sunny",
              "HasPrecipitation": false
            },
            "Night": {
              "Icon": 33,
              "IconPhrase": "Clear",
              "HasPrecipitation": false
            },
            "Sources": [
              "AccuWeather"
            ],
            "MobileLink": "http://www.accuweather.com/en/il/bet-shemesh/213230/daily-weather-forecast/213230?day=1&lang=en-us",
            "Link": "http://www.accuweather.com/en/il/bet-shemesh/213230/daily-weather-forecast/213230?day=1&lang=en-us"
          }
        ]
      }
  ]


