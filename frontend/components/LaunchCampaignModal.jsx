import { useState } from 'react';

export default function LaunchCampaignModal({
  isOpen,
  onClose,
  newCampaign,
  setNewCampaign,
  onSubmit,
  toggleFormPlatform
}) {
  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    setIsUploading(true);
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "";
      const response = await fetch(`${backendUrl}/api/upload`, {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setNewCampaign(prev => ({ ...prev, image: data.url }));
      } else {
        console.error("Upload failed");
      }
    } catch (err) {
      console.error("Upload failed with error:", err);
    } finally {
      setIsUploading(false);
    }
  };
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 transition-all duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-brand-card border border-brand-border rounded-2xl w-full max-w-lg p-8 shadow-2xl relative animate-[fadeIn_0.2s_ease-out] max-h-[90vh] overflow-y-auto">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-full border border-brand-border bg-brand-cardHover cursor-pointer flex items-center justify-center text-auth-ink-soft hover:text-auth-ink hover:bg-brand-border transition-all text-lg font-bold"
        >
          &times;
        </button>

        <div className="mb-6">
          <h3 className="text-2xl font-black font-heading text-auth-ink tracking-tight uppercase">Launch Campaign</h3>
          <p className="text-[13.5px] font-bold text-auth-ink-soft mt-1">Fill in the fields below to publish a new campaign and start receiving creator bids.</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">

          {/* Campaign Title */}
          <div>
            <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Campaign Name</label>
            <div className="relative flex items-center bg-brand-dark/40 border border-brand-border rounded-xl transition-all focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/10">
              <input
                type="text"
                required
                className="w-full border-none bg-transparent outline-none py-3 px-4 font-sans text-[14.5px] text-auth-ink placeholder-auth-ink-soft"
                placeholder="e.g. Vitamin C Serum Pro"
                value={newCampaign.name}
                onChange={(e) => setNewCampaign({ ...newCampaign, name: e.target.value })}
              />
            </div>
          </div>

          {/* Brand Name Input */}
          <div>
            <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Brand/Company Name</label>
            <div className="relative flex items-center bg-brand-dark/40 border border-brand-border rounded-xl transition-all focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/10">
              <input
                type="text"
                required
                className="w-full border-none bg-transparent outline-none py-3 px-4 font-sans text-[14.5px] text-auth-ink placeholder-auth-ink-soft"
                placeholder="e.g. Norde Athletics"
                value={newCampaign.brandName}
                onChange={(e) => setNewCampaign({ ...newCampaign, brandName: e.target.value })}
              />
            </div>
          </div>

          {/* Campaign Description */}
          <div>
            <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Description</label>
            <textarea
              required
              rows="3"
              className="w-full bg-brand-dark/40 border border-brand-border rounded-xl py-3 px-4 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all placeholder-auth-ink-soft resize-none"
              placeholder="Tell creators about your product, requirements, and campaign targets..."
              value={newCampaign.description}
              onChange={(e) => setNewCampaign({ ...newCampaign, description: e.target.value })}
            ></textarea>
          </div>

          {/* Campaign Banner Image Uploader */}
          <div>
            <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Campaign Banner Image</label>
            <div className="relative flex flex-col items-center justify-center bg-brand-dark/40 border border-brand-border rounded-xl p-4 transition-all focus-within:border-brand-orange">
              {newCampaign.image ? (
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-3">
                  <img src={newCampaign.image} alt="Campaign Preview" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white text-xs font-bold">Replace Image</span>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center py-4">
                  <span className="text-2xl mb-1">🖼️</span>
                  <span className="text-[12.5px] font-bold text-auth-ink-soft">
                    {isUploading ? "Uploading to Cloudinary..." : "Upload campaign banner"}
                  </span>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                disabled={isUploading}
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Grid Layout: Niche & Duration */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Niche Dropdown */}
            <div>
              <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Niche Category</label>
              <select
                className="w-full bg-brand-dark/40 border border-brand-border rounded-xl py-3.5 px-4 outline-none font-sans text-[14.5px] text-auth-ink focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/10 transition-all cursor-pointer"
                value={newCampaign.niche}
                onChange={(e) => setNewCampaign({ ...newCampaign, niche: e.target.value })}
              >
                <option>Fitness</option>
                <option>Beauty</option>
                <option>Technology</option>
                <option>Food & Beverage</option>
                <option>Travel</option>
                <option>Fashion</option>
              </select>
            </div>

            {/* Duration (Days) */}
            <div>
              <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Duration (Days)</label>
              <div className="relative flex items-center bg-brand-dark/40 border border-brand-border rounded-xl transition-all focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/10">
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full border-none bg-transparent outline-none py-3 px-4 font-sans text-[14.5px] text-auth-ink placeholder-auth-ink-soft"
                  placeholder="e.g. 15"
                  value={newCampaign.daysLeft}
                  onChange={(e) => setNewCampaign({ ...newCampaign, daysLeft: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Grid Layout: Budget Range */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Min Budget ($)</label>
              <div className="relative flex items-center bg-brand-dark/40 border border-brand-border rounded-xl transition-all focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/10">
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full border-none bg-transparent outline-none py-3 px-4 font-sans text-[14.5px] text-auth-ink placeholder-auth-ink-soft"
                  placeholder="e.g. 800"
                  value={newCampaign.minBudget}
                  onChange={(e) => setNewCampaign({ ...newCampaign, minBudget: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-1.5">Max Budget ($)</label>
              <div className="relative flex items-center bg-brand-dark/40 border border-brand-border rounded-xl transition-all focus-within:border-brand-orange focus-within:ring-2 focus-within:ring-brand-orange/10">
                <input
                  type="number"
                  required
                  min="1"
                  className="w-full border-none bg-transparent outline-none py-3 px-4 font-sans text-[14.5px] text-auth-ink placeholder-auth-ink-soft"
                  placeholder="e.g. 3500"
                  value={newCampaign.maxBudget}
                  onChange={(e) => setNewCampaign({ ...newCampaign, maxBudget: e.target.value })}
                />
              </div>
            </div>
          </div>

          {/* Target Platforms Selection */}
          <div>
            <label className="text-[10.5px] font-extrabold tracking-[0.08em] uppercase text-auth-ink-soft block mb-2">Target Platforms</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {['Instagram', 'TikTok', 'YouTube', 'LinkedIn'].map(p => {
                const isSelected = newCampaign.platforms.includes(p);
                return (
                  <button
                    key={p}
                    type="button"
                    onClick={() => toggleFormPlatform(p)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all border cursor-pointer text-center w-full ${isSelected
                      ? 'bg-brand-orange text-white border-brand-orange shadow-sm font-black'
                      : 'bg-brand-dark/30 text-auth-ink-soft border-brand-border hover:border-brand-orange hover:text-auth-ink'
                      }`}
                  >
                    {p}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3.5 border border-brand-border rounded-xl text-auth-ink font-bold text-[14px] cursor-pointer hover:bg-brand-cardHover hover:border-auth-ink transition-colors bg-transparent uppercase tracking-wider"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 py-3.5 bg-brand-orange hover:bg-brand-orangeHover text-white font-bold rounded-xl text-[14px] cursor-pointer border-none transition-colors uppercase tracking-wider shadow-lg shadow-brand-orange/15"
            >
              Launch
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
