// const English = "./en.json";
// const Czech = "./cs.json";
// import cs from "./langs/cs.json";
// import en from "./langs/en.json";

import English from "./langs/en.json" assert { type: "json" };
import Czech from "./langs/cs.json" assert { type: "json" };

// console.log("🚀 ~ ", English,Czech)

export const data = [English, Czech];
