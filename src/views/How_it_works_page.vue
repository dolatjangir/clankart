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
        <!-- section-4 -->
         <div class="px-[30px] mx-10">
          <h1 class=" text-center text-3xl font-bold py-[32.5px] mb-[6.5px]">Here's a step-by-step guide how to post ad on Clankart</h1>
        <!-- details-section -->
        <div class="details-section pb-20">
    <h4 class="border-l-4 border-[#008bcf] pt-[6px] pr-[20px] pl-[12px] pb-[10px] rounded-xs bg-gradient-to-r from-[#e0f5ff] via-[#e0f5ff] to-white w-fit mb-6 text-2xl font-semibold text-gray-800">Sign Up for Free</h4>

    <div class="ml-5">
      <p class="   ">
        To start selling your books on Clankart, you need to first create an account on Clankart.
        Creating the account is very simple. All you need is:
      </p>
      <div class="flex justify-center gap-6 mt-6">
        <div class="w-32 p-6  shadow-xl rounded-lg text-center">
          <div class="text-xl text-blue-600"><i class="fa fa-at font-bold"></i></div>
          <div class="text-lg font-semibold">Email</div>
        </div>
        <div class="w-32 p-6  shadow-xl rounded-lg text-center">
          <div class="text-3xl text-green-600"><i class="text-blue-600 fa-brands fa-whatsapp"></i></div>
          <div class="text-lg font-semibold">Phone Number</div>
        </div>
      </div>
    </div>
  </div>
  <!-- details-section-2 -->
   <div>
    <h4 class="border-l-4 border-[#008bcf] pt-[6px] pr-[20px] pl-[12px] pb-[10px] rounded-xs bg-gradient-to-r from-[#e0f5ff] via-[#e0f5ff] to-white w-fit mb-5 text-2xl font-semibold text-gray-800">Listing your Books</h4>
    <div class="px-5 pb-20">
    <p>It is very easy to upload your books on Clankart for sale! Your books ad gets live instantly after you post it.</p>
    <h5 class="border-l-4 border-neutral-400 py-1  pl-3 font-bold text-xl mt-10 mb-5">How to Upload your Book for Sale?</h5>
    <p class="font-serif">
      Once you signup, go to
      <a href="/post-ad" target="_blank" class="text-blue-500">Sell Used Books</a>
      page and upload your book for sale. The process to list your book is simple.
    </p>

    <!-- Book Details Section -->
    <p class=" mb-3">At that page, you will see the <span class="font-bold text-neutral-600">'Book Details'</span> section:</p>
    <img class="max-w-full max-h-[350px] rounded-lg  shadow-sm" alt="" src="https://www.clankart.com/static-assets/post-adv-step1.png" />

    <ul class="list-disc pl-5 mt-3">
      <li class="mb-3">
        The first field is for the <span class="font-bold text-neutral-600">Ad Title</span>. Enter a descriptive title for your ad that accurately represents the book you are selling.
      </li>
      <li class="mb-3">
        The next field is <span class="font-bold text-neutral-600">Book Details</span>. You can enter details manually or use the 13-digit ISBN number.
        <ul class="list-disc pl-5 mt-2">
          <li class="mb-3">
            If you select the <span class="font-bold text-neutral-600">'Automatically; by just typing the ISBN number'</span> option, Clankart will fetch details automatically.
          </li>
          <li class="mb-3">
            If the book doesn't have an ISBN, you can enter details manually by selecting <span class="font-bold text-neutral-600">'Enter book details manually'</span>.
          </li>
        </ul>
      </li>
      <li>
        <span class="font-bold text-neutral-600">Book Condition</span>: Choose the condition that best reflects the book’s actual state.
      </li>
      <li>
        <span class="font-bold text-neutral-600">Upload Photos</span>: Upload at least 3 high-quality photos to increase your chances of getting an order.
      </li>
    </ul>

    <div class="my-10 border-b border-neutral-300"></div>

    <!-- Pricing Details Section -->
    <p>Next, you will see the <span class="font-bold text-neutral-600">'Pricing Details'</span> section:</p>
    <img class="max-w-full max-h-[350px] rounded-lg  shadow-sm" alt="" src="https://www.clankart.com/static-assets/post-adv-step2a.png" />

    <ul class="list-disc pl-5 mt-3 py-3">
      <li>Then is
        <span class="font-bold text-neutral-600">Your Price</span> field. In this field you set the price for the book at which you want to sell it. Try to list a reasonable price based as this increases the chances of attracting potential buyers and making a sale.
      </li>
      <div class="p-4 bg-green-100 rounded-md shadow-md">
        <ul class="list-disc pl-5">
          <li class="py-4">
            Clankart acts as an intermediary in the transaction.<span class="font-bold text-neutral-900"> Collecting payment from the buyer and releasing payment into the seller account will be the responsibility of Clankart.</span> All you will need is to ship the book to the buyer once you receive an order.
          </li>
          <li class="py-4">
           <span class="font-bold text-neutral-900"> When a buyer purchases a book, they make the payment to Clankart.</span> Clankart notifies the seller that they have received an order for their book and the payment is held securely by Clankart. This means that <span class="font-bold text-neutral-900">the seller can ship the item to the buyer with confidence, knowing that Clankart has already received the order payment from the buyer and they will receive the payment once the book is received to the buyer.</span> This process ensures seller payment security and builds trust between the buyer and seller
          </li>
          <li class="py-4">
            Clankart assures the seller that they will receive the payment for their sale once the buyer receives the item.
          </li>
          <li class="py-4">
            Clankart enables sellers to sell books with confidence, no matter where they are located in India while also enjoying the convenience and security of the transaction process provided by Clankart.
          </li>
          <li class="py-4">
            No need to complete the transaction offline with the buyer for making payment arrangements and coordinating a meet-up to exchange the book.
          </li>
        </ul>
      </div>
      <li class="py-4">
        Next is
        <span class="font-bold text-neutral-400">'Your shipping charges to buyer</span>When a user selects the option to ship the book to a buyer, you will also be asked to specify your shipping charges to the buyer upfront. This is the amount the buyer will need to pay to you in addition to the book's price in order to cover the cost of shipping.
      </li>
      <li class="py-4">
        Next is 
        <span class="font-bold text-neutral-400"> 'Preferred Payment Mode'</span>Then you need to specify your preferred mode of payment for receiving the payment from Clankart once the book is sold. Please note that seller will be asked to provide these details only after they receive an order for their book.
      </li>
    </ul>

    <div class="my-10 border-b border-neutral-400"></div>

    <!-- Your Details Section -->
    <p>Next, is the <span class="font-bold text-neutral-400">'Your Details'</span> section:</p>
    <img class="max-w-full max-h-[350px] rounded-lg shadow-sm" alt="" src="https://www.clankart.com/static-assets/post-adv-step4.png" />

    <ul class="list-disc pl-5 mt-3">
      <li class="py-3">
        This is one time step only. Here you need to provide your information, such as name, email address, phone number and pincode. Please note that your email address and phone number will not be shared to the buyer.
      </li>
    </ul>

    <p class="mt-5">
      Last, simply click on the
      <a href="https://www.clankart.com/post-ad" target="_blank" class="btn btn-sm bg-yellow-400  px-3 py-1 rounded">Post Ad</a>
      button. After clicking the button, the book ad will go live on Clankart. From there, interested buyers can view the book details, contact you with 'Chat button' for any questions, and make an offer to purchase the book if they are interested.


    </p>
  </div> 
  </div>
  
        </div>
        <!-- section-3 -->
        <div class="w-full bg-white overflow-hidden box-border marquee-container">
    <p class="inline-block w-full text-8xl font-extrabold marquee-text m-0 animate-marquee">
      BUY. SELL. REUSE. REPEAT.
    </p>
  </div>
        <!-- section-4 -->
  <div class="bg-white  ">
    <!-- Desktop Image -->
    <img 
      src="https://www.clankart.com/static-assets/about-us-footer.png" 
      alt="save the planet" 
      class="hidden md:block w-full"
    >
    <!-- Mobile Image -->
    <img 
      src="https://www.clankart.com/static-assets/about-us-footer-m.png" 
      alt="save the planet" 
      class="block md:hidden w-full"
    >
  </div>
  <!-- section-5 -->
   <!--  aboutus page-1  -->
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
<style scoped>
@keyframes marquee {
    0%{transform: translateX(100%);}
    100%{transform: translateX(-100%);}
}

.animate-marquee{
    display: inline-block;
    white-space: nowrap;
    animation: marquee 10s linear infinite;
}
</style>