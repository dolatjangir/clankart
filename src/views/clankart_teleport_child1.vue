<template>
   <!-- common header  -->
   <div class="header xl:h-[110px] sm:h-[60px] fixed z-20 bg-white w-screen  px-4 flex ">
    <div class="inner-header 2xl:mx-[19.5px] pl-2 w-screen flex flex-row items-center justify-between">
        
      <div class="clankart-img flex items-center justify-between xl:ml-[6.5px] 2xl:h-[55px] 2xl:w-[150px]  sm:h-[40px] xl:w-[120px] xl:h-[48px] xl:pl-2 2xl:mr-[32.5px] sm:mr-4">
       <!-- hamburger -->
       <div class="sm:flex xl:hidden sm:pl-[6px]">
            <i class="text-xl fa-solid fa-bars"></i>
        </div>
        <a href="/" class="py-[5.7px] pl-4 ">
          <img class="2xl:w-[150px] 2xl:h-[55px] sm:w-[120px] sm:h-[48px] " width="150" height="55" src="https://www.clankart.com/user-uploads/static-assets/logo.png"/>
        </a>
      </div>
      <div class="header-secondory-things mb-4 flex flex-row sm:hidden xl:flex">
      <div class="header-search-bar mr-[16.2px] h-[47px] flex">
        <div class="border border-[#0083ca] flex flex-row w-[358px]">
        <input class="px-[13px] py-[9.7px] w-full" placeholder="Book Name/Author/Subject/Publiser"/></div>
        <button class="bg-[#0083ca] px-[20.5px] py-[10.7px] text-white text-lg">Search</button>
       
    </div>
     <div class=" yellow-button ">
        <button class="px-[9.7px] py-[10.7px] sm:hidden 2xl:flex border border-[#e1b70d] bg-[#fcec52] h-[47px] w-[150px] rounded-sm ">Sell Used Books</button>
        <button class="px-[9.7px] py-[10.7px] border sm:flex 2xl:hidden border-[#e1b70d] bg-[#fcec52] h-[47px] w-[100px] justify-center items-center text-2xl rounded-sm ">+SELL</button>
    </div>
      </div>
    
      <div class="account-and-cart-button text-sm flex sm:hidden 2xl:flex text-[#5b5b5b]">
        <button class="mr-[16.2px] text-center"><i class="text-lg fa-solid fa-user"></i><br/><span class="">Account</span></button>
        <button class="flex flex-col text-sm"><i class="text-lg fa-solid fa-cart-shopping"></i><span>Cart</span></button>
      </div>
      <!-- sm icons -->
      <div class="account-and-cart-button text-sm flex  sm:flex xl:hidden text-[#5b5b5b] pr-4">
        <button class="mr-[16.2px] text-center"><i class="text-lg fa-solid fa-search"></i><br/></button>
        <button class="text-sm"><i class="text-lg fa-solid fa-cart-shopping"></i></button>
      </div>
    </div>
  </div>
    <!-- section-1 -->
     <div class="flex flex-col items-center pb-5 pt-[150px] bg-gray-100  mx-auto rounded-lg shadow-md">
    <span class="text-gray-500 text-sm">Advertisement</span>
    <div class="w-full h-[90px] flex items-center justify-center bg-gray-300 text-gray-700 font-semibold text-lg">
      Your Ad Here
    </div>
  </div> 
  <!-- section-2 -->
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Categories Sidebar -->
        <div class="w-full md:w-1/4">
          <div class="border-l-4 border-blue-500 pl-4">
            <ul class="space-y-2">
              <li 
                v-for="(category, index) in categories" 
                :key="index"
                @click="activeCategory = category.id"
                :class="{
                  'bg-gray-100': activeCategory === category.id,
                  'bg-white': activeCategory !== category.id,
                  'text-blue-600': activeCategory === category.id
                }"
                class="py-2 px-4 rounded cursor-pointer hover:text-blue-600 transition-colors"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>
        </div>

        <!-- FAQ Content -->
        <div class="w-full md:w-3/4">
          <h2 class="text-2xl font-semibold mb-6">Clankart FAQs</h2>
          
          <!-- Questions List -->
          <div class="space-y-4">
            <div 
              v-for="(question, index) in filteredQuestions" 
              :key="index"
              class="border-b border-gray-200 pb-4"
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <!-- Question -->
              <div 
                 @click="toggleQuestion(index)"
                class="flex justify-between items-center cursor-pointer"
              >
                <h3 class="text-lg font-medium text-gray-800" itemprop="name">
                  {{ question.q }}
                </h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 text-gray-500 transition-transform duration-200"
                  :class="{ 'rotate-180': openQuestions.includes(index) }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <!-- Answer (collapsible) -->
              <div 
                v-show="openQuestions.includes(index)"
                class="mt-2 text-gray-600"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <ul itemprop="text">
                  <li v-for="(paragraph, pIndex) in question.a" :key="pIndex" class="mb-2 list-disc marker:text-blue-600">
                    {{ paragraph }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- footer section -->
  <div class="pt-[32.5px] px-[15px] flex justify-between sm:flex-col xl:flex-row sm:h-[630px] xl:h-[259px]">
              <!-- first -->
              <div class="pb-[6.5px] w-[291.5px] h-[208.9px] px-[9.7px]">
                <h1 class="text-xl font-semibold text-neutral-400 pb-[13px]">ABOUT US</h1>
                  <ul class=" mb-[3rem] text-[#555] font-semibold text-sm ">
                  <li class=" pb-[10.2px]">About Us</li>
                    <li class=" pb-[10.2px]">Contact Us</li>
                    <li class=" pb-[10.2px]">Leave Us Feedback</li>
                    <li class=" pb-[10.2px]">Blog</li>
                  </ul>
               
              </div>
               <!-- second -->
               <div class="pb-[6.5px] w-[291.5px] sm:h-[310px] xl:h-[208.9px] px-[9.7px]">
                <h1 class="text-xl font-semibold text-neutral-400 pb-[13px]">USEFUL LINKS</h1>
                  <ul class=" mb-[3rem] text-[#555] font-semibold text-sm ">
                  <li class=" pb-[10.2px]">How it works?</li>
                    <li class=" pb-[10.2px]">Clankart Teleport</li>
                    <li class=" pb-[10.2px]">Frequenty Asked Questions[FAQs]</li>
                    <li class=" pb-[10.2px]">Chat Guidlines</li>
                    <li class=" pb-[10.2px]">Terms of Use/Listing Policy/</li>
                    <li class=" pb-[10.2px]">Privacy Policy</li>
                  </ul>
               
              </div>
              <!-- third -->
              <div class="pb-[6.5px] w-[291.5px]  h-[208.9px] px-[9.7px] ">
                <h1 class="text-xl font-semibold text-neutral-400 pb-[13px]">STAY CONNECTED</h1>
                  <ul class=" mb-[3rem] text-[#555] font-semibold text-lg ">
                  <li class=" pb-[13.2px] mb-[6.5px] text-2xl flex flex-row space-x-6">
                    <i class="hover:text-blue-700 fa-brands fa-facebook"></i>
                    <i class="hover:text-pink-500 fa-brands fa-instagram"></i>
                    <i class="hover:text-red-500 fa-brands fa-youtube"></i>
                    <i class="hover:text-blue-600 fa-brands fa-twitter"></i>
                  </li>
                    
                  </ul>
               
              </div>
             </div>
 <!--  aboutus page -->
 <div class="pt-[16.5px]">
                <div class="px-[15px]">
                  <!-- social links -->
                  <div class="flex justify-between sm:flex-col xl:flex-row pb-4 border-b border-neutral-300">
                    <!-- first -->
                    <div class="px-[9.6px] mb-[19.5px] text-neutral-600 w-[250px] sm:h-[90px] xl:h-[140px]">
                      <div class="flex">
                        <i class="text-2xl fa-solid fa-credit-card"></i>
                        <div class="pl-[9.7px]">
                          <span class="text-xl font-semibold mb-[3.2px]">Secure Payment</span>
                          <p class="text-lg font-normal">100% Secure Online Transaction</p>
                        </div>
                      </div>
                    </div>
                     <!-- second -->
                     <div class="px-[9.6px] mb-[19.5px] text-neutral-600 w-[250px] h-[140px]">
                      <div class="flex">
                        <i class="text-2xl fa-solid fa-square-check"></i>
                        <div class="pl-[9.7px]">
                          <span class="text-xl font-semibold mb-[3.2px]">Clankart Trust</span>
                          <p class="text-lg font-normal">Money stored safely & is transferred to the seller only after buyer confirmation </p>
                        </div>
                      </div>
                    </div>
                    <!-- third-->
                    <div class="px-[9.6px] mb-[19.5px] text-neutral-600 w-[250px] sm:[90px] xl:h-[140px]">
                      <div class="flex">
                        <i class="text-2xl fa-solid fa-rocketchat"></i>
                        <div class="pl-[9.7px]">
                          <span class="text-xl font-semibold mb-[3.2px]">Customer Support</span>
                          <p class="text-lg font-normal">Friendly customer support</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--  -->
                  <div class="pt-[13px] pb-[20px] px-[9.6px] border-b border-neutral-300">
                    <p>Clankart is a free platform where you can buy second hand books 
                      at very cheap prices. Well at Clankart, you can also sell used books online in India 
                       for actual cash. Buy used books online like co
                      llege books, school books, reading books, much more near you.</p>
                  </div>
                  <!--  -->
                  <div class="py-4 flex justify-between items-center sm:flex-col xl:flex-row">
                    <p>Copyright © 2025, <span class="font-semibold">Clankart™ </span>All Rights Reserved</p>
                    <ul class="flex">
                      <li  class="mr-[9.7px]"><svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-visa">
                <title id="pi-visa">Visa</title>
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" fill="#142688"></path>
              </svg></li>
              <li class="mr-[9.7px] "><svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" role="img" width="38" height="24" aria-labelledby="pi-master">
                <title id="pi-master">Mastercard</title>
                <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"></path>
                <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"></path>
                <circle fill="#EB001B" cx="15" cy="12" r="7"></circle>
                <circle fill="#F79E1B" cx="23" cy="12" r="7"></circle>
                <path fill="#FF5F00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7z"></path>
              </svg></li>
              <li  class="mr-[9.7px]"><svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img" aria-labelledby="pi-rupay">
                <title id="pi-rupay">RuPay</title>
                <g fill="none" fill-rule="evenodd">
                  <rect stroke-opacity=".07" stroke="#000" fill="#FFF" x=".5" y=".5" width="37" height="23" rx="3"></rect>
                  <path fill="#097A44" d="M32 15.77l2-7.41 2 3.82z"></path>
                  <path fill="#F46F20" d="M30.76 15.79l2-7.4 2 3.82z"></path>
                  <path d="M20.67 8.2a2 2 0 0 0-1.56-.56h-3l-1.95 6.81h1.75l.66-2.31h1.23a3.4 3.4 0 0 0 1.9-.5 2.93 2.93 0 0 0 1.12-1.72 1.77 1.77 0 0 0-.15-1.72zm-3.21.94h1.12a.76.76 0 0 1 .55.15c.11.11.07.35 0 .53a1.08 1.08 0 0 1-.4.62 1.21 1.21 0 0 1-.7.2H17l.46-1.5zM9.14 9a1.64 1.64 0 0 0-.2-.61 1.3 1.3 0 0 0-.58-.53 2.75 2.75 0 0 0-1.08-.18H4l-2 6.75h1.73l.72-2.52H5.7c.47 0 .58.1.6.13.02.03.09.15 0 .65l-.16.6a3.35 3.35 0 0 0-.11.59v.55h1.79l.12-.43-.11-.08s-.07-.05-.06-.2c.027-.19.07-.377.13-.56l.1-.42a2.14 2.14 0 0 0 .1-1.11.88.88 0 0 0-.26-.41 2 2 0 0 0 .68-.54 2.79 2.79 0 0 0 .53-1c.07-.22.101-.45.09-.68zm-1.86.83a.84.84 0 0 1-.5.6 1.79 1.79 0 0 1-.64.09H4.86l.38-1.33h1.43a1.1 1.1 0 0 1 .53.09c.05 0 .21.07.08.5v.05zm4.9 2.17a2.11 2.11 0 0 1-.3.67 1 1 0 0 1-.87.43c-.34 0-.36-.14-.38-.2a1.24 1.24 0 0 1 .07-.52l.89-3.11H9.9l-.86 3a3 3 0 0 0-.15 1.32c.08.42.4.91 1.41.91.247.004.493-.03.73-.1a2.51 2.51 0 0 0 .6-.29l-.08.3h1.62l1.47-5.13H13L12.18 12zm12.93 1.1l.63-2.18c.24-.83-.07-1.21-.37-1.39A2.75 2.75 0 0 0 24 9.2a2.87 2.87 0 0 0-2 .68 2.75 2.75 0 0 0-.69 1.1l-.09.26h1.61v-.11a1.15 1.15 0 0 1 .25-.37.84.84 0 0 1 .56-.17.89.89 0 0 1 .46.08v.18c0 .06 0 .15-.25.23a2.13 2.13 0 0 1-.48.1l-.44.05a4 4 0 0 0-1.25.32c-.57.271-.99.78-1.15 1.39a1.25 1.25 0 0 0 .17 1.22c.289.307.7.468 1.12.44a2.43 2.43 0 0 0 1.07-.25l.4-.23v.33H25l.13-.48-.13-.07a.61.61 0 0 1 0-.22c0-.25.07-.43.11-.58zm-2.92-.1a.62.62 0 0 1 .34-.4 2.17 2.17 0 0 1 .57-.15l.29-.05.3-.07v.07a1.24 1.24 0 0 1-.51.75 1.44 1.44 0 0 1-.72.21.34.34 0 0 1-.25-.08.55.55 0 0 1-.02-.28zm7.91-3.68l-1.69 3v-3h-1.8l.39 5.13-.12.19a.8.8 0 0 1-.23.25.64.64 0 0 1-.24.08h-.68l-.39 1.37h.83a2 2 0 0 0 1.29-.34 9.55 9.55 0 0 0 1.27-1.71l3.17-5-1.8.03z" fill="#302F82"></path>
                </g>
              </svg></li>
              <li class="mr-[9.7px]"><svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="38" height="24" role="img" aria-labelledby="pi-paytm">
                <title id="pi-paytm">Paytm</title>
                <rect x=".5" y=".5" width="37" height="23" rx="3" ry="3" fill="#fff" stroke="#000" stroke-opacity=".07"></rect>
                <path d="M14.17 13.32v2.6a.87.87 0 0 1-.74.91h-2.7a1.83 1.83 0 0 1-2-1.9 14.66 14.66 0 0 1 .06-2.08 1.81 1.81 0 0 1 1.69-1.54h1.19a.31.31 0 0 0 .34-.41.33.33 0 0 0-.23-.41H10c-.38 0-.46-.08-.46-.47V8.91a.3.3 0 0 1 .25-.35h2.39a1.87 1.87 0 0 1 1.92 2.1c.08.91.07 1.79.07 2.66zm-3.32 1.34a.34.34 0 0 0 .31.36h.61a.33.33 0 0 0 .36-.35v-1.13c0-.3-.16-.36-.72-.36s-.53.1-.56.37v1.11zm9.58-2.73v2.81a2 2 0 0 1-1.85 2.15h-2.45c-.34 0-.42-.07-.42-.42v-1.26a.3.3 0 0 1 .29-.35h2a.32.32 0 0 0 .36-.34.33.33 0 0 0-.31-.35h-1a1.94 1.94 0 0 1-2-1.86V9a.32.32 0 0 1 .26-.37h1.34c.34 0 .42.1.42.45v2.6c0 .45.1.54.55.54h.05c.62 0 .67-.05.67-.66V9a.36.36 0 0 1 .45-.5H20a.36.36 0 0 1 .42.42c.01 1.08.01 2.02.01 3.01zM4.57 14.48v1.94c0 .46-.06.51-.52.51H2.87a.3.3 0 0 1-.36-.36V9a.28.28 0 0 1 .22-.32H6.2a1.66 1.66 0 0 1 1.62 1.61 17.62 17.62 0 0 1 0 2.49 1.74 1.74 0 0 1-1.73 1.74H4.57zm0-2.08h.86a.32.32 0 0 0 .32-.31V11a.32.32 0 0 0-.28-.35h-.88v1.74z" fill="#22346c"></path>
                <path d="M28.94 9a2.2 2.2 0 0 1 2.86.1 7.28 7.28 0 0 1 1.15-.51 2.08 2.08 0 0 1 2.56 2v5.83c0 .36-.09.45-.45.45h-1.15a.35.35 0 0 1-.42-.42v-5.24a.6.6 0 0 0-.79-.64.55.55 0 0 0-.49.58v5.4a.31.31 0 0 1-.25.36h-1.43a.3.3 0 0 1-.35-.31v-5.43a.48.48 0 0 0-.29-.55 1.38 1.38 0 0 0-.71 0 .48.48 0 0 0-.26.53v5.21c0 .48-.06.55-.56.55h-1c-.36 0-.42-.08-.42-.44V9c0-.42.06-.47.46-.47h1.09a.42.42 0 0 1 .45.47zm-5.43 1.64h-.77a.33.33 0 0 1-.41-.4V9a.31.31 0 0 1 .25-.36h.1a2 2 0 0 0 1.74-1 2 2 0 0 1 .58-.57c.24-.16.42 0 .44.27v1.27h.7a.36.36 0 0 1 .42.42v1.22a.35.35 0 0 1-.42.42h-.66v5.83c0 .42-.07.48-.47.49h-1.09a.34.34 0 0 1-.42-.42c.01-1.87.01-5.78.01-5.92z" fill="#24b8eb"></path>
              </svg></li>
              <li  class="mr-[9.7px]"><svg class="icon icon--full-color" viewBox="0 0 38 24" xmlns="http://www.w3.org/2000/svg" width="38" height="24" role="img">
                <title id="pi-rupay">UPI</title>
                <g fill="none" fill-rule="evenodd">
                  <rect stroke-opacity=".07" stroke="#000" fill="#FFF" x=".5" y=".5" width="37" height="23" rx="3"></rect>
                  <path stroke="null" fill="#097939" d="m30.34233,16.26593l4.55316,-4.15354l-2.15672,-4.29692l-2.39643,8.45046z"></path>
                  <path stroke="null" fill="#ed752e" d="m28.80872,16.26593l4.55316,-4.15354l-2.15672,-4.29692l-2.39643,8.45046z"></path>
                  <path stroke="null" fill="#747474" d="m7.04945,7.86347l-1.91702,6.82719l6.80557,0.04769l1.86933,-6.87488l1.72532,0l-2.24129,7.99234c-0.08584,0.3052 -0.41265,0.55317 -0.72961,0.55317l-8.72323,0c-0.52901,0 -0.84247,-0.41329 -0.69941,-0.92195l2.13765,-7.62356l1.77269,0zm21.04015,-0.04769l1.72532,0l-2.39643,8.5932l-1.77396,0l2.44507,-8.5932zm-12.36492,3.58034l8.6269,-0.04769l0.57542,-1.81433l-8.77123,0l0.5271,-1.67095l9.34665,-0.08584c0.58178,-0.0054 0.92831,0.44508 0.77507,1.00683l-0.88062,3.21856c-0.15355,0.56144 -0.75028,1.01637 -1.33206,1.01637l-7.71703,0l-0.90987,3.53297l-1.67858,0l1.43824,-5.15592z"></path>
                </g>
              </svg></li>
                    </ul>
                  </div>
                </div>
              </div>
</template>
<script setup>
import { ref,computed } from 'vue';
const activeCategory = ref('teleport');
const openQuestions = ref([]);
const categories = ref([
    {id:"teleport",name:'Clankart Teleport Related Questions'},
    {id:'payment',name:'Payment Related Questions'},
    {id:'shipping',name:'Shipping and Delivery'},
    {id:'dispute',name:'Dispute and Refunds'},
    {id:'general',name:'General Questions'},
]);

const questions = ref(   {
 teleport:[
    {
        q:"What is Clankart Teleport?",
        a: [
              "Clankart Teleport offers a secure and trusted buying and selling experience to its clans (users). By making an online payment through Clankart, the buyers will have full confidence that their payment will only be released to the seller once they received the product. And the seller will have full confidence that they will receive the payment into their account once the product is received by the buyer.",
              "You should use Clankart Teleport because after you place the order, the seller will receive the payment only after you receive the product. With which you will have a confidence that your payment will only be released to the seller after you receives the exact product. You can purchase used books from any seller across India with confidence."
            ],
          
    },
    {
        q:"As a buyer, why should I use Clankart Teleport?",
        a:[
            "You should use Clankart Teleport because after you place the order, the seller will receive the payment only after you receive the product. With which you will have a confidence that your payment will only be released to the seller after you receives the exact product.",
              "You can purchase used books from any seller across India with confidence."
        ]
    },
    {
        q:"As a seller, why should I use Clankart Teleport?",
        a:[
            "You should use Clankart Teleport because you will start the delivery of product only after the buyer makes the payment to Clankart.","You will have a confidence that you will get the payment after the buyer receives the product","You can sell your used books across India with confidence.","Sell your used books without having to travel to the buyer location for payment collection."
        ]
    },
    {
      q:"How much am I being charged for using Clankart Teleport?",
      a:[
        "For the seller, there is just 10% convenience fee for using Clankart Teleport.","For the buyer, there is no fee for using Clankart Teleport."
      ]
    },
    {
      q:"How do I check my order status as a buyer?",
      a:[
        "You can check the order status from 'My Orders' section in your account."
      ]
    },
    {
      q:"How do I check my order status as a seller?",
      a:[
        "You can check the selling order status from 'My Selling Orders' section in your account."
      ]
    }
 ],
  payment: [
    {
      q: "As a seller, how will I know if the buyer has made the payment?",
      a: [
        "All payments are routed through our Clankart account. Once the buyer pays for the order, we will notify you via your registered email id and WhatsApp phone number. This amount (after deducting convenience fee, if any) will get credited to your preferred bank account or UPI number once the product is delivered and accepted by the buyer."
      ]
    },
    {
      q:"What types of payment methods can a buyer use?",
      a:[
        "The buyer can pay through any of the following modes: Credit Card, Debit Card, Net Banking, UPI and Wallets."
      ]
    },
    {
      q:"When will the buyer receive the invoice of order?",
      a:"The invoice should be shared directly from seller to buyer & Clankart. Clankart is an intermediator & will not provide any invoice."
    },
    {
      q:"What is the process for the seller to receive payment from Clankart?",
      a:[
        "Buyer needs to confirm to Clankart about the successful delivery and acceptance of the product. After this, Clankart will release the payment to seller."
      ]
    },
    {
      q:"How long does it take for sellers to be paid?",
      a:[
        "Funds are disbursed within 3-5 days following the delivery of the order. A transaction is completed once the buyer successfully accepts the delivery of the product on Clankart."
      ]
    },
    {
      q:"Why is seller's bank/UPI account information needed?",
      a:[
        "Seller bank/UPI account information is required to make the payments directly into the account once the product is accepted by the buyer."
      ]
    },
    {
      q:"Can a seller change his bank/UPI account information later or during the transaction?",
      a:[
        "No, the seller bank/UPI account details will be recorded one-time and will not be changed. Under exceptional circumstances, the seller may write to us separately for changing the account."
      ]
    },
  ],
  shipping: [
    {
      q: "How long does it take for a product to get delivered after an order has been made?",
      a: [
        "Product delivery time depends on the logistic company the seller has chosen for the shipment."
      ]
    },
    {
      q:"When does the seller ship the items?",
      a:[
        "The seller is notified by Clankart to ship the items once the order is placed by the buyer."
      ]
    },
    {
      q:"Who bears the shipping cost?",
      a:[
        "The buyer and seller mutually agree as to who bears the shipping cost and the total amount payable through Clankart is net of this cost. Clankart will not do any such calculations and split payments at its end."
      ]
    },
    {
      q:"How can the buyer track their order?",
      a:[
        "Clankart Teleport does not track the shipments itself. It relies on the tracking ID/receipt photograph(s) provided by the seller and third-party data to track, wherever applicable.",
        "Steps to track order -",
        "You can track your order by following the steps below. Here's how:",
        "Step 1: On 'My Orders' page, click on the order you would like to track.",
        "Step 2: Open the tracking details image uploaded by the seller and note down the tracking number from there.",
        "Step 3: Visit the courier company's tracking page.",
        "Step 4: Enter the tracking number & get the details.",
        "We cannot determine exact delivery time, but we can tell you if your order has been shipped, or not.",

      ]
    },
    {
      q:"What are the supported shipping methods?",
      a:[
        "Since the shipping methods are set up by the sellers, buyers are advised to directly contact the seller for more shipping information."
      ]
    },
    {
      q:"When can buyer change his shipping address?",
      a:[
        "Shipping address can be changed before the shipment by directly contacting with the seller. Shipping address cannot be revised after the shipment has been made."
      ]
    },
    {
      q:"What if the seller doesn't ships the item to buyer?",
      a:[
        "If the items are not shipped within 4 days of order placement, then that order will be auto cancelled and the money will be refunded back into to the buyer's original payment method."
      ]
    },
    {
      q:"What if the buyer doesn't get the delivery in time?",
      a:[
        "If the order is not delivered in time after the seller has confirmed shipment, we advise buyer to contact the Clankart Support team immediately for an extension to the delivery period."
      ]
    },
    {
      q:"What if the seller forgets to upload Tracking Receipts?",
      a:[
        "If seller forgets to upload Tracking Details/Receipts within 4 days of order placement, then that order will be auto cancelled and the money will be refunded to the buyer."
      ]
    },
  ],
  dispute: [
    {
      q: "How does buyer/seller cancel an order?",
      a: [
        "Both the buyer & the seller can cancel the order any time before the shipment of the order by informing Clankart."
      ]
    },
    {
      q:"When can a buyer raise a dispute?",
      a:[
        "The buyer can raise a dispute within 2 days after the order has been delivered by informing Clankart."
      ]
    },
    {
      q:"What can buyer do if the product received is not as per specification?",
      a:[
        "In case of any problem with the product received, the buyer has 2 days from the date of delivery to raise a dispute with Clankart. Once a dispute has been raised, both parties have 15 business days to resolve the issue amongst themselves and notify Clankart of the resolution.",
      ]
    },
    {
      q:"What is dispute resolution?",
      a:[
        "Once the dispute is raised on the Clankart (considered the dispute date), the buyer and seller have 15 business days to mutually resolve their dispute. Both parties should consent to the resolution and notify Clankart for action within such period.",
        "If the buyer and seller have not resolved the dispute within the 15-business day Negotiation Period, Clankart Teleport is authorized to foreclose the transaction, refund the payment to the buyer and the buyer will ship the products back to the seller."
      ]
    },
    {
      q:"How much time will it take to refund the buyer's money?",
      a:[
        "In case of order cancellation, the money is refunded back into the buyer's account within 3 business days.",
      ]
    },
    {
      q:"What is the return/replacement policy?",
      a:[
        "Clankart do not covers the return or replacement of the product. Buyer should contact the seller directly for the return or replacement of product.",
        "Buyer should contact the seller and clarify the queries related to product quality and quantity before making the purchase.",
        
      ]
    },
  ],
  general: [
    {
      q: "Do I need to register to post Ads?",
      a: [
        "Yes, you need to be a registered user to Post Ad on the site."
      ]
    },
    {
      q:"How do I sell my used books on Clankart?",
      a:[
        "Login/Register on Clankart.",
        "Click on the 'Sell Used Books' button and follow the instructions to post an ad.",
        "Set the price for the book at which you want to sell it.",
        "Enter the shipping charges that buyer has to pay to you. Note: Buyers always prefer free or less shipping charges.",
        "And that's it, your ad will be live.",
        "You will be notified once a buyer places order for your book(s)",
      ]
    },
    {
      q:"What products can I sell on Clankart?",
      a:[
        "You can sell any of your used books like college books, school books, reading books, etc., on Clankart.",
        "Currently we only support selling of used books through Clankart Teleport.",
      
      ]
    },
    {
      q:"How much does it cost to post an Ad on Clankart?",
      a:[
        "Clankart is a free service and does not charge you any fees to post ads. Go ahead and enjoy it. All ads are subject to meeting the Terms of Use and Listing Policy.",
      ]
    },
    {
      q:"How can I post a Good Ad on Clankart and get better responses?",
      a:[
        "To increase the chance of getting a good response, follow these simple tips.",
        "Title - A good title will attract more visitors to your Ad. Mention important keywords in title.",
        "Description - Make the description as detailed as possible. Mention the honest description of the book's condition, including any wear and tear.",
        "Upload Images - Include upto 4 clear and high-quality pictures to enhance your Ad.",
        "Competitive Pricing - Set a reasonable price. Consider the book's condition, price at other platforms. Imagine the price you'd be willing to pay for it.",
      ]
    },
    {
      q:"Why am I unable to post ads on the site?",
      a:[
        "User's who violate Clankart's Terms of Use and Listing Policy, will not be able to post Ads. However, in case you are unable to post an ad for any other reason, please contact us at support@clankart.com and we will get back to you at the earliest.",
      ]
    },
    {
      q:"Safety Tips",
      a:[
        "There is no definite way to identify a fraudulent seller or buyer. We urge you to practice good judgment and keep the following tips in mind:",
        "How to sell safely?",
        "Use Clankart's messaging system for all communication with the seller. Avoid sharing personal contact information.",
        "Carefully read the product descriptions and conditions to ensure they meet your expectations before making a purchase.",
        "Utilize secure payment methods provided by Clankart. Avoid making payments directly to sellers outside the platform.",
        "Never share confidential information such as bank details, OTPs, passwords. Clankart will never ask for sensitive information through email or chat. Be cautious of phishing attempts.",
        "How to buy safely?",
        "Provide accurate and detailed descriptions of your items, including any wear and tear.",
        "Upload clear images of your items from different angles to give buyers a comprehensive view.",
        "Accept payments through Clankart's secure payment system. Avoid making transactions outside the platform.",
        "Respond to buyer inquiries and messages promptly. Clear communication builds trust.",
        "Never share confidential information such as bank details, OTPs, passwords. Clankart will never ask for sensitive information through email or chat. Be cautious of phishing attempts.",
        
      ]
    },
  ]


   }
);
console.log(questions.value.general[0].a)
const filteredQuestions = computed(() => {
  return questions.value[activeCategory.value] || []
  
});
console.log(questions.value[activeCategory.value])

const toggleQuestion = (index) => {
  const questionIndex = openQuestions.value.indexOf(index)
  if (questionIndex > -1) {
    openQuestions.value.splice(questionIndex, 1)
  } else {
    openQuestions.value.push(index)
  }
};
</script>