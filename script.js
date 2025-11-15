 //This is for the dropdown menus
    function toggleDropdown(dropdownId) {
    console.log(dropdownId);
      const dropdownContent = document.getElementById(dropdownId);
      const isOpen = dropdownContent.style.display === 'block';
        dropdownContent.style.display = 'block'
    console.log(dropdownContent);

    document.querySelectorAll('.dropdownContent').forEach(dropdown => {
    dropdown.style.display = 'none';
    });

    
      if (!isOpen) {
        dropdownContent.style.display = 'block';
      }
    }

    document.addEventListener('click', function(event) {
    if (!event.target.closest('.fltrContainer')) {
    document.querySelectorAll('.dropdownContent').forEach(dropdown => {
    dropdown.style.display = 'none';
    });
    }
    });


//This is for selecting the events
document.querySelectorAll('.eventOptionsLine').forEach(line => {
  line.addEventListener('click', function() {
    document.querySelectorAll('.eventOptionsLine').forEach(l => {
      l.style.backgroundImage = 'none';
      l.style.backgroundColor = '';
      l.querySelector('.optionBoxDT').style.color = '#202020';
      l.querySelector('.optionBoxName').style.color = '#202020';
    });

    this.style.backgroundImage = 'url(util/BackgroundColorVelvet.png)';
    this.style.backgroundSize = 'cover';
    this.style.backgroundPosition = 'center';
    this.style.color = 'white';
    this.querySelector('.optionBoxDT').style.color = 'white';
    this.querySelector('.optionBoxName').style.color = 'white';
  });
});