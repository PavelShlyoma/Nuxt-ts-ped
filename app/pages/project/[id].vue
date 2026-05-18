<script setup lang="ts">

const route = useRoute()

let currentRoute = useState<string | undefined>(() => "")
let openTab = useState<boolean>(() => true)

function toggleTab() {
  openTab.value = !openTab.value
}

watch(() => route.path, (newPath) => {
  currentRoute.value = newPath.split('/').pop();
}, {immediate: true})

const { data: project, pending, error } = await useAsyncData(`project-${currentRoute.value}`, async () => {
  const { $axiosInstance } = useNuxtApp()
  if ($axiosInstance) {
    const res = await $axiosInstance.get(`/project/${currentRoute.value}`)
    return res.data
  } else {
    return {}
  }

}, {
  watch: [currentRoute],
})

</script>

<template>
  <div v-if="pending" class="content__loading project__loading">
  </div>
  <div v-else-if="error" class="content__error">
    error:  {{ error.message }}
  </div>
  <section
      class="project"
      v-else-if="project"
  >
    <div
        :class="{ openTab: openTab }"
        class="user__container"
    >
      <font-awesome
          @click="toggleTab"
          class="chevron"
          :icon="openTab ? 'fa fa-chevron-left' : 'fa fa-chevron-right'"
      ></font-awesome>
      <h1
          class="user__title"
      >
        {{ project.name }} {{ project.surname }}
      </h1>
      <div class="user__specialization">
        <NuxtLink
            class="user__specialization__tag"
            v-for="tag in project.specialization"
            :key="tag"
            :to="'/project/' + tag"
        >
          {{ tag }}
        </NuxtLink>
      </div>
      <hr class="user__hr">
      <h3 class="project__title">
        Project name: {{ project.portfolio.projects[0].title }}
      </h3>
      <p class="project__description">
        Description: {{ project.portfolio.projects[0].description }}
      </p>
      <div class="project__tags">
        <div
            class="project__tag"
            v-for="tag in project.portfolio.projects[0].tags"
            :key="tag"
        >
          {{ tag }}
        </div>
      </div>
    </div>
    <div
        :class="{ project__openTab: openTab }"
        class="project__content"
    >
      <div class="project__content__container" v-for="image in project.portfolio.projects[0].images" :key="image">
        <img class="project__content__image" :src="image" alt="1">
      </div>
    </div>
  </section>
</template>

<style scoped>

.project {
  width: 95%;
  margin: 40px auto;
  position: relative;
}

.content__error {
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 16px;
  text-align: center;
}

.chevron {
  position: absolute;
  cursor: pointer;
  top: 10%;
  left: 0;
  color: #B2EBF2;
  opacity: 0.87;
  transition: all 0.2s ease-in-out;
}

.chevron:hover {
  color: black;
}

.project__loading {
  margin-top: 100px;
}

.user__container {
  position: fixed;
  padding: 25px;
  box-sizing: border-box;
  border-radius: 20px 0 0 20px;
  width: 24%;
  top: 80px;
  right: 0;
  background: rgba(20, 12, 45, 0.7);
  box-shadow: -3px 4px 10px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease-in-out;
}

.openTab {
  right: calc(-24% + 20px);
}

.user__container::before {
  content: "";
  width: 35px;
  height: 35px;
  position: absolute;
  top: 100%;
  border-radius: 0 0 0 200px;
  corner-shape: superellipse(-1.5);
  right: 0;
  background: rgba(20, 12, 45, 0.7);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.5);
}

.user__container::after {
  content: "";
  width: 35px;
  height: 35px;
  position: absolute;
  top: -35px;
  border-radius: 200px 0 0;
  corner-shape: superellipse(-1.5);
  right: 0;
  background: rgba(20, 12, 45, 0.7);
}

.user__title {
  color: #fff;
  font-size: 18px;
  font-weight: normal;
  justify-self: center;
}

.user__specialization {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 5px;
  grid-auto-rows: 1fr;
  max-width: 95%;
  margin: 0 auto;
}

.user__specialization__tag {
  border-radius: 10px;
  background: #B2EBF2;
  background: linear-gradient(170deg,rgba(178, 235, 242, 1) 0%, rgba(209, 196, 233, 1) 65%, rgba(248, 187, 208, 1) 100%);
  padding: 5px 10px;
  text-decoration: none;
  justify-self: center;
  align-self: center;
  max-width: 80px;
  color: black;
  opacity: 0.87;
  transition: all 0.2s ease-in-out;
}

.user__specialization__tag:hover  {
  color: white;
  background: RGBA( 0,  0,  0, 0.98);
}

.user__hr {
  margin: 20px 0;
  width: 100%;
  height: 2px;
  border: none;
  background: #7d7f7d;
  border-radius: 1px;
  opacity: 0.3;
}

.project__title {
  color: #fff;
  font-size: 16px;
  opacity: 0.87;
  font-weight: normal;
}

.project__description {
  color: #fff;
  font-size: 14px;
  opacity: 0.84;
  font-weight: normal;
}

.project__content {
  width: calc(78% - 20px);
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

.project__openTab {
  width: calc(100% - 20px);
}

.project__content__container {
  width: 100%;
  height: 100%;
}

.project__content__image {
  width: 100%;
}

.project__tags {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 2px;
  grid-auto-rows: 1fr;
  max-width: 95%;
  margin: 0 auto;
}

.project__tag {
  border-radius: 10px;
  background: #B2EBF2;
  box-sizing: border-box;
  background: linear-gradient(170deg,rgba(178, 235, 242, 1) 0%, rgba(209, 196, 233, 1) 65%, rgba(248, 187, 208, 1) 100%);
  padding: 5px 10px;
  text-decoration: none;
  text-align: center;
  justify-self: center;
  align-self: center;
  width: 80px;
  color: black;
  opacity: 0.87;
}

@media (max-width: 768px) {

  .user__container {
    display: block;
    width: 100%;
  }

  .openTab {
    right: calc(-100% + 20px);
  }

  .project__content {
    width: 100%;
  }

  .project__openTab {
    width: calc(100% - 20px);
  }

}

</style>