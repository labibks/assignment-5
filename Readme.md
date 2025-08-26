## 1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

**Answer to the question no: 1**

** getElementById = একটি নির্দিষ্ট element কে পাওয়ার জন্য এটা use  করা হয়।
**  getElementsByClassName = একই class name এর যতগুলো elements আছে সবগুলোকে পাওয়ার জন্য এটা  use করা হয়।
**querySelector = প্রথম elemnt পাওয়ার জন্য এটা use kora হয়।
**querySelectorAll = সব elements কে পাওয়ার জন্য এটা use করা হয়। (NodeLis)আকারে। 

## 2.How do you create and insert a new element into the DOM?

**Answer to the question no : 2**

**প্রথমে  document. createElement(" tagname") element বানানে হয়,তারপর element.innerText অথবা element.innerHtml দিয়ে text বা পুরো একটি html element যোগ করা হয়, শেষে paernt.appendChild(newElement) দিয়ে DOM এ বসানো হয়।

## 3.What is Event Bubbling and how does it work?

**Answer to the question no : 3** 

** Event Bubbling হলো যদি কোন একটি elemnt এ event ট্রিগার করা হয়, তাহলে সেটা ধাপে ধাপে তার parent elemnt এর দিকে যায়। যেমন: কোন div এর মধ্যে যদি একটা বাটন থাকে, সেখানে click করলে প্রথমে ওই বাটনে click হয়, তারপর div এ তারপর তারparent এ, এভাবে ক্রমানুসারে body তে চলে যায়। 

## 4.What is Event Delegation in JavaScript? Why is it useful?

**Answer to the question no 4** 

** EventDelegation হলো কোন একটা parent element এ eventListener add করে তার child elemnt থেকে event ধরা। এটা usefull কারণ  অনেকগুলো element থাকলে তাতে আলাদা আলাদা eventListener add করার দরকার হয় না এবং নতুন dynamically created element এ ও event দেয়া যায়।

## 5.What is the difference between preventDefault() and stopPropagation() methods?


**Answer to the question no 5**

** preventDefault() এটা eventer default behavior বন্ধ করে। যেমন: কোন input button এ click করলে page relode হবে না।
stopPropagation()এটা event কে  বন্ধ করে যাতে সে parent এর দিকে না যেতে পারে। অর্থাৎ event bubbling বন্ধ করে।
