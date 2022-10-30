import { Item } from "./models/Item";
import { AgedBrie } from "./models/AgedBrie";
import { BackstagePasses } from "./models/BackstagePasses";
import { Conjured } from "./models/Conjured";
import { NormalItem } from "./models/NormalItem";

const ItemTypes = {
  AGED_BRIE: "Aged Brie",
  BACKSTAGE_PASSES: "Backstage passes to a TAFKAL80ETC concert",
  SULFURAS: "Sulfuras, Hand of Ragnaros",
  CONJURED: "Conjured Mana Cake",
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (const item of this.items) {
      switch (item.name) {
        case ItemTypes.AGED_BRIE:
          const agedBrieItem: AgedBrie = new AgedBrie(item);
          agedBrieItem.updateQuailty();
          break;
        case ItemTypes.BACKSTAGE_PASSES:
          const backstagePassesItem: BackstagePasses = new BackstagePasses(
            item
          );
          backstagePassesItem.updateQuailty();
          break;
        case ItemTypes.CONJURED:
          const conjuredItem: Conjured = new Conjured(item);
          conjuredItem.updateQuailty();
          break;
        case ItemTypes.SULFURAS:
          break;
        default:
          const normalItem: NormalItem = new NormalItem(item);
          normalItem.updateQuailty();
          break;
      }
    }

    return this.items;
  }
}
