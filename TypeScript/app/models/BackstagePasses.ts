import { BaseItem } from "./BaseItem";
import { Item } from "./Item";

export class BackstagePasses extends BaseItem {
  constructor(item: Item) {
    super(item);
  }
  updateQuailty = () => {
    if (this.item.quality < 50) {
      if (this.item.sellIn < 6) {
        this.item.quality += 3;
      } else if (this.item.sellIn < 11) {
        this.item.quality += 2;
      } else {
        this.item.quality += 1;
      }

      if (this.item.quality > 50) {
        this.item.quality = 50;
      }
    }

    this.item.sellIn -= 1;

    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
  };
}
