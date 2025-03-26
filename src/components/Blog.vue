<template>
    <div class="h-[438px] bg-no-repeat bg-cover   bg-[url('https://www.clankart.com/blog/wp-content/uploads/2022/10/cropped-big-image-studentsm.jpeg')]">
<div class=" text-center text-4xl font-bold backdrop-contrast-50 text-white py-[180px] px-44">
    Buy & Sell Old Books, Second hand books online in India
</div>
    </div>
    <!-- second section -->
     <div class="py-[70px] relative z-20 bottom-12 bg-white rounded-xl shadow-2xl mx-4">
        <div class="px-5 mx-[5px]">
            <div class="ml-[80.8px]  px-[15px]">
                <div v-for="(info,index) in articaleInfo" :key="index" class="my-[30px]">
                    
                        <article class=" flex gap-4 overflow-hidden" >
                            <!-- article image -->
                            <div class="px-[5px] w-[306px] h-[204px] ">
                            
                             <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/">
                             <!-- w-[360px] h-[240px] -->
                                <img class="w-full h-full rounded-sm shadow-xl" :src="info.image"/>
                            </a></div>
                            <!-- articale -->
                             <div class=" flex-1 px-[15px]">
                                <h6 class="mt-[10px]">
                                    <a class=" font-bold text-xs uppercase" :class="info.textColor" href="https://www.clankart.com/blog/category/uncategorized/">
                                        uncategorized
                                    </a>
                                </h6>
                                <h2 class="font-bold text-2xl mt-[5px] mb-[10px] hover:text-neutral-400">
                                    <a href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/">
                                       {{ info.header }}
                                    </a>
                                </h2>
                                <p class="text-neutral-400 text-sm mb-[10px]">{{ info.paragraph }} <a class="text-md hover:text-red-500 text-[#23527c]" href="https://www.clankart.com/blog/why-reselling-used-books-is-better-than-selling-them-to-a-scrap-dealer/">Read More...</a></p>
                                    <p class= "pt-[5px] text-neutral-500">By <span class="font-semibold text-black">Clankart</span>, 2 years ago</p>
                                </div>
                        </article>
                   
                </div>
            </div>
        </div>
     </div>
     <footer class="bg-gray-900   text-white py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
      <!-- Footer Links -->
      <ul class="flex space-x-6 text-sm">
        <li>
          <a href="https://www.clankart.com/about-us" class="hover:text-blue-400 transition">
            About Us
          </a>
        </li>
        <li>
          <a href="https://www.clankart.com/contact-us" class="hover:text-blue-400 transition">
            Contact Us
          </a>
        </li>
      </ul>

      <!-- Copyright Section -->
      <div class="text-sm mt-4 md:mt-0">
        Hestia | Developed by
        <a href="https://themeisle.com" rel="nofollow" class="text-blue-400 hover:underline">
          ThemeIsle
        </a>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { reactive } from 'vue';
const articaleInfo = reactive([
   {heading:"Why reselling used books is better than selling them to a scrap dealer?" , 
   paragraph:"Books are often an integral part of our lives because they provide us with education, amusement, and inspiration. But as time goes on, we often find ourselves accumulating a vast collection of old books that we no longer need or use. So at some time, we tempt to dispose of these books by just selling them to a scrap dealer. But in this blog post, I will tell you many compelling reasons why one should",
    image:"https://www.clankart.com/blog/wp-content/uploads/2023/01/raddiwala-360x240.jpg",
    textColor:"text-[#89229b]"
},
    {header:"Where and how to sell old books online?",
        paragraph:"If you are reading this blog post Where and how to sell old books online in India, I suspect you too do not want to throw away your old books and of course, you don’t either want to sell your old books to the local scrap dealers too. This thinking has an obvious reason behind. Why will you sell your used books to a scrap dealer for a few rupees as you probably had bought",
        image:"https://www.clankart.com/blog/wp-content/uploads/2022/10/Where_and_how_to_sell_old_books_online15631158391-360x240.jpg"
        ,textColor:"text-[#00bcd4]"
    },
    {header:"What to do with old books?",
        paragraph:"Books, books are the most beautiful thing created by a man. Though their size is small, but the amount of knowledge they kept in them is just invaluable. Books not only provide us with knowledge, they educate us, entertain us, and they also serve us as a good companion when we feel alone. Irrespective of their nature whether they are story books, school or college textbooks, fiction books, or any other reading book, books give",
        image:"https://www.clankart.com/blog/wp-content/uploads/2022/10/What_to_do_with_old_books15621385651-360x240.jpg"
        ,textColor:"text-[#f44336]"
    },
    {
        header:"Problems faced by students",
        paragraph:"A college is an exciting place for self-discovery and growth, while time spent at college is full of memory and joyful experience for every student. And for the same reason, the average person thinks that a student’s life is easy to spend. But that’s the one side of the coin, the other side is not much thriving as this. College-going students have to deal with some common problems. Since students are inexperienced, so when it",
        image:"https://www.clankart.com/blog/wp-content/uploads/2022/10/Problems_faced_by_students15619705691-360x240.jpg"
        ,textColor:"text-[#ff9800]"
    },
    {
        header:"What is Clankart?",
        paragraph:"Buy & Sell Old Books, Second hand books online in India. As most colleges are located in the outskirts of cities, students find it quite difficult to buy study materials when they move to their new semesters. Not only travel hassles but also high prices, non-availability and other variables are the most obvious complications. At Clankart, we aim to eradicate these hassles by catering students a platform where they can buy and sell their used",
        image:"https://www.clankart.com/blog/wp-content/uploads/2022/10/What_is_Clankart15618949751-300x257.jpg"
        ,textColor:"text-[#e91e63]"
    }
]);
</script>