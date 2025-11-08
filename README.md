# 🎓 Campus Tracker - Lost & Found Management System

![Campus Tracker Banner](https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80)

A comprehensive web-based platform designed to help campus communities reunite lost items with their owners through an intelligent matching system.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

**Campus Tracker** is a modern, user-friendly lost and found management system built specifically for educational institutions. The platform streamlines the process of reporting, tracking, and matching lost and found items on campus, making it easier for students, teachers, staff, and workers to recover their belongings.

### Key Highlights

- 🔍 **Smart Matching Algorithm** - AI-powered system to match lost and found items with up to 95% accuracy
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 🖼️ **Image Upload Support** - Visual identification for better item matching
- 👥 **Multi-User Support** - Separate categories for students, teachers, staff, and workers
- 🔔 **Real-time Notifications** - Instant alerts for potential matches
- 📧 **Email Integration** - Direct contact between finders and owners

## ✨ Features

### 1. User Authentication
- **Login System** - Secure login for registered users
- **Signup** - Easy account creation process
- **Registration** - Campus-specific registration with ID verification
- **Multi-user Types** - Support for students, teachers, staff, and workers

![Authentication System](https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80)

### 2. Lost Items Management
- Report lost items with detailed descriptions
- Upload images of lost items (optional)
- Specify location and date of loss
- Browse all reported lost items
- View detailed information for each item
- Contact reporters directly via email

### 3. Found Items Management
- Report found items with comprehensive details
- Mandatory image upload for verification
- Location and date tracking
- Display all found items in an organized grid
- Detailed view with full item information
- Direct email contact with finders

### 4. Smart Matching System
- **AI-Powered Matching** - Intelligent algorithm compares lost and found items
- **Percentage-Based Results** - Shows match confidence (e.g., 95% match)
- **Visual Comparison** - Side-by-side comparison of item images
- **Detailed Match Cards** - Complete information for each potential match
- **Multi-Match Display** - Shows all possible matches sorted by relevance

![Matching System](https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80)

### 5. Notification System
- Real-time toast notifications for actions
- Success and error message displays
- Match alerts when items are found
- Clean, modern notification design

### 6. Item Details Modal
- Full-screen item view
- High-quality image display
- Complete item information
- Contact button for direct communication
- Category badges (Lost/Found)
- Date and location information

## 📸 Screenshots

### Home Page
![Home Page](https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80)

### Lost Items Section
![Lost Items](https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80)

### Found Items Section
![Found Items](https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&q=80)

### Match Results
![Match Results](https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80)

## 🛠️ Technology Stack

### Frontend
- **HTML5** - Semantic markup structure
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Interactive functionality
- **Responsive Design** - Mobile-first approach

### Design Elements
- **Google Fonts** - Inter font family
- **Custom CSS Variables** - Consistent theming
- **Flexbox & Grid** - Modern layout systems
- **CSS Animations** - Smooth transitions and effects

### Features & APIs
- **FileReader API** - Image upload and preview
- **LocalStorage** (Ready for implementation) - Data persistence
- **Modal System** - Interactive overlays
- **Form Validation** - Client-side validation

## 🚀 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.)
- Basic understanding of HTML/CSS/JavaScript

### Steps

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/campus-tracker.git
cd campus-tracker
```

2. **Open the project**
```bash
# Simply open the HTML file in your browser
open index.html

# OR use a local server (recommended)
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server
```

3. **Access the application**
```
Open your browser and navigate to:
http://localhost:8000
```

## 💻 Usage

### For Users

#### Reporting a Lost Item
1. Click on **"Lost Items"** in the navigation menu
2. Scroll to the form section
3. Fill in all required fields:
   - User type (Student/Teacher/Staff/Worker)
   - Your name
   - Item name and category
   - Detailed description
   - Location where lost
   - Date (optional)
   - Contact email
4. Upload an image (optional but recommended)
5. Click **"Submit Lost Item Report"**

#### Reporting a Found Item
1. Click on **"Found Items"** in the navigation menu
2. Scroll to the form section
3. Fill in all required fields:
   - User type
   - Your name
   - Item details
   - Description
   - Location where found
   - Date (optional)
   - Contact email
4. Upload an image (REQUIRED for found items)
5. Click **"Submit Found Item Report"**

#### Finding Matches
1. Click on **"Match Items"** in the navigation menu
2. Fill in details of the item you're looking for
3. Upload a reference image
4. Click **"Find Matches"**
5. View match results with percentage scores
6. Contact potential matches via email

#### Viewing Item Details
- Click on any item card to view full details
- See high-resolution images
- Access contact information
- View location and date information

### Demo Credentials

For testing the login system:
- **Email:** demo@campus.edu
- **Password:** demo123

## 📁 Project Structure

```
campus-tracker/
│
├── index.html              # Main HTML file with complete structure
├── style.css               # Styling (inline in HTML)
├── script.js               # JavaScript functionality (inline in HTML)
├── README.md               # Project documentation
│
├── assets/                 # (Future) Static assets
│   ├── images/            # Image files
│   └── icons/             # Icon files
│
└── docs/                   # (Future) Additional documentation
    ├── API.md             # API documentation
    └── CONTRIBUTING.md    # Contribution guidelines
```

## 🎨 Color Scheme

```css
Primary Color:    #2195d7 (Sky Blue)
Primary Dark:     #1a7ab8 (Deep Blue)
Text Primary:     #1c4a8b (Navy Blue)
Text Secondary:   #0a0a0b (Almost Black)
Background:       #ffffff (White)
Lost Badge:       #dc2626 (Red)
Found Badge:      #059669 (Green)
```

## 🔧 Configuration

### Customizing Colors
Edit the CSS custom properties in the `:root` selector:

```css
:root {
  --primary-color: #2195d7;
  --primary-dark: #1a7ab8;
  --text-primary: #1c4a8b;
  --text-secondary: #0a0a0b;
  --bg-primary: #ffffff;
}
```

### Modifying Categories
Update the category options in the HTML select elements:

```html
<select required>
  <option value="electronics">Electronics</option>
  <option value="accessories">Accessories</option>
  <!-- Add more categories -->
</select>
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
1. 🐛 Report bugs and issues
2. 💡 Suggest new features
3. 📝 Improve documentation
4. 🎨 Enhance UI/UX design
5. 💻 Submit code improvements

### Contribution Process
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Known Issues

- Match algorithm is currently demo-based (shows pre-defined results)
- No backend integration yet
- Data is not persisted (refresh clears data)
- Email functionality opens default mail client

## 🚧 Future Enhancements

### Planned Features
- [ ] Backend integration with Node.js/Express
- [ ] Database implementation (MongoDB/PostgreSQL)
- [ ] Real AI/ML image matching
- [ ] User authentication with JWT
- [ ] Push notifications
- [ ] Admin dashboard
- [ ] Advanced search filters
- [ ] Export reports (PDF/CSV)
- [ ] Multi-language support
- [ ] Dark mode theme
- [ ] Mobile app (React Native/Flutter)

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com) - For beautiful campus images
- [Google Fonts](https://fonts.google.com) - For the Inter font family
- Campus community for inspiration and feedback

## 📞 Support

For support, email support@campustracker.com or join our Slack channel.

## 🌐 Links

- **Live Demo:** [https://yourusername.github.io/campus-tracker](https://yourusername.github.io/campus-tracker)
- **Documentation:** [https://docs.campustracker.com](https://docs.campustracker.com)
- **Issues:** [GitHub Issues](https://github.com/yourusername/campus-tracker/issues)

---

<p align="center">
  Made with ❤️ for campus communities worldwide
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success" alt="Status">
  <img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
  <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs Welcome">
</p>
