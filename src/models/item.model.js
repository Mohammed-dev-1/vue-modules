export class ItemModel {
    price
    title
    subtitle
    address

    constructor(price, title, subtitle, address) {
        this.price = price;
        this.title = title;
        this.subtitle = subtitle;
        this.address = address;
    }
}