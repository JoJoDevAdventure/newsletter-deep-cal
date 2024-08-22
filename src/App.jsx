import { motion } from 'framer-motion';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className="bg-[url('/background-image.jpeg')] bg-cover bg-center min-h-[100vh] px-2 md:px-14 lg:px-[12%]">
      <NavBar />
      <div className='flex flex-col items-center justify-center'>

      </div>
      <motion.div
        className="p-8 bg-white rounded shadow-lg flex flex-col items-center justify-center mx-[20%] mt-[20%]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Newsletter Subscription Form */}
        <div className="mt-4 w-full">
          <h1 className="text-3xl font-bold text-center">Subscribe to Our Newsletter!</h1>
          <p className="text-center text-sm mt-2">Join our mailing list to receive the latest news and updates from our team.</p>
          <form className="flex flex-col items-center justify-center mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="mt-2 p-2 w-3/4 border rounded"
              name='name'
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mt-2 p-2 w-3/4 border rounded"
              name='email'
            />
            <button
              type="submit"
              className="mt-4 bg-[#0582B8] hover:border-[#0582B8] hover:bg-transparent border-2 hover:text-[#0582B8] text-white font-bold py-2 px-4 rounded w-3/4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

export default App;