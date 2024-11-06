import React from 'react';
import { X } from 'lucide-react';

interface WaitlistFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistForm({ isOpen, onClose }: WaitlistFormProps) {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    role: '',
    interest: '',
    challenge: '',
    wishlist: '',
    companySize: 'Individual',
    betaTesting: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white">
          <h2 className="text-2xl font-bold text-gray-900">Join the Waitlist</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role/Job Title *</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.role}
              onChange={(e) => setFormData({...formData, role: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Primary Interest *</label>
            <select
              required
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.interest}
              onChange={(e) => setFormData({...formData, interest: e.target.value})}
            >
              <option value="">Select an option</option>
              <option value="Feature Flagging">Feature Flagging</option>
              <option value="Experimentation">Experimentation</option>
              <option value="A/B Testing">A/B Testing</option>
              <option value="Simple Integrations">Simple Integrations</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">What's your biggest challenge with feature management?</label>
            <textarea
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              rows={3}
              value={formData.challenge}
              onChange={(e) => setFormData({...formData, challenge: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
            <select
              className="w-full px-4 py-2 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              value={formData.companySize}
              onChange={(e) => setFormData({...formData, companySize: e.target.value})}
            >
              <option value="Individual">Individual</option>
              <option value="Small Team">Small Team (2-10)</option>
              <option value="Growing Startup">Growing Startup (11-50)</option>
              <option value="Mid-size">Mid-size (51-200)</option>
              <option value="Enterprise">Enterprise (201+)</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="betaTesting"
              className="rounded bg-gray-50 border-gray-200 text-blue-600 focus:ring-blue-500"
              checked={formData.betaTesting}
              onChange={(e) => setFormData({...formData, betaTesting: e.target.checked})}
            />
            <label htmlFor="betaTesting" className="text-sm text-gray-600">
              I'm interested in beta testing
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 text-center bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold text-white shadow-lg transform transition hover:scale-[1.02]"
          >
            Join Waitlist
          </button>
        </form>
      </div>
    </div>
  );
}