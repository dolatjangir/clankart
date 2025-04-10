<template>
    <!-- pop-up flex-->
    <div v-if="popup"  class="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-contrast-50 bg-opacity-50">
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
 

  <!-- duplicate -->
  <section class="py-6 bg-neutral-100 sm:py-8 md:py-10">
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
                  <i class="fas fa-chevron-down text-gray-500 transition-transform duration-200"></i>
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
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue'
  const popup = ref(false);
  const close = ref(true);
 const closebutton = () =>{
  close.value = !close.value
 }
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