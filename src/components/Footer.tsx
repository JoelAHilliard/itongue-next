export default function footer(){
    return (<footer id="contact" className="bg-gray-800 text-white p-4 text-center flex-grow">
        <div className="max-w-4xl mx-auto">
          <p className="mb-4">Contact us: contact@itongue.com</p>
          <nav>
            <a href="#about" className="mx-2 hover:underline">About</a>
            <a href="#features" className="mx-2 hover:underline">Features</a>
            <a href="#contact" className="mx-2 hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    );
}