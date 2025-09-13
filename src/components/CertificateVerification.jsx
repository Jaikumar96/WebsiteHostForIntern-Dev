import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Award, Calendar, User, GraduationCap } from 'lucide-react';

const CertificateVerification = () => {
  const [certificateId, setCertificateId] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

// Replace this line in your CertificateVerification.jsx
const VERIFICATION_URL = 'https://script.google.com/macros/s/AKfycbysvjqNCUP_evY553Qe7ffWisMFTdDbxyXc0QOQWebmAwz9px-lry663e0o2wXIMEg8Lw/exec';


  const handleVerification = async (e) => {
    e.preventDefault();
    if (!certificateId.trim()) {
      setError('Please enter a certificate ID');
      return;
    }

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch(`${VERIFICATION_URL}?certificateId=${encodeURIComponent(certificateId.trim())}`);
      const data = await response.json();

      if (data.success) {
        setResult(data.data);
      } else {
        setError(data.message || 'Certificate not found');
      }
    } catch (err) {
      setError('Failed to verify certificate. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <br></br>
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
              <Award className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificate Verification</h1>
          <p className="text-gray-600">Verify your COSMO DIGITAL SERVICES internship certificate</p>
        </div>

        {/* Verification Form */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <form onSubmit={handleVerification} className="space-y-4">
            <div>
              <label htmlFor="certificateId" className="block text-sm font-medium text-gray-700 mb-2">
                Enter Certificate ID
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="certificateId"
                  value={certificateId}
                  onChange={(e) => setCertificateId(e.target.value)}
                  placeholder="e.g., 5b3cfeb"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
            >
              {loading ? 'Verifying...' : 'Verify Certificate'}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <XCircle className="w-5 h-5 text-red-500 mr-2" />
              <span className="text-red-700">{error}</span>
            </div>
          )}
        </div>

        {/* Verification Result */}
        {result && (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Success Header */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-4">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-white mr-2" />
                <h2 className="text-xl font-bold text-white">Certificate Verified ✓</h2>
              </div>
            </div>

            {/* Certificate Details */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <User className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Student Name</p>
                      <p className="font-semibold text-lg">{result.studentName}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <GraduationCap className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Domain</p>
                      <p className="font-semibold">{result.domain} Internship</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-blue-500 mr-3" />
                    <div>
                      <p className="text-sm text-gray-600">Duration</p>
                      <p className="font-semibold">{result.duration}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Certification No</p>
                    <p className="font-semibold">{result.certificateId}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Starting Date</p>
                    <p className="font-semibold">{result.startDate}</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600">Award Date</p>
                    <p className="font-semibold">{result.completionDate}</p>
                  </div>
                </div>
              </div>

              
              

              {/* Verification Footer */}
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>This certificate has been verified and is authentic.</p>
                <p>Issued by <strong>COSMO DIGITAL SERVICES</strong></p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateVerification;
