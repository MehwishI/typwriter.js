const sentence = "hello there from lighthouse labs";
let timeout = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timeout);
  timeout += 50;
   
}
console.log("\n");
process.stdout.write("\n");