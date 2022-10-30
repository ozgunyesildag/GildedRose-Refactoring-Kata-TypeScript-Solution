import { Item } from "@/models/Item";

export abstract class BaseItem {
  item: Item;

  constructor(item: Item) {
    this.item = item;
  }

  abstract updateQuailty(): void;
}
