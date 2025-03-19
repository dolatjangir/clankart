<template>
    <!-- Home.vue ki page-1 -->
<div class="header xl:h-[110px] sm:h-[60px] fixed bg-white z-20 w-screen  px-4 flex ">
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
  <!-- part-1 -->
    <div class="px-4">
  <div class="flex flex-col items-center py-10">
    <span class="text-gray-500 text-sm mb-2">Sponsored Content</span>
    <div class="w-[970px] h-[175px] bg-gray-200 flex items-center justify-center border border-gray-400">
      <p class="text-gray-600">Ad Placeholder</p>
    </div>
  </div>
  <!-- part-2 -->
  <section class="py-5 md:py-10">
    <div class="container px-4">
        <nav class="">
            <!-- Breadcrumbs -->
        <ol class="flex text-gray-600 text-sm font-semibold space-x-2">
            <li v-for="(item, index) in Breadcrumbs" :key="index" class="flex items-center" >
                <a v-if="item.url" :href="item.url" class="hover:text-blue-500">{{ item.name }}</a>
                <span v-else class="text-gray-400">{{ item.name }}</span>
                <span v-if="index < Breadcrumbs.length-1" class="mx-2">/</span>
            </li>
        </ol>
        </nav>
    </div>
  </section>
  <!-- part-3 -->

  <div class="container w-full max-w-full border border-neutral-100 rounded-lg shadow-2xl p-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <!-- Image Section -->
      <aside class=" border-r border-neutral-200 p-5">
        <div class="flex justify-end space-x-4 items-center mb-5">
          <button @click="shareItem" class="text-blue-500 hover:text-blue-700">
            <i class="fa fa-share"></i>
          </button>
          <button @click="toggleWishlist" class="text-red-500 hover:text-red-700">
            <i :class="wishlistClass"></i>
          </button>
        </div>
        <div class="bg-gray-100 py-3 border-b border-neutral-400 rounded">
        <div class=" px-[48.3px] border-b border-dotted border-neutral-400 py-3">
          <img :src="activeImage" :alt="product.title" class="w-[248px] h-[320px]  " />
        </div>
        <div class="flex space-x-2 mt-3 bg-gray-100 overflow-x-hidden">
          <img
            v-for="(img, index) in product.images"
            :key="index"
            :src="img"
            @click="activeImage = img"
            class="w-28 h-18 cursor-pointer  border rounded hover:border-blue-500"
          />
        </div></div>
      </aside>
      
      <!-- Product Details -->
      <main class="p-5">
        <h1 class="text-2xl font-bold mb-3">{{ product.title }}</h1>
        <div class="flex items-center mb-3">
          <strong class="text-primary text-lg">₹{{ product.price }}</strong>
          <span class="text-gray-500 line-through ml-3">₹{{ product.oldPrice }}</span>
        </div>
        <div class="mb-5 bg-green-100 text-green-700 px-3 py-1 font-semibold tracking-tight w-fit  border border-neutral-200">Shipping is available from the seller!</div>
        <button class="px-8 bg-blue-500 text-white py-2 rounded hover:bg-blue-600" @click="buyNow">
          <i class="fa-solid fa-cart-shopping"></i> Buy Now
        </button>

        <dl class="my-5 grid grid-cols-1 gap-3  overflow-y-scroll h-[250px]">
          <div v-for="(value,key) in bookDetails" :key="key" class="flex ">
          <dt class="font-semibold text-gray-700">{{key}}</dt>
          <dd class="text-gray-600 ml-14">{{ value }}</dd>
          
        </div>
        </dl>
        <!-- alerttttttt -->
        <div class="flex flex-col md:flex-row items-center justify-around rounded py-5 px-5 bg-gray-100">
    <div class="flex items-center">
      <span class="w-14 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black"></rect>
          <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black"></rect>
          <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black"></rect>
        </svg>
      </span>
      <div class="text-gray-800 font-semibold text-sm">
        Need more information (like availability) about this item?
      </div>
    </div>
    <div class="mt-4 md:mt-0">
      <form @submit.prevent="handleChat">
        <button type="submit" class="btn bg-blue-500 text-xs w-[110px] text-white px-3 py-4 rounded-md shadow-md hover:bg-blue-600">
          Chat with Seller
        </button>
      </form>
    </div>
  </div>
      </main>
    </div>
  </div>
  <!-- page-4 -->
  <div class="container w-full max-w-full border border-gray-300 rounded-lg my-10 shadow-lg">
    <div class="grid md:grid-cols-2 py-10">
      
      <!-- Description Box -->
      <div class="px-5">
        <div class="text-2xl font-bold mb-5">Description</div>
        <p class="text-gray-700">As per new CBCS syllabus for BCA and Engineering students</p>

        <div class="text-gray-600 mt-10">
          <p class="text-lg underline mb-1">Our Community</p>
          <p>
            We're not just another shopping website where you buy from professional sellers 
            <span class="bg-gradient-to-r from-[#ce1212] to-[#6218ff] bg-clip-text text-transparent">
              - we are a vibrant community of students, book lovers across India
            </span> who deliver happiness to each other!
          </p>
        </div>

        <div class="bg-gray-100 py-4 mt-5 grid grid-cols-1 sm:grid-cols-3 px-5">
          <span class="text-sm text-gray-800">Ad Id: 3691740725081972</span>
          <span class="text-sm text-gray-800">Updated: Fri, 28 Feb 2025</span>
          <span class="text-sm text-gray-800 flex items-center">
            <i class="bi bi-eye-fill text-gray-400 mr-1"></i> 35 Views
          </span>
        </div>
      </div>

      <!-- Seller Details -->
      <div class="px-5 mt-10 md:mt-0">
        <div class="text-2xl font-bold mb-5">Sold By</div>
        <dl class="grid grid-cols-3 items-center">
          <dt class="relative">
            <i class="fa-regular fa-user text-2xl"></i>
            <span class="absolute top-0 left-5 h-2.5 w-2.5 bg-yellow-400 rounded-full"></span>
          </dt>
          <dd class="col-span-2">
            <a href="https://www.clankart.com/profile?864f5dbcade4d4314d3a47b69e205f4e" class="text-lg font-bold text-gray-900 hover:text-blue-500">
              Disha Dii
            </a>
            <span class="text-green-500 text-sm ml-2">✔ Verified</span>
          </dd>

          <dt><i class="fa-solid fa-location-dot text-2xl pt-6"></i></dt>
          <dd class="col-span-2 text-gray-900">Kolar, KARNATAKA</dd>
        </dl>

        <div class="flex justify-center mt-5">
          <a href="https://www.clankart.com/profile?864f5dbcade4d4314d3a47b69e205f4e" class="px-4 py-2 bg-blue-100 text-blue-500  rounded-lg hover:bg-blue-600">
            VISIT SELLER'S PROFILE
          </a>
        </div>
      </div>

    </div>
  </div>

  <!--  -->
  <div class="text-end py-6">

    <span class="text-neutral-400" >Advertisment</span>
  </div>

  <!-- part-5 -->
  <section class="more-info-container">
    <div class="card border border-neutral-200 shadow-md p-6 rounded-lg">
      <div class="card-header">
        <span class="text-xl font-bold py-2">How does it work?</span>
      </div>

      <div class="card-body">
        <div class="flex overflow-x-auto space-x-4">
          <div class="w-[728px]  flex-shrink-0" v-for="(step, index) in steps" :key="index">
            <div class="card bg-[#ffe3a9] shadow-lg rounded-lg px-4">
              <div class="card-header flex justify-between">
                <div class="ribbon-label bg-primary text-white bg-blue-500 h-[46px] px-3 py-1 relative  z-10 left-[628px]  rounded-b-lg">{{ step.label }}</div>
              </div>
              <div class="card-body flex items-center  pb-0">
                <div class="flex flex-col flex-grow pb-5 pl-2 mr-2">
                  <span class="text-lg font-semibold mb-2">{{ step.title }}</span>
                  <p class="text-gray-600 text-sm">{{ step.description }}</p>
                </div>
                <img :src="step.image" alt="" class="h-16 relative right-3.5 bottom-3" />
              </div>
            </div>
          </div>
        </div>

        <div class="mt-5 grid md:grid-cols-2 gap-8">
          <div class="faq-highlights">
            <h6 class="pl-5 text-lg font-bold">Frequently Asked Questions</h6>
            <div v-for="(faq, index) in faqs" :key="index" class="mb-4">
              <div @click="toggleFaq(index)" class="flex items-center cursor-pointer py-3">
                <span class="font-semibold text-neutral-600">{{ faq.question }}</span>
              </div>
              <p v-if="faq.open" class="text-gray-600 mt-2 pl-6">{{ faq.answer }}</p>
            </div>
            <div class="flex justify-center">
    <a
      href="/faq"
      target="_blank"
      class="px-6 py-3 text-nowrap border border-blue-500 text-blue-500 bg-white hover:bg-blue-50 transition-all rounded-lg"
    >
      View All Frequently Asked Questions (FAQs)
    </a>
  </div>
          </div>
          <div class="flex justify-center items-center ">
            <iframe class="rounded shadow-lg " width="560" height="315" src="https://www.youtube.com/embed/Rwj6vi55hHw" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <!--  -->
      <div class="flex  gap-3 py-12 mx-0">
    <div
      v-for="(card, index) in cards"
      :key="index"
      class="w-full md:w-1/3 mb-10 md:mb-0"
    >
      <div
        class="rounded-lg shadow-sm  border-transparent"
        :style="{ backgroundColor: card.bgColor }"
      >
        <div class="flex px-4 py-8">
          <div class="m-0">
            <span class="text-lg  text-gray-800">{{ card.title }}</span>
            <span class="relative text-lg tracking-tight  block">
              <span class="font-bold text-base" :style="{ color: card.textColor }">
                {{ card.description }}
              </span>
            </span>
          </div>
          <img
            :src="card.image"
            class="self-center h-[70px]"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
    </div>
  </section>
  <!-- part-6 -->
  <section class="flex  flex-wrap mx-0 mt-10">
    <!-- Buyer Guidelines -->
    <div class=" md:w-1/2 mb-6 px-0">
      <h6 class="pl-5">Buyer Guidelines</h6>
      <div class="rounded-lg">
        <div class="p-5">
          <ul class="mb-3 list-disc pl-5 text-neutral-500">
            <li>
              "Chat with seller and ask questions to be clear on product details.",<br/>
  "Do not share your password, PIN, OTP. We will never ask you to share such confidential information with us or anyone.",
  <br/> "Always use secure online payment methods provided by Clankart to ensure a safe transaction experience.",
  <br/>"Avoid sharing your personal contact details.",
  <br/>'Please make sure to follow our <a href="/chat-guidelines" target="_blank">Chat Guidelines</a> to ensure a safe conversation.',
            </li>
          </ul>
          <p class="text-base mb-0 pl-3 underline text-gray-600">
            When buying offline:
          </p>
          <ul class="list-disc pl-5 text-neutral-500">
            <li  >
              "Be careful when paying offline.",
              <br/>"Use a safe location to meet seller.",
              <br/> "Do not deposit/transfer money to bank or any third-party payment gateways without verifying the credentials.",
              <br/> "Beware of unrealistic offers.",
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Adsense Card (Optional) -->
    <!-- Uncomment if needed -->
    <!-- <div class="w-full md:w-1/2 mb-6 px-0 flex flex-col items-center justify-center">
      <span class="text-gray-500">Advertisement</span>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3487125379538998" data-ad-slot="1312038437"></ins>
    </div> -->
  </section>
  <!--  -->
  <div class="py-10 bg-neutral-200"></div>
  <!-- page-7 -->
    <!-- page-12 -->
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
 <!-- page-13 -->
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
</div>
</template>
<script setup>
import { compile, computed, ref } from 'vue';
const Breadcrumbs = ref([
    {name:"Home",url:"/"},
    {name:"Books",url:"books/view-all"},
    {
        name: "Reading Books (Novels, Children, Business, Literature, History, etc.)",
        url: "/books/view-all?type=Reading+Books+(Novels%2C+Children%2C+Business%2C+Literature%2C+History%2C+etc.)"
      },
      { name: "Computers & Internet", url: "/books/view-all?category=Computers+%26+Internet" },
      { name: "Data structure using C", url: null }
]);

