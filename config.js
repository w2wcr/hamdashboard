const disableSetup = true;
var topBarCenterText = `W2WCR - FN33eh`;

// Grid layout
var layout_cols = 4;
var layout_rows = 3;

// Menu items
// Structure is as follows HTML Color code, Option, target URL, scaling 1=Original Size, side (optional, nothing is Left, "R" is Right)
// The values are [color code, menu text, target link, scale factor, side],
// add new lines following the structure for extra menu options. The comma at the end is important!
var aURL = [
  ["2196F3", "M17-NYS", "https://m17nys.kd2yfy.net:444", "1"],
  ["2196F3", "M17-USA", "https://m17usa.kd2yfy.net", "1"],
  ["2196F3", "YSF-ADK", "https://ysf.kd2yfy.net", "1"],
  ["2196F3", "ADS-B", "https://globe.adsbexchange.com/", "1"],
  ["2196F3", "Winlink", "https://cms.winlink.org:444/maps/propagation.aspx", "1"],
  ["2196F3", "DX CLUSTER", "https://dxcluster.ha8tks.hu/map/", "1"],
  ["2196F3", "CONTEST", "https://www.contestcalendar.com/fivewkcal.html", "1"],
  
//Right Side Menus
  ["2196F3", "TIME.IS", "https://time.is/", "1", "R"],
  ["2196F3", "WEATHER", "https://openweathermap.org/weathermap?basemap=map&cities=true&layer=temperature&lat=44.0157&lon=-79.4591&zoom=5", "1", "R"],
  ["2196F3", "Space Weather Conditions", "https://www.solarham.com/", "1", "R"],
  ["2196F3", "WINDS", "https://earth.nullschool.net/#current/wind/surface/level/orthographic=-78.79,44.09,3000", "1", "R"],
  ["2196F3", "LIGHTNING", "https://map.blitzortung.org/#3.87/36.5/-89.41", "1", "R"],
  ["2196F3", "AIR QUALITY", "https://map.purpleair.com/1/mAQI/a10/p604800/cC0#9.65/43.4007/-73.4936", "1", "R"],
  ["2196F3", "POWER OUTAGE MAP", "https://outagemap.ny.nationalgridus.com/", "1", "R"],
];

// Dashboard items
// Structure is Title, Image Source URL
// [Title, Image Source URL],
// the comma at the end is important!
// You can't add more items because there are only 12 placeholders on the dashboard
// but you can replace the titles and the images with anything you want.
var aIMG = [
  ["RADAR LOCAL/NATIONAL", "https://radar.weather.gov/ridge/standard/KENX_loop.gif", "https://radar.weather.gov/ridge/standard/CONUS_loop.gif"],
  ["USA Forecast / APRS Map", "https://www.wpc.ncep.noaa.gov//noaa/noaa.gif", "https://n2yqt.tourge.net/yaac.png"],
  [
    "NOAA D-RAP/AURORA",
    "https://services.swpc.noaa.gov/images/animations/d-rap/global/d-rap/latest.png", "https://services.swpc.noaa.gov/images/animations/ovation/north/latest.jpg",
  ],
  [
    "ISS & RS-44 POSITION",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=iss&width=600&height=300&mode=M&satid=25544",
    "https://www.heavens-above.com/orbitdisplay.aspx?icon=default&width=600&height=300&mode=M&satid=44909",
  ],
  [
    "SATELLITE NE/US",
    "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/SECTOR/ne/EXTENT3/GOES16-NE-EXTENT3-600x600.gif", "https://cdn.star.nesdis.noaa.gov/GOES16/GLM/CONUS/EXTENT3/GOES16-CONUS-EXTENT3-625x375.gif",
  ],
  [
    "SPC 1/2/3 DAY OUTLOOK",
    "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody1.png", "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody1_TORN.png" , "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody1_WIND.png", "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody1_HAIL.png", 
    "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody2.png", "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody2_TORN.png" , "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody2_WIND.png", "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody2_HAIL.png",
    "https://www.spc.noaa.gov/partners/outlooks/state/images/NY_swody3.png",
  ],
  [
    "LIGHTNING LOCAL/NATIONAL",
    "https://www.blitzortung.org/en/Images/image_b_ny.png", "https://images.lightningmaps.org/blitzortung/america/index.php?animation=usa",
  ],
  [
    "MESONET/NORTHWAY CAMERAS",
    "https://api.nysmesonet.org/cam/index.php/image/nysm/NHUD/1717760735?blur=false&branding=true","https://511ny.org/map/Cctv/6230--18","https://511ny.org/map/Cctv/6229--18","https://511ny.org/map/Cctv/2088--18","https://511ny.org/map/Cctv/2087--18"
  ],
  ["GREY LINE", "https://www.timeanddate.com/scripts/sunmap.php?iso=now"],
  [
    "NHC 2 DAY OUTLOOK",
    "https://www.nhc.noaa.gov/xgtwo/two_atl_2d0.png"
  ],
  ["10M/6M SPORADIC-E", "https://www.tvcomm.co.uk/g7izu/Autosave/NA_ES_AutoSave.JPG"],
  ["HF PROPAGATION",
  "https://www.hamqsl.com/solar101vhf.php",
  "https://www.hamqsl.com/solar100sc.php",
  "https://www.hamqsl.com/solarpich.php"],
];

// Image rotation intervals in milliseconds per tile - If the line below is commented, all tiles will be rotated every 30000 milliseconds (30s)
var tileDelay = [
  8000,5000,5000,5000,
  8000,6000,7000,8000,
  9000,8500,7500,6500
];
