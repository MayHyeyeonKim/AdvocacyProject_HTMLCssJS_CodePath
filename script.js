// 홈 화면으로 이동
function redirectToHomePage() {
  window.location.hash = "#home";
}

//다크 모드
let themeButton = document.getElementById("theme-button");
const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  if (isDarkMode) {
    themeButton.textContent = "Light Mode";
  } else {
    themeButton.textContent = "Dark Mode";
  }
  console.log("Theme toggled to " + (isDarkMode ? "dark" : "light"));
}
themeButton.addEventListener("click", toggleDarkMode);

//모달에 사용할 사람 객체
const person = {
  name: "",
  // name 초기값을 빈 문자열로 설정

  hometown: "",
  // hometown 초기값을 빈 문자열로 설정

  email: "",
  // email 초기값을 빈 문자열로 설정
};

// Name 입력 필드 이벤트 핸들러
document.getElementById("name").addEventListener("input", (event) => {
  person.name = event.target.value;
});

// Hometown 입력 필드 이벤트 핸들러
document.getElementById("hometown").addEventListener("input", (event) => {
  person.hometown = event.target.value;
});

// Email 입력 필드 이벤트 핸들러
document.getElementById("email").addEventListener("input", (event) => {
  person.email = event.target.value;
});

// 나머지 코드는 이전과 동일합니다.




//청원서 부분
function addSignature(person) {
  let signatureContainer = document.querySelector(".petition .petition-container");
  if (signatureContainer) {
    let signatureText = `🖊️ ${person.name} from ${person.hometown} has signed this petition and supports this cause.`;
    let signatureElement = document.createElement("p");
    signatureElement.innerText = signatureText;
    signatureContainer.appendChild(signatureElement);
  } else {
    console.error("에러다!");
  }
}

// 모달 표시 함수
function showModal() {
  const modal = document.getElementById("thanks-modal");
  modal.style.display = "block"; // 모달을 보이게 함

  // 이름 업데이트
  const modalName = document.getElementById("modal-name");
  modalName.textContent = person.name;

  // 3초 후에 모달을 닫는 타이머 설정
  setTimeout(hideModal, 3000); // 3000 밀리초 (3초)
}

// 모달 숨김 함수
function hideModal() {
  const modal = document.getElementById("thanks-modal");
  modal.style.display = "none"; // 모달을 숨김
}

// "모달 닫기" 버튼을 클릭하여 모달을 숨깁니다
const closeButton = document.getElementById("close-button");
closeButton.addEventListener('click', hideModal);

//청원서 폼 확인하는 부분
const validateForm = () => {
  let containsErrors = false;
  var petitionInputs = document.getElementById("sign-petition").elements;

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 2) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailRegex.test(emailValue)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (!containsErrors) {
    // Add the signature by passing the 'person' object
    addSignature(person);

    // Clear form input values
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }

    // 모달 표시 함수 호출
    showModal();

    // 콘솔에 메시지 출력
    console.log("Form submitted successfully!");
  }
}




const signNowButton = document.getElementById("sign-now-button");
signNowButton.addEventListener('click', validateForm);






//헤더 가리기
const header = document.getElementById("header");
let floating = false;

// 페이지 스크롤 이벤트 리스너
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    if (!floating) {
      header.style.transform = "translateY(-100%)";
      header.style.transition = "transform 0.3s";
      floating = true;
    }
  } else {
    header.style.transform = "translateY(0)";
    header.style.transition = "transform 0.3s";
    floating = false;
  }
});

//Footer를 스크롤을 올릴 때 숨기는 마우스 이벤트
let prevScrollPos = window.pageYOffset; // 현재 스크롤 위치를 저장

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset; // 현재 스크롤 위치를 가져옴
  const footer = document.querySelector('.footer');

  if (prevScrollPos > currentScrollPos) {
    // 스크롤을 올리는 중일 때 Footer를 나타나게 함
    footer.style.bottom = '-100px';
  } else {
    // 스크롤을 내리는 중일 때 Footer를 숨김
    footer.style.bottom = '0px'; // Footer의 높이에 따라 조절 가능
  }

  prevScrollPos = currentScrollPos; // 현재 스크롤 위치를 저장
}

