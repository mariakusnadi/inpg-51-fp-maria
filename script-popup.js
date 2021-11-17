let myModal = new bootstrap.Modal(document.querySelector("#previewImage"), {})
let imageSource = "";
let imagesToPopup = document.querySelectorAll("#popupImages img");
imagesToPopup.forEach(el => {
    el.addEventListener("click", () => {
        imageSource = el.src;
        document.querySelector("#previewImage img").src = imageSource
        myModal.show()
    })
})

setTimeout(function () {
    var msnry = new Masonry('#popunImages');
    msnry.layout();
  }, 1000);