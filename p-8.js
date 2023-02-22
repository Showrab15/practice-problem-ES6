// ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।

const disObj = {
    name: 'habib',
    roll: 45,
    address : 'dhaka',
    age: 44,
}


const { roll,age} = disObj
console.log(roll,age)