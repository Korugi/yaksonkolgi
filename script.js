window.addEventListener('scroll', function() {
    var element = document.getElementById('fadeImage');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
window.addEventListener('scroll', function() {
    var element = document.getElementById('fadeText');
    var position = element.getBoundingClientRect();

    // 화면 내에 요소가 보이는지 확인
    if(position.top < window.innerHeight && position.bottom >= 0) {
        element.style.opacity = 1; // 이미지를 보이게 변경
    }
});
