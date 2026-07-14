// ══════════════════════════════════════════════════════════════════
// WORLD CLOCK DATA — add new cities here. Each entry needs a valid
// IANA timezone string (see: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
// ══════════════════════════════════════════════════════════════════
// ═══════════════════════════════════════════════
// TOP AIRPORTS — shown above the alphabetical list
// ═══════════════════════════════════════════════
const topAirports = [
  { code: "ATL", city: "Atlanta",   country: "USA",           continent: "North America", timezone: "America/New_York", countryCode: "us" },
  { code: "DXB", city: "Dubai",     country: "UAE",           continent: "Asia",          timezone: "Asia/Dubai",       countryCode: "ae" },
  { code: "HND", city: "Tokyo",     country: "Japan",         continent: "Asia",          timezone: "Asia/Tokyo",       countryCode: "jp" },
  { code: "DFW", city: "Dallas",    country: "USA",           continent: "North America", timezone: "America/Chicago",  countryCode: "us" },
  { code: "PVG", city: "Shanghai",  country: "China",         continent: "Asia",          timezone: "Asia/Shanghai",    countryCode: "cn" },
  { code: "ORD", city: "Chicago",   country: "USA",           continent: "North America", timezone: "America/Chicago",  countryCode: "us" },
  { code: "LHR", city: "London",    country: "UK",            continent: "Europe",        timezone: "Europe/London",    countryCode: "gb" },
  { code: "IST", city: "Istanbul",  country: "Turkey",        continent: "Europe",        timezone: "Europe/Istanbul",  countryCode: "tr" },
  { code: "CAN", city: "Guangzhou", country: "China",         continent: "Asia",          timezone: "Asia/Shanghai",    countryCode: "cn" },
  { code: "DEN", city: "Denver",    country: "USA",           continent: "North America", timezone: "America/Denver",   countryCode: "us" },
];

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

// D

