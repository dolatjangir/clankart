<template>
        <!-- Home.vue ki page-1 -->
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
    <div class="px-[30px] pt-[120px] mx-10">
  
        <section class="p-2">
            <!-- 1 -->
            <div class="py-4  ">
    <h1 class="text-3xl font-bold text-gray-800">Feedback form (No Email required)</h1>
  </div>
  <!-- 2 -->
  <div class=" bg-blue-50 w-fit  shadow-sm">
    <div class="text-center">
      <span class=" text-md text-neutral-600 font-medium">
        Thanks for using Clankart! We'd love to know a bit more about your experience with us.
      </span>
    </div>
  </div>
  <!-- 3 -->
  <div class="py-4  ">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3 class="text-2xl font-semibold text-gray-800">How would you rate our:</h3>
        <div class="relative ml-2">
          <span class="text-black font-bold  rounded-full">*</span>
          <div class="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Required
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 4 -->
  <div class="py-4">
    <div class="overflow-x-auto">
      <table class="w-full text-center ">
        <thead>
          <tr class="border border-gray-200">
            <th class="p-3 font-semibold text-gray-700"></th>
            <th
              v-for="(option, index) in options"
              :key="index"
              class=" p-1 border border-gray-200 font-normal text-gray-700"
            >
              {{ option }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, index) in rows"
            :key="index"
            class=" border border-gray-200 hover:bg-gray-50"
          >
            <th class=" p-[5px] font-normal text-left text-gray-700">{{ row.label }}</th>
            <td
              v-for="(option, optionIndex) in options"
              :key="optionIndex"
              class="p-1 border   border-gray-200"
            >
              <input
                type="radio"
                :name="`matrix_row_${index}`"
                :aria-label="option"
                class="form-radio h-4 w-4  text-blue-600"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <!-- 5 -->
  <div class="py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3 class="text-2xl font-semibold text-gray-800">
          Where did you hear about Clankart?
        </h3>
        <div class="relative ml-2">
          <span class="font-bold">*</span>
          <div class="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Required
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 6 -->
   <div class="container ">
    <!-- 1 -->
  <div class="p-2 mb-3 w-fit rounded-lg border border-neutral-300">
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-5 h-5 flex items-center justify-center bg-neutral-500 text-white font-bold rounded-sm">
          A
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 hidden text-blue-600"
        />
        <label for="choice" class="ml-2 font-semibold text-gray-700">
          Google (Search Results)
        </label>
      </div>
    </div>
  </div>
    <!-- 2 -->
  <div class="p-2 mb-3 w-fit rounded-lg border border-neutral-300">
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-5 h-5 flex items-center justify-center bg-neutral-500 text-white font-bold rounded-sm">
          B
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 hidden text-blue-600"
        />
        <label for="choice" class="ml-2 font-semibold text-gray-700">
          Social media
        </label>
      </div>
    </div>
  </div>
    <!-- 3 -->
    <div class="p-2 mb-3 w-fit rounded-lg border border-neutral-300">
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-5 h-5 flex items-center justify-center bg-neutral-500 text-white font-bold rounded-sm">
          C
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 hidden text-blue-600"
        />
        <label for="choice" class="ml-2 font-semibold text-gray-700">
          Friends
        </label>
      </div>
    </div>
  </div>
</div>
 <!-- 7 -->
 <div class="py-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <h3 class="text-2xl font-semibold text-gray-800">
          You visited Clankart as a?
        </h3>
        <div class="relative ml-2">
          <span class="font-bold">*</span>
          <div class="absolute bottom-full mb-2 hidden group-hover:block bg-gray-800 text-white text-xs px-2 py-1 rounded">
            Required
          </div>
        </div>
      </div>
    </div>
  </div>
   <!-- 8 -->
   <div class="container ">
    <!-- 1 -->
  <div class="p-2 mb-3 w-fit rounded-lg border border-neutral-300">
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-5 h-5 flex items-center justify-center bg-neutral-500 text-white font-bold rounded-sm">
          A
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 hidden text-blue-600"
        />
        <label for="choice" class="ml-2 font-semibold text-gray-700">
         Buyer
        </label>
      </div>
    </div>
  </div>
    <!-- 2 -->
  <div class="p-2 mb-3 w-fit rounded-lg border border-neutral-300">
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-5 h-5 flex items-center justify-center bg-neutral-500 text-white font-bold rounded-sm">
          B
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 hidden text-blue-600"
        />
        <label for="choice" class="ml-2 font-semibold text-gray-700">
          Seller
        </label>
      </div>
    </div>
  </div>
    <!-- 3 -->
    <div class="p-2 mb-3 w-fit rounded-lg border border-neutral-300">
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-5 h-5 flex items-center justify-center bg-neutral-500 text-white font-bold rounded-sm">
          C
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 hidden text-blue-600"
        />
        <label for="choice" class="ml-2 font-semibold text-gray-700">
         User
        </label>
      </div>
    </div>
  </div>
