import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

// state 导航列表数据
export const useCategoryStore = defineStore('category', () => {
  const categoryList = ref([])
  const getCategory = async () => {
  const res = await getCategoryAPI()
  categoryList.value = res.result
  }
  return {
    categoryList,
    getCategory
  }
})
