import { usualUser } from "../../../utils";

export type DayType = "day" | "night";
export type Weather =
  | "sunny"
  | "cloudy"
  | "overcast"
  | "rainy"
  | "fitRainy"
  | "moderateRainy"
  | "heavyRainy"
  | "torrentialRainy"
  | "snowy"
  | "fitSnowy"
  | "moderateSnowy"
  | "heavySnowy"
  | "torrentialSnowy"
  | "fog"
  | "smoke"
  | "sand"
  | "sandStorm"
  | "undefined";

let weatherDay = {
  sunny: "#rb-icon-icon_qingtian",
  cloudy: "#rb-icon-icon_duoyun",
  overcast: "#rb-icon-icon_yintian",
  rainy: "#rb-icon-icon_xiaoyu",
  fitRainy: "#rb-icon-icon_zhenyu",
  moderateRainy: "#rb-icon-icon_zhongyu",
  heavyRainy: "#rb-icon-icon_dayu",
  torrentialRainy: "#rb-icon-icon_baoyu",
  snowy: "#rb-icon-icon_xiaoxue",
  fitSnowy: "#rb-icon-icon_zhenxue",
  moderateSnowy: "#rb-icon-icon_zhongxue",
  heavySnowy: "#rb-icon-icon_daxue",
  torrentialSnowy: "#rb-icon-icon_baoxue",
  fog: "#rb-icon-icon_wu",
  smoke: "#rb-icon-icon_fuchen",
  sand: "#rb-icon-icon_yangsha",
  sandStorm: "#rb-icon-icon_shachenbao",
  undefined: "#rb-icon-icon_wushuju",
};

let weatherNight = {
  sunny: "#rb-icon-icon_yejianqingtian",
  cloudy: "#rb-icon-icon_yejianduoyun",
  overcast: "#rb-icon-icon_yintian",
  rainy: "#rb-icon-icon_xiaoyu",
  fitRainy: "#rb-icon-icon_zhenyu",
  moderateRainy: "#rb-icon-icon_zhongyu",
  heavyRainy: "#rb-icon-icon_dayu",
  torrentialRainy: "#rb-icon-icon_baoyu",
  snowy: "#rb-icon-icon_xiaoxue",
  fitSnowy: "#rb-icon-icon_zhenxue",
  moderateSnowy: "#rb-icon-icon_zhongxue",
  heavySnowy: "#rb-icon-icon_daxue",
  torrentialSnowy: "#rb-icon-icon_baoxue",
  fog: "#rb-icon-icon_yejianwu",
  smoke: "#rb-icon-icon_fuchen",
  sand: "#rb-icon-icon_yangsha",
  sandStorm: "#rb-icon-icon_shachenbao",
  undefined: "#rb-icon-icon_wushuju",
};

/**
 * 获取天气图标
 * @param day
 * @param weather
 * @returns
 */
export const getWeather = (day: DayType, weather: Weather) => {
  let weatherMap = new Map<DayType, Map<String, String>>();
  let weatherNightMap = usualUser.objToMap(weatherNight);
  let weatherDayMap = usualUser.objToMap(weatherDay);
  weatherMap.set("day", weatherDayMap);
  weatherMap.set("night", weatherNightMap);

  return weatherMap.get(day)?.get(weather);
};
