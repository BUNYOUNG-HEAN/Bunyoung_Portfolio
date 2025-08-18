// Skills animation on scroll
document.addEventListener("DOMContentLoaded", () => {
  const skillItems = document.querySelectorAll(".skill-item")

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressFill = entry.target.querySelector(".progress-fill")
        const percentage = progressFill.style.width

        // Reset and animate
        progressFill.style.width = "0%"
        setTimeout(() => {
          progressFill.style.width = percentage
        }, 200)
      }
    })
  }, observerOptions)

  skillItems.forEach((item) => {
    observer.observe(item)
  })
})
