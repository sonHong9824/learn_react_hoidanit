import './footer.css'; // Import your custom CSS for footer styles
const Footer = () => {
  return (
    <footer className="bg-gray-200 -white py-4 footer">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;