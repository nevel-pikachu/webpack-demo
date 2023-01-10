<template>
    <div v-if="isMobile">
        <Mobile />
    </div>
    <div v-else>
        <Desktop />
    </div>
</template>

<script>
import Desktop from '@/components/desktop'
import Mobile from '@/components/mobile'

export default {
    components: {
        Desktop,
        Mobile
    },
    mounted() {
        if (window.innerWidth <= 768) {
            this.isMobile = true;
        }
        window.addEventListener('resize', this.onResize);
    },
    data() {
        return {
            isMobile: false,
        }
    },
    methods: {
        onResize() {
          if (window.innerWidth <= 768)
            this.isMobile = true;
          else
            this.isMobile = false;
        }
    },
    name: "index"
}
</script>