import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthContextProvider } from './context/auth';
import AuthenticatePage from './pages/Authenticate';
import SnippetFormPage from './pages/SnippetFormPage';
import StyleGuide from './pages/StyleGuide';
import { Layout } from './ui/Layout';

function App() {
  return (
    <Layout>
      <AuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<AuthenticatePage></AuthenticatePage>}></Route>
            <Route path="edit" element={<Navigate to="/" />}>
              <Route
                path="snippet"
                element={
                  <ProtectedRoute>
                    <SnippetFormPage />
                  </ProtectedRoute>
                }
              ></Route>
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <h1>Edit Profile</h1>
                  </ProtectedRoute>
                }
              ></Route>
            </Route>
            <Route
              path="snippets"
              element={
                <ProtectedRoute>
                  <h1>Snippets</h1>
                </ProtectedRoute>
              }
            ></Route>
            <Route path="styleguide" element={<StyleGuide></StyleGuide>}></Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Routes>
        </BrowserRouter>
      </AuthContextProvider>
    </Layout>
  );
}

export default App;
