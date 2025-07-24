# Tab Switcher Project

This is a simple and clean tab-switching interface built with **HTML**, **CSS**, and **JavaScript**. It demonstrates how to create an interactive tab system where users can click buttons to switch between different content panels.

## 🔥 Features

- Dynamic tab switching using pure JavaScript
- Only one tab and content panel is active at a time
- Clean and responsive layout
- Custom styling using modern CSS
- Easily extendable and customizable
- https://roadmap.sh/projects/simple-tabs

## 📂 File Structure

```
.
├── ind.html       # Main HTML structure with tab buttons and panels
├── ind.css        # Styling for layout, buttons, and tab panels
└── ind.js         # Logic to toggle active tabs and content
```

## 🚀 How It Works

- Buttons with the class `.tab-button` represent each tab.
- Each button has a `data-tab` attribute that maps to a `.tab-panel` with the corresponding `id`.
- Only the active tab and panel have the class `.active`.
- JavaScript handles click events to update the active state.

## 📸 Preview

![Tab Example](https://user-images.githubusercontent.com/your-screenshot.png) <!-- Optional: Add screenshot if available -->

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## 🧪 How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/sirivarsha1318/tabs.git
   ```
2. Open `ind.html` in your browser.
3. Click on any tab to see the content switch.

## ✨ Customization Tips

- To add more tabs: add a new button with `data-tab="tabX"` and a new `.tab-panel` with `id="tabX"`.
- Modify the CSS to change color schemes, transitions, or layout.
- Add icons, animations, or dynamic data loading as needed.

## 💡 Author

**Siri Varsha Nistala**  
Made with ❤️ for practice and learning.
