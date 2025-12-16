# EcoShare Hub

A comprehensive resource sharing platform that connects donors and receivers to create a sustainable sharing economy. Built with React, Node.js, Express, and MongoDB.

## 🌟 Features

### Core Functionality

- **User Authentication**: Secure login/signup with Google OAuth support
- **User Types**: Separate dashboards for Donors and Receivers
- **Resource Management**: Create, browse, and manage shared resources
- **Smart Matching**: AI-powered recommendations for receivers
- **Transaction Management**: Complete transaction lifecycle tracking
- **Real-time Messaging**: In-app communication between users
- **Logistics Coordination**: Pickup and delivery options

### Advanced Features

- **Analytics Dashboard**: Track user activity and impact
- **Geo-Mapping**: Location-based resource discovery
- **AI Fraud Detection**: Automated risk assessment
- **Logistics Optimization**: Smart routing and delivery suggestions
- **Review System**: User rating and feedback
- **Responsive Design**: Mobile-first, dark mode support

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd LostFound
   ```

2. **Install dependencies**

   ```bash
   # Install frontend dependencies
   npm install

   # Install backend dependencies
   cd Server
   npm install
   cd ..
   ```

3. **Environment Setup**

   Create a `.env` file in the Server directory:

   ```env
   MONGODB_URI=mongodb://localhost:27017/ecoshare-hub
   JWT_SECRET=your-jwt-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   CLIENT_URL=http://localhost:5173
   NODE_ENV=development
   PORT=5000
   ```

   Create a `.env` file in the root directory:

   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start the application**

   ```bash
   # Start both frontend and backend
   npm run dev

   # Or start separately
   npm run start-client  # Frontend only
   npm run server        # Backend only
   ```

## 📁 Project Structure

```
LostFound/
├── src/                          # Frontend React application
│   ├── Components/               # Reusable UI components
│   │   ├── NavBar/              # Navigation component
│   │   ├── Footer/              # Footer component
│   │   └── PrivateRoute/        # Route protection
│   ├── pages/                   # Page components
│   │   ├── HomePage/            # Landing page
│   │   ├── AuthPage/            # Login/Signup
│   │   ├── DashboardPage/       # User dashboard
│   │   ├── ResourceBrowsePage/  # Browse resources
│   │   ├── ResourceDetailsPage/ # Resource details
│   │   ├── CreateResourcePage/  # Create new resource
│   │   ├── TransactionPage/     # Transaction management
│   │   ├── ProfilePage/         # User profile
│   │   └── AnalyticsPage/       # Analytics dashboard
│   ├── redux/                   # State management
│   │   ├── userSlice.js         # User state
│   │   ├── resourceSlice.js     # Resource state
│   │   ├── transactionSlice.js  # Transaction state
│   │   └── analyticsSlice.js    # Analytics state
│   └── store.js                 # Redux store configuration
├── Server/                      # Backend Node.js application
│   ├── controllers/             # Route controllers
│   │   ├── authController.js    # Authentication logic
│   │   ├── resourceController.js # Resource management
│   │   ├── receiverController.js # Receiver functionality
│   │   ├── transactionController.js # Transaction handling
│   │   ├── analyticsController.js # Analytics processing
│   │   └── fraudDetectionController.js # Fraud detection
│   ├── models/                  # Database models
│   │   ├── User.js             # User schema
│   │   ├── Resource.js         # Resource schema
│   │   ├── Transaction.js      # Transaction schema
│   │   ├── Review.js           # Review schema
│   │   └── Analytics.js        # Analytics schema
│   ├── routes/                  # API routes
│   │   ├── authRoutes.js       # Authentication routes
│   │   ├── resourceRoutes.js   # Resource routes
│   │   └── userRoutes.js       # User routes
│   ├── middlewares/             # Custom middlewares
│   │   └── authMiddleware.js   # Authentication middleware
│   ├── utils/                   # Utility functions
│   │   └── cloudinary.js       # Image upload utility
│   └── index.js                # Server entry point
└── package.json                # Project dependencies
```

## 🛠️ Technology Stack

### Frontend

- **React 18** - UI framework
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **Axios** - HTTP client
- **React Toastify** - Notifications

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Socket.io** - Real-time communication
- **Cloudinary** - Image storage
- **Nodemailer** - Email service
- **bcryptjs** - Password hashing

## 🔧 API Endpoints

### Authentication

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/google-login` - Google OAuth
- `POST /api/auth/send-otp` - Send verification OTP
- `POST /api/auth/verify-otp` - Verify OTP
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update user profile

### Resources

- `GET /api/resources/search` - Search resources
- `GET /api/resources/:id` - Get resource details
- `POST /api/resources` - Create resource (Donor only)
- `PUT /api/resources/:id` - Update resource (Donor only)
- `DELETE /api/resources/:id` - Delete resource (Donor only)
- `POST /api/resources/:id/request` - Request resource (Receiver only)
- `GET /api/recommendations` - Get AI recommendations

### Transactions

- `GET /api/transactions` - Get user transactions
- `GET /api/transactions/:id` - Get transaction details
- `PUT /api/transactions/:id/status` - Update transaction status
- `POST /api/transactions/:id/messages` - Send message
- `GET /api/transactions/:id/messages` - Get messages
- `POST /api/transactions/:id/feedback` - Submit feedback

### Analytics

- `GET /api/analytics/user` - Get user analytics
- `GET /api/analytics/geo` - Get geo-mapping data
- `POST /api/analytics/track` - Track user activity
- `POST /api/fraud/detect/:id` - Detect fraud
- `GET /api/fraud/optimize/:id` - Optimize logistics

## 🎨 User Journey

### For Donors

1. **Sign Up** → Choose "Donor" role
2. **Dashboard** → View stats and recent activity
3. **List Resource** → Upload images, set details, location
4. **Manage Requests** → Review and approve/reject requests
5. **Coordinate Logistics** → Arrange pickup/delivery
6. **Complete Transaction** → Mark as donated, leave feedback

### For Receivers

1. **Sign Up** → Choose "Receiver" role
2. **Browse Resources** → Search, filter, view recommendations
3. **Request Resource** → Send message to donor
4. **Track Requests** → Monitor request status
5. **Coordinate Logistics** → Arrange pickup/delivery
6. **Complete Transaction** → Receive item, leave feedback

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcrypt for password security
- **Input Validation** - Server-side validation
- **Rate Limiting** - Prevent abuse
- **CORS Configuration** - Cross-origin security
- **Helmet.js** - Security headers
- **AI Fraud Detection** - Automated risk assessment

## 📱 Responsive Design

- **Mobile-First** - Optimized for mobile devices
- **Dark Mode** - Toggle between light/dark themes
- **Progressive Web App** - Offline capabilities
- **Touch-Friendly** - Optimized for touch interactions
- **Cross-Browser** - Compatible with all modern browsers

## 🚀 Deployment

### Frontend (Vercel/Netlify)

```bash
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)

```bash
# Set environment variables
# Deploy Server/ folder
```

### Database (MongoDB Atlas)

- Create cluster on MongoDB Atlas
- Update MONGODB_URI in environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the flexible database
- Tailwind CSS for the utility-first CSS
- All open-source contributors

## 📞 Support

For support, email support@ecosharehub.com or join our Discord community.

---

**EcoShare Hub** - Building sustainable communities through resource sharing 🌱
