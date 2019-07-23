import { Apartment } from "../src/apartment";

test("create apartment", () => {
    const ap1 = new Apartment("Spain", "Madrid", "calle amalia", 18, 3, "B");
    console.log(ap1);
    const s = ap1.toSet();
    expect(s.city).toBe("Madrid");
});
cp