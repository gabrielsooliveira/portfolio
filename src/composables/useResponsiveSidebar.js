import { ref, onMounted, onBeforeUnmount } from 'vue'

export default function useResponsiveSidebar() {
  const isSidebarOpen = ref(false)
  const isMobile = ref(false)
  const sidebarRef = ref(null)

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  const checkMobile = () => {
    isMobile.value = window.innerWidth < 768
    if (!isMobile.value && isSidebarOpen.value) {
      isSidebarOpen.value = false
    }
  }

  const handleOutsideClick = (event) => {
    if (isSidebarOpen.value && isMobile.value && sidebarRef.value) {
      const isClickInsideSidebar = sidebarRef.value.contains(event.target)
      const isClickOnToggleBtn = event.target.closest('.btn-primary')

      if (!isClickInsideSidebar && !isClickOnToggleBtn) {
        isSidebarOpen.value = false
      }
    }
  }

  onMounted(() => {
    checkMobile()
    window.addEventListener('resize', checkMobile)
    document.addEventListener('click', handleOutsideClick)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkMobile)
    document.removeEventListener('click', handleOutsideClick)
  })

  return {
    isSidebarOpen,
    toggleSidebar,
    isMobile,
    sidebarRef,
  }
}
