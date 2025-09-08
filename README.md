# React Login and Sign-Up Application

A modern, responsive React application featuring login and sign-up functionality with comprehensive form validation and smooth routing.


## 🚀 Live Demo  
👉 [Live Application](https://technosoft-assignment.vercel.app/)

## Features

- **Dual Authentication Screens**: Beautiful login and sign-up interfaces
- **React Router Navigation**: Seamless routing between login and sign-up screens
- **Local Storage Authentication**:  
  - User credentials are securely stored in localStorage after sign-up  
  - On login, credentials are verified against stored data  
  - If no user exists, automatic redirect to **Sign-Up**  
  - On logout, user data is removed from localStorage  
- **Comprehensive Form Validation**: Real-time validation with specific rules for each field
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Reusable Components**: Modular InputField component for consistency
- **Password Visibility Toggle**: Eye icons for password fields
- **Modern UI**: Clean design with teal color scheme and smooth animations

## Validation Rules

### Name Field
- Only alphabetic characters allowed
- Required field

### Username Field
- Alphanumeric characters and special characters allowed
- Required field

### Password Field
- Alphanumeric characters and special characters allowed
- Cannot be the same as username
- Required field

### Confirm Password Field
- Must match the password exactly
- Required field

### Email Field
- Must be a valid Gmail address format
- Required field

### Phone Field
- Must include country code and valid phone number
- Format: +CountryCode-PhoneNumber
- Required field

## Installation and Setup

1. **Clone or download the project files**

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser and navigate to**:
   ```
   http://localhost:5173
   ```

## Usage

1. **Login Screen**: 
   - Enter username and password
   - Click "LOGIN" to submit
   - Click "SignUp" to navigate to registration

2. **Sign-Up Screen**:
   - Fill in all required fields
   - Real-time validation provides immediate feedback
   - Click "SIGN UP" → data stored in localStorage → redirected back to login

## Project Structure

```
src/
├── components/
│   ├── Home.jsx           # Home screen with logout and redirect logic
│   ├── Login.jsx          # Login screen component
│   ├── SignUp.jsx         # Sign-up screen component
│   └── InputField.jsx     # Reusable input component
├── App.jsx                # Main app with routing
├── main.tsx               # Application entry point
└── index.css              # Global styles
```

## Technologies Used

- **React 18**: Modern React with functional components and hooks
- **React Router DOM**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library
- **Vite**: Fast build tool and development server

## Responsive Breakpoints

- **Mobile**: < 768px (Single column layout)
- **Tablet**: 768px - 1024px (Optimized spacing)
- **Desktop**: > 1024px (Two-column grid for sign-up form)

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- User authentication handled with localStorage
- Redirect logic ensures users without an account are sent to Sign-Up
- All form validations are implemented with real-time feedback
- Components are designed to be reusable and maintainable
- State management uses React's built-in useState hook
- CSS classes follow Tailwind's utility-first approach
- Responsive design implemented using Tailwind's responsive utilities