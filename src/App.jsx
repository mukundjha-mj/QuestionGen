import './App.css'
import Navbar from './components/Navbar';
// import { useFetch } from './hooks/useFetch'
// import { useState } from 'react';

function App() {
  // const [selectedFile, setSelectedFile] = useState(null);
  // const [checkConnection, setCheckConnection] = useState(false);
  // const [extractedText, setExtractedText] = useState('');
  // const [isProcessing, setIsProcessing] = useState(false);

  // Only fetch when user wants to check connection
  // const response = useFetch(checkConnection ? "http://localhost:3000/" : null);

  // const handleFileUpload = async (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     setSelectedFile(file);
  //     setIsProcessing(true);
  //     setExtractedText('');
  //     console.log('File selected:', file.name);

  //     const formData = new FormData();
  //     formData.append('image', file);

  //     try {
  //       const response = await fetch('http://localhost:3000/upload', {
  //         method: 'POST',
  //         body: formData,
  //       });

  //       const result = await response.json();
  //       console.log(result);

  //       if (result.extractedText) {
  //         setExtractedText(result.extractedText);
  //       }

  //     } catch (error) {
  //       console.error('Error:', error);
  //       setExtractedText('Error: Failed to process image');
  //     } finally {
  //       setIsProcessing(false);
  //     }
  //   }
  // };

  // const testConnection = () => {
  //   setCheckConnection(true);
  // };

  const navItems = ['Home', 'Services', 'About', 'contact'];

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        <div className='hero-bg min-h-screen flex items-center justify-center relative'>
          {/* Blurred floating shapes */}
          <div className="blur-shape blur-blue"></div>
          <div className="blur-shape blur-cyan"></div>
          <div className="blur-shape blur-purple"></div>
          <div className="blur-shape blur-light"></div>
          <div className="container  flex flex-col">
            <Navbar title="PicTextify" navItems={navItems} />
            <div className="flex flex-col md:flex-row items-center justify-between w-full pt-20 md:pt-32 z-10">
              {/* Left: Headline, subheadline, buttons */}
              <div className="flex-1 flex flex-col items-start justify-center px-2 md:px-8 pb-20 md:pb-32">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                  Transform <br />
                  Handwritten Questions <br />
                  into Perfect Papers
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-xl">
                  Upload, Extract, Generate, The smartest way for faculty to create exam papers from notebook images.
                </p>
                <div className="flex gap-4 mb-8">
                  <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-100 transition">Start Free Trial</button>
                  <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition border border-blue-400">Watch Demo</button>
                </div>
                {/* Backend connection/test UI */}
                {/* <div className='mt-2 mb-4'>
                  <button
                    onClick={testConnection}
                    className='bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-white mb-2'
                  >
                    Test Backend Connection
                  </button>
                  {checkConnection && (
                    <div className='mt-2'>
                      {response.loading && <p className='text-yellow-400'>Connecting...</p>}
                      {response.error && <p className='text-red-400'>Backend not available: {response.error}</p>}
                      {response.data && <p className='text-green-400'>Backend connected successfully!</p>}
                    </div>
                  )}
                </div> */}
                {/* File upload */}
                {/* <div className='mt-2 mb-4'>
                  <input
                    type="file"
                    accept="image/*"
                    className='w-[200px] border-2 px-3 py-2 cursor-pointer rounded-2xl bg-sky-700 hover:bg-sky-800 text-white'
                    placeholder='upload image'
                    onChange={handleFileUpload}
                    disabled={isProcessing}
                  />
                  {selectedFile && (
                    <p className='mt-2 text-sm text-green-400'>Selected: {selectedFile.name}</p>
                  )}
                  {isProcessing && (
                    <p className='mt-2 text-sm text-yellow-400'>Processing image... Please wait</p>
                  )}
                </div> */}
                {/* Display extracted text */}
                {/* {extractedText && (
                  <div className='mt-8 w-full max-w-2xl'>
                    <h2 className='text-lg mb-4 text-white'>Extracted Text:</h2>
                    <div className='bg-zinc-700 p-4 rounded-lg max-h-96 overflow-y-auto'>
                      <pre className='whitespace-pre-wrap text-sm text-white'>{extractedText}</pre>
                    </div>
                  </div>
                )} */}
              </div>
            </div>
          </div>
          {/* Curved white wave at the bottom - Fixed for full screen */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg
              className="block w-full"
              height="120"
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M0,32 C360,120 1080,0 1440,96 L1440,120 L0,120 Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default App