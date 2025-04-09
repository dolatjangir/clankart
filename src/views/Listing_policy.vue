<template>
      <!-- common header  -->
   <div class="header xl:h-[110px] shadow-lg sm:h-[60px] fixed z-20 bg-white w-screen  px-4 flex ">
    <div class="inner-header 2xl:mx-[19.5px] pl-2 w-screen flex flex-row items-center sm:justify-between xl:justify-center">
        
      <div class="clankart-img flex items-center justify-between xl:ml-[6.5px] 2xl:h-[55px] 2xl:w-[150px]  sm:h-[40px] xl:w-[120px] xl:h-[48px] xl:pl-2 2xl:mr-[32.5px] sm:mr-4">
       <!-- hamburger -->
       <div class="sm:flex xl:hidden sm:pl-[6px]">
            <i class="text-xl fa-solid fa-bars"></i>
        </div>
        <a href="/" class="py-[5.7px] pl-4 xl:pr-4">
          <img class="2xl:w-[150px] 2xl:h-[55px] sm:w-[120px] sm:h-[48px] " width="150" height="55" src="https://www.clankart.com/user-uploads/static-assets/logo.png"/>
        </a>
      </div>
      <div class="header-secondory-things mb-4 flex flex-row sm:hidden xl:flex">
      <div class="header-search-bar mr-[16.2px] h-[47px] flex">
        <div class="border border-[#0083ca] flex flex-row w-[358px]">
        <input class="px-[13px] py-[9.7px] w-full" placeholder="Book Name/Author/Subject/Publiser"/></div>
        <button class="bg-[#0083ca] px-[20.5px] py-[10.7px] text-white text-lg">Search</button>
       
    </div>
    <!-- buttons -->
     <div class=" yellow-button xl:pr-18 ">
        <button class="px-[9.7px] py-[10.7px] sm:hidden 2xl:flex border border-[#e1b70d] bg-[#fcec52] h-[47px] w-[150px] rounded-sm ">Sell Used Books</button>
        <button class="px-[9.7px] py-[10.7px] border sm:flex 2xl:hidden border-[#e1b70d] bg-[#fcec52] h-[47px] w-[100px] justify-center items-center text-2xl rounded-sm ">+SELL</button>
    </div>
      </div>
    <!-- cart and account -->
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
    <!-- medium section -->
      <section class="pb-12 pt-[140px] bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-semibold text-gray-900 mb-2">Listing Policy</h1>
        <h2 class="text-xl font-semibold text-gray-800">Prohibited Items Policy</h2>
        <p class="mt-4 text-gray-800 text-sm">
          For use of our Site and other services, you confirm and declare that you shall not list or post or provide information in relation to the sale or purchase or exchange of goods and services, content or information that are illegal under the laws of the Republic of India and/or are not permitted as per the prohibited items policy listed below.
        </p>
      </div>

      <div class=" py-4 mb-8">
        <h3 class="text-lg font-medium text-gray-800">
          Clankart allows users to list only used books on our platform. Ensure that your listing complies with this policy. Listings for new books, e-books, or any other non-book items will be removed.
        </h3>
      </div>

      <ul class="space-y-8">
        <li class="">
          <h3 class="text-xl font-semibold text-gray-600 mb-4">1. Book Listing Policy:</h3>
          <ul class="space-y-2 pl-6 list-disc">
            <li>
              <span class="font-medium">Nature of Books:</span> By listing a book on Clankart, you confirm that you have purchased that book, either online or offline, from a legitimate source. Users are not allowed to list new books, counterfeit items, institution materials or any form of reproductions.
            </li>
            <li>
              <span class="font-medium">No Photocopied Books:</span> Users are strictly prohibited from listing photocopied or duplicated versions of books. All listed items must be original copies.
            </li>
            <li>
              <span class="font-medium">No E-books:</span> Users are strictly prohibited from listing e-books for sale.
            </li>
            <li>
              <span class="font-medium">No Human or Objectionable Images:</span> Photos uploaded for book ads should focus solely on the book and its condition. Do not include images that feature humans, explicit content, or anything that may be considered objectionable.
            </li>
            <li>
              <span class="font-medium">Accuracy of Listing:</span> The details provided in your listing, including book condition, edition, and other relevant information, must be accurate and truthful.
            </li>
            <li>
              <span class="font-medium">Personal/Non-Commercial Listings Only:</span> Clankart is a marketplace designed for individual users to buy and sell their personally owned used books. Listings that appear to be posted by dealers, shopkeepers, or for business purposes will be reviewed and may be removed if they do not align with our policy.
            </li>
          </ul>
        </li>

        <li>
          <h3 class="text-xl font-semibold text-gray-600 mb-4">2. Prohibited Items Policy.</h3>
          <h4 class="font-medium text-gray-700 mb-2">A. We specifically prohibit any listing or posting of classifieds or information in relation to the following items:</h4>
          <ul class="space-y-3 pl-6 list-disc text-md">
            <li>Alcoholic Beverages, Liquor, tobacco products, drugs, psychotropic substances, narcotics, intoxicants of any description, medicines, palliative/curative substances nor shall you provide link directly or indirectly to or include descriptions of items, goods or services that are prohibited under any applicable law for the time being in force including but not limited to the Drugs and Cosmetics Act, 1940, the Drugs And Magic Remedies (Objectionable Advertisements) Act, 1954 Narcotic Drug and Prohibited Substances Act and the Indian Penal Code, 1860.</li>
            <li>Living, dead person and/or the whole or any part of any human which has been kept or preserved by any means whether artificial or natural including any blood, bodily fluids and/ or body parts</li>
            <li>Prostitution or any other service in the nature there of that purports to violate the provisions of Immoral Act or Indecent representation of women which violates the contemporary standards of morality and decency in Indian society.</li>
            <li>Religious items, including books, artifacts, etc. or any information, description of any such item that is likely to affect the religious sentiments of any person or group</li>
            <li>Mature Audiences Policy includes films which do not have a certificate for public exhibition issued by the Central Board of Film Certification and or described and depict or otherwise deal with matters which are revolting or repulsive and or tend to deprave a persons mind in such a way that they tend to offend against the standards of morality, decency and propriety generally accepted by reasonable adults</li>
            <li>Obscene Items includes items which contain an indecent representation of women within the meaning of the Indecent Representation of Women (Prohibition) Act, 1986; Any publication or film or item that describes or depicts a minor who is, or who appears to be, under 18 (whether the minor is engaged in sexual activity or not) and any computer games not suitable for minor that are unsuitable for a minor to see or play.</li>
            <li>Offensive Material intended for use in a sexual setting (including "bondage" and "fetish" items,) displaying sexual activity or portraying human genitalia in a "life-like" or realistic fashion</li>
            <li>"Antiquities" and "Art Treasures" in violation of the provisions of the Antiquities and Art Treasures Act, 1972 ("the Act")</li>
            <li>Information or items that are defamatory, libelous, threatening or abusive in nature</li>
            <li>Information that is fraudulent, misrepresenting as to the nature and use of the goods or the services.</li>
            <li>Counterfeit, Pirated and stolen goods or unauthorized illegal services (services for which you are not licensed or permitted to do or do not have the authority to under take).</li>
            <li>Items, goods and services that infringe or attempt to pass off any third parties intellectual property or rights of publicity or moral rights and or purport's to breach any persons right to privacy.</li>
            <li>Electronically transmitting through any medium computer viruses of any type or any computer program that facilitates hacking of a computer system which the intent to damage a computer or computer network or intercept any personal data.</li>
            <li>Your information shall not include any hate content, that is derogatory or slanderous in nature that may directed to any individual or group or advocate violence against any users individuals and or animals.</li>
            <li>Hazardous chemicals and pesticides and/ or items in violation of Hazardous Chemicals Act, 1985.</li>
            <li>Fireworks, Destructive Devices and Explosives including any material that enables the making of fireworks, explosive triggers and explosive devices.</li>
            <li>Identity Documents, Personal Financial Records & Personal Information (in any form, including mailing lists)</li>
            <li>Lottery Tickets, Sweepstakes Entries and Slot Machines</li>
            <li>Items in violation of the Food Adulteration Act, 1954</li>
            <li>Military or Police Badges, Uniforms, coats-of-arms and or any Government emblems, insignia, and/ or items in violation of Emblems and names (Prevention of improper use) Act, 1950 and/ or Flag Codes of India Act, 2002</li>
            <li>Weapons and related items ( such as firearms, firearm parts and magazines, ammunition, tear gas, stun guns, switchblade knives or any other item which is prohibited under the Indian Arms Act, 1959.</li>
            <li>"Pyramid schemes" and "Multilevel Marketing" and/ or similar scams which are solely listed for the purpose of defrauding users.</li>
            <li>Spam, abusive, duplicate, listing, fraud schemes (e.g. "Get rich quick" "work at homes" scams which are solely listed for the purpose of duping users)</li>
            <li>Inappropriate, Wrong Category (e.g 10th class book listed under college book section).</li>
            <li>Incorrect City / Location of Listing (listing allowed only in the city you are based in, of listing)</li>
            <li>International Listings.</li>
            <li>is harmful to children.</li>
            <li>infringes any patent, trademark, copyright or other proprietary rights.</li>
            <li>violates any law for the time being in force;</li>
            <li>deceives or misleads the addressee about the origin of the message or knowingly and intentionally communicates any information which is patently false or misleading in nature but may reasonably be perceived as a fact</li>
            <li>impersonates another person.</li>
            <li>threatens the unity, integrity, defence, security or sovereignty of India, friendly relations with foreign States, or public order, or causes incitement to the commission of any cognisable offence or prevents investigation of any offence or is insulting other nation.</li>
            <li>contains software virus or any other computer code, file or program designed to interrupt, destroy or limit the functionality of any computer resource.</li>
            <li>is patently false and untrue, and is written or published in any form, with the intent to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person.</li>
           
          </ul>

          <h4 class="font-medium text-gray-600 mt-6 mb-2">B. Without prejudice to the generality of the above, Clankart does not permit posting or listing of classifieds in relation to the following:</h4>
          <ul class="space-y-3 pl-6 list-disc">
            <li>"Securities" within the meaning of the Securities Contract Regulation Act, 1956, including shares, bonds, debentures, etc. and/or any other financial instruments/assets of any description</li>
            <li>Living, dead creatures and/or the whole or any part of any animal which has been kept or preserved by any means whether artificial or natural including rugs, skins, specimens of animals, antlers, horns, hair, feathers, nails, teeth, musk, eggs, nests, other animal products of any description the sale and purchase of which is prevented or restricted in any manner by applicable laws (including those prohibited under The Wildlife Protection Act, 1972 and/ or The Environment Protection Act, 1986)</li>
          </ul>

          <h4 class="font-medium text-gray-700 mt-6 mb-2">C. Your listing, information, Advertisement</h4>
          <ul class="space-y-3 pl-6 list-disc text-[#181c32]">
            <li>Shall not be defamatory, trade libelous, unlawfully threatening or unlawfully harassing.</li>
            <li>Shall not contain any viruses, Trojan horses, worms, time bombs, cancel bots, easter eggs or other computer programming routines that may damage systems.</li>
            <li>Shall not be allowed to libel anyone or include hate, derogatory, slanderous speech directed at individuals or groups.</li>
          </ul>
        </li>

        <li>
          <h3 class="text-xl font-semibold text-gray-600 mb-4">3. In addition to the above and for the purposes of clarity all Users shall be expected to adhere to and comply with the following Policies while listing of items:</h3>
          <ul class="space-y-4 pl-6 list-disc text-[#181c32]">
            <li><span class="font-medium text-black">Restricted Item Policy:</span>   In addition to the above prohibited items policy users shall also adhere to and comply with the restricted items policy while listing, posting or providing information in relation to any goods or services.</li>
            <li ><span class="font-medium text-black">Duplicate Ad listings are not allowed.</span>  Any ad posted more than once with the same content or Title in the same city and category would be considered as a Duplicate Ad. We advise you to post multiple ads only if you have different items or services for sale. All duplicate ads would be deleted and posters penalized if the problem persists.</li>
            <li><span class="font-medium text-black">Mature Audience/Sexually oriented material:</span>   Classifieds relating to items that includes items intended for use in sexual activity would not be permitted. (An example of such classifieds relating to an item not normally permitted would be a classified for the sale of a vibrator). Please also be aware that titles with graphic adult language are inappropriate, regardless of the item contained in the listing itself.</li>
          </ul>
        </li>

        <li>
            <!-- Consequences of Breach of Listing Policy -->
          <h3 class="text-xl font-semibold text-gray-600 mb-4">4. Consequences of Breach of Listing Policy</h3>
          <ul class="space-y-3 pl-6 list-disc">
            <li>
              <span class="font-medium text-black">Users who violate the prohibited items policy may be subject to the following actions:</span>
              <ul class="mt-2 space-y-2 pl-6 text-[#181c32] list-disc">
                <li>Suspension or termination of membership.</li>
                <li>Permanent blocking of access to the site.</li>
                <li>Reporting to Law Enforcement or Appropriate Authorities.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
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