<!-- Logo Project Stack -->
<p align="center">
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/javascript/javascript.png" width="60" alt="JavaScript logo" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/html/html.png" width="60" alt="HTML logo" />
  <img src="https://raw.githubusercontent.com/github/explore/main/topics/json/json.png" width="60" alt="JSON logo" />
  <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" width="90" alt="Google logo" />
</p>

# ✨ Grammar Fixer Chrome Extension ✨

A simple, fast, and user-friendly Chrome extension for quick grammar and typo correction using Google Gemini 2.0 Flash AI. Perfect for anyone needing instant text refinement without login hassles!

## 🚀 Core Functionality

-   **Purpose**: Quick grammar and typo checker for Indonesian and English text.
-   **AI Backend**: Powered by Google Gemini 2.0 Flash API (free tier).
-   **User Flow**: Click extension → Paste text → Fix grammar → Copy result.
-   **Target Users**: Anyone who needs quick grammar checking.

## 🛠️ Technical Requirements

### 📁 Files Structure
```
grammar-fixer-extension/
├── manifest.json          # Extension configuration ⚙️
├── popup.html            # Main UI popup 🌐
├── popup.js              # JavaScript logic 📜
├── icon48.png           # 48x48 icon 🖼️
└── icon128.png          # 128x128 icon 🖼️
```

### ✨ Key Features Implemented

1.  **Clean UI Design**
    *   Modern glassmorphism design.
    *   Purple-blue gradient background.
    *   Responsive layout (400px width).
    *   Loading indicators and animations.
2.  **Core Functionality**
    *   Textarea for input text with character counter.
    *   "Fix Grammar" button with loading state.
    *   Output textarea (read-only) for corrected text.
    *   Copy button with visual feedback.
    *   Embedded API key (no user input needed).
3.  **UX Enhancements**
    *   Keyboard shortcuts (Ctrl+Enter to fix, Ctrl+C to copy).
    *   Auto-focus on input field.
    *   Success messages for copy action.
    *   Error handling for API failures.
    *   Character count display.
4.  **API Integration**
    *   Uses Gemini 2.0 Flash model.
    *   Endpoint: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent`
    *   Optimized prompt for grammar correction.

## 🎨 Design Specifications

### Visual Design
-   **Color Scheme**: Purple-blue gradient (`#667eea` to `#764ba2`).
-   **Typography**: Segoe UI font family.
-   **Components**: Glassmorphism cards with backdrop blur.
-   **Buttons**: Rounded corners, hover effects, disabled states.
-   **Icons**: Emoji-based icons for buttons (🔧, 📋).

### Layout Requirements
-   Header with app title and emoji.
-   Input section with label and character counter.
-   Action button ("Fix Grammar").
-   Loading indicator (spinner + text).
-   Output section with result textarea.
-   Copy button (initially disabled).
-   Success message for copy feedback.

## 💻 Technical Implementation Details

### `manifest.json` Requirements
-   Manifest version 3.
-   Permissions: `storage`, `activeTab`.
-   Host permissions for Gemini API.
-   Action popup configuration.
-   Icon references (48px and 128px only - Chrome will auto-scale for toolbar).

### `popup.js` Logic
-   Event listeners for all interactions.
-   Async API calls to Gemini.
-   Error handling and user feedback.
-   Character counting.
-   Clipboard operations.
-   Keyboard shortcut handling.

### API Prompt Optimization
```
Fix grammar, spelling, and typos in this Indonesian/English text. Return only the corrected version without any explanation or additional text:

[USER_TEXT]
```

## 🚶 User Experience Flow

1.  User clicks extension icon in Chrome toolbar.
2.  Popup opens with auto-focused input textarea.
3.  User pastes text that needs correction.
4.  User clicks "Fix Grammar" button (or Ctrl+Enter).
5.  Loading indicator shows while processing.
6.  Corrected text appears in output area.
7.  Copy button becomes enabled.
8.  User clicks copy (or Ctrl+C) to copy result.
9.  Success message confirms copy action.

## 🚨 Error Handling

-   Empty input validation.
-   API error responses.
-   Network connectivity issues.
-   Rate limiting handling.
-   User-friendly error messages.

## ⚡ Performance Considerations

-   Lightweight code (minimal dependencies).
-   Fast popup loading.
-   Efficient API calls.
-   Minimal memory usage.
-   Responsive UI interactions.

## 🌐 Browser Compatibility

-   Target: Chrome (Manifest V3).
-   Extension should work on all modern Chrome versions.
-   Responsive design for different screen sizes.

## 🖼️ Icon Requirements

-   **Icons needed**: Only 2 sizes (48x48 and 128x128 PNG files).
-   **Design**: Purple-blue gradient circle background with white document, yellow pen, and green checkmark.
-   **Chrome behavior**: Will auto-scale 48px icon for 16px toolbar display.
-   **Format**: PNG with transparent background.

## 🚀 Installation & Usage

1.  **Download/Clone**: Get the extension files.
2.  **Open Chrome Extensions**: Navigate to `chrome://extensions` in your Chrome browser.
3.  **Enable Developer Mode**: Toggle "Developer mode" on (usually in the top right corner).
4.  **Load Unpacked**: Click "Load unpacked" and select the `grammar-fixer-extension` directory.
5.  **Launch**: Click the Grammar Fixer extension icon in your Chrome toolbar to open the popup.
6.  **Fix Grammar**: Paste your text, click "Fix Grammar" (or Ctrl+Enter), and get your corrected text!
7.  **Copy Result**: Click "Copy Result" (or Ctrl+C) to copy the corrected text to your clipboard.

## Cara Install & Pakai (Manual)

1. **Clone repo ini** atau download sebagai ZIP:
   - Clone:  
     ```bash
     git clone https://github.com/pradastikomyos/typo-grammar-extension.git
     ```
   - Atau download ZIP, lalu extract ke folder mana saja.

2. **Buka Google Chrome**

3. Masuk ke halaman `chrome://extensions/`

4. Aktifkan **Developer mode** (pojok kanan atas)

5. Klik **Load unpacked**

6. Pilih folder hasil clone/extract repo ini

7. Extension siap digunakan! Ikon akan muncul di pojok kanan atas Chrome.

---

☕ Kalau ngebantu, dukung aku biar bisa upload ke Chrome Web Store (biayanya $5):
 https://saweria.co/prdastikomyos

Makasih banyak, semoga bermanfaat! 🙌

Made with ❤️ and powered by Google Gemini AI.
