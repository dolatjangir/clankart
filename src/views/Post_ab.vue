<template>
  <!-- header -->
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
    <!-- pop-up flex-->
    <div v-if="popup"  class="fixed  inset-0 z-50 flex items-center justify-center bg-transparent backdrop-contrast-50 bg-opacity-50">
      <div class="bg-white rounded-2xl w-full max-w-md shadow-lg">
        <!-- Modal Header with Tabs -->
        <div class="border-b p-4 flex justify-between items-center">
          <div class="flex space-x-4">
            <button
              class="font-medium"
              
              :class="tab === 'login' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'"
              @click="tab = 'login'"
            >Login</button>
            <button
              class="font-medium"
              :class="tab === 'signup' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'"
              @click="tab = 'signup'"
            >Sign Up</button>
            <button
              class="font-medium"
              :class="tab === 'forgot' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500'"
              @click="tab = 'forgot'"
            >Forgot Password?</button>
          </div>
          <button @click="popup = false"  class="text-gray-400 hover:text-red-500 text-xl">&times;</button>
        </div>
  
        <!-- Modal Body -->
        <div class="p-6">
          <!-- Login -->
          <form v-if="tab === 'login'" @submit.prevent="handleLogin">
            <div class="mb-4">
              <label class="block text-sm font-medium">Email or Phone</label>
              <input v-model="loginData.email" type="text" class="mt-1 input" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium">Password</label>
              <input v-model="loginData.password" type="password" class="mt-1 input" required />
            </div>
            <div class="flex items-center mb-4">
              <input type="checkbox" v-model="loginData.remember" class="mr-2" />
              <label>Keep me logged in</label>
            </div>
            <button type="submit" class="btn-primary w-full">Login</button>
          </form>
  
          <!-- Sign Up -->
          <form v-else-if="tab === 'signup'" @submit.prevent="handleSignup">
            <div class="mb-4">
              <label class="block text-sm font-medium">Email</label>
              <input v-model="signupData.email" type="email" class="mt-1 input" required />
            </div>
            <div class="mb-4">
              <label class="block text-sm font-medium">Password</label>
              <input v-model="signupData.password" type="password" class="mt-1 input" required />
            </div>
            <button type="submit" class="btn-primary w-full">Sign Up</button>
          </form>
  
          <!-- Forgot Password -->
          <form v-else @submit.prevent="handleForgot">
            <div class="mb-4">
              <label class="block text-sm font-medium">Email or Phone</label>
              <input v-model="forgotData.email" type="text" class="mt-1 input" required />
            </div>
            <button type="submit" class="btn-primary w-full">Send Reset Code</button>
          </form>
        </div>
      </div>
    </div>
    <!-- main page -->
  <section class="py-6 bg-neutral-100 sm:pb-8 sm:py-[140px] md:pb-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      <div class="card border border-gray-200 rounded-lg bg-white shadow-sm">
        <!-- Card Header -->
        <div class="card-header px-5 md:px-8 pt-5">
          <div class="card-title block">
            <h1 class="text-lg sm:text-xl font-bold text-gray-400">
              Submit a free classified ad to <strong class="text-gray-700">sell your used books for cash in India</strong>
            </h1>
            <p class="text-xs sm:text-sm mt-2">
              <a href="http://www.clankart.com/how-it-works" target="_blank" class="text-blue-500 hover:underline">
                Click here to learn how does it work?
              </a>
            </p>
          </div>
        </div>
        
        <!-- Card Body -->
        <div class="card-body px-5 md:px-8 py-4">
          <form class="space-y-6" id="post-form">
            <!-- Book Details Section -->
            <div class="space-y-6">
              <h3 class="text-lg font-bold text-gray-800">Book Details:</h3>
              
              <!-- Form Rows - Responsive Layout -->
              <div class="grid gap-4 sm:grid-cols-12">
                <!-- Ad Title -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Ad Title</label>
                </div>
                <div class="sm:col-span-9">
                  <input 
                    type="text" 
                    class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your ad title"
                    maxlength="70"
                  >
                  <p class="mt-1 text-xs text-gray-500">Example: "NCERT Maths for Class 10" or "Arihant Physics for Class 12"</p>
                </div>
                
                <!-- Book Details Selection -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Book Details</label>
                </div>
                <div class="sm:col-span-9 space-y-2">
                  <label class="flex items-center">
                    <input type="radio" name="book_details" value="manually" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-gray-700">Enter book details manually</span>
                  </label>
                  <label class="flex items-center">
                    <input type="radio" name="book_details" value="automatically" checked class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                    <span class="ml-2 text-gray-700">
                      Automatically; by ISBN number
                      <span class="text-blue-500 cursor-help ml-1" title="You can find ISBN number on the back of your book">
                        <i class="fas fa-question-circle"></i>
                      </span>
                    </span>
                  </label>
                </div>
                
                <!-- ISBN Input -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">ISBN</label>
                </div>
                <div class="sm:col-span-9">
                  <div class="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="number" 
                      class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter 13 digit ISBN number"
                      maxlength="13"
                    >
                    <button 
                    @click="popup = true"
                      type="button" 
                      class="px-4 py-1 sm:py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 whitespace-nowrap"
                    >
                      Get Book Details
                    </button>
                  </div>
                </div>
                
                <!-- Book Type -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Book Type</label>
                </div>
                <div class="sm:col-span-9">
                  <select class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Please select book type</option>
                    <option value="College+Books+%28Higher+Education+Textbooks%29">College Books</option>
                    <option value="Exam%2FTest+Preparation+Books">Exam/Test Preparation</option>
                    <option value="Reading+Books+%28Novels%2C+Children%2C+Business%2C+Literature%2C+History%2C+etc.%29">Reading Books</option>
                    <option value="School+Books+%28up+to+12th%29">School Books</option>
                  </select>
                </div>
                
                <!-- Book Condition -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Condition <span class="text-gray-500">(Used)</span></label>
                </div>
                <div class="sm:col-span-9">
                  <div class="flex flex-wrap gap-4">
                    <label class="inline-flex items-center">
                      <input type="radio" name="book_condition" value="excellent" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                      <span class="ml-2 text-gray-700">Excellent</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input type="radio" name="book_condition" value="good" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                      <span class="ml-2 text-gray-700">Good</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input type="radio" name="book_condition" value="fair" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                      <span class="ml-2 text-gray-700">Fair</span>
                    </label>
                  </div>
                </div>
                
                <!-- Upload Photos -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Upload Photos</label>
                </div>
                <div class="sm:col-span-9">
                  <div class="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:border-blue-500 transition">
                    <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <i class="fas fa-camera text-blue-500 text-xl sm:text-2xl"></i>
                      <p class="text-sm text-gray-600">
                        <span class="text-blue-500 font-medium">Click to upload</span>
                        <span class="hidden sm:inline"> up to 4 images (15MB max each)</span>
                      </p>
                    </div>
                  </div>
                  <p class="mt-2 text-xs text-gray-500">
                    Upload actual photos of your book (no downloaded cover images)
                  </p>
                </div>
                
                <!-- Quantity -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Quantity</label>
                </div>
                <div class="sm:col-span-9">
                  <select class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
              </div>
            </div>
            
            <!-- Pricing Section -->
            <div class="border-t border-dashed border-gray-200 pt-6">
              <h3 class="text-lg font-bold text-gray-800 mb-4">Pricing Details:</h3>
              
              <div class="grid gap-4 sm:grid-cols-12">
                <!-- Your Price -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Your Price (₹)</label>
                </div>
                <div class="sm:col-span-9">
                  <input 
                    type="number" 
                    class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter price"
                    maxlength="5"
                  >
                </div>
                
                <!-- Shipping -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Shipping</label>
                </div>
                <div class="sm:col-span-9">
                  <div class="flex flex-col sm:flex-row gap-3 items-center">
                    <input 
                      type="number" 
                      class="w-full sm:w-1/3 px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Shipping charges"
                      maxlength="3"
                    >
                    <div class="flex items-center gap-2">
                      <span class="text-gray-500 text-sm">or</span>
                      <label class="flex items-center gap-2">
                        <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                        <span class="text-gray-700">Free Shipping</span>
                      </label>
                    </div>
                  </div>
                  <p class="mt-1 text-xs text-gray-500">Buyers prefer free shipping</p>
                  <div class="mt-2 flex items-center">
                    <span class="text-green-600 font-medium">You'll earn: ₹<span class="font-bold">XXX</span></span>
                    <button class="ml-2 text-blue-500 hover:text-blue-700">
                      <i class="fas fa-info-circle"></i>
                    </button>
                  </div>
                </div>
                
                <!-- Payment Mode -->
                <div class="sm:col-span-3">
                  <label class="block text-sm font-medium text-gray-700">Payment Mode</label>
                </div>
                <div class="sm:col-span-9">
                  <p class="text-sm text-gray-600 mb-2">How would you like to receive payment?</p>
                  <div class="flex flex-wrap gap-4">
                    <label class="inline-flex items-center">
                      <input type="radio" name="payment_mode" value="upi" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                      <span class="ml-2 text-gray-700">UPI</span>
                    </label>
                    <label class="inline-flex items-center">
                      <input type="radio" name="payment_mode" value="bank" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                      <span class="ml-2 text-gray-700">Bank Account</span>
                    </label>
                  </div>
                  <p class="mt-1 text-xs text-gray-500">We'll ask for details when you receive an order</p>
                </div>
              </div>
            </div>
            
            <!-- Your Details Section -->
            <div class="border-t border-dashed border-gray-200 pt-6">
              <div class="card border border-gray-200 rounded-lg">
                <div class="card-header px-5 py-3 bg-gray-50 rounded-t-lg cursor-pointer flex justify-between items-center">
                  <h3 class="text-lg font-bold text-gray-800">Your Details:</h3>
                  <i @click="popup = true" class="fas fa-chevron-down text-gray-500 transition-transform duration-200"></i>
                </div>
                
                <div class="card-body px-5 py-4">
                  <div class="grid gap-4 sm:grid-cols-12">
                    <!-- Name -->
                    <div class="sm:col-span-3">
                      <label class="block text-sm font-medium text-gray-700">Name</label>
                    </div>
                    <div class="sm:col-span-9">
                      <input 
                        type="text" 
                        class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Your Name"
                      >
                    </div>
                    
                    <!-- Email -->
                    <div class="sm:col-span-3">
                      <label class="block text-sm font-medium text-gray-700">Email</label>
                    </div>
                    <div class="sm:col-span-9">
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <i class="fas fa-envelope text-gray-400"></i>
                        </div>
                        <input 
                          type="email" 
                          class="w-full pl-10 px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Email"
                          readonly
                        >
                      </div>
                      <p class="mt-1 text-xs text-blue-500">
                        <a href="/accounts/profile" class="hover:underline">Change email</a>
                      </p>
                    </div>
                    
                    <!-- Phone -->
                    <div class="sm:col-span-3">
                      <label class="block text-sm font-medium text-gray-700">Phone</label>
                    </div>
                    <div class="sm:col-span-9">
                      <div class="relative">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <span class="text-gray-500">+91</span>
                        </div>
                        <input 
                          type="tel" 
                          class="w-full pl-12 px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Phone Number"
                          maxlength="10"
                        >
                      </div>
                      <p class="mt-1 text-xs text-gray-500">WhatsApp number for order updates</p>
                      <label class="inline-flex items-center mt-2">
                        <input type="checkbox" class="h-4 w-4 text-blue-600 focus:ring-blue-500" checked>
                        <span class="ml-2 text-sm text-gray-700">Keep number private</span>
                      </label>
                    </div>
                    
                    <!-- Pincode -->
                    <div class="sm:col-span-3">
                      <label class="block text-sm font-medium text-gray-700">Pincode</label>
                    </div>
                    <div class="sm:col-span-9">
                      <select class="w-full px-3 py-2 bg-gray-50 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="">Your Pincode</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Submit Button -->
            <div class="text-center sm:text-left pt-4">
             
              <button 
            
                type="submit" 
                class="px-8 py-2 bg-yellow-300 text-gray-800 font-medium rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-colors"
              >
                Post Ad
              </button>
              <p class="mt-2 text-xs text-gray-500">
                By clicking "Post Ad", you agree to our 
                <a href="/terms" target="_blank" class="text-blue-500 hover:underline">Terms</a>, 
                <a href="/listing-policy" target="_blank" class="text-blue-500 hover:underline">Policy</a> and 
                <a href="/privacy-policy" target="_blank" class="text-blue-500 hover:underline">Privacy</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  <!-- save the plant img -->
  <div class="bg-gray-100 ">
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
   <!-- page-12 aboutus page -->
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
 <!-- page-13 aboutus page -->
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
 
  import { onMounted, ref } from 'vue'
  const popup = ref(false);
  const close = ref(true);

  onMounted(()=>{
    setTimeout(()=>{
        popup.value = true
    },2000);
  })
  const tab = ref('login')
  
  const loginData = ref({
    email: '',
    password: '',
    remember: false,
  })
  
  const signupData = ref({
    email: '',
    password: '',
  })
  
  const forgotData = ref({
    email: '',
  })
  
  function handleLogin() {
    console.log('Login:', loginData.value)
  }
  
  function handleSignup() {
    console.log('Signup:', signupData.value)
  }
  
  function handleForgot() {
    console.log('Forgot:', forgotData.value)
  }
  </script>
  
  <style scoped>
  .input {
    width: 100%;
  padding: 0.5rem 1rem; /* py-2 = 0.5rem, px-4 = 1rem */
  border: 1px solid #d1d5db; /* Tailwind's gray-300 */
  border-radius: 0.5rem; /* rounded-lg */
  outline: none;
  }
  .input:focus{
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5); 
  }
  .btn-primary {
    background-color: #2563eb; /* bg-blue-600 */
  color: #ffffff; /* text-white */
  padding: 0.5rem 1rem; /* py-2: 0.5rem for top & bottom, px-4: 1rem for left & right */
  border-radius: 0.5rem; /* rounded-lg */
  transition: background-color 0.3s ease;
  }
  .btn-primary:hover{
    background-color: #1d4ed8;
  }
  /* main page */
  .form-group {
  margin-bottom: 1.5rem;
}
.card {
  transition: all 0.3s ease;
}
.card-header {
  transition: background-color 0.3s ease;
}
.card-header:hover {
  background-color: #f8fafc;
  border-radius: 3%;
}
  </style>