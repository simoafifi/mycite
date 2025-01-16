// Get modal elements
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const closeModal = document.getElementById("closeModal");

// Add event listeners to portfolio items
document.querySelectorAll(".portfolio-item").forEach((item) => {
  const video = item.querySelector("video");
  const playButton = item.querySelector(".play-button");

  // Show overlay on hover
  item.addEventListener("mouseover", () => {
    item.querySelector(".overlay").style.opacity = 1;
  });

  // Hide overlay on mouse out
  item.addEventListener("mouseout", () => {
    item.querySelector(".overlay").style.opacity = 0;
  });

  // Play video in modal when the play button is clicked
  playButton.addEventListener("click", () => {
    modalVideo.src = video.src;
    videoModal.style.display = "flex";
    modalVideo.play();
  });
});

// Close the modal
closeModal.addEventListener("click", () => {
  videoModal.style.display = "none";
  modalVideo.pause();
  modalVideo.src = ""; // Clear video source to stop playback
});
