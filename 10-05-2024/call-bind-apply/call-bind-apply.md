call(), bind()ও apply() এই তিনটা মেথডই প্রথম আর্গুমেন্ট হিসাবে this কীওয়ার্ডের কন্টেক্সট বা ভ্যালু কি হবে সেটা নেয়। তারমধ্যে call() আর bind() আনলিমিটেড আর্গুমেন্ট নিতে পারে আর অন্যদিকে apply() মাত্র দুইটা আর্গুমেন্ট(প্রথমটা সবসময়েই thisএর ভ্যালু ডিটারমাইন করতে, আর দ্বিতীয়টা একটা অ্যারে) নেয়।

এখন বুঝলাম প্রথম আর্গুমেন্ট this ডিটারমাইন করার জন্যে দেওয়া হয়, কিন্তু বাকী আর্গুমেন্টগুলা কিসের? হ্যাঁ বাকিগুলো আপনি যে ফাংশনের সাথে এই মেথডগুলো লাগাবেন সেই ফাংশনেরও আর্গুমেন্ট থাকতে পারে, সে আর্গুমেন্ট যতটাই হউক আপনি call() আর bind() এর ক্ষেত্রে একটার পর একটা দিতে পারবেন। অন্যদিকে apply() এর ক্ষেত্রে যে অ্যারেটা দিবেন সেটা হবে সেই ফাংশনের সবগুলো আর্গুমেন্টের অ্যারে।

আরেকটা ডিফারেন্স হলো call() , apply() আর bind() এর মধ্যে। যেখানে call() , apply() যে ফাংশনের সাথে ইউজ করবেন সেটা সাথে সাথে কল হয়ে যাবে। অন্যদিকে bind() সাথে সাথে ফাংশনটাকে কল করে না, বরং আপনি সেটা পরে যেকোনো সময় চাইলে নিজের মন মতো করে কল করতে পারবেন।

### call() মেথডঃ

```js
var myCustomObj = {
  name: "Nur Muhammad",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Coder Nur",
    value: function () {
      console.log("My name is " + this.name);
    },
  },
};
myCustomObj.anotherObj.value();
myCustomObj.anotherObj.value.call(myCustomObj);
```

দেখুন এবার প্রিন্ট হয়েছে My name is Nur Muhammad, মানে this এর ভ্যালু এখানে আমরা আমাদের মতো করে চেঞ্জ করতে পেরেছি। আরেকটা জিনিস আমরা চাইলে call() টা আমাদের অবজেক্ট এর সাথেও দিতে পারতাম। কিন্তু ঐ যে বললাম call() যেখানে ইউজ করা হয় সেটা সাথে সাথে কল হয়ে যায়, তাই আপনি যেরকম আশা করবেন সেরকম রেজাল্ট নাও আসতে পারেঃ

```js
var myCustomObj = {
  name: "Nur Muhammad",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Coder Nur",
    value: function () {
      console.log("My name is " + this.name);
    }.call(myCustomObj),
  },
};
```

সেইমভাবে আপনার দুইটা সম্পূর্ন পৃথক পৃথক অবজেক্ট এর ক্ষেত্রেও আপনি এই মেথডগুলো কাজে লাগাতে পারবেন। যেমন ধরি আমাদের দুইটা অবজেক্ট আছে এরকমঃ

```js
var karim = {
  name: "Karim Rahman",
  dob: 1996,
  age: function (currentYear) {
    console.log(this.name + " is " + (currentYear - this.dob) + " years old!");
  },
};

var rahim = {
  name: "Rahim Abdu",
  dob: 1986,
};

karim.age(2018); // 18
karim.age.call(rahim, 2018);
```

এখন লক্ষ্য করুন rahim এ আমাদের কিন্তু age নামক ফাংশনটা নাই, কিন্তু তারপরেও আমরা চাইলে এই age ইউজ করে এর সাথে call(), bind() বা apply() দিয়ে এর ভিতরের this এর ভ্যালু চেঞ্জ করে সেটা rahim এর জন্যেও ইউজ করতে পারিঃ

আরো দেখবেন এখানে দ্বিতীয় আর্গুমেন্ট হিসাবে age এর আর্গুমেন্ট হিসাবে ভ্যালু পাস করেছি। সেইম জিনসটা bind() আর apply() দিয়েও করা যাবে।

