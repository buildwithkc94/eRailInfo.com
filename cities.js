// ══════════════════════════════════════════════════════════════════
// WORLD CLOCK DATA — add new cities here. Each entry needs a valid
// IANA timezone string (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
// ══════════════════════════════════════════════════════════════════

const worldCities = [
  { city: "Zagreb", country: "Croatia",     continent: "Europe", timezone: "Europe/Zagreb", countryCode: "hr" },
  { city: "Zurich", country: "Switzerland", continent: "Europe", timezone: "Europe/Zurich", countryCode: "ch" },
  { city: "Yerevan", country: "Armenia", continent: "Asia", timezone: "Asia/Yerevan", countryCode: "am" },
  // Y
  { city: "Yakutat", country: "USA", continent: "North America", timezone: "America/Yakutat", countryCode: "us" },
  { city: "Yakutsk", country: "Russia", continent: "Asia", timezone: "Asia/Yakutsk", countryCode: "ru" },
  { city: "Yamoussoukro", country: "Cote D'Ivoire", continent: "Africa", timezone: "Africa/Abidjan", countryCode: "ci" },
  { city: "Yangon", country: "Burma", continent: "Asia", timezone: "Asia/Yangon", countryCode: "mm" },
  { city: "Yaounde", country: "Cameroon", continent: "Africa", timezone: "Africa/Douala", countryCode: "cm" },
  { city: "Yekaterinburg", country: "Russia", continent: "Asia", timezone: "Asia/Yekaterinburg", countryCode: "ru" },
  { city: "Yellowknife", country: "Canada", continent: "North America", timezone: "America/Yellowknife", countryCode: "ca" },
  { city: "Yuzhno-Sakhalinsk", country: "Russia", continent: "Asia", timezone: "Asia/Sakhalin", countryCode: "ru" },

// W
  { city: "Waitangi", country: "New Zealand", continent: "Oceania", timezone: "Pacific/Chatham", countryCode: "nz" },
  { city: "Walnut Creek", country: "USA", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
  { city: "Warsaw", country: "Poland", continent: "Europe", timezone: "Europe/Warsaw", countryCode: "pl" },
  { city: "Washington, D.C.", country: "USA", continent: "North America", timezone: "America/New_York", countryCode: "us" },
  { city: "Wellington", country: "New Zealand", continent: "Oceania", timezone: "Pacific/Auckland", countryCode: "nz" },
  { city: "Whitehorse", country: "Canada", continent: "North America", timezone: "America/Whitehorse", countryCode: "ca" },
  { city: "Willemstad", country: "Curacao", continent: "North America", timezone: "America/Curacao", countryCode: "cw" },
  { city: "Winamac", country: "USA", continent: "North America", timezone: "America/Indiana/Winamac", countryCode: "us" },
  { city: "Windhoek", country: "Namibia", continent: "Africa", timezone: "Africa/Windhoek", countryCode: "na" },
  { city: "Winnipeg", country: "Canada", continent: "North America", timezone: "America/Winnipeg", countryCode: "ca" },

// U
  { city: "Ulaanbaatar", country: "Mongolia", continent: "Asia", timezone: "Asia/Ulaanbaatar", countryCode: "mn" },
  { city: "Urumqi", country: "China", continent: "Asia", timezone: "Asia/Urumqi", countryCode: "cn" },
  { city: "Ushuaia", country: "Argentina", continent: "South America", timezone: "America/Argentina/Ushuaia", countryCode: "ar" },
  { city: "UTC", country: "-", continent: "-", timezone: "Etc/UTC", countryCode: "" },

// Q
  { city: "Qingdao", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
  { city: "Quebec City", country: "Canada", continent: "North America", timezone: "America/Toronto", countryCode: "ca" },
  { city: "Queretaro", country: "Mexico", continent: "North America", timezone: "America/Mexico_City", countryCode: "mx" },
  { city: "Quito", country: "Ecuador", continent: "South America", timezone: "America/Guayaquil", countryCode: "ec" },
];
