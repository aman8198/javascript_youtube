const text = "Hello, world! This is test string with some numbers like 123 and 456";

const pattern = /\d+/g;

const matches = text.match(pattern);
console.log("Matches using match():", matches);

const matchAllIterator = text.matchAll(pattern);
console.log("Matches using matchAll():")
for(const match of matchAllIterator){
    console.log(match)
}