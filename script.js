// DOM Elements
const navBtns = document.querySelectorAll('.nav-btn');
const contentSections = document.querySelectorAll('.content-section');
const sidebarItems = document.querySelectorAll('.sidebar-item');
const songCards = document.querySelectorAll('.song-card');
const artistCards = document.querySelectorAll('.artist-card');
const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileMenuBackdrop = document.getElementById('mobileMenuBackdrop');

// Mobile Menu Functions
function toggleMobileMenu() {
    console.log('Toggle mobile menu function called');
    console.log('Hamburger element:', hamburgerMenu);
    console.log('Overlay element:', mobileMenuOverlay);
    console.log('Backdrop element:', mobileMenuBackdrop);
    
    if (hamburgerMenu) {
        hamburgerMenu.classList.toggle('active');
        console.log('Hamburger active class toggled');
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.toggle('active');
        console.log('Overlay active class toggled');
    }
    
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.classList.toggle('active');
        console.log('Backdrop active class toggled');
    }
    
    document.body.style.overflow = mobileMenuOverlay && mobileMenuOverlay.classList.contains('active') ? 'hidden' : '';
    console.log('Body overflow set to:', document.body.style.overflow);
}

function closeMobileMenu() {
    console.log('Close mobile menu function called');
    
    if (hamburgerMenu) {
        hamburgerMenu.classList.remove('active');
    }
    
    if (mobileMenuOverlay) {
        mobileMenuOverlay.classList.remove('active');
    }
    
    if (mobileMenuBackdrop) {
        mobileMenuBackdrop.classList.remove('active');
    }
    
    document.body.style.overflow = '';
    console.log('Mobile menu closed');
}


// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    initializeNightMode();
});

// Event Listeners
function initializeEventListeners() {
    console.log('Initializing event listeners...');
    
    // Check if elements exist
    console.log('Hamburger menu element:', hamburgerMenu);
    console.log('Mobile menu overlay:', mobileMenuOverlay);
    console.log('Mobile menu backdrop:', mobileMenuBackdrop);
    console.log('Mobile menu close:', mobileMenuClose);

    // Navigation
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => switchSection(btn.dataset.section));
    });

    // Sidebar navigation
    sidebarItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            sidebarItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            if (index === 0) switchSection('home');
            if (index === 1) switchSection('search');
        });
    });

    // Hamburger menu - Enhanced debugging
    if (hamburgerMenu) {
        console.log('Adding click listener to hamburger menu');
        hamburgerMenu.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Hamburger clicked!');
            toggleMobileMenu();
        });
    } else {
        console.error('Hamburger menu element not found!');
    }
    
    if (mobileMenuClose) {
        console.log('Adding click listener to close button');
        mobileMenuClose.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Close button clicked!');
            closeMobileMenu();
        });
    } else {
        console.error('Mobile menu close button not found!');
    }
    
    if (mobileMenuBackdrop) {
        console.log('Adding click listener to backdrop');
        mobileMenuBackdrop.addEventListener('click', function(e) {
            console.log('Backdrop clicked!');
            closeMobileMenu();
        });
    } else {
        console.error('Mobile menu backdrop not found!');
    }

    if (mobileMenuOverlay) {
        mobileMenuOverlay.addEventListener('click', (e) => {
            if (e.target === mobileMenuOverlay) {
                console.log('Overlay clicked!');
                closeMobileMenu();
            }
        });
    }

    // Mobile navigation
    mobileNavItems.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            mobileNavItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            
            if (index === 0) switchSection('home');
            if (index === 1) switchSection('search');
            // Library and Premium can be added later
        });
    });

    


    // Song cards - Remove play functionality, just for display
    songCards.forEach(card => {
        const playBtn = card.querySelector('.song-play-btn');
        if (playBtn) {
            playBtn.remove(); // Remove play buttons
        }
    });

    // Artist cards - Remove play functionality, just for display
    artistCards.forEach(card => {
        const playBtn = card.querySelector('.artist-play-btn');
        if (playBtn) {
            playBtn.remove(); // Remove play buttons
        }
    });


    // Library buttons
    const createPlaylistBtn = document.querySelector('.create-playlist-btn');
    const browsePodcastsBtn = document.querySelector('.browse-podcasts-btn');
    const nightModeToggle = document.getElementById('nightModeToggle');
    const mobileNightModeToggle = document.getElementById('mobileNightModeToggle');
    
    if (createPlaylistBtn) {
        createPlaylistBtn.addEventListener('click', () => {
            alert('Create playlist functionality coming soon!');
        });
    }
    
    if (browsePodcastsBtn) {
        browsePodcastsBtn.addEventListener('click', () => {
            alert('Browse podcasts functionality coming soon!');
        });
    }
    
    if (nightModeToggle) {
        nightModeToggle.addEventListener('click', toggleNightMode);
        console.log('Night mode toggle listener added');
    }
    
    if (mobileNightModeToggle) {
        mobileNightModeToggle.addEventListener('click', toggleNightMode);
        console.log('Mobile night mode toggle listener added');
    }
}

// Navigation Functions
function switchSection(sectionId) {
    // Update nav buttons
    navBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.section === sectionId) {
            btn.classList.add('active');
        }
    });

    // Update content sections
    contentSections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
}

// Night Mode Functions
function initializeNightMode() {
    // Check if user has a saved preference
    const savedMode = localStorage.getItem('nightMode');
    if (savedMode === 'enabled') {
        enableNightMode();
    }
}

function toggleNightMode() {
    const body = document.body;
    const isNightMode = body.classList.contains('night-mode');
    
    if (isNightMode) {
        disableNightMode();
    } else {
        enableNightMode();
    }
}

function enableNightMode() {
    document.body.classList.add('night-mode');
    localStorage.setItem('nightMode', 'enabled');
    console.log('Night mode enabled');
}

function disableNightMode() {
    document.body.classList.remove('night-mode');
    localStorage.setItem('nightMode', 'disabled');
    console.log('Night mode disabled');
}

