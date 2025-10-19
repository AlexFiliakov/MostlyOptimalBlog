import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"

interface NavigationItem {
  label: string
  href: string
}

const CustomHeader: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
  const baseDir = pathToRoot(fileData.slug!)

  const navigationItems: NavigationItem[] = [
    { label: "Applications", href: "https://applications.mostlyoptimal.com/" },
    { label: "Research", href: "https://mostlyoptimal.com/research/" },
    { label: "Foundations", href: "https://mostlyoptimal.com/theory/" },
    { label: "FAQ", href: "https://ergodicityadvantage.com/faq/" },
    { label: "Quick Start", href: "https://mostlyoptimal.com/tutorial/" },
    { label: "About", href: "https://ergodicityadvantage.com/about/" },
    { label: "Contact", href: "https://ergodicityadvantage.com/contact/" },
  ]

  return (
    <header class="ergodicity-header">
      <div class="header-container">
        <div class="header-content">
          <a href={baseDir} class="logo-section">
            <div class="logo-text">
              <span class="logo-gold">Ergodicity</span>
              <span class="logo-forest"> Advantage</span>
            </div>
          </a>

          <nav class="desktop-nav">
            {navigationItems.map((item) => (
              <a href={item.href} class="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <button class="mobile-menu-button" aria-label="Toggle menu" id="mobile-menu-toggle">
            <svg class="menu-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="3" y1="12" x2="21" y2="12" stroke-width="2" />
              <line x1="3" y1="6" x2="21" y2="6" stroke-width="2" />
              <line x1="3" y1="18" x2="21" y2="18" stroke-width="2" />
            </svg>
            <svg class="close-icon hidden" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18" stroke-width="2" />
              <line x1="6" y1="6" x2="18" y2="18" stroke-width="2" />
            </svg>
          </button>
        </div>
      </div>

      <div class="minimized-logo hidden">
        <a href={baseDir} class="logo-section">
          <div class="logo-text">
            <span class="logo-gold">Ergodicity</span>
            <span class="logo-forest"> Advantage</span>
          </div>
        </a>
      </div>

      <div class="mobile-menu hidden" id="mobile-menu">
        <nav class="mobile-nav">
          {navigationItems.map((item, index) => (
            <a href={item.href} class="mobile-nav-link" style={`animation-delay: ${index * 50}ms`}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

CustomHeader.afterDOMLoaded = `
  const headerContainer = document.querySelector('.header-container');
  const minimizedLogo = document.querySelector('.minimized-logo');
  const mobileMenuButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = mobileMenuButton?.querySelector('.menu-icon');
  const closeIcon = mobileMenuButton?.querySelector('.close-icon');

  let lastScrollY = window.scrollY;
  let scrollUpDistance = 0;
  let isMinimized = false;
  let isHeaderHovered = false;
  let isScrollingUp = false;

  function handleScroll() {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    const scrollingUp = scrollTop < lastScrollY;

    if (scrollingUp) {
      scrollUpDistance += lastScrollY - scrollTop;
      isScrollingUp = scrollUpDistance >= 100;
    } else {
      scrollUpDistance = 0;
      isScrollingUp = false;
    }

    const shouldMinimize = scrollTop > viewportHeight - 200;
    isMinimized = shouldMinimize;

    updateHeaderState();
    lastScrollY = scrollTop;
  }

  function updateHeaderState() {
    if (!headerContainer || !minimizedLogo) return;

    if (isMinimized && !isHeaderHovered && !isScrollingUp) {
      headerContainer.classList.add('minimized');
      minimizedLogo.classList.remove('hidden');
    } else {
      headerContainer.classList.remove('minimized');
      minimizedLogo.classList.add('hidden');
    }
  }

  if (headerContainer && minimizedLogo) {
    headerContainer.addEventListener('mouseenter', () => {
      isHeaderHovered = true;
      updateHeaderState();
    });

    headerContainer.addEventListener('mouseleave', () => {
      isHeaderHovered = false;
      updateHeaderState();
    });

    minimizedLogo.addEventListener('mouseenter', () => {
      isHeaderHovered = true;
      updateHeaderState();
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  // Mobile menu toggle
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');

      if (isOpen) {
        mobileMenu.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
        document.body.style.overflow = '';
      } else {
        mobileMenu.classList.remove('hidden');
        menuIcon?.classList.add('hidden');
        closeIcon?.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuIcon?.classList.remove('hidden');
        closeIcon?.classList.add('hidden');
        document.body.style.overflow = '';
      });
    });
  }
`

CustomHeader.css = `
.ergodicity-header {
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 1rem;
}

.header-container {
  max-width: 93%;
  margin: 0 auto;
  height: 4rem;
  padding: 0 1rem;
  border-radius: 1rem;
  border: 1px solid transparent;
  background: transparent;
  backdrop-filter: blur(4px);
  transition: all 0.5s ease-in-out;
}

.header-container.minimized {
  width: 280px;
  height: 4rem;
  overflow: hidden;
  transition: all 0.5s ease-linear;
}

.header-container.minimized .header-content {
  justify-content: center;
  opacity: 0;
  visibility: hidden;
}

.header-container:hover,
.header-container.scrolled {
  background: white;
  border-color: #e5e5e5;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  transition: all 0.3s;
}

.logo-section {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.logo-section:hover {
  opacity: 0.8;
}

.logo-text {
  font-family: var(--headerFont);
  font-weight: 700;
  font-size: 1.5rem;
}

.logo-gold {
  color: #F7C948;
}

.logo-forest {
  color: #2A4D3A;
}

.desktop-nav {
  display: none;
  align-items: center;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .desktop-nav {
    display: flex;
  }
  .mobile-menu-button {
    display: none;
  }
}

.nav-link {
  color: #2A4D3A;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  position: relative;
}

.nav-link:hover {
  color: #00B4A6;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -0.25rem;
  left: 0;
  width: 0;
  height: 0.125rem;
  background-color: #00B4A6;
  transition: width 0.3s;
}

.nav-link:hover::after {
  width: 100%;
}

.mobile-menu-button {
  background: none;
  border: none;
  color: #2A4D3A;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.2s;
}

.mobile-menu-button:hover {
  color: #00B4A6;
}

.minimized-logo {
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1001;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e5e5;
  transition: opacity 0.1s ease-linear;
  transition-delay: 350ms;
}

.minimized-logo.hidden {
  opacity: 0;
  pointer-events: none;
}

.mobile-menu {
  position: fixed;
  top: 5rem;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(174, 198, 193, 0.2);
  max-height: calc(100vh - 5rem);
  overflow-y: auto;
  z-index: 999;
}

.mobile-menu.hidden {
  display: none;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
}

.mobile-nav-link {
  display: block;
  padding: 1rem 1.5rem;
  color: #2A4D3A;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid rgba(174, 198, 193, 0.1);
  transition: background-color 0.2s, color 0.2s;
}

.mobile-nav-link:hover {
  background-color: rgba(174, 198, 193, 0.1);
  color: #00B4A6;
}

.hidden {
  display: none;
}

/* Add spacing for fixed header */
body {
  padding-top: 6rem;
}
`

export default (() => CustomHeader) satisfies QuartzComponentConstructor
