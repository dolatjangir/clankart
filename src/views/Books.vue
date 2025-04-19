<template>
    <section class="section-content py-5 books-tray">
      <div class="container">
        <!-- Tabs -->
        <ul class="flex flex-wrap md:justify-center gap-4 py-4 books-tray-parent">
          <li
            v-for="tab in tabs"
            :key="tab.id"
            :class="['flex flex-col items-center text-center cursor-pointer transition-all', activeTab === tab.id ? 'text-blue-600 font-semibold' : '']"
            @click="activeTab = tab.id"
          >
            <img :src="tab.img" :alt="tab.title" class="w-[70px] md:w-[90px] h-[85px] md:h-[110px] object-contain" />
            <span class="mt-1 text-sm">{{ tab.title }}</span>
          </li>
          <!-- View All -->
          <li class="flex flex-col items-center text-center">
            <a href="/books/view-all" title="View all second hand books on Clankart">
              <img src="http://www.clankart.com/static-assets/books_classified/tray/view-all.webp" alt="View all books" class="w-[80px] h-[85px] md:h-[110px] object-contain" />
              <span class="text-sm">View All Second Hand books</span>
            </a>
          </li>
        </ul>
  
        <!-- Subcategory Tray Items -->
        <ul
          v-for="tray in trays"
          :key="tray.id"
          v-show="activeTab === tray.id"
          class="card card-bordered py-5 flex gap-3 overflow-x-auto tray-items"
        >
          <li
            v-for="item in tray.items"
            :key="item.link"
            class="flex-none w-[90px] text-center hover:scale-105 transition"
          >
            <a :href="item.link" :title="item.title" class="flex flex-col items-center">
              <img :src="item.img" :alt="item.title" class="w-[70px] md:w-[80px] h-[85px] md:h-[110px] object-contain" />
              <span class="mt-1 text-sm">{{ item.title }}</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const activeTab = ref('college')
  
  // Top-level tabs
  const tabs = [
    {
      id: 'college',
      title: 'College Books',
      img: 'http://www.clankart.com/static-assets/books_classified/tray/college.webp',
    },
    {
      id: 'exam',
      title: 'Exam Preparation',
      img: 'http://www.clankart.com/static-assets/books_classified/tray/exam.webp',
    },
    {
      id: 'reading',
      title: 'Reading Books',
      img: 'http://www.clankart.com/static-assets/books_classified/tray/reading.webp',
    },
    {
      id: 'school',
      title: 'School Books (upto 12th)',
      img: 'http://www.clankart.com/static-assets/books_classified/tray/school.webp',
    },
  ]
  
  // Subcategory data
  const trays = [
    {
      id: 'college',
      items: [
        {
          link: '/books/engineering-books',
          title: 'Engineering Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/engineering.webp',
        },
        {
          link: '/books/mbbs-books',
          title: 'MBBS Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/medical.webp',
        },
        {
          link: '/books/college-books',
          title: 'View All College Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/view-all.webp',
        },
      ],
    },
    {
      id: 'exam',
      items: [
        {
          link: '/books/engineering-entrance-exams',
          title: 'Engineering Entrance Exams',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/engineering-entrance.webp',
        },
        {
          link: '/books/medical-entrance-exams',
          title: 'Medical Entrance Exams',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/neet.webp',
        },
        {
          link: '/books/upsc-books',
          title: 'UPSC Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/upsc.webp',
        },
        {
          link: '/books/exam-preparation-books',
          title: 'View All Exam Preparation',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/view-all.webp',
        },
      ],
    },
    {
      id: 'reading',
      items: [
        {
          link: '/books/biography-books',
          title: 'Biography Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/biography.webp',
        },
        {
          link: '/books/fiction-books',
          title: 'Fiction Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/fiction.webp',
        },
        {
          link: '/books/romance-books',
          title: 'Romance',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/romance.webp',
        },
        {
          link: '/books/novels',
          title: 'View All Reading Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/view-all.webp',
        },
      ],
    },
    {
      id: 'school',
      items: [
        {
          link: '/books/class-10-books',
          title: 'Class 10 Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/class-10.webp',
        },
        {
          link: '/books/class-11-books',
          title: 'Class 11 Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/class-11.webp',
        },
        {
          link: '/books/class-12-books',
          title: 'Class 12 Books',
          img: '/static-assets/books_classified/tray/class-12.webp',
        },
        {
          link: '/books/class-7-books',
          title: 'Class 7 Books',
          img: 'http://www.clankart.com/static-assets/books_classified/tray/class-7.webp',
        },
      ],
    },
  ]
  </script>
  
  <style scoped>
  .books-tray img {
    transition: transform 0.3s ease;
  }
  </style>
  