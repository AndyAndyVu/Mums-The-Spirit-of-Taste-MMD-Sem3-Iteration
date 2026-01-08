import { takeawayMenu } from "../data/menuItems.js";

export const allTakeAwayItems = takeawayMenu.flatMap((category) =>
  category.items.map((item) => ({
    ...item,
    categoryId: category.id,
    categoryTitle: category.title,
  }))
);
console.log("All Take Away Items:", allTakeAwayItems);
