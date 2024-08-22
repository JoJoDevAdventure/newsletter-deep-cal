import { motion } from 'framer-motion';

function App() {
  return (
    <div className="bg-[url('/background-image.jpeg')] bg-background bg-cover bg-center min-h-[100vh]  px-2 md:px-14 lg:px-[12%] relative">
      <motion.div
        className="p-8 bg-white rounded shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold">Hello, Vite + React!</h1>
        <p className="mt-4">This is a simple page using React, Vite, Tailwind CSS, and Framer Motion.</p>
      </motion.div>
    </div>
  );
}

export default App;