:root {
  --black: #000000;
  --red: #CF0A0A;
  --orange: #DC5F00;
  --white: #EEEEEE;
  --off-white: #f7f7f7;
  --charcoal: #111111;
  --text: #1a1a1a;
  --muted: #666666;
  --border: rgba(0, 0, 0, 0.08);
  --shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", Arial, sans-serif;
  background: var(--off-white);
  color: var(--text);
  line-height: 1.6;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
textarea {
  font: inherit;
}

.container {
  width: min(1180px, calc(100% - 32px));
  margin: 0 auto;
}

.section {
  padding: 90px 0;
}

.topbar {
  background: var(--black);
  color: var(--white);
  font-size: 0.8rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.topbar-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-height: 42px;
}

.site-nav {
  position: sticky;
  top: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: 76px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--white);
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.brand-mark {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--orange), var(--red));
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.12);
}

.nav-menu {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0;
  padding: 0;
  color: var(--white);
  font-weight: 600;
}

.nav-menu a {
  opacity: 0.84;
  transition: opacity 0.2s ease, color 0.2s ease;
}

.nav-menu a:hover {
  opacity: 1;
  color: var(--orange);
}

.hero {
  background:
    linear-gradient(90deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.35)),
    url('https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;
  color: var(--white);
  padding: 90px 0;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  align-items: center;
  gap: 40px;
}

.eyebrow {
  margin: 0 0 18px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-weight: 700;
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.8);
}

.eyebrow.dark {
  color: var(--red);
}

.eyebrow.light {
  color: rgba(255, 255, 255, 0.8);
}

.hero-copy h1,
.section-header h2,
.about-copy h2 {
  margin: 0;
  line-height: 0.95;
  letter-spacing: -0.04em;
  text-transform: uppercase;
}

.hero-copy h1 {
  font-size: clamp(3rem, 6vw, 6rem);
}

.hero-text {
  max-width: 620px;
  margin: 20px 0 0;
  font-size: 1.09rem;
  color: rgba(255, 255, 255, 0.88);
}

.cta-group {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.btn {
  border: none;
  border-radius: 999px;
  padding: 16px 26px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  background: var(--red);
  color: var(--white);
}

.btn-primary:hover {
  background: var(--orange);
}

.btn-secondary {
  background: transparent;
  color: var(--white);
  border: 2px solid rgba(255, 255, 255, 0.7);
}

.btn-secondary:hover {
  background: var(--white);
  color: var(--black);
}

.hero-panel {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 28px;
  overflow: hidden;
  box-shadow: var(--shadow);
}

.hero-image-wrap img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}

.hero-panel-info {
  padding: 22px 24px 26px;
}

.panel-label {
  color: rgba(255, 255, 255, 0.75);
  text-transform: uppercase;
  font-size: 0.72rem;
  letter-spacing: 0.15em;
}

.hero-panel-info h2 {
  margin: 8px 0 16px;
  font-size: clamp(2rem, 3vw, 3rem);
  line-height: 1;
}

.panel-row {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.panel-row div {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
  padding: 12px 10px;
  text-align: center;
}

.panel-row strong {
  display: block;
  font-size: 1.2rem;
  color: var(--white);
}

.panel-row span {
  color: rgba(255, 255, 255, 0.76);
  font-size: 0.76rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.section-header {
  text-align: center;
  margin-bottom: 42px;
}

.section-header h2,
.about-copy h2 {
  font-size: clamp(2.2rem, 4vw, 4rem);
  color: var(--text);
}

.bike-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 28px;
}

.bike-card {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 14px 30px rgba(0, 0, 0, 0.04);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.bike-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.1);
}

.bike-card img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}

.bike-body {
  padding: 22px 20px 24px;
}

.bike-body h3 {
  margin: 0 0 10px;
  font-size: 1.7rem;
  color: var(--black);
}

.bike-body p {
  margin: 0 0 18px;
  color: var(--muted);
}

.bike-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
}

.price {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--red);
}

.mini-btn {
  border: none;
  background: var(--black);
  color: var(--white);
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s ease;
}

.mini-btn:hover {
  background: var(--orange);
}

.palette-wrap {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 22px;
  margin-top: 48px;
}

.swatch {
  width: 120px;
  text-align: center;
}

.color-chip {
  width: 100%;
  height: 80px;
  border-radius: 18px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
}

.color-chip.black { background: var(--black); }
.color-chip.red { background: var(--red); }
.color-chip.orange { background: var(--orange); }
.color-chip.white { background: var(--white); }

.swatch span {
  display: block;
  font-weight: 700;
  color: var(--text);
}

.about {
  background: linear-gradient(180deg, var(--charcoal), #1e1e1e);
  color: var(--white);
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 34px;
  align-items: center;
}

.about-copy p {
  color: rgba(255, 255, 255, 0.82);
  max-width: 620px;
  font-size: 1.04rem;
}

.about-copy h2 {
  color: var(--white);
  margin: 0 0 20px;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-item {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 22px 18px;
  text-align: center;
}

.feature-icon {
  width: 58px;
  height: 58px;
  margin: 0 auto 14px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, var(--orange), var(--red));
  font-size: 1.6rem;
}

.feature-item h3 {
  margin: 0 0 8px;
  font-size: 1.15rem;
}

.feature-item p {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.92rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 30px;
}

.contact-panel,
.contact-form {
  background: var(--white);
  border: 1px solid var(--border);
  border-radius: 22px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.04);
}

.contact-panel {
  padding: 28px 24px;
}

.contact-panel h3 {
  margin-top: 0;
  margin-bottom: 18px;
  font-size: 2rem;
}

.contact-panel p,
.contact-panel li {
  color: var(--muted);
  font-size: 1rem;
}

.contact-panel ul {
  margin: 16px 0 0;
  padding-left: 20px;
}

.contact-form {
  padding: 24px;
  display: grid;
  gap: 16px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  border: 1px solid #d8d8d8;
  border-radius: 14px;
  padding: 16px 18px;
  background: #fff;
  color: var(--text);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--orange);
  box-shadow: 0 0 0 4px rgba(220, 95, 0, 0.1);
  outline: none;
}

.contact-form textarea {
  min-height: 150px;
  resize: vertical;
}

.site-footer {
  background: var(--black);
  color: var(--white);
  padding: 22px 0;
}

.footer-inner {
  text-align: center;
}

.footer-inner p {
  margin: 0;
}

@media (max-width: 980px) {
  .hero-inner,
  .bike-grid,
  .about-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .feature-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 700px) {
  .nav-menu {
    gap: 14px;
    font-size: 0.82rem;
  }

  .topbar-inner {
    justify-content: center;
    text-align: center;
    padding: 8px 0;
    flex-direction: column;
  }

  .nav-inner {
    flex-direction: column;
    justify-content: center;
    padding: 12px 0;
  }

  .cta-group {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .panel-row {
    grid-template-columns: 1fr;
  }
}
