import MainLayout from "@components/layout/MainLayout";
import ProtectedRoute from "@components/layout/ProtectedRoute";
import "./index.css";

function App() {
  return (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  );
}

export default App;
