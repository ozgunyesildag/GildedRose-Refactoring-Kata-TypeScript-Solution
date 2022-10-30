import { BaseItem } from "./BaseItem";
import { Item } from "./Item";

export class AgedBrie extends BaseItem {
  constructor(item: Item) {
    super(item);
  }

  updateQuailty = () => {
    if (this.item.quality < 50) {
      this.item.quality += 1;
    }

    this.item.sellIn -= 1;

    if (this.item.sellIn < 0 && this.item.quality < 50) {
      this.item.quality += 1;
    }
  };
}
