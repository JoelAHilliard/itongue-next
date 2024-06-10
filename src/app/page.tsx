import Image from 'next/image';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="font-ubuntu min-h-screen flex flex-col">
      {/* Hero Section */}
      <section
        className="flex-grow bg-cover bg-center min-h-[500px] flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url(/hero-bg.png)` }}
      >
        <div className="bg-black bg-opacity-50 p-10 rounded-md text-center">
          <h1 className="text-5xl font-black mb-4">iTongue Tongue Diagnostic System</h1>
          <p className="text-2xl font-medium">
            Analyze your tongue, improve your health.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white text-center flex-grow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8">About iTongue</h2>
          <Image
            src="/logo.png"
            alt="Example Image"
            className="rounded-full mx-auto mb-6"
            width={500} // Specify the width of the image
            height={300} // Specify the height of the image
          />
          <p className="text-lg leading-relaxed">
            iTongue is a tongue analysis app for smartphones and tablets that analyzes tongue images. It provides food and lifestyle advice based on traditional Chinese medicine. In addition, the user can take a questionnaire to obtain an additional health assessment and recommendation. Although the app is not for professional diagnosis, it can still provide warnings about physical and mental weaknesses, and the users can follow up with lifestyle changes or hospital visits.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-100 text-center flex-grow">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Tongue Analysis</h3>
              <p>Analyze tongue images for health insights based on traditional Chinese medicine.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Personalized Advice</h3>
              <p>Receive personalized food and lifestyle recommendations.</p>
            </div>
            <div className="p-6 bg-white shadow-lg rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Health Questionnaire</h3>
              <p>Complete a questionnaire for a comprehensive health assessment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}


export default Home;