function mobileMenuShow() {
    if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        
        // change 'close icon' to 'bars icon' 
        mobileMenuIcon.classList.remove('fa-xmark')
        mobileMenuIcon.classList.add('fa-bars')
    } else {
        mobileMenu.classList.add('open');
        
        // change 'bars icon' to 'close icon'
        mobileMenuIcon.classList.remove('fa-bars')
        mobileMenuIcon.classList.add('fa-xmark')
    }
}

