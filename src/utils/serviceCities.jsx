const cities = [
    { city: "Medellin", country: "Colombia", countryCode: "CO" },
    { city: "Cali", country: "Colombia", countryCode: "CO" },
    { city: "Bogota", country: "Colombia", countryCode: "CO" },
    { city: "Pereira", country: "Colombia", countryCode: "CO" },
    { city: "Tokio", country: "Japon", countryCode: "JP" }
]

export const getCities = () => cities

export const getCountryNameByConutryCode = (countryCode) => (
    cities.filter(country => country.countryCode === countryCode)[0].country
)