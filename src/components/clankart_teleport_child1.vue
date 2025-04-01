<template>
    <!-- section-1 -->
     <div class="flex flex-col items-center py-5 bg-gray-100  mx-auto rounded-lg shadow-md">
    <span class="text-gray-500 text-sm">Advertisement</span>
    <div class="w-full h-[90px] flex items-center justify-center bg-gray-300 text-gray-700 font-semibold text-lg">
      Your Ad Here
    </div>
  </div> 
  <section class="py-12 bg-white">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-800">Frequently Asked Questions</h1>
      </div>

      <div class="flex flex-col md:flex-row gap-8">
        <!-- Categories Sidebar -->
        <div class="w-full md:w-1/4">
          <div class="border-l-4 border-blue-500 pl-4">
            <ul class="space-y-2">
              <li 
                v-for="(category, index) in categories" 
                :key="index"
                @click="activeCategory = category.id"
                :class="{
                  'bg-gray-100': activeCategory === category.id,
                  'bg-white': activeCategory !== category.id,
                  'text-blue-600': activeCategory === category.id
                }"
                class="py-2 px-4 rounded cursor-pointer hover:text-blue-600 transition-colors"
              >
                {{ category.name }}
              </li>
            </ul>
          </div>
        </div>

        <!-- FAQ Content -->
        <div class="w-full md:w-3/4">
          <h2 class="text-2xl font-semibold mb-6">Clankart FAQs</h2>
          
          <!-- Questions List -->
          <div class="space-y-4">
            <div 
              v-for="(question, index) in filteredQuestions" 
              :key="index"
              class="border-b border-gray-200 pb-4"
              itemscope
              itemprop="mainEntity"
              itemtype="https://schema.org/Question"
            >
              <!-- Question -->
              <div 
                @click="toggleQuestion(index)"
                class="flex justify-between items-center cursor-pointer"
              >
                <h3 class="text-lg font-medium text-gray-800" itemprop="name">
                  {{ questions.teleport.q }}
                </h3>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-5 w-5 text-gray-500 transition-transform duration-200"
                  :class="{ 'rotate-180': openQuestions.includes(index) }"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              
              <!-- Answer (collapsible) -->
              <div 
                v-show="openQuestions.includes(index)"
                class="mt-2 text-gray-600"
                itemscope
                itemprop="acceptedAnswer"
                itemtype="https://schema.org/Answer"
              >
                <div itemprop="text">
                  <p v-for="(paragraph, pIndex) in question.a" :key="pIndex" class="mb-2">
                    {{ paragraph }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref,computed } from 'vue';
const activeCategory = ref('teleport');
const openQuestions = ref([]);
const categories = ref([
    {id:"teleport",name:'Clankart Teleport Related Questions'},
    {id:'payment',name:'Payment Related Questions'},
    {id:'shipping',name:'Shipping and Delivery'},
    {id:'dispute',name:'Dispute and Refunds'},
    {id:'general',name:'General Questions'},
]);

const questions = ref(   {
 teleport:[
    {
        q:"What is Clankart Teleport?",
        a: [
              "Clankart Teleport offers a secure and trusted buying and selling experience to its clans (users). By making an online payment through Clankart, the buyers will have full confidence that their payment will only be released to the seller once they received the product. And the seller will have full confidence that they will receive the payment into their account once the product is received by the buyer."
            ]
    },
    {
        q:"As a buyer, why should I use Clankart Teleport?",
        a:[
            "You should use Clankart Teleport because after you place the order, the seller will receive the payment only after you receive the product. With which you will have a confidence that your payment will only be released to the seller after you receives the exact product.",
              "You can purchase used books from any seller across India with confidence."
        ]
    },
    {
        q:"As a seller, why should I use Clankart Teleport?",
        a:[
            "You should use Clankart Teleport because you will start the delivery of product only after the buyer makes the payment to Clankart."
        ]
    }
 ],
  payment: [
    {
      q: "What payment methods are accepted?",
      a: [
        "We accept all major credit cards, UPI, and net banking."
      ]
    }
  ],
  shipping: [
    {
      q: "How long does shipping take?",
      a: [
        "Typically 3-5 business days within India."
      ]
    }
  ],
  dispute: [
    {
      q: "How do I file a dispute?",
      a: [
        "Contact our support team within 7 days of delivery."
      ]
    }
  ],
  general: [
    {
      q: "How do I contact support?",
      a: [
        "Email us at support@clankart.com or call +91-XXXXXXXXXX"
      ]
    }
  ]


   }
);

const filteredQuestions = computed(() => {
  return questions[activeCategory.value] || []
});

const toggleQuestion = (index) => {
  const questionIndex = openQuestions.value.indexOf(index)
  if (questionIndex > -1) {
    openQuestions.value.splice(questionIndex, 1)
  } else {
    openQuestions.value.push(index)
  }
};
</script>