### apply() মেথডঃ

এটাও সেইম টু সেইম call() এর মতোই, জাস্ট এটা দুইটা আর্গুমেন্ট নিবে আর দ্বিতীয় আর্গুমেন্ট টা আপনার ফাংশনের জন্যে যে কয়টা আর্গুমেন্ট থাকবে সেগুলার অ্যারে নিবেঃ

```js
var myCustomObj = {
  name: "Nur Muhammad",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Coder Nur",
    value: function () {
      console.log("My name is " + this.name);
    },
  },
};

myCustomObj.anotherObj.value.apply(myCustomObj);
```

আগের এই সেইম উদাহরণে apply() ইউজ করলেও সেইম রেজাল্ট পাবেনঃ

call() থেকেapply() এর পার্থক্যটা দ্বিতীয় আর্গুমেন্ট নেওয়ার ক্ষেত্রে যেখানে apply() আর্গুমেন্ট এর অ্যারে নেয়। আগের rahim আর karim একটু মডিফাই করেঃ

```js
var karim = {
   name: 'Karim Rahman',
   dob: 1996,
   age: function(currentYear, msg) {
      console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old!');
   }
}

var rahim = {
   name: 'Rahim Abdu',
   dob: 1986
}
karim এর age কল করলেঃ

karim.age(2018, 'Hello World!');
karim.age.apply(rahim, [2018, 'Hello World!']);
```

age ফাংশনটায় দুইটা আর্গুমেন্ট লাগিয়েছি বুঝার সুবিধার্থে। এটা রান করলে কন্সোলে পাবেনঃ

এখন এই সেইম age ফাংশন rahim এ ঠিক আগের মতো করে ইউজ করতে চাচ্ছি। কিন্তু এবার apply() দিয়েঃ

লক্ষ্য করুন এখানে দ্বিতীয় আর্গুমেন্ট টা একটা অ্যারে যেটা আপনার age ফাংশনের সবগুলো আর্গুমেন্ট নিয়েছেঃ

আশা করি এবার call() আর apply() মধ্যে তফাৎ টা ধরতে পেরেছেন।

### bind() মেথডঃ

bind() ঠিক call() এর মতো হলেও যেখানে call() আরapply() সাথে সাথে যে ফাংশনের সাথে ইউজ করা হয়েছে সেটাকে কল করে ফেলে, bind() সেখানে সে ফাংশনকে কল করে না, বরং এটা সেই ফাংশনের আরেকটা ডেফিনেশন রিটার্ন করে যেটা পরবর্তিতে আপনি যেকোনো জায়গায় কল করতে পারবেন বা ইউজ করতে পারবেন। আগের সেইম উদাহরণেই যদি সেইমভাবে bind() ইউজ করি তাহলে পার্থক্যটা ধরতে পারবেনঃ

```js
var myCustomObj = {
  name: "Nur Muhammad",
  age: 21,
  job: "Student",
  anotherObj: {
    name: "Coder Nur",
    value: function () {
      console.log("My name is " + this.name);
    },
  },
};
myCustomObj.anotherObj.value.bind(myCustomObj);

var anotherFunc = myCustomObj.anotherObj.value.bind(myCustomObj);
anotherFunc();
```

এখন এই ফাংশনটাকে আপনি আরেকটা ভ্যারিয়েবলে স্টোর করে পরে যেকোনো সময়, যেকোনো জায়গায় ইউজ করতে পারবেনঃ

এবার এই ফাংশন যেখানে কল করবেন সেখানেই আপনার কাঙ্ক্ষিত ফলাফল আসবেঃ

আর এজন্যেই এই তিনটা মেথডের মধ্যে এই bind() সবচেয়ে ইউজফুল।

bind() এ আপনি আর্গুমেন্টগুলোও পৃথক পৃথক ভাবে কল করতে পারবেন। ধরেন প্রথমে আপনি আপনার কিছু আর্গুমেন্ট দিলেন, পরে আবার ফাংশন কল করার সময় বাকি আর্গুমেন্টগুলো দিতে পারবেন। যেমন apply() তে ইউজ করা kahim আর rahim এর উদাহরণের ক্ষেত্রেঃ

