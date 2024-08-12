/**
 * 
 */

import { useData } from "../../contexts/DataContext";

const testDate = [
    {
        date: "2022-01-01",
        month: "janvier"
    },
    {
        date: "2022-07-08",
        month: "juillet"
    }
]

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            // to implement
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            // to implement aussi tester une date vide, format americain, ne dois fonctionner que une date en francais
        });
    });
})

