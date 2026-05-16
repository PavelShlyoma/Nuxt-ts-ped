<script setup lang="ts">

const route = useRoute()

let currentRoute = useState<string | undefined>(() => "")

watch(() => route.path, (newPath) => {
  currentRoute.value = newPath.split('/').pop();
}, {immediate: true})

  const { data: projects, pending } = await useAsyncData(`content-${currentRoute.value}`, async () => {
    const { $axiosInstance } = useNuxtApp()
    const responce = await $axiosInstance.get(`/content/${currentRoute.value}`)
    return responce.data.flatMap(user => user.portfolio.projects)
  }, {
    watch: [currentRoute]
  })
</script>

<template>
 <section class="content">
   <div v-if="pending" class="content__loading">
   </div>
   <div class="content-block" data-aos="fade-up"
        v-else
        v-for='project in projects'
        :key='project.id'
   >
     <NuxtLink class="content__link" :to="'/project/' + project.id">
       <img class="content__image" :src="project.images[0]" alt="1">
     </NuxtLink>
     <h2 class="content__title">{{ project.title }}</h2>
     <p class="content__author">{{ project.author }}</p>
   </div>
 </section>
</template>

<style scoped>

 .content {
   position: relative;
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
   gap: 10px;
   grid-auto-rows: 1fr;
   width: 95%;
   margin: 50px auto;
}

 .content-block {
   display: flex;
   align-items: center;
   height: 100%;
   cursor: pointer;
 }

 .content__link {
   width: 100%;
   height: 100%;
 }

 .content__image {
   width: 100%;
   height: 100%;
   border-radius: 20px;
   border-collapse: collapse;
 }

 .content__title {
   position: absolute;
   max-width: 150px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 12px;
   top: 70%;
   left: 0;
   transition: all 1s ease-in-out;
   color: rgba(256, 256, 256, 0.9);
   opacity: 0;
 }

 .content__author {
   position: absolute;
   max-width: 100px;
   white-space: nowrap;
   overflow: hidden;
   text-overflow: ellipsis;
   font-size: 14px;
   top: 80%;
   left: 0;
   transition: opacity 1s ease-in-out;
   color: rgba(256, 256, 256, 0.7);;
   opacity: 0;
 }

 .content-block:hover .content__title {
   animation: slideIn 0.5s;
   opacity: 1;
 }

 .content-block:hover .content__author {
   animation: slideIn 0.5s;
   opacity: 1;
 }

</style>