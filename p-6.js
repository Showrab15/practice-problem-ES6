// ৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 

const numbers = [2,4,5,7,8,11,45,66,79];

const odd = numbers.filter(n=> n % 2 != 0);
console.log(odd)