import { BaseItem } from "./BaseItem";
import { Item } from "./Item";

export class NormalItem extends BaseItem {
  constructor(item: Item) {
    super(item);
  }

  updateQuailty = () => {
    if (this.item.quality > 0) {
      this.item.quality -= 1;
    }

    this.item.sellIn -= 1;

    if (this.item.sellIn < 0 && this.item.quality > 0) {
      this.item.quality -= 1;
    }
  };
}
