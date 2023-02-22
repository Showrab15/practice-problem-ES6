// ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। 

const objectArrays = [
    
     car = {
        brand:"nova",
        price:555500,
       color:"white"
    },
     mobile = {
        brand:"lava",
        price:5000,
       color:"white"
    },
     laptop = {
        brand:"hp",
      price:5500,
       color:"black"
    }
   
]

const findingTeka = objectArrays.find(objArr => objArr.price === 5000);
 console.log(findingTeka);
