import { ref, onMounted, onUnmounted } from 'vue'

export function useInView() {
  const isInView = ref(false)
  let observer = null
  const element = ref(null)

  onMounted(() => {
    observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          isInView.value = true
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (element.value) observer.observe(element.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { element, isInView }
}
