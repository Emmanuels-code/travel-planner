import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; // Use HashRouter instead

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Conditionally route to the correct homepage */}
          <Route
            path="/"
            element={isAuthenticated() ? <AuthenticatedHomePage /> : <HomePage />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/login"
            element={isAuthenticated() ? <Navigate to="/" replace /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={isAuthenticated() ? <Navigate to="/" replace /> : <SignUpPage />}
          />
          <Route
            path="/locations"
            element={
              <PrivateRoute>
                <LocationList />
              </PrivateRoute>
            }
          />
          <Route
            path="/note"
            element={
              <PrivateRoute>
                <NoteScreen />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
