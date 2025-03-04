import { AlertTriangle } from "lucide-react";

const WebsiteDown = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg max-w-md text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Service Temporarily Unavailable</h2>
        <p className="text-gray-400 mt-2">
          We are currently experiencing technical difficulties. Our team is working
          diligently to restore service as soon as possible. Please check back
          later.
        </p>
      </div>
    </div>
  );
};

export default WebsiteDown;
