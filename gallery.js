/* Name this external file gallery.js */

window.onload = function() {
    console.log("Trang đã được tải xong");
    addTabFocusAttribute(); // Gọi hàm để thêm thuộc tính tabindex
};

function upDate(previewPic) {
    // Kiểm tra sự kiện có kích hoạt không
    console.log("Sự kiện đã được kích hoạt");
    console.log(previewPic.alt);  // In ra giá trị alt
    console.log(previewPic.src);   // In ra đường dẫn ảnh

    // Thay đổi nội dung văn bản
    const imageElement = document.getElementById("image");
    imageElement.innerHTML = previewPic.alt;

    // Thay đổi ảnh nền
    imageElement.style.backgroundImage = `url(${previewPic.src})`;
}

function unDo() {
    const imageElement = document.getElementById("image");
    imageElement.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
    imageElement.style.backgroundImage = "url('')";
}

function addTabFocus(previewPic) {
    console.log("Đã tập trung vào: " + previewPic.alt); // Log khi một hình ảnh được tập trung
}

function removeTabFocus(previewPic) {
    console.log("Đã rời khỏi: " + previewPic.alt); // Log khi mất tập trung
}

function addTabFocusAttribute() {
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0'); // Thêm thuộc tính tabindex
    }
}
