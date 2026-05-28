{
    let blockLet = "Block Scoped";
    const blockConst = "Also Block Scoped";
    var blockVar = "Function Scoped";
}
// console.log(blockLet);   // ❌ Error
// console.log(blockConst); // ❌ Error
console.log(blockVar);      // ✅ Works
