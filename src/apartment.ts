export class Apartment {

    public country: string;
    public city: string;
    public street: string;
    public number: number;
    public flat: number;
    public door: string;
    public reference: string;

    constructor(country: string, city: string, street: string, numberapp: number, flat: number, door: string) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.number = numberapp;
        this.flat = flat;
        this.number = numberapp;
        this.door = door;
    }

    public toString() {
        return ` ${this.country}_${this.city}_${this.street}_${this.flat}_${this.number}_${this.door}`;
    }

    public toSet() {

        return {
        city: this.city,
        country: this.country,
        door: this.door,
        flat: this.flat,
        number: this.number,
        street: this.street,
        };
}
}