{ city: "Dallas", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "Dar es Salaam", country: "Tanzania", continent: "Africa", timezone: "Africa/Dar_es_Salaam", countryCode: "tz" },
{ city: "Darwin", country: "Australia", continent: "Oceania", timezone: "Australia/Darwin", countryCode: "au" },
{ city: "Dhaka", country: "Bangladesh", continent: "Asia", timezone: "Asia/Dhaka", countryCode: "bd" },
{ city: "Doha", country: "Qatar", continent: "Asia", timezone: "Asia/Qatar", countryCode: "qa" },
{ city: "Dubai", country: "United Arab Emirates", continent: "Asia", timezone: "Asia/Dubai", countryCode: "ae" },
{ city: "Dublin", country: "Ireland", continent: "Europe", timezone: "Europe/Dublin", countryCode: "ie" },
{ city: "Düsseldorf", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Durban", country: "South Africa", continent: "Africa", timezone: "Africa/Johannesburg", countryCode: "za" },
{ city: "Dushanbe", country: "Tajikistan", continent: "Asia", timezone: "Asia/Dushanbe", countryCode: "tj" },

// E

{ city: "Edinburgh", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Edmonton", country: "Canada", continent: "North America", timezone: "America/Edmonton", countryCode: "ca" },
{ city: "Eindhoven", country: "Netherlands", continent: "Europe", timezone: "Europe/Amsterdam", countryCode: "nl" },
{ city: "El Paso", country: "United States", continent: "North America", timezone: "America/Denver", countryCode: "us" },
{ city: "Entebbe", country: "Uganda", continent: "Africa", timezone: "Africa/Kampala", countryCode: "ug" },
{ city: "Erbil", country: "Iraq", continent: "Asia", timezone: "Asia/Baghdad", countryCode: "iq" },
{ city: "Esfahan", country: "Iran", continent: "Asia", timezone: "Asia/Tehran", countryCode: "ir" },
{ city: "Essen", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Evansville", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },

// F

{ city: "Faisalabad", country: "Pakistan", continent: "Asia", timezone: "Asia/Karachi", countryCode: "pk" },
{ city: "Fes", country: "Morocco", continent: "Africa", timezone: "Africa/Casablanca", countryCode: "ma" },
{ city: "Florence", country: "Italy", continent: "Europe", timezone: "Europe/Rome", countryCode: "it" },
{ city: "Fort Lauderdale", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Fort Worth", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "Frankfurt", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Fukuoka", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },

// G

{ city: "Gaborone", country: "Botswana", continent: "Africa", timezone: "Africa/Gaborone", countryCode: "bw" },
{ city: "Geneva", country: "Switzerland", continent: "Europe", timezone: "Europe/Zurich", countryCode: "ch" },
{ city: "Georgetown", country: "Guyana", continent: "South America", timezone: "America/Guyana", countryCode: "gy" },
{ city: "Glasgow", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Guadalajara", country: "Mexico", continent: "North America", timezone: "America/Mexico_City", countryCode: "mx" },
{ city: "Guangzhou", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Guatemala City", country: "Guatemala", continent: "North America", timezone: "America/Guatemala", countryCode: "gt" },
{ city: "Guwahati", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Gothenburg", country: "Sweden", continent: "Europe", timezone: "Europe/Stockholm", countryCode: "se" },

// H

{ city: "Hamburg", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Hanoi", country: "Vietnam", continent: "Asia", timezone: "Asia/Bangkok", countryCode: "vn" },
{ city: "Harare", country: "Zimbabwe", continent: "Africa", timezone: "Africa/Harare", countryCode: "zw" },
{ city: "Havana", country: "Cuba", continent: "North America", timezone: "America/Havana", countryCode: "cu" },
{ city: "Helsinki", country: "Finland", continent: "Europe", timezone: "Europe/Helsinki", countryCode: "fi" },
{ city: "Hiroshima", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },
{ city: "Ho Chi Minh City", country: "Vietnam", continent: "Asia", timezone: "Asia/Ho_Chi_Minh", countryCode: "vn" },
{ city: "Hong Kong", country: "Hong Kong", continent: "Asia", timezone: "Asia/Hong_Kong", countryCode: "hk" },
{ city: "Honolulu", country: "United States", continent: "North America", timezone: "Pacific/Honolulu", countryCode: "us" },
{ city: "Houston", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "Hyderabad", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },

// I

{ city: "Ibadan", country: "Nigeria", continent: "Africa", timezone: "Africa/Lagos", countryCode: "ng" },
{ city: "Incheon", country: "South Korea", continent: "Asia", timezone: "Asia/Seoul", countryCode: "kr" },
{ city: "Indianapolis", country: "United States", continent: "North America", timezone: "America/Indiana/Indianapolis", countryCode: "us" },
{ city: "Islamabad", country: "Pakistan", continent: "Asia", timezone: "Asia/Karachi", countryCode: "pk" },
{ city: "Istanbul", country: "Türkiye", continent: "Europe/Asia", timezone: "Europe/Istanbul", countryCode: "tr" },
{ city: "Izmir", country: "Türkiye", continent: "Europe/Asia", timezone: "Europe/Istanbul", countryCode: "tr" },

// J

{ city: "Jaipur", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Jakarta", country: "Indonesia", continent: "Asia", timezone: "Asia/Jakarta", countryCode: "id" },
{ city: "Jeddah", country: "Saudi Arabia", continent: "Asia", timezone: "Asia/Riyadh", countryCode: "sa" },
{ city: "Jerusalem", country: "Israel", continent: "Asia", timezone: "Asia/Jerusalem", countryCode: "il" },
{ city: "Johannesburg", country: "South Africa", continent: "Africa", timezone: "Africa/Johannesburg", countryCode: "za" },
{ city: "Johor Bahru", country: "Malaysia", continent: "Asia", timezone: "Asia/Kuala_Lumpur", countryCode: "my" },
{ city: "Juba", country: "South Sudan", continent: "Africa", timezone: "Africa/Juba", countryCode: "ss" },

// K

{ city: "Kabul", country: "Afghanistan", continent: "Asia", timezone: "Asia/Kabul", countryCode: "af" },
{ city: "Kampala", country: "Uganda", continent: "Africa", timezone: "Africa/Kampala", countryCode: "ug" },
{ city: "Karachi", country: "Pakistan", continent: "Asia", timezone: "Asia/Karachi", countryCode: "pk" },
{ city: "Kathmandu", country: "Nepal", continent: "Asia", timezone: "Asia/Kathmandu", countryCode: "np" },
{ city: "Kansas City", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "Kawasaki", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },
{ city: "Kharkiv", country: "Ukraine", continent: "Europe", timezone: "Europe/Kyiv", countryCode: "ua" },
{ city: "Khartoum", country: "Sudan", continent: "Africa", timezone: "Africa/Khartoum", countryCode: "sd" },
{ city: "Kigali", country: "Rwanda", continent: "Africa", timezone: "Africa/Kigali", countryCode: "rw" },
{ city: "Kingston", country: "Jamaica", continent: "North America", timezone: "America/Jamaica", countryCode: "jm" },
{ city: "Kinshasa", country: "Democratic Republic of the Congo", continent: "Africa", timezone: "Africa/Kinshasa", countryCode: "cd" },
{ city: "Kobe", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },
{ city: "Kolkata", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Kuala Lumpur", country: "Malaysia", continent: "Asia", timezone: "Asia/Kuala_Lumpur", countryCode: "my" },
{ city: "Kuwait City", country: "Kuwait", continent: "Asia", timezone: "Asia/Kuwait", countryCode: "kw" },
{ city: "Kyiv", country: "Ukraine", continent: "Europe", timezone: "Europe/Kyiv", countryCode: "ua" },
{ city: "Kyoto", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },

// L

{ city: "Lagos", country: "Nigeria", continent: "Africa", timezone: "Africa/Lagos", countryCode: "ng" },
{ city: "Lahore", country: "Pakistan", continent: "Asia", timezone: "Asia/Karachi", countryCode: "pk" },
{ city: "Las Vegas", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "Leeds", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Lima", country: "Peru", continent: "South America", timezone: "America/Lima", countryCode: "pe" },
{ city: "Lisbon", country: "Portugal", continent: "Europe", timezone: "Europe/Lisbon", countryCode: "pt" },
{ city: "Ljubljana", country: "Slovenia", continent: "Europe", timezone: "Europe/Ljubljana", countryCode: "si" },
{ city: "London", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Los Angeles", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "Luanda", country: "Angola", continent: "Africa", timezone: "Africa/Luanda", countryCode: "ao" },
{ city: "Lucknow", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Luxembourg", country: "Luxembourg", continent: "Europe", timezone: "Europe/Luxembourg", countryCode: "lu" },

// M

{ city: "Madrid", country: "Spain", continent: "Europe", timezone: "Europe/Madrid", countryCode: "es" },
{ city: "Managua", country: "Nicaragua", continent: "North America", timezone: "America/Managua", countryCode: "ni" },
{ city: "Manama", country: "Bahrain", continent: "Asia", timezone: "Asia/Bahrain", countryCode: "bh" },
{ city: "Manchester", country: "United Kingdom", continent: "Europe", timezone: "Europe/London", countryCode: "gb" },
{ city: "Manila", country: "Philippines", continent: "Asia", timezone: "Asia/Manila", countryCode: "ph" },
{ city: "Marrakesh", country: "Morocco", continent: "Africa", timezone: "Africa/Casablanca", countryCode: "ma" },
{ city: "Marseille", country: "France", continent: "Europe", timezone: "Europe/Paris", countryCode: "fr" },
{ city: "Melbourne", country: "Australia", continent: "Oceania", timezone: "Australia/Melbourne", countryCode: "au" },
{ city: "Mexico City", country: "Mexico", continent: "North America", timezone: "America/Mexico_City", countryCode: "mx" },
{ city: "Miami", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Milan", country: "Italy", continent: "Europe", timezone: "Europe/Rome", countryCode: "it" },
{ city: "Minneapolis", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "Minsk", country: "Belarus", continent: "Europe", timezone: "Europe/Minsk", countryCode: "by" },
{ city: "Mogadishu", country: "Somalia", continent: "Africa", timezone: "Africa/Mogadishu", countryCode: "so" },
{ city: "Monaco", country: "Monaco", continent: "Europe", timezone: "Europe/Monaco", countryCode: "mc" },
{ city: "Monterrey", country: "Mexico", continent: "North America", timezone: "America/Monterrey", countryCode: "mx" },
{ city: "Montreal", country: "Canada", continent: "North America", timezone: "America/Toronto", countryCode: "ca" },
{ city: "Moscow", country: "Russia", continent: "Europe/Asia", timezone: "Europe/Moscow", countryCode: "ru" },
{ city: "Mumbai", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "Munich", country: "Germany", continent: "Europe", timezone: "Europe/Berlin", countryCode: "de" },
{ city: "Muscat", country: "Oman", continent: "Asia", timezone: "Asia/Muscat", countryCode: "om" },

// N

{ city: "Nagoya", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },
{ city: "Nairobi", country: "Kenya", continent: "Africa", timezone: "Africa/Nairobi", countryCode: "ke" },
{ city: "Nanjing", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Naples", country: "Italy", continent: "Europe", timezone: "Europe/Rome", countryCode: "it" },
{ city: "Nashville", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "New Delhi", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },
{ city: "New Orleans", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "New York", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Nice", country: "France", continent: "Europe", timezone: "Europe/Paris", countryCode: "fr" },
{ city: "Nicosia", country: "Cyprus", continent: "Europe", timezone: "Asia/Nicosia", countryCode: "cy" },
{ city: "Novosibirsk", country: "Russia", continent: "Asia", timezone: "Asia/Novosibirsk", countryCode: "ru" },

// O

{ city: "Osaka", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },
{ city: "Oslo", country: "Norway", continent: "Europe", timezone: "Europe/Oslo", countryCode: "no" },
{ city: "Ottawa", country: "Canada", continent: "North America", timezone: "America/Toronto", countryCode: "ca" },
{ city: "Ouagadougou", country: "Burkina Faso", continent: "Africa", timezone: "Africa/Ouagadougou", countryCode: "bf" },

// P

{ city: "Panama City", country: "Panama", continent: "North America", timezone: "America/Panama", countryCode: "pa" },
{ city: "Paris", country: "France", continent: "Europe", timezone: "Europe/Paris", countryCode: "fr" },
{ city: "Perth", country: "Australia", continent: "Oceania", timezone: "Australia/Perth", countryCode: "au" },
{ city: "Philadelphia", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Phnom Penh", country: "Cambodia", continent: "Asia", timezone: "Asia/Phnom_Penh", countryCode: "kh" },
{ city: "Phoenix", country: "United States", continent: "North America", timezone: "America/Phoenix", countryCode: "us" },
{ city: "Podgorica", country: "Montenegro", continent: "Europe", timezone: "Europe/Podgorica", countryCode: "me" },
{ city: "Port Louis", country: "Mauritius", continent: "Africa", timezone: "Indian/Mauritius", countryCode: "mu" },
{ city: "Port Moresby", country: "Papua New Guinea", continent: "Oceania", timezone: "Pacific/Port_Moresby", countryCode: "pg" },
{ city: "Portland", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "Prague", country: "Czech Republic", continent: "Europe", timezone: "Europe/Prague", countryCode: "cz" },
{ city: "Pune", country: "India", continent: "Asia", timezone: "Asia/Kolkata", countryCode: "in" },

// Q
{ city: "Qingdao", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Quebec City", country: "Canada", continent: "North America", timezone: "America/Toronto", countryCode: "ca" },
{ city: "Queretaro", country: "Mexico", continent: "North America", timezone: "America/Mexico_City", countryCode: "mx" },
{ city: "Quito", country: "Ecuador", continent: "South America", timezone: "America/Guayaquil", countryCode: "ec" },
 
// R

{ city: "Rabat", country: "Morocco", continent: "Africa", timezone: "Africa/Casablanca", countryCode: "ma" },
{ city: "Raleigh", country: "United States", continent: "North America", timezone: "America/New_York", countryCode: "us" },
{ city: "Reykjavik", country: "Iceland", continent: "Europe", timezone: "Atlantic/Reykjavik", countryCode: "is" },
{ city: "Riga", country: "Latvia", continent: "Europe", timezone: "Europe/Riga", countryCode: "lv" },
{ city: "Rio de Janeiro", country: "Brazil", continent: "South America", timezone: "America/Sao_Paulo", countryCode: "br" },
{ city: "Riyadh", country: "Saudi Arabia", continent: "Asia", timezone: "Asia/Riyadh", countryCode: "sa" },
{ city: "Rome", country: "Italy", continent: "Europe", timezone: "Europe/Rome", countryCode: "it" },
{ city: "Rotterdam", country: "Netherlands", continent: "Europe", timezone: "Europe/Amsterdam", countryCode: "nl" },

// S

{ city: "Sacramento", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "Saint Petersburg", country: "Russia", continent: "Europe", timezone: "Europe/Moscow", countryCode: "ru" },
{ city: "San Antonio", country: "United States", continent: "North America", timezone: "America/Chicago", countryCode: "us" },
{ city: "San Diego", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "San Francisco", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "San José", country: "Costa Rica", continent: "North America", timezone: "America/Costa_Rica", countryCode: "cr" },
{ city: "San Salvador", country: "El Salvador", continent: "North America", timezone: "America/El_Salvador", countryCode: "sv" },
{ city: "Santiago", country: "Chile", continent: "South America", timezone: "America/Santiago", countryCode: "cl" },
{ city: "Santo Domingo", country: "Dominican Republic", continent: "North America", timezone: "America/Santo_Domingo", countryCode: "do" },
{ city: "São Paulo", country: "Brazil", continent: "South America", timezone: "America/Sao_Paulo", countryCode: "br" },
{ city: "Seattle", country: "United States", continent: "North America", timezone: "America/Los_Angeles", countryCode: "us" },
{ city: "Seoul", country: "South Korea", continent: "Asia", timezone: "Asia/Seoul", countryCode: "kr" },
{ city: "Shanghai", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Singapore", country: "Singapore", continent: "Asia", timezone: "Asia/Singapore", countryCode: "sg" },
{ city: "Sofia", country: "Bulgaria", continent: "Europe", timezone: "Europe/Sofia", countryCode: "bg" },
{ city: "Stockholm", country: "Sweden", continent: "Europe", timezone: "Europe/Stockholm", countryCode: "se" },
{ city: "Surabaya", country: "Indonesia", continent: "Asia", timezone: "Asia/Jakarta", countryCode: "id" },
{ city: "Sydney", country: "Australia", continent: "Oceania", timezone: "Australia/Sydney", countryCode: "au" },

// T

{ city: "Taipei", country: "Taiwan", continent: "Asia", timezone: "Asia/Taipei", countryCode: "tw" },
{ city: "Tallinn", country: "Estonia", continent: "Europe", timezone: "Europe/Tallinn", countryCode: "ee" },
{ city: "Tashkent", country: "Uzbekistan", continent: "Asia", timezone: "Asia/Tashkent", countryCode: "uz" },
{ city: "Tbilisi", country: "Georgia", continent: "Asia", timezone: "Asia/Tbilisi", countryCode: "ge" },
{ city: "Tehran", country: "Iran", continent: "Asia", timezone: "Asia/Tehran", countryCode: "ir" },
{ city: "Tel Aviv", country: "Israel", continent: "Asia", timezone: "Asia/Tel_Aviv", countryCode: "il" },
{ city: "Thimphu", country: "Bhutan", continent: "Asia", timezone: "Asia/Thimphu", countryCode: "bt" },
{ city: "Tokyo", country: "Japan", continent: "Asia", timezone: "Asia/Tokyo", countryCode: "jp" },
{ city: "Toronto", country: "Canada", continent: "North America", timezone: "America/Toronto", countryCode: "ca" },
{ city: "Tripoli", country: "Libya", continent: "Africa", timezone: "Africa/Tripoli", countryCode: "ly" },
{ city: "Tunis", country: "Tunisia", continent: "Africa", timezone: "Africa/Tunis", countryCode: "tn" },
{ city: "Turin", country: "Italy", continent: "Europe", timezone: "Europe/Rome", countryCode: "it" },

// U
{ city: "Ulaanbaatar", country: "Mongolia", continent: "Asia", timezone: "Asia/Ulaanbaatar", countryCode: "mn" },
{ city: "Urumqi", country: "China", continent: "Asia", timezone: "Asia/Urumqi", countryCode: "cn" },
{ city: "Ushuaia", country: "Argentina", continent: "South America", timezone: "America/Argentina/Ushuaia", countryCode: "ar" },
{ city: "UTC", country: "-", continent: "-", timezone: "Etc/UTC", countryCode: "" },

 // V

{ city: "Valencia", country: "Spain", continent: "Europe", timezone: "Europe/Madrid", countryCode: "es" },
{ city: "Vancouver", country: "Canada", continent: "North America", timezone: "America/Vancouver", countryCode: "ca" },
{ city: "Venice", country: "Italy", continent: "Europe", timezone: "Europe/Rome", countryCode: "it" },
{ city: "Vienna", country: "Austria", continent: "Europe", timezone: "Europe/Vienna", countryCode: "at" },
{ city: "Vilnius", country: "Lithuania", continent: "Europe", timezone: "Europe/Vilnius", countryCode: "lt" },
{ city: "Vladivostok", country: "Russia", continent: "Asia", timezone: "Asia/Vladivostok", countryCode: "ru" },
{ city: "Warsaw", country: "Poland", continent: "Europe", timezone: "Europe/Warsaw", countryCode: "pl" },

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
 
// X

{ city: "Xiamen", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
{ city: "Xi'an", country: "China", continent: "Asia", timezone: "Asia/Shanghai", countryCode: "cn" },
 
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

// Z

{ city: "Zagreb", country: "Croatia",     continent: "Europe", timezone: "Europe/Zagreb", countryCode: "hr" },
{ city: "Zurich", country: "Switzerland", continent: "Europe", timezone: "Europe/Zurich", countryCode: "ch" },

];
