function register() {
    console.log('?');
    // 모달 엘리먼트 가져오기
    var modal = document.getElementById("modal");
    var modalBody = document.getElementById("modalBody");

    // AJAX 요청으로 modal/register.html의 내용을 로드
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/register", true);
    xhr.onload = function() {
        if (this.status == 200) {
            modalBody.innerHTML = this.responseText; // 로드한 내용을 모달에 삽입
            modal.style.display = "flex"; // 모달 표시

            var closeBtn = document.getElementById("closeSignupModal");
            if (closeBtn) {
                closeBtn.onclick = function() {
                    modal.style.display = "none";
                };
            }
        } else {
            console.error("모달 내용을 로드하는 데 실패했습니다.");
        }
    };
    xhr.send();
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