</div>

  <!-- 9 -->
  <div class="py-4">
    <fieldset role="group">
      <legend class="text-2xl font-semibold text-gray-800 mb-4 flex flex-row gap-2">
        How would you rate us overall?<span class="font-bold">*</span>
      </legend>
      
      <div class="flex items-center space-x-3">
        <div
          v-for="star in 5"
          :key="star"
          class="flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="transparent"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-8 w-8 text-gray-400 hover:text-yellow-400 cursor-pointer"
          >
            <path
              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
            />
          </svg>
         
         
        </div>
      </div>
    </fieldset>
  </div>
  <!-- 10 -->
   <div class="section">
  <div class="pt-6 mb-4">
    <div class="flex items-center">
      <div class="flex-grow">
        <h3 class="text-2xl font-semibold text-gray-800">How can we make Clankart better for you?</h3>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="">
    <div class="flex flex-col">
      <div class="w-full">
        <textarea
          id="30a68619-ab1f-4894-adb4-99b8b4976d21"
          placeholder="Optional"
          aria-label="What do you enjoy the most about Clankart?"
          aria-required="false"
          aria-invalid="false"
          class="w-full p-2 h-24 shadow-sm border border-gray-300  placeholder:text-neutral-400 placeholder:font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>
    </div>
  </div>
</div>
 <!-- 11 -->
 <div class="section">
  <div class="pt-6 mb-4">
    <div class="flex items-center">
      <div class="flex-grow">
        <h3 class="text-2xl font-semibold text-gray-800">What do you enjoy the most about Clankart?</h3>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="  mb-2">
    <div class="flex flex-col">
      <div class="w-full">
        <textarea
          id="30a68619-ab1f-4894-adb4-99b8b4976d21"
          placeholder="Optional"
          aria-label="What do you enjoy the most about Clankart?"
          aria-required="false"
          aria-invalid="false"
          class="w-full p-2 h-24 shadow-sm border border-gray-300  placeholder:text-neutral-400 placeholder:font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
      </div>
    </div>
  </div>
</div>
<!-- 12 -->
<div class="pt-6 mb-4">
    <div class="flex items-center">
      <div class="flex-grow">
        <h3 class="text-2xl font-semibold text-gray-800">Any screenshots you'd like to add?</h3>
      </div>
    </div>
  </div>
 <!--  -->
<div class="bg-white border border-dashed border-neutral-400 shadow-md rounded-lg p-6 mb-4">
    <div class="flex flex-col items-center">
      <!-- Hidden file input -->
      <input
        type="file"
        class="hidden"
        id="file-upload"
        aria-label="Any screenshots you'd like to add?"
        aria-required="false"
        aria-invalid="false"
      />
      <!-- Custom file upload button -->
      <label
        for="file-upload"
        class="cursor-pointer  font-semibold px-6 py-3 rounded-lg text-neutral-300 hover:bg-blue-100 transition-colors duration-200 flex items-center space-x-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-upload"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="17 8 12 3 7 8"></polyline>
          <line x1="12" x2="12" y1="3" y2="15"></line>
        </svg>
        <span>Click to choose a file or drag here</span>
      </label>
      <!-- Size limit text -->
      <div class="text-sm text-gray-500 mt-2">Size limit: 10 MB</div>
    </div>
  </div>
  <!-- 13 -->
  <div class="flex flex-row items-center justify-between space-y-4 pt-8 mb-6">
    <!-- Submit Button -->
    <button
      type="submit"
      aria-label="Submit"
      class="flex items-center justify-center mt-4 bg-black font-semibold text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
    >
      <span class="mr-2">Submit</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-arrow-right"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </button>

    <!-- Powered by Tally -->
    <div class="text-sm text-gray-500 border border-neutral-300 rounded-sm p-2">
      <a
        href="https://tally.so?utm_source=tally&utm_medium=website&utm_campaign=powered-by_embed&version=6"
        target="_blank"
        rel="noopener"
        class="flex items-center space-x-1 text-pink-400 hover:text-gray-700 transition-colors duration-200"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99169 2.39306C9.99169 3.27827 9.66489 4.49613 9.18309 6.13269L8.83837 7.38966L9.92921 6.67715C12.0027 5.2211 13.2549 4.67462 14.0838 4.67462C15.0266 4.67462 16 5.34831 16 6.68815C16 8.39252 14.1804 8.8767 10.6672 8.9364L9.35372 8.99811L10.3896 9.82276C12.8489 11.7184 13.7015 12.647 13.7015 13.8238C13.7015 14.7498 12.8408 15.7144 11.7737 15.7144C10.1704 15.7144 9.44568 14.0483 8.46877 11.2197L7.97078 9.99025L7.50229 11.2197C6.40739 14.4325 5.56468 15.6849 4.16787 15.6849C3.04174 15.6849 2.2401 14.6612 2.2401 13.7942C2.2401 12.4993 3.41711 11.4228 5.58146 9.82276L6.61736 8.99811L5.33333 8.9364C1.60214 8.90626 0 8.36962 0 6.6586C0 5.31875 1.00351 4.64506 1.92835 4.64506C3.04521 4.64506 4.2633 5.39844 6.07135 6.67715L7.1622 7.38966L6.81748 6.13269C6.2952 4.40746 6.04995 3.14179 6.04995 2.39306C6.04995 1.22098 6.71048 0.25 8.00028 0.25C9.31959 0.25 9.99169 1.22098 9.99169 2.39306Z"
            fill="currentColor"
          ></path>
        </svg>
        <span class="font-semibold text-md text-black">Made with Tally</span>
      </a>
    </div>
  </div>

  <!-- last-section bottom -->
       <!-- aboutus page -->
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

        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue';
 const rows = ref([
 { label: "Website User Experience" },
        { label: "Website Visual Design" },
        { label: "Website Navigation" },
        { label: "Overall Website Quality" },
 ]);

 const options = ref(["Worst", "Bad", "Average", "Good", "Great"]);
</script>