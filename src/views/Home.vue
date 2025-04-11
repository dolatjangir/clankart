<template>
<div>
  <!-- page-1 -->
<div class="header xl:h-[110px] sm:h-[60px] fixed bg-white z-20 w-screen   flex ">  
    <div class="inner-header 2xl:mx-[19.5px] pl-2 w-screen flex flex-row items-center justify-between">
        
      <div class="clankart-img flex items-center justify-between xl:ml-[6.5px] 2xl:h-[55px] 2xl:w-[150px]  sm:h-[40px] xl:w-[120px] xl:h-[48px] xl:pl-2 2xl:mr-[32.5px] sm:mr-4">
       <!-- hamburger -->
       <div class="sm:flex xl:hidden sm:pl-[6px]">
            <i class="text-xl fa-solid fa-bars"></i>
        </div><RouterLink to="/">
        <a href="/" class="py-[5.7px] pl-4 ">
          <img class="2xl:w-[150px] 2xl:h-[55px] sm:w-[120px] sm:h-[48px] " width="150" height="55" src="https://www.clankart.com/user-uploads/static-assets/logo.png"/>
        </a></RouterLink>
      </div>
      <div class="header-secondory-things mb-4 flex flex-row sm:hidden xl:flex">
      <div class="header-search-bar mr-[16.2px] h-[47px] flex">
        <div class="border border-[#0083ca] flex flex-row w-[358px]">
        <input class="px-[13px] py-[9.7px] w-full" placeholder="Book Name/Author/Subject/Publiser"/></div>
        <button class="bg-[#0083ca] px-[20.5px] py-[10.7px] text-white text-lg">Search</button>
       
    </div>
     <div class="mr-[26px] yellow-button ">
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
 <!-- page-2 -->
 <div class="page-2 bg-[url('https://www.clankart.com/static-assets/big-image-books.webp')] bg-fixed  bg-no-repeat bg-center  bg-cover xl:h-[400px] sm:h-[318px] w-fit">
    <div class="2xl:mx-[173.5px] xl:mx-[104px] sm:mx-[21px] text-center  pt-[65px]">
      <div class="text-white ">
      <h1 class="pb-[6.5px] font-serif font-semibold text-center sm:text-lg xl:text-2xl">Buy and Sell Old Books Online in India for Actual Money!</h1>
      <p class="pt-5 2xl:mb-[1rem] sm:text-lg xl:text-xl font-semibold">At Clankart you can buy second hand books and sell old books online at best prices. Selling used books online for cash made easy with Clankart!</p>
       <div class="page-2-boxes  xl:flex sm:hidden items-center justify-center">
        <!-- page-2-ka-first-box  -->
        <div class="bg-[#d3d3d3] w-[175px] h-[150px] relative left-1 rounded-lg">
          <div class=" py-[32.5px] px-[32.5px]">
          <img class="w-[100px] h-[55px]" src="https://www.clankart.com/static-assets/hand-books.svg"/>
          <button class="text-[#0083ca] bg-[#f1faff] hover:bg-[#0083ca] hover:text-white tracking-tighter text-xs rounded-sm w-[100px] font-semibold px-[9.7px] py-[8.1px] mt-[9.7px]">Buy Used Books</button>
        </div>
        </div>
        <div class="bg-white w-9 h-9 rounded-full z-10 text-black flex items-center justify-center" >or</div>
        <!-- page-2-ka-second-box  -->
        <div class="bg-[#fff2c7] w-[175px] h-[150px] relative right-1 rounded-lg">
          <div class=" py-[32.5px] px-[32.5px]">
          <img class="w-[100px] h-[55px]" src="https://www.clankart.com/static-assets/hand-money.svg"/>
          <RouterLink to="/post-ad">
          <button class="text-[#0083ca] bg-[#f1faff] hover:bg-[#0083ca] hover:text-white tracking-tighter text-xs rounded-sm w-[100px] font-semibold px-[9.7px] py-[8.1px] mt-[9.7px]">Sell old Books</button>
        </RouterLink>
      </div>
        </div>
       </div>
    </div>
    </div>
  </div>
  <!-- part-2-boxes -->
  <div class="page-2-boxes  xl:hidden sm:flex py-8 items-center justify-center">
        <!-- page-2-ka-first-box  -->
        <div class="bg-[#d3d3d3] sm:w-[145px] sm:h-[130px] lg:w-[175px] lg:h-[150px] relative left-1 rounded-lg">
          <div class="sm:py-5 sm:px-5 lg:py-[32.5px] lg:px-[32.5px]">
          <img class="w-[100px] h-[55px]" src="https://www.clankart.com/static-assets/hand-books.svg"/>
          <button class="text-[#0083ca] bg-[#f1faff] hover:bg-[#0083ca] hover:text-white tracking-tighter text-xs rounded-sm w-[100px] font-semibold px-[9.7px] py-[8.1px] mt-[9.7px]">Buy Used Books</button>
        </div>
        </div>
        <div class="bg-white w-9 h-9 rounded-full z-10 text-black flex items-center justify-center" >or</div>
        <!-- page-2-ka-second-box  -->
        <div class="bg-[#fff2c7] sm:w-[145px] sm:h-[130px] lg:w-[175px] lg:h-[150px] relative right-1 rounded-lg">
          <div class="sm:py-5 sm:px-5 lg:py-[32.5px] lg:px-[32.5px]">
          <img class="w-[100px] h-[55px]" src="https://www.clankart.com/static-assets/hand-money.svg"/>
          <button class="text-[#0083ca] bg-[#f1faff] hover:bg-[#0083ca] hover:text-white tracking-tighter text-xs rounded-sm w-[100px] font-semibold px-[9.7px] py-[8.1px] mt-[9.7px]">Sell old Books</button>
        </div>
        </div>
       </div>
        <!-- page-3 -->
    <div class="">
      <div class="pt-[32.5px] px-[30px] mx-4">
        <h1 class="mb-[6.5px] text-lg">Newly Added Books</h1>
        <div class="flex overflow-hidden w-[100%]">
          <div class="animate-scroll transition-all flex whitespace-nowrap space-x-2 ">
          <!-- 1 -->
          <div v-for="book in books" :key="book.id" class="first w-[218px] flex-shrink-0">
            <RouterLink to = "/page1">
            <img class="w-[218px] rounded-sm h-[149px]" :src="book.image" alt="book img"/>
            <div class="py-[13px]">
              <p class="mb-[6.5px]  overflow-hidden text-ellipsis">{{ book.title }}</p>
              <p class="price my-[6.5px]">₹1500</p>
              <div class="flex  justify-end">
              <button class="bg-[#0083ca] text-white rounded-sm  px-[17.2px] py-[8.15px]">Buy Now</button>
            </div>
          </div>
        </RouterLink>
          </div>
           
        </div>
        </div>
        <div class="flex justify-center pt-4">
          <RouterLink to="/books/view-all">
        <button class="border px-[20.5px] py-[10.7px] rounded-sm border-[#fcec52] text-center  bg-[#fcec52]">Explore all used Books</button>
      </RouterLink>
      </div>
      </div>
    </div>
    <!-- page-4 -->
    <div class="">
      <div class="py-[32.5px]">
          <div class="pb-[6.5px] flex items-center justify-center ">
          <h1 class=" mb-[6.5px] text-3xl w-[655px]  border-b border-[#0083CA] text-neutral-900 font-serif  text-center font-bold">Clankart - A Student-to-Student Bookstore</h1>
        </div>
          <div class="text-neutral-600 text-xl tracking-tighter text-center font-normal  sm:px-4 xl:px-11">
          <p class="pt-5 mb-[13px]">Are you a college going student and are upset with the increasing number of used books after each new semester, or you are a regular book reader who after reading the books, keep the old books on the bookshelves or in a cupboard and forget them? If yes, then Clankart is just made for you!</p>
          <p class="pt-5 mb-[13px]">Clankart is India's leading platform where you can sell used books online. At Clankart, we help people to sell their used books to another book lover just like them at interesting prices. </p>
          <p class="pt-5 mb-[13px]">Selling and buying books on Clankart is a win-win situation for both the buyer and the seller. How? Let's see. As a seller, you can earn some good amount of money by selling your old books (which you don't even need) to another person at good prices. And being a buyer, you can save some money by buying the second hand books directly from the book owner.</p>
          <em class="italic text-black tracking-normal">"Selling used second hand books at your own desired price is not an uphill battle anymore. Just sell them on Clankart!"</em>
        </div>
      </div>
     </div>
     <!-- page-5 -->
     <div class="pt-[3rem] ">
        <div class="two-bg xl:h-[239.8px] sm:h-[270px] xl:pl-28 border-l-4 border-[#0083CA] sm:py-5 xl:py-12 xl:px-4 sm:px-2">
          <h1 class="mb-[9.7px] text-[#5b5b5b] xl:text-2xl sm:text-lg font-semibold">Have used, old books cluttering on your bookshelves?</h1>
          <p class="text-[#555] xl:text-lg sm:text-sm ">Why not sell your old books and convert them into 'Real Money' into your account?</p>
          <p class="pt-4 flex sm:flex-col sm:items-center xl:items-baseline 2xl:flex-row">
            <span class="text-[#555] xl:text-lg sm:text-sm px-[9.7px]">
              "Sell your used books, directly to a book lover just like you for actual money."
            </span>
            <span class="mt-6 w-[152px] h-[42px] flex border border-[#0083CA] text-[#fff] rounded-sm justify-center items-center bg-[#0083CA]">
              Post Free Ad Now
            </span>
          </p>
        </div>
      </div>
        <!-- page-6 -->
        <div class="pt-[3rem] bg-[#eff2f5]">
        <div class="px-[30px] mx-4">
           <div class="pb-[6.5px] flex items-center justify-center ">
          <h1 class=" mb-[6.5px] text-2xl w-[605px]  border-b border-[#0083CA] text-[#333] font-serif  text-center font-bold">
            <span>How to </span><span class="bg-linear-to-r from-[#ce1212] to-[#6218ff] text-transparent bg-clip-text">SELL</span>
             your old books online on Clankart?
          </h1>
        </div>
        <div class="text-center">
        <p class="pt-5 text-[#555] mb-[1rem] text-[1.2rem] font-normal">Well, you can sell your old used books very easily on Clankart for actual cash.</p>
        <p class="pt-[.5rem] px-[1.2rem]  text-[#555] mb-[1rem] text-[1.2rem] font-normal">,<span class="font-bold text-3xl text-amber-600">"</span>Earning money by selling your old books is just <span class="font-semibold text-[#555]">3 steps</span> away from you <span class="text-2xl text-[#0083ca] font-semibold">:)</span><span class="font-bold text-3xl text-amber-600">"</span></p>
      </div>
      </div>
      <!-- three boxess -->
      <ul class="mt-[2.5rem] pb-[1rem] flex sm:flex-col xl:flex-row">
        <!-- first box -->
        <li class="px-[9.7px] mb-[32.5px] sm:w-fit xl:w-[33.3%] ">
          <!-- main box -->
          <div class="pt-8   rounded-lg bg-[#fff]">
            <!-- box ke andar ka first box -->
             <div class=" border-b border-neutral-200">
            <div class="px-[29.5px] ">
              <div class="px-[10px] py-[5px] bg-[#0083CA]  inline-flex min-w-9 min-h-[56px]  items-center rounded-b-xl relative sm:left-48 md:left-60 lg:left-72 sm:bottom-10  xl:left-32 xl:bottom-10 2xl:left-52 2xl:bottom-10 text-[#fff]">Step 1</div>
             <div class="mb-[1rem]">
               <div class="px-[2.25rem] text-center  flex justify-center mb-4">
                <div class="border border-[#eef9ff] w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <div class="bg-[#eef9ff] w-[70px] h-[70px] border border-[#eef9ff] rounded-full  flex justify-center items-center">
                <img width="50" height="50"  src="https://www.clankart.com/static-assets/seller-adve.svg"/>
                  </div></div>
              </div>
              <h1 class="text-[#555] text-2xl px-9 text-center font-semibold ">
                Post an ad for selling used books
              </h1></div>
            </div>
          </div>
          <!-- box ke andar ka second box -->
           <div class="px-[29.2px] py-4">
            <p class="text-center mb-5 font-semibold text-2xl xl:h-[160px] 2xl:h-[134px] text-[#5f5f5f]">Post an ad on Clankart describing your book details to sell your old books online.</p>
           </div>
          </div>
        </li>
        <!-- second box -->
        <li class="px-[9.7px] mb-[32.5px] sm:w-fit xl:w-[33.3%]  ">
          <!-- main box -->
          <div class="pt-8 rounded-lg bg-[#fff]">
            <!-- box ke andar ka first box -->
             <div class=" border-b border-neutral-200">
            <div class="px-[29.5px] ">
              <div class="px-[10px] py-[5px] bg-[#0083CA]  inline-flex min-w-9 min-h-[56px]  items-center rounded-b-xl relative sm:left-48 md:left-60 lg:left-72 sm:bottom-10 xl:left-32 2xl:left-52 bottom-10 text-[#fff]">Step 2</div>
             <div class="mb-[1rem]">
               <div class="px-[2.25rem] text-center  flex justify-center mb-4">
                <div class="border border-[#eef9ff] w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <div class="bg-[#eef9ff] w-[70px] h-[70px] border border-[#eef9ff] rounded-full  flex justify-center items-center">
                <img width="50" height="50"  src="https://www.clankart.com/static-assets/set-price.svg"/>
                  </div></div>
              </div>
              <h1 class="text-[#555] text-2xl px-9 text-center font-semibold ">
                Set the selling price for your books
              </h1></div>
            </div>
          </div>
          <!-- box ke andar ka second box -->
           <div class="px-[29.2px] py-4">
            <p class="text-center mb-5 font-semibold text-2xl  xl:h-[160px] 2xl:h-[134px] text-[#5f5f5f]">Set the price for your books at which you want to sell them.</p>
           </div>
          </div>
        </li>
        <!-- trird box -->
        <li class="px-[9.7px] mb-[32.5px] sm:w-fit xl:w-[33.3%] ">
          <!-- main box -->
          <div class="pt-8  rounded-lg bg-[#fff]">
            <!-- box ke andar ka first box -->
             <div class=" border-b border-neutral-200">
            <div class="px-[29.5px] ">
              <div class="px-[10px] py-[5px] bg-[#0083CA]  inline-flex min-w-9 min-h-[56px]  items-center rounded-b-xl relative sm:left-48 md:left-60 lg:left-72 sm:bottom-10 xl:left-32 2xl:left-52 bottom-10 text-[#fff]">Step 3</div>
             <div class="mb-[1rem]">
               <div class="px-[2.25rem] flex justify-center text-center mb-4">
                <div class="border border-[#eef9ff] w-[80px] h-[80px] rounded-full flex justify-center items-center">
                <div class="bg-[#eef9ff] w-[70px] h-[70px] border border-[#eef9ff] rounded-full  flex justify-center items-center">
                <img width="50" height="50"  src="https://www.clankart.com/static-assets/money-release.svg"/>
                  </div></div>
              </div>
              <h1 class="text-[#555] text-2xl px-9 text-center font-semibold ">
                Post an ad for selling used books
              </h1></div>
            </div>
          </div>
          <!-- box ke andar ka second box -->
           <div class="px-[29.2px] py-4">
            <p class="text-center mb-5 font-semibold text-2xl xl:h-[160px] 2xl:h-[134px] text-[#5f5f5f]">You will get money into your account once you receive an order for your book.</p>
           </div>
          </div>
        </li>
      </ul>
      
       </div>
       <!-- page-7 -->
       <div class=" flex justify-center bg-[#eff2f5] pb-[3rem]">
          <iframe class="sm:w-[300px] md:w-[345px] lg:w-[395px] sm:h-[315px] xl:w-[560px] xl:h-[315px] 2xl:w-[700px] 2xl:h-[380px] rounded-lg" src="https://www.youtube.com/embed/Rwj6vi55hHw">

          </iframe>
        </div>
         <!-- page-8 -->
         <div class="py-[3rem]">
           <div class="pb-[6.5px] flex items-center justify-center ">
          <h1 class=" mb-[6.5px] text-3xl   border-b border-[#0083CA] text-[#292929] font-serif  text-center font-bold">
            <span>How to </span><span class="bg-linear-to-r from-[#ce1212] to-[#6218ff] text-transparent bg-clip-text">BUY</span>
            second hand books online on Clankart?
          </h1>
        </div>
        <div class="text-center font-semibold">
        <p class="pt-5 text-[#555] mb-[1rem] text-[1.2rem] ">Well, you can sell your old used books very easily on Clankart for actual cash.</p>
        <p class="pt-[.5rem] px-[1.2rem]  text-[#555] mb-[1rem] text-[1.2rem]">,<span class="font-bold text-3xl text-amber-600">"</span>Earning money by selling your old books is just <span class="font-semibold text-[#555]">3 steps</span> away from you <span class="text-2xl text-[#0083ca] font-semibold">:)</span><span class="font-bold text-3xl text-amber-600">"</span></p>
      </div>
      <ul class="mt-[2.5rem] pb-[1rem] flex sm:flex-col xl:flex-row">
        <!-- first box -->
        <li class="px-[9.7px] ml-1 mb-[32.5px] sm:w-fit xl:w-[32.3%] bg-[#fff2c7] rounded-lg">
          <div class="  ">
          <!-- main box -->
          <div class="pt-8  ">
            <!-- box ke andar ka first box -->
             <div class=" border-b border-neutral-200">
            <div class="px-[29.5px] ">
              <div class="px-[10px] py-[5px] bg-[#0083CA]  inline-flex min-w-9 min-h-[56px]  items-center rounded-b-xl relative sm:left-48 md:left-60 lg:left-72 sm:bottom-10  xl:left-32 xl:bottom-10 2xl:left-52 2xl:bottom-10 text-[#fff]">Step 1</div>
             <div class="mb-[1rem]">
               <div class="px-[2.25rem] text-center  flex justify-center items-center mb-4">
                <div class="border-8 border-[#fff] w-[90px] h-[90px] rounded-full flex justify-center items-center">
                <div class="bg-[#eef9ff] w-[75px] h-[75px] border border-[#eef9ff] rounded-full  flex justify-center items-center">
                <img width="50" height="50"  src="https://www.clankart.com/static-assets/search-item.svg"/>
                  </div></div>
              </div>
              <h1 class="text-[#555] text-2xl px-9 text-center font-semibold ">
                Select the used books you want
                
              </h1></div>
            </div>
          </div>
          <!-- box ke andar ka second box -->
           <div class="px-[29.2px] py-4">
            <p class="text-center mb-5 font-semibold text-2xl xl:h-[160px] 2xl:h-[134px] text-[#5f5f5f]">Search from over thousands of used books listed on Clankart.</p>
           </div>
          </div></div>
        </li>
        <!-- second box -->
        <li class=" mb-[32.5px] mx-2 sm:w-fit xl:w-[32.3%] bg-[#fff2c7] rounded-lg ">
          <div class="   ">
          <!-- main box -->
          <div class="pt-8 ">
            <!-- box ke andar ka first box -->
             <div class=" border-b border-neutral-200">
            <div class="px-[29.5px] ">
              <div class="px-[10px] py-[5px] bg-[#0083CA]  inline-flex min-w-9 min-h-[56px]  items-center rounded-b-xl relative sm:left-48 md:left-60 lg:left-72 sm:bottom-10  xl:left-32 xl:bottom-10 2xl:left-52 2xl:bottom-10  text-[#fff]">Step 2</div>
             <div class="mb-[1rem]">
               <div class="px-[2.25rem] text-center  flex justify-center mb-4">
                <div class="border-8 border-[#fff] w-[90px] h-[90px] rounded-full flex justify-center items-center">
                <div class="bg-[#eef9ff] w-[75px] h-[75px] border border-[#eef9ff] rounded-full  flex justify-center items-center">
                <img width="50" height="50"  src="https://www.clankart.com/static-assets/buy.svg"/>
                  </div></div>
              </div>
              <h1 class="text-[#555] text-2xl px-9 text-center font-semibold ">
                Place the order by making payment to Clankart
              </h1></div>
            </div>
          </div>
          <!-- box ke andar ka second box -->
           <div class="px-[29.2px] py-4">
            <p class="text-center mb-5 font-semibold text-2xl  xl:h-[160px] 2xl:h-[134px] text-[#5f5f5f]">Then simply place the order by clicking on 'Buy Now' button.</p>
           </div>
          </div></div>
        </li>
        <!-- trird box -->
        <li class="px-[9.7px] mb-[32.5px] sm:mx-2 xl:mx-0 sm:w-fit xl:w-[32.3%] bg-[#fff2c7]  rounded-lg">
          <div class="  ">
          <!-- main box -->
          <div class="pt-8  ">
            <!-- box ke andar ka first box -->
             <div class=" border-b border-neutral-200">
            <div class="px-[29.5px] ">
              <div class="px-[10px] py-[5px] bg-[#0083CA]  inline-flex min-w-9 min-h-[56px]  items-center rounded-b-xl relative sm:left-48 md:left-60 lg:left-72 sm:bottom-10  xl:left-32 xl:bottom-10 2xl:left-52 2xl:bottom-10  text-[#fff]">Step 3</div>
             <div class="mb-[1rem]">
               <div class="px-[2.25rem] flex justify-center text-center mb-4">
                <div class="border-8 border-[#fff] w-[90px] h-[90px] rounded-full flex justify-center items-center">
                <div class="bg-[#eef9ff] w-[75px] h-[75px] border border-[#eef9ff] rounded-full  flex justify-center items-center">
                <img width="50" height="50"  src="https://www.clankart.com/static-assets/seller-ships.svg"/>
                  </div></div>
              </div>
              <h1 class="text-[#555] text-2xl px-9 text-center font-semibold ">
                Get the books delivered at your doorstep
              </h1></div>
            </div>
          </div>
          <!-- box ke andar ka second box -->
           <div class="px-[29.2px] py-4">
            <p class="text-center mb-5 font-semibold text-2xl xl:h-[160px] 2xl:h-[134px] text-[#5f5f5f]">The books will be delivered to you at your doorstep!</p>
           </div>
          </div></div>
        </li>
      </ul>
         </div>
          <!-- page-9 -->
          <div class="py-[3rem] bg-[#deeafe]">
            <div class="container px-[15px] ">
              <h1 class="text-[#555] pt-5 mb-[1rem] text-center text-4xl font-bold ">Read from our <span class="text-[#0083ca]">  Blog</span></h1>
              <div class="mt-[32.5px] flex sm:flex-col xl:flex-row">
                <!-- first-box -->
                <div class="px-[9.5px] pb-8">
                  <div class="mr-[19.5px]">
                    <img class="rounded-t-lg xl:w-[213.5px] xl:h-[213.5px] 2xl:w-[282px] 2xl:h-[282px]" src="https://www.clankart.com/user-uploads/blog/Where_and_how_to_sell_old_books_online.webp"/>
                    <div class="2xl:w-[282px] xl:[213.5px] py-[26px] px-[29.2px] bg-[#fff] rounded-b-lg">
                      <h1 class="mb-[6.5px] text-xl font-semibold">Where and how to sell old books online?</h1>
                      <p class="mb-[1rem] text-[#7e7d7d] font-semibold">On Clankart to sell used books online, all you just need is to follow these 3 steps and your used second hand book will be sold.- Create an account on Clankart.- Describe details and set the price at which you want to sell your books.
- Get the money transferred into your account...</p>
                    </div>
                  </div>
                </div>
                 <!-- second-box -->
                 <div class="px-[9.5px] pb-8">
                  <div class="mr-[19.5px]">
                    <img class="rounded-t-lg xl:w-[213.5px] xl:h-[213.5px] 2xl:w-[282px] 2xl:h-[282px]"  src="https://www.clankart.com/user-uploads/blog/What_to_do_with_old_books.webp"/>
                    <div class="2xl:w-[282px] xl:w-[213.5px] py-[26px] px-[29.2px] bg-[#fff] rounded-b-lg">
                      <h1 class="mb-[6.5px] text-xl font-semibold">What to do with old books?</h1>
                      <p class="mb-[1rem] text-[#7e7d7d] font-semibold">Now the question is what should a person do after reading new books?
                        The answer is, resell used books to some another book lover just like you. By selling used books, you are trying to keep the book's motto alive and are helping to spread books knowledge ahead. If you like to do so, then you will definitely feel that how will I find the buyer for my book who will be ready to buy second hand books 
                        from you and where I can sell used books?...</p>
                    </div>
                  </div>
                </div>
                 <!-- third-box -->
                 <div class="px-[9.5px] pb-8">
                  <div class="mr-[19.5px]">
                    <img class="rounded-t-lg xl:w-[213.5px] xl:h-[213.5px] 2xl:w-[282px] 2xl:h-[282px]" src="https://www.clankart.com/user-uploads/blog/What_is_Clankart.webp"/>
                    <div class="2xl:w-[282px] xl:w-[213.5px] py-[26px] px-[29.2px] bg-[#fff] rounded-b-lg">
                      <h1 class="mb-[6.5px] text-xl font-semibold">What is Clankart?</h1>
                      <p class="mb-[1rem] text-[#7e7d7d] font-semibold">Clankart is a platform on which anyone 
                        can sell used books for money. All this can be done by simply posting a FREE ad on Clankart. So if you got some used books to sell, simply post the ad describing the details of your old book
                         and set the price you want them to sell at. Boom! You are done...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           <!-- page-10 -->
           <div class="py-[3rem] text-[#555]">
            <div class="px-[15px]">
            <h1 class="sm:text-2xl xl:text-4xl pt-5 font-bold font-serif text-center mb-[1rem]">Clankart Featured On</h1>
            <ul class="mb-[1rem] flex sm:items-center justify-evenly sm:flex-col xl:flex-row">
              <li class="px-[9.2px]  font-semibold  xl:text-2xl 2xl:text-3xl">
                <div class="pt-[20px] mb-[13px]">NextBigWhat</div>
              </li>
              <li class="px-[9.2px] font-semibold  xl:text-2xl 2xl:text-3xl">
                <div class="pt-[20px] mb-[13px]">LaunchingNext</div>
              </li>
              <li class="px-[9.2px] font-semibold  xl:text-2xl 2xl:text-3xl">
                <div class="pt-[20px] mb-[13px]">Starter Story</div>
              </li>
              <li class="px-[9.2px] font-semibold  xl:text-2xl 2xl:text-3xl">
                <div class="pt-[20px] mb-[13px]">StartUpFreak</div>
              </li>
            </ul>
          </div>
           </div>
           <!-- page-11  -->
           <div class="px-[15px] text-[#555] bg-[#deeafe]">
              <div class="">
               <h1 class="pt-5 mb-[13px] text-center text-4xl font-bold font-serif">Our Community</h1> 
               <div class="px-4">
             <div class="mb-[42.2px]">
               <p class="pt-5 mb-[13px] font-semibold text-lg">We're not just another shopping website where you buy from professional sellers
              <span class="bg-linear-to-r from-[#ce1212] to-[#6218ff] text-transparent bg-clip-text">- we are a vibrant community of students, book lovers across India</span> who deliver happiness to each other!
            </p>
          </div>
          <!-- page-11-image -->
          <div class="flex justify-center">
            <img width="653" height="360" src="https://www.clankart.com/static-assets/footer_image.png"/>
          </div>
          </div>
              </div>
            </div>
             <!-- page-12 -->
             <div class="pt-[32.5px] px-[15px] flex justify-between sm:flex-col xl:flex-row sm:h-[630px] xl:h-[340px]">
              <!-- first -->
              <div class="pb-[6.5px] w-[291.5px] h-[208.9px] px-[9.7px]">
                <h1 class="text-xl font-semibold text-neutral-400 pb-[13px]">ABOUT US</h1>
                  <ul class=" mb-[3rem] text-[#555] font-semibold text-lg ">
                    <RouterLink to="About_us"> <li class=" pb-[10.2px]">About Us</li></RouterLink>
                   <RouterLink to="Contact_us"> <li class=" pb-[10.2px]">Contact Us</li></RouterLink>
                   <RouterLink to="Feedback"><li class=" pb-[10.2px]">Leave Us Feedback</li></RouterLink>
                    <RouterLink to="Blog"> <li class=" pb-[10.2px]">Blog</li></RouterLink>
                  </ul>
               
              </div>
               <!-- second -->
               <div class="pb-[6.5px] w-[291.5px] sm:h-[310px] xl:h-[208.9px] px-[9.7px]">
                <h1 class="text-xl font-semibold text-neutral-400 pb-[13px]">USEFUL LINKS</h1>
                  <ul class=" mb-[3rem] text-[#555] font-semibold text-lg ">
                 <RouterLink to="/How_it_works"> <li class=" pb-[10.2px]">How it works?</li></RouterLink>
                 <RouterLink to="/Clankart_teleport"><li class=" pb-[10.2px]">Clankart Teleport</li></RouterLink>
                 <RouterLink to="/Faq`s"><li class=" pb-[10.2px]">Frequenty Asked Questions[FAQs]</li></RouterLink>
                 <RouterLink to="Chat_guide"><li class=" pb-[10.2px]">Chat Guidlines</li></RouterLink>
                 <li class=" pb-[10.2px]"><RouterLink to="Terms_of_use"><span>Terms of Use/</span></RouterLink><RouterLink to="Listing_policy"><span>listing Policy/</span></RouterLink></li>
                 <RouterLink to="/Privacy_policy"><li class=" pb-[10.2px]">Privacy Policy</li></RouterLink>
                  </ul>
               
              </div>
              <!-- third -->
              <div class="pb-[6.5px] w-[291.5px]  h-[208.9px] px-[9.7px] ">
                <h1 class="text-xl font-semibold text-neutral-400 pb-[13px]">STAY CONNECTED</h1>
                  <ul class=" mb-[3rem] text-[#555] font-semibold text-lg ">
                  <li class=" pb-[13.2px] mb-[6.5px] text-4xl flex flex-row space-x-6">
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
import {ref,onMounted} from "vue";
import { RouterLink } from "vue-router";
// const route = useRoute();
// console.log("route",route);
// import axios from "axios";
const books = ref([]);
console.log("dj")
const fetchBookData = async () =>{

  try{
 
    const response = await fetch("https://www.dbooks.org/api/recent", {
      method: "GET",
    credentials: "omit", // Prevents sending cookies
    });
    const data =await response.json();
    books.value = data.books
    console.log(books.value)
  }
  catch(error){
console.error("error fetched:",error);
  }
}
onMounted(fetchBookData);
</script>
<style scoped>
@keyframes scroll {
  0%{transform: translateX(0%);}
  100%{transform: translatex(-50%);} 
}
.animate-scroll:hover{
  animation-play-state: paused;
}
.animate-scroll{
  display: flex;
  
animation: scroll 15s linear infinite;
}

.two-bg{

  background-color: #FFF2C7;
background-image: url('https://www.clankart.com/static-assets/rightrangoli.png'),url('https://www.clankart.com/static-assets/leftrangoli.png');
background-position: left top, right bottom;
    background-size: contain, contain;
    background-repeat: no-repeat, no-repeat;
}


</style>