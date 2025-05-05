// 1. Button Click Event
document.getElementById('magicButton').addEventListener('click', () => {
    const text = document.getElementById('magicText');
    text.textContent = "🎉 You clicked the button!";
    text.style.color = "green";
    text.style.fontWeight = "bold";
  });
  
  // 2. Image Slideshow
  let imgIndex = 1;
  function nextImage() {
    imgIndex = (imgIndex % 3) + 1;
    document.getElementById('gallery').src = `images/image${imgIndex}.png`;
  }
  
  // 3. Tab Navigation
  function showTab(tabId) {
    document.getElementById('tab1').style.display = "none";
    document.getElementById('tab2').style.display = "none";
    document.getElementById(tabId).style.display = "block";
  }
  
  // 4. Form Validation
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const feedback = document.getElementById('formFeedback');
  
    if (!email.value.includes('@')) {
      feedback.textContent = "❌ Invalid email format.";
      feedback.style.color = "red";
      return;
    }
  
    if (password.value.length < 8) {
      feedback.textContent = "❌ Password must be at least 8 characters.";
      feedback.style.color = "red";
      return;
    }
  
    feedback.textContent = "✅ Form submitted successfully!";
    feedback.style.color = "green";
  });
  
  // 5. Keypress Detection
  document.addEventListener('keydown', (e) => {
    console.log(`You pressed: ${e.key}`);
  });
  
  // 6. Double Click Secret
  document.getElementById('magicButton').addEventListener('dblclick', () => {
    alert("🤫 Secret double-click activated!");
  });
  