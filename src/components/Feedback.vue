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
  <div class="p-4 bg-gray-50 rounded-lg shadow-sm">
    <div id="legend" class="text-lg font-semibold text-gray-800 mb-4">
      Where did you hear about Clankart?
    </div>
    <div class="flex items-center space-x-3">
      <div class="flex items-center">
        <div class="w-8 h-8 flex items-center justify-center bg-blue-500 text-white font-semibold rounded-full">
          A
        </div>
        <input
          id="choice"
          name="multiple_choice"
          type="radio"
          required
          aria-describedby="legend"
          class="ml-3 form-radio h-4 w-4 text-blue-600"
        />
        <label for="choice" class="ml-2 text-gray-700">
          Google (Search Results)
        </label>
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