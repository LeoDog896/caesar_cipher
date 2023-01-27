# caesar_cipher

caesar cipher implementation in deno. part of the [doke](https://github.com/LeoDog896/doke) family.

```ts
import { caesar } from "https://deno.land/x/caesar_cipher@v0.0.2/mod.ts"

caesar("Test", 5) // Yjxy
caesar("Yjxy", -5) // Test

caesar("Hello World", -6) // Byffi Qilfx
```
