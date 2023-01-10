import { defineStore } from 'pinia'
import aboutus from '@/static/footer/aboutus.json'

export const useAboutUsStore = defineStore('AboutUsStore', {
  state: () => ({ 
    aboutUs: aboutus
  }),
  getters: {
    getAllAboutUs() {
      return this.aboutUs;
    }
  },
    actions: {
      
    }
  })