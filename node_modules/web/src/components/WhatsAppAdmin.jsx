import React from 'react';

const WhatsAppAdmin = () => {
  const phone = import.meta.env.VITE_WHATSAPP_ADMIN || '6281234567890';
  const message = encodeURIComponent('Halo, saya ingin bertanya mengenai informasi program.');
  const href = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WA admin"
      className="fixed right-6 bottom-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg ring-2 ring-white hover:scale-105 transition-transform"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden>
        <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.373 0 .02 5.354.02 12c0 2.115.553 4.138 1.603 5.945L0 24l6.333-1.655A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12 0-1.98-.45-3.847-1.48-5.52zM12 21.5c-1.8 0-3.485-.47-4.98-1.355l-.355-.205-3.75.98.997-3.66-.23-.37A9.5 9.5 0 1 1 21.5 12 9.48 9.48 0 0 1 12 21.5z" />
        <path d="M17.18 14.08c-.29-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15s-.77.95-.95 1.15c-.18.2-.35.22-.64.08-.29-.15-1.23-.45-2.34-1.45-.87-.77-1.46-1.72-1.63-2.01-.18-.29-.02-.45.13-.6.13-.13.29-.35.43-.52.14-.18.19-.3.29-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.2 5.07 4.49 2.98 1.3 2.98.87 3.52.82.54-.05 1.72-.7 1.97-1.38.25-.68.25-1.26.17-1.38-.08-.12-.28-.19-.57-.34z" />
      </svg>
    </a>
  );
};

export default WhatsAppAdmin;
