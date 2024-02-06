const swiper = new Swiper('.swiper', {
    loop: true,
  
    // autoplay: {
    //     delay: 2500,
    // },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
  });


  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 250) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  


    const dropdown = document.querySelector('.custom-dropdown');
    const selectedOption = dropdown.querySelector('.selected-option');
    const dropdownList = dropdown.querySelector('.dropdown-list');
  
    // Show/hide dropdown list
    selectedOption.addEventListener('click', function() {
      dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    });
  
    // Select an option
    dropdownList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI' && e.target.textContent !== "Select one...") {
        selectedOption.textContent = e.target.textContent;
        dropdownList.style.display = 'none';
      }
    });

  
  