const handleChat =()=>{
  alert("this feature comming soon!")
}
const bookDetails= ref({
  "Book Condition": "Excellent",
  "Subject/Title": "Data structure using C",
  "Type": "Reading Books (Novels, Children, Business, Literature, History, etc.)",
  "Category": "Computers & Internet",
  "Author": "Srikanth S",
  "Year": "2020"
})
const product = ref({
  title:"Data Structure using C",
  price:180,
  oldPrice:250,
  condition: "Excellent",
  images:[
  "https://www.clankart.com/user-uploads/advert/Data_structure_using_C1740727433394.jpg",
    "https://www.clankart.com/user-uploads/advert/Data_structure_using_C1740725081231.jpg",
    "https://www.clankart.com/user-uploads/advert/Data_structure_using_C1740725082748.jpg",
    "https://www.clankart.com/user-uploads/advert/Data_structure_using_C1740725082529.jpg",
    "https://www.clankart.com/user-uploads/advert/Data_structure_using_C1740725081288.jpg",
    "https://www.clankart.com/user-uploads/advert/Data_structure_using_C1740725082748.jpg",
  ] 
});
const activeImage = ref(product.value.images[0]);
const isWishlisted = ref(false);

const wishlistClass = computed(()=>(isWishlisted.value ? "fa-regular fa-heart" : "fa-solid fa-heart"));
const toggleWishlist =()=>{
  isWishlisted.value = !isWishlisted.value
};
const shareItem =()=>{
alert("share functionalty to be implemented")
};
const  buyNow =()=>{
alert("redirecting to checkout...");
};