```js
var karim = {
  name: "Karim Rahman",
  dob: 1996,
  age: function (currentYear, msg) {
    console.log(
      msg + " " + this.name + " is " + (currentYear - this.dob) + " years old!"
    );
  },
};

var rahim = {
  name: "Rahim Abdu",
  dob: 1986,
};

var rahimAge = karim.age.bind(rahim, 2018);

rahimAge("Hello World!");

var rahimAgeCalculate = karim.age.bind(rahim);

rahimAgeCalculate(2018, "Hello Dolly!");
rahimAgeCalculate(2028, "Hello Ahmed!");
rahimAgeCalculate(2028, "Hello Zonayed!");
rahimAgeCalculate(2050, "Hi!");
```

### Special Example

```js
var myObj = {
  name: "Nur Muhammad",
  age: 21,
  timer: function () {
    setTimeout(function () {
      console.log("My name is " + this.name);
    }, 1000);
  },
};
myObj.timer();
```

কোনো কারনে name এর ভ্যালু আসছে না, তারমানে এখানে তাহলে কোথাও একটা প্রবলেম হচ্ছে। আচ্ছা তাহলে ঠিক এখানে this এর ভ্যালু কি দেখে নেওয়া যাকঃ

```js
var myAnotherObj = {
  name: "Nur Muhammad",
  age: 21,
  timer: function () {
    setTimeout(function () {
      console.log(this);
    }, 1000);
  },
};
myAnotherObj.timer();
```

এখানে কোনো কারনে this গ্লোবাল অবজেক্ট(ব্রাউজারের ক্ষেত্রে window অবজেক্ট) কে ইন্ডিকেট করছে। কেনো? হ্যাঁ আপনি যদি আপনার গ্লোবাল অবজেক্ট ওপেন করে দেখেন দেখবেন এই setTimeout আসলে সেই গ্লোবাল অবজেক্ট এর একটা মেথডঃ

```js
console.dir(window);
```

তো আমাদের কথামতো setTimeout এর ভিতরে this তাই গ্লোবাল অবজেক্ট কেই ইন্ডিকেট করছে। যদিও setTimeout আরেকটা কাস্টমভাবে ডিফাইনকৃত অবজেক্ট এর ভিতরে কিন্তু এটার ভিতরে থাকা this এর সবচেয়ে কাছের অবজেক্ট হচ্ছে গ্লোবাল অবজেক্ট যেহেতু setTimeout আসলে গ্লোবাল অবজেক্ট এরই একটা মেথড। তাই এভাবে একটার ভিতরে আরেকটা মেথড থাকলেও আপনার this এর ভ্যালু চেঞ্জ হয়ে যেতে পারে।

এখন আমরা যেহেতু call(), apply(), bind() মেথডগুলো জানি তাই চলেন আমরা এটা ফিক্স করে ঠিক যেটা প্রিন্ট করাতে চাচ্ছিলাম সেটাই প্রিন্ট করাইঃ

```js
var myObj = {
  name: "Nur Muhammad",
  age: 21,
  timer: function () {
    setTimeout(
      function () {
        console.log("My name is " + this.name);
      }.bind(myObj),
      1000
    );
  },
};
myObj.timer();
```

এখন এখানে call() বাapply() কেনো ইউজ করলাম না? হ্যাঁ এই দুইটা মেথড ইউজ করা যাবে কিন্তু আমরা যেভাবে আশা করছিলাম সেরকম রেজাল্ট আসবে নাঃ

```js
var myObj = {
  name: "Nur Muhammad",
  age: 21,
  timer: function () {
    setTimeout(
      function () {
        console.log("My name is " + this.name);
      }.call(myObj),
      1000
    );
  },
};
myObj.timer();
```

setTimeout দিয়ে আমরা চাচ্ছি ১০০০ মিলিসেকেন্ড পরে উক্ত লেখাটা প্রিন্ট হউক, কিন্তু call() ইউজ করায় সেটা সাথে সাথেই কল হয়ে যাবেঃ

দেখবেন আপনার কন্সোলে সাথে সাথে প্রিন্ট হয়ে গেছে, কন্সোল ১০০০ মিলিসেকেন্ড ওয়েট করে নাইঃ

সেইম apply() ক্ষেত্রেও হবে। তাই ক্ষেত্রবিশেষে এদের বিহেভিয়ার অনুযায়ী আপনাকে যেসময় যেটা দরকার সেটা ইউজ করতে হবে।
