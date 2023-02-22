/*
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/


 let friend1 = 'abul'
 let friend2 = 'sabul'
 let friend3 = 'kabul'
 let friend4 = 'babul'
 let friend5 = 'dabul'

 console.log(`

 ${friend1}
 ${friend2}
 ${friend3}
 ${friend4}
 ${friend5}

`)

const Students = {
    student1: {
        name: 'abul',
        age: '17',
        school: 'durgapur high school',
        class: 7,

    }

}


const information = `
                     My name is ${Students.student1.name}
                     My age is ${Students.student1.age}
                     My subjects are: ${Students.student1.school}
                     i read in: ${Students.student1.class}

                     `
console.log(information)




