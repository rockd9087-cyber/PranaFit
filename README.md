# PranaFit - Holistic Health & Pan-India Lifestyle Assistant

A completely self-contained, independent 3-file web application (`index.html`, `style.css`, `script.js`). It runs directly in VS Code or any standard browser without requiring Node.js, external servers, paid API keys, or cloud resources.

---

## 📁 Pure 3-File Architecture

- `index.html`: Complete semantic HTML5 structure with responsive layouts, accessible navigation tabs, and dialog modals.
- `style.css`: Clean, modern, accessible CSS design system with CSS custom properties (variables), flexbox, grid, and fluid typography.
- `script.js`: Pure vanilla JavaScript powering location detection, pan-India regional nutrition, Web Audio soundscape synth, Speech Synthesis voice coach, camera scanner, and local persistence.

---

## 🚀 Running in Visual Studio Code

### Option 1: Direct Run (Zero Installation Required)
1. Open the folder containing `index.html`, `style.css`, and `script.js` in **VS Code**.
2. Right-click on `index.html` and select **"Open with Live Server"** (or simply double-click `index.html` to open it directly in Google Chrome, Edge, Safari, or Firefox).
3. The app is 100% operational immediately!

### Option 2: Run with Vite / npm
If you prefer running a local development server with Vite:
```bash
npm install
npm run dev
```

---

## 🇮🇳 Pan-India Regional Coverage & Location-Based Recommendations

PranaFit covers all zones of India with automatic GPS location detection (`navigator.geolocation`) and manual switching:

1. **North India (Delhi/NCR, Punjab, Haryana, UP)**:
   - Sprouted Moong Tandoori Parathas, Amritsari Kala Chana with baked millet kulcha, Sarson & Methi greens, and roasted cumin Chaas.
2. **West India (Maharashtra, Gujarat, Rajasthan, Goa)**:
   - Air-crisped Sprouted Oats Vada Pav, Matki Usal, Steamed Moong Dhokla, Baked Bajra Bafla with Panchmel Dal, and sugar-free Kokum Sharbat.
3. **South India (Karnataka, Tamil Nadu, Telangana, Kerala, Andhra Pradesh)**:
   - Fermented Ragi & Oats Masala Dosa, Soya Chunks Dum Biryani, Red Rice Idli with Drumstick Sambhar, Neer Mor, and Pepper Rasam.
4. **East & North-East (Bengal, Odisha, Assam, Bihar)**:
   - Charcoal-baked Sattu Litti with Charred Chokha, Steamed Fish in Mustard Broth (Macher Jhol), Odia Dalma with raw papaya, and Sattu lemon water.
5. **Central India (Madhya Pradesh / Indore, Bhopal, Malwa)**:
   - Steamed Poha with sprouted green gram and pomegranate, Skimmed milk Bhutte Ka Kees, Air-baked Garadu Chaat, and mint jaljeera.

---

## 📦 Native Web Capabilities (Zero Paid Keys or Cloud Resource Dependency)

- **Browser Geolocation API** (`navigator.geolocation.getCurrentPosition`) for detecting the user's Indian geographic zone.
- **Web Speech API** (`window.speechSynthesis`) for the interactive voice coach.
- **Web Audio API** (`AudioContext`) for algorithmic soundscapes: 432 Hz theta waves, pink noise rain, and timer chimes.
- **MediaDevices API** (`navigator.mediaDevices.getUserMedia`) for facial stress diagnostic scans.
- **Web Storage API** (`localStorage` & `sessionStorage`) for preserving user profiles, streaks, green points, and intelligent session persistence.
- **Optional Health Biometrics Engine**: Non-compulsory Age, Height, and Weight collection calculating Body Mass Index (BMI), Mifflin-St Jeor Basal Metabolic Rate (BMR), Daily Caloric TDEE burn, and customized hydration quotas.
- **User Authentication System (Sign In, Sign Up & "Remember Me")**: Complete local account registry with password visibility toggle, quick 1-click demo login, sign-up bonus points, and intelligent device persistence ("Remember Me" keeps users logged in so they never need to log in again, while session-only option clears on browser close).
