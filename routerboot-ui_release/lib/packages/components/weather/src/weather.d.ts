export type DayType = "day" | "night";
export type Weather = "sunny" | "cloudy" | "overcast" | "rainy" | "fitRainy" | "moderateRainy" | "heavyRainy" | "torrentialRainy" | "snowy" | "fitSnowy" | "moderateSnowy" | "heavySnowy" | "torrentialSnowy" | "fog" | "smoke" | "sand" | "sandStorm" | "undefined";
/**
 * 获取天气图标
 * @param day
 * @param weather
 * @returns
 */
export declare const getWeather: (day: DayType, weather: Weather) => String;
