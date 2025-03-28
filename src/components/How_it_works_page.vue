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
      <section class="py-10  pt-[160px] bg-gray-100 bg-no-repeat bg-cover bg-right-top bg-[url('https://www.clankart.com/static-assets/static-bg.png')]">
    <div class="container  px-[30px]   md:px-12 lg:px-20">
      <div class="flex flex-col justify-between md:flex-row py-12 items-start">
        <!-- Banner Text Content -->
        <div class="md:w-1/2 text-center flex-1 md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold fancy-font">
            How to Sell Old Books Online in India?
          </h1>
          <p class="py-5 text-xl font-semibold text-gray-600">
            No matter if you are a student or a reader, sell your old books online throughout India on Clankart and earn some extra money in your account.
          </p>
        </div>

        <!-- Banner Image -->
        <div class="md:w-1/2 flex h-[239px] justify-center ">
          <img class="max-w-full h-[239px] md:h-auto" alt="Online Bookstore" src="https://www.clankart.com/static-assets/online-bookstore.png">
        </div>
      </div>
    </div>
  </section> 
  <!-- section-2 -->
  <section class="bg-[#f1faff] ">
    <!-- Curved SVG Top -->
    <div class="relative">
      <svg viewBox="15 12 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-7 w-full">
        <path d="M0 11C3.93573 11.3356 7.85984 11.6689 11.7725 12H1488.16C1492.1 11.6689 1496.04 11.3356 1500 11V12H1488.16C913.668 60.3476 586.282 60.6117 11.7725 12H0V11Z" fill="white"></path>
      </svg>
    </div>

    <div class="container mx-auto px-6 md:px-12 lg:px-10 pb-7">
      <h2 class="text-center text-3xl md:text-4xl font-bold fancy-font py-10">
        How to sell used books online in 
        <span class="relative inline-block px-1 text-blue-500">
          simple steps
          <img class="absolute bottom-0 w-full" src="https://keenthemes.com/metronic/assets/media/misc/hero-home-title-underline.svg" alt="">
        </span>
      </h2>

      <!-- Steps Container -->
      <div class="bg-white shadow-lg rounded-lg px-8 py-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in steps" :key="index" class="text-center  rounded-lg px-6  pt-6 pb-12  shadow-sm bg-[#cbf0f4]">
            <div class="text-white bg-blue-600 relative bottom-7 left-28 w-[50px] h-11 rounded-b-md py-3   text-sm ">Step {{ index + 1 }}</div>
            <img :src="step.image" alt="" class="w-12 h-12 mx-auto mb-4">
            <h3 class="font-semibold text-lg">{{ step.title }}</h3>
            <p class="text-gray-600 text-sm ">
              <span v-html="step.description"></span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Curved SVG Bottom -->
    <div class="relative">
      <svg class=" mt-7 w-full" viewBox="15 -1 1470 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 48C4.93573 47.6644 8.85984 47.3311 12.7725 47H1489.16C1493.1 47.3311 1497.04 47.6644 1501 48V47H1489.16C914.668 -1.34764 587.282 -1.61174 12.7725 47H1V48Z" fill="white"></path>
      </svg>
    </div>
  </section>
  <!-- section-3 -->
  <div class=" flex justify-center bg-[#fff] py-[3rem]">
          <iframe class="sm:w-[300px] md:w-[345px] lg:w-[395px] sm:h-[315px] xl:w-[560px] xl:h-[315px] rounded-lg" src="https://www.youtube.com/embed/Rwj6vi55hHw">

          </iframe>
        </div>
</template>
<script setup>
import { ref } from 'vue';

const steps = ref([
{
          image: "https://www.clankart.com/static-assets/seller-signup.svg",
          title: "Sign up for free",
          description: `<a href="/login-signup" target="_blank" class="text-blue-500 underline">Create a free account</a> on Clankart. All you need is an email and phone number.`,
        },
        {
          image: "https://www.clankart.com/static-assets/take-a-picture.svg",
          title: "Upload your books",
          description: `After signup, upload your books by clicking on <a href="/post-ad" target="_blank" class="text-blue-500 underline">'Sell Used Books'</a>.`,
        },
        {
          image: "https://www.clankart.com/static-assets/seller-ships.svg",
          title: "Receive & Ship Orders",
          description: `After receiving an order, pack it and ship it to the buyer's address.`,
        },
        {
          image: "https://www.clankart.com/static-assets/money-release.svg",
          title: "Receive Payments",
          description: `Payment is securely deposited to your bank/UPI account after the order is delivered.`,
        },
])
</script>