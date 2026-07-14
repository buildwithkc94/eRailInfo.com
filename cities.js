// ══════════════════════════════════════════════════════════════════
// WORLD CLOCK DATA — add new cities here. Each entry needs a valid
// IANA timezone string (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
// ══════════════════════════════════════════════════════════════════

const worldCities = [
 
  // A

{ city: "Abidjan", country: "Côte d'Ivoire", continent: "Africa", timezone: "Africa/Abidjan", countryCode: "ci" },
{ city: "Abu Dhabi", country: "United Arab Emirates", continent: "Asia", timezone: "Asia/Dubai", countryCode: "ae" },
{ city: "Abuja", country: "Nigeria", continent: "Africa", timezone: "Africa/Lagos", countryCode: "ng" },
{ city: "Accra", country: "Ghana", continent: "Africa", timezone: "Africa/Accra", countryCode: "gh" },
{ city: "Addis Ababa", country: "Ethiopia", continent: "Africa", timezone: "Africa/Addis_Ababa", countryCode: "et" },
{ city: "Adelaide", country: "Australia", continent: "Oceania", timezone: "Australia/Adelaide", countryCode: "au" },
{ city: "Ahmedabad", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Algiers", country: "Algeria", continent: "Africa", timezone: "Africa/Algiers", countryCode: "dz" },
{ city: "Almaty", country: "Kazakhstan", continent: "Asia", timezone: "Asia/Almaty", countryCode: "kz" },
{ city: "Amman", country: "Jordan", continent: "Asia", timezone: "Asia/Amman", countryCode: "jo" },
{ city: "Amsterdam", country: "Netherlands", continent: "Europe", timezone: "Europe/Amsterdam", countryCode: "nl" },
{ city: "Anchorage", country: "United States", continent: "North America", timezone: "America/Anchorage", countryCode: "us" },
{ city: "Ankara", country: "Türkiye", continent: "Asia", timezone: "Europe/Istanbul", countryCode: "tr" },
{ city: "Antananarivo", country: "Madagascar", continent: "Africa", timezone: "Indian/Antananarivo", countryCode: "mg" },
{ city: "Antwerp", country: "Belgium", continent: "Europe", timezone: "Europe/Brussels", countryCode: "be" },
{ city: "Athens", country: "Greece", continent: "Europe", timezone: "Europe/Athens", countryCode: "gr" },
{ city: "Atlanta", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Auckland", country: "New Zealand", continent: "Oceania", timezone: "Pacific/Auckland", countryCode: "nz" },
{ city: "Austin", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },

// B

{ city: "Baghdad", country: "Iraq", continent: "Asia", timezone: "Asia/Baghdad", countryCode: "iq" },
{ city: "Baku", country: "Azerbaijan", continent: "Asia", timezone: "Asia/Baku", countryCode: "az" },
{ city: "Baltimore", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Bamako", country: "Mali", continent: "Africa", timezone: "Africa/Bamako", countryCode: "ml" },
{ city: "Bandung", country: "Indonesia", continent: "Asia", timezone: "Asia/Jakarta", countryCode: "id" },
{ city: "Bangalore", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Bangkok", country: "Thailand", continent: "Asia", timezone: "Asia/Bangkok", countryCode: "th" },
{ city: "Barcelona", country: "Spain", continent: "Europe", timezone: "Europe/Madrid", countryCode: "es" },
{ city: "Basel", country: "Switzerland", continent: "Europe", timezone: "Europe/Zurich", countryCode: "ch" },
{ city: "Beijing", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Beirut", country: "Lebanon", continent: "Asia", timezone: "Asia/Beirut", countryCode: "lb" },
{ city: "Belgrade", country: "Serbia", continent: "Europe", timezone: "Europe/Belgrade", countryCode: "rs" },
{ city: "Belo Horizonte", country: "Brazil", continent: "South America", timezone: "America/Sao_Paulo", countryCode: "br" },
{ city: "Berlin", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Birmingham", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Bogotá", country: "Colombia", continent: "South America", timezone: "America/Bogota", countryCode: "co" },
{ city: "Boston", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Brasília", country: "Brazil", continent: "South America", timezone: "America/Sao_Paulo", countryCode: "br" },
{ city: "Bratislava", country: "Slovakia", continent: "Europe", timezone: "Europe/Bratislava", countryCode: "sk" },
{ city: "Brisbane", country: "Australia", continent: "Oceania", timezone: "Australia/Brisbane", countryCode: "au" },
{ city: "Brussels", country: "Belgium", continent: "Europe", timezone: "Europe/Brussels", countryCode: "be" },
{ city: "Bucharest", country: "Romania", continent: "Europe", timezone: "Europe/Bucharest", countryCode: "ro" },
{ city: "Budapest", country: "Hungary", continent: "Europe", timezone: "Europe/Budapest", countryCode: "hu" },
{ city: "Buenos Aires", country: "Argentina", continent: "South America", timezone: "America/Argentina/Buenos_Aires", countryCode: "ar" },
{ city: "Busan", country: "South Korea", continent: "Asia", timezone: "Asia/Seoul", countryCode: "kr" },

// C

{ city: "Cairo", country: "Egypt", continent: "Africa", timezone: "Africa/Cairo", countryCode: "eg" },
{ city: "Calgary", country: "Canada", continent: "North America", timezone: "America/Edmonton", countryCode: "ca" },
{ city: "Calicut", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Canberra", country: "Australia", continent: "Oceania", timezone: "Australia/Sydney", countryCode: "au" },
{ city: "Cape Town", country: "South Africa", continent: "Africa", timezone: "Africa/Johannesburg", countryCode: "za" },
{ city: "Caracas", country: "Venezuela", continent: "South America", timezone: "America/Caracas", countryCode: "ve" },
{ city: "Cardiff", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Casablanca", country: "Morocco", continent: "Africa", timezone: "Africa/Casablanca", countryCode: "ma" },
{ city: "Chandigarh", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Chengdu", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Chennai", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Chicago", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "Chisinau", country: "Moldova", continent: "Europe", timezone: "Europe/Chisinau", countryCode: "md" },
{ city: "Chittagong", country: "Bangladesh", continent: "Asia", timezone: "Asia/Dhaka", countryCode: "bd" },
{ city: "Christchurch", country: "New Zealand", continent: "Oceania", timezone: "Pacific/Auckland", countryCode: "nz" },
{ city: "Cincinnati", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Cleveland", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Cologne", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Colombo", country: "Sri Lanka", continent: "Asia", timezone: "Asia/Colombo", countryCode: "lk" },
{ city: "Columbus", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Copenhagen", country: "Denmark", continent: "Europe", timezone: "Europe/Copenhagen", countryCode: "dk" },
{ city: "Curitiba", country: "Brazil", continent: "South America", timezone: "America/Sao_Paulo", countryCode: "br" },
  // Y
{ city: "Yakutat", country: "USA", continent: "North America", timezone: "America/Yakutat", countryCode: "us" },
{ city: "Yakutsk", country: "Russia", continent: "Asia", timezone: "Asia/Yakutsk", countryCode: "ru" },
{ city: "Yamoussoukro", country: "Cote D'Ivoire", continent: "Africa", timezone: "Africa/Abidjan", countryCode: "ci" },
{ city: "Yangon", country: "Burma", continent: "Asia", timezone: "Asia/Yangon", countryCode: "mm" },
{ city: "Yaounde", country: "Cameroon", continent: "Africa", timezone: "Africa/Douala", countryCode: "cm" },
{ city: "Yekaterinburg", country: "Russia", continent: "Asia", timezone: "Asia/Yekaterinburg", countryCode: "ru" },
{ city: "Yellowknife", country: "Canada", continent: "North America", timezone: "America/Yellowknife", countryCode: "ca" },
{ city: "Yuzhno-Sakhalinsk", country: "Russia", continent: "Asia", timezone: "Asia/Sakhalin", countryCode: "ru" },
{ city: "Yerevan", country: "Armenia", continent: "Asia", timezone: "Asia/Yerevan", countryCode: "am" },

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

  // Z
{ city: "Zagreb", country: "Croatia",     continent: "Europe", timezone: "Europe/Zagreb", countryCode: "hr" },
{ city: "Zurich", country: "Switzerland", continent: "Europe", timezone: "Europe/Zurich", countryCode: "ch" },

];
