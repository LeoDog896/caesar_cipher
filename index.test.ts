import { assertEquals } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { caesar } from "./mod.ts"

Deno.test("Shift with value of 0 keeps text the same", () => {
    assertEquals(caesar("testing", 0), "testing")
    assertEquals(caesar("Testing", 0), "Testing")
})

Deno.test("Basic 7 shift works", () => {
    assertEquals(caesar("Testing", 7), "Alzapun")
})

Deno.test("Higher shifts over the alphabet length work", () => {
    assertEquals(caesar("Testing", 30), "Xiwxmrk")
    assertEquals(caesar("Testing", 300), "Hsghwbu")
})

Deno.test("-15 shift works", () => {
    assertEquals(caesar("Testing", -15), "Epdetyr")
})

Deno.test("Lower shifts under the alphabet length work", () => {
    assertEquals(caesar("Testing", -30), "Paopejc")
    assertEquals(caesar("Testing", -300), "Fqefuzs")
})

Deno.test("Shifts from positive to negative cancel eachother out", () => {
    assertEquals(caesar(caesar("Test", 5), -5), "Test")
})