const steps = ref( [
        { label: 'Step 1', title: 'Seller posts an Ad', description: 'Seller posts an ad on Clankart to sell their used books.', image: 'https://www.clankart.com/static-assets/seller-adve.svg' },
        { label: 'Step 2', title: 'Buyer Pays Online', description: 'Buyer makes an online payment to Clankart to buy those books.', image: 'https://www.clankart.com/static-assets/buyer-payment.svg' },
        { label: 'Step 3', title: 'Seller ships the books', description: 'Seller then ships the books to the buyer.', image: 'https://www.clankart.com/static-assets/seller-ships.svg' },
        { label: 'Step 4', title: 'Seller gets the payment', description: 'Payment is released to the seller after buyer receives the books.', image: 'https://www.clankart.com/static-assets/money-release.svg' }
      ]);
     const faqs = ref( [
        { question: 'As a buyer, why should I use Clankart Teleport?', answer: 'You should use Clankart Teleport because after you place the order, seller will receive the payment only after you receive the product. With which you will have a confidence that your payment will only be released to seller after you receives the exact product.You can purchase the used books from any seller across India with confidence.' , open: false },
        { question: 'What if the seller doesn\'t ship the item to buyer?', answer: 'If the items are not shipped within 4 days of order placement, then that order will be auto cancelled and the full money will be refunded back into to the buyers original payment method.', open: false },
        { question: 'What types of payment methods can a buyer use?', answer: 'The buyer can pay through any of the following modes: Credit Card, Debit Card, Net Banking, UPI and Wallets.', open: false }
      ]);

      const toggleFaq= (index)=>{
        faqs.value[index].open = !faqs.value[index].open
      }

      const cards = ref([
        {
          title:"Clankart Trust",
          title: "Clankart Trust",
    description: "Safe and secure online payment process",
    bgColor: "rgb(219, 238, 244)",
    textColor: "rgb(37, 124, 152)",
    image: "https://www.clankart.com/static-assets/safe-and-secure-transaction.png",
        },
        {
    title: "Clankart Intermediary",
    description: "Payment is not directly made to seller",
    bgColor: "rgb(219, 243, 237)",
    textColor: "rgb(39, 103, 67)",
    image: "https://www.clankart.com/static-assets/clankart-intermediary.png",
  },
  {
    title: "Clankart Chats",
    description: "Easy communication with sellers for any queries",
    bgColor: "rgb(242, 237, 252)",
    textColor: "rgb(85, 56, 155)",
    image: "https://www.clankart.com/static-assets/seller-chat.png",
  },
      ])
</script>