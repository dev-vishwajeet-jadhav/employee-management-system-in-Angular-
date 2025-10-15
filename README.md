# Employee Management# 🏢 Employee Management System

A modern, responsive employee management application built with **Angular 20** and **TypeScript**.

## 🌐 Live Demo

**[👉 Click here to view the live application](https://dev-vishwajeet-jadhav.github.io/employee-management-system-in-Angular-/)**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Visit_Now-success?style=for-the-badge&logo=github)](https://dev-vishwajeet-jadhav.github.io/employee-management-system-in-Angular-/)

---

![Angular](https://img.shields.io/badge/Angular-20.3.5-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3-purple?logo=bootstrap)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- ✅ **Add, Edit, Delete Employees** - Full CRUD operations
- 🔍 **Advanced Search & Filtering** - Search by name, ID, or department
- 📊 **Department & Gender Filters** - Quick filtering options
- 💾 **Local Storage Persistence** - Data persists across sessions
- 🎨 **Modern UI/UX** - Beautiful gradient design with smooth animations
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Instant UI updates with Angular Signals
- 🎭 **Bootstrap Icons** - Professional icon set throughout the app

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v20 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dev-vishwajeet-jadhav/employee-management-system-in-Angular-.git
   cd employee-management-system-in-Angular-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:4200/`

## 📦 Build for Production

To build the project for production:

```bash
ng build --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deploy to GitHub Pages

To deploy your changes to GitHub Pages:

```bash
npm run deploy
```

## 🛠️ Tech Stack

- **Framework:** Angular 20.3.5
- **Language:** TypeScript 5.x
- **State Management:** Angular Signals
- **Styling:** Custom CSS with CSS Variables
- **UI Framework:** Bootstrap 5.3.8
- **Icons:** Bootstrap Icons
- **Storage:** Browser LocalStorage API

## 📂 Project Structure

```
employee-management-system/
├── src/
│   ├── app/
│   │   ├── app.ts          # Main component logic
│   │   ├── app.html        # Main component template
│   │   └── app.css         # Component styles
│   ├── styles.css          # Global styles
│   └── index.html          # Main HTML file
├── package.json
├── angular.json
└── README.md
```

## 🎨 UI Features

- **Gradient Header** - Purple/indigo gradient with frosted glass effects
- **Card-based Layout** - Clean employee cards with hover animations
- **Modal Forms** - Beautiful modal dialogs for add/edit operations
- **Responsive Grid** - Auto-adjusting grid layout for all screen sizes
- **Smooth Animations** - Fade-in, slide-up, and transform animations
- **Interactive Buttons** - Edit and delete buttons with hover effects

## 📝 Employee Data Model

```typescript
interface Employee {
  id: string;          // Unique employee ID
  name: string;        // Full name
  salary: number;      // Annual salary
  gender: string;      // Male/Female/Other
  department: string;  // IT/HR/Finance/Marketing/Sales
}
```

## 🔧 Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Run tests
npm test

# Watch mode for development
npm run watch
```

## 🎯 Key Functionalities

### 1. **Add Employee**
- Click "Add Employee" button
- Fill in employee details (ID, Name, Salary, Gender, Department)
- Submit to add to the list

### 2. **Edit Employee**
- Click the edit icon on any employee card
- Modify the details
- Save changes

### 3. **Delete Employee**
- Click the delete icon on any employee card
- Confirm deletion
- Employee removed from the list

### 4. **Search & Filter**
- Use the search box to find employees by name, ID, or department
- Filter by department dropdown
- Filter by gender dropdown
- Clear all filters with one click

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Vishwajeet Namdev Jadhav**

- GitHub: [@dev-vishwajeet-jadhav](https://github.com/dev-vishwajeet-jadhav)
- Repository: [employee-management-system-in-Angular-](https://github.com/dev-vishwajeet-jadhav/employee-management-system-in-Angular-)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/dev-vishwajeet-jadhav/employee-management-system-in-Angular-/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

---

**Built with ❤️ using Angular**
