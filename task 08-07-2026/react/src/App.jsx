import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./Maincontent";
import Footer from "./Footer";
import Student from "./student1";

function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <MainContent />
      <Footer />
      <>
      <Student
        name="Reddy"
        course="React JS"
        marks={92}
      />
      </>
    </>
    
  );
}

export default App;