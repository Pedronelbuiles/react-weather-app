const apiKey = "3ceb3da2325e46b1b06cb6bdf7875425"
export const getForecastUrl = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apiKey}`
export const getWeatherUrl = ({ city, countryCode }) => `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apiKey}`