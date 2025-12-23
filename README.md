
# 🚀 The Newbie Backpack (Cyberpunk Portfolio)

A highly stylized and thematic personal portfolio website designed to resemble a **Cyberpunk RPG Character Sheet** or a **Hacker Terminal**. This project showcases programming skills, projects, and credentials with a unique, retro-futuristic aesthetic.

## 🌟 Features

* **Thematic Design:** Implements a distinct Cyberpunk/Hacker Terminal aesthetic using neon colors (green/purple), mono-spaced fonts, and terminal-like elements.
* **RPG Structure:** Content is structured like an RPG profile:
* **START (`#hero`):** Character introduction and class.
* **STATS (`#skills`):** Core programming attributes and equipped skills (Tech Stack).
* **QUESTS (`#quests`):** Recent projects and deployments (with EXP rewards).
* **INVENTORY (`#inventory`):** Certifications and resume download (treated as "Legendary Items").
* **CHAT_LOG (`#contact`):** Contact form for messaging.


* **Visual Effects:** Includes scanlines, subtle glow effects (`box-shadow`), animations (typing, floating avatar, blinking cursor), and a "glitch" effect on the main heading.
* **Responsive Navigation:** A fixed, terminal-style navigation bar with a responsive hidden menu for mobile.
* **No Backend Required:** The contact form is managed using **FormSubmit**, requiring no server-side code for email functionality.

## 🛠️ Tech Stack

This project is a purely static site built for presentation.

* **Markup:** HTML5
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Customization:** Utilizes extensive custom Tailwind configurations for specific colors (`neon-green`, `neon-purple`), shadows, fonts, and animations (`blink`, `float`).


* **Interactivity:** Vanilla JavaScript (for typing animation and mobile menu toggle).
* **Fonts:**
* `Press Start 2P` (for the "game" font).
* `Roboto Mono` (for the "code" font).


* **Form Handling:** [FormSubmit](https://formsubmit.co/) (Used for the contact form, simplifying server-side submission).

## 🧰 Custom Tailwind Configuration

The core of the Cyberpunk look is defined in the `<script>` tag configuration:

| Key | Value | Description |
| --- | --- | --- |
| `fontFamily.game` | `'Press Start 2P'` | Retro game title font. |
| `colors.neon-green` | `#39ff14` | Primary glow and text color. |
| `colors.neon-purple` | `#b026ff` | Secondary accent color. |
| `boxShadow.neon-green` | `0 0 10px #39ff14, 0 0 20px #39ff14` | The signature neon glow effect. |
| `animation.blink` | `blink 1s step-end infinite` | Used for the terminal cursor. |
| `animation.float` | `float 3s ease-in-out infinite` | Applied to the avatar image. |

## ⚙️ Setup and Installation

This is a static HTML project and requires no compilation or build process.

1. **Clone the Repository:**
```bash
git clone [YOUR_REPO_URL]
cd TheNewbieBackpack

```


2. **Open the File:**
Open the `index.html` file directly in your web browser.

### Contact Form Configuration

To make the `CHAT_LOG` (Contact Form) functional, you must replace the placeholder email address in the `action` attribute of the form:

```html
<form action="https://formsubmit.co/sinsoheili11@gmail.com" method="POST" id="contact-form">
    </form>

```

**Note:** The first time a message is sent via FormSubmit, you will receive a confirmation email at the configured address. You must click the verification link to activate the form.

## 🤝 Contribution

Feel free to fork this project if you are looking for a unique, highly-styled portfolio template. Contributions, bug reports, or suggestions for new "game mechanics" (features) are welcome!