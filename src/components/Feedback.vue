<template>
    <div class="px-[30px] mx-10">
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
  <div class="pt-6 mb-4">
    <div class="flex items-center">
      <div class="flex-grow">
        <h3 class="text-2xl font-semibold text-gray-800">What do you enjoy the most about Clankart?</h3>
      </div>
    </div>
  </div>
  <!--  -->
  <div class="  mb-4">
    <div class="flex flex-col">
      <div class="w-full">
        <textarea
          id="30a68619-ab1f-4894-adb4-99b8b4976d21"
          placeholder="Optional"
          placeholder:text-blue-500
          aria-label="What do you enjoy the most about Clankart?"
          aria-required="false"
          aria-invalid="false"
          class="w-full p-2 h-24 shadow-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        ></textarea>
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