import { GildedRose } from "@/gilded-rose";
import { Item } from "@/models/Item";

const tests = require("../../tests.json");

describe("Gilded Rose", () => {
  for (const test of tests) {
    const [name, sellIn, quality, outputSellIn, outputQuailty] = test;

    const description = [name, sellIn, quality, outputSellIn, outputQuailty];

    it(JSON.stringify(description), () => {
      const gildedRose = new GildedRose([new Item(name, sellIn, quality)]);
      const items = gildedRose.updateQuality();

      expect(items[0].sellIn).toEqual(outputSellIn);
      expect(items[0].quality).toEqual(outputQuailty);
    });
  }
});
