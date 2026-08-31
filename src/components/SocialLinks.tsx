import React from 'react';
import { Instagram, Facebook, Phone, MessageSquare, Globe } from 'lucide-react';

export const SOCIAL_ACCOUNTS = [
  {
    name: 'Instagram',
    label: 'Instagram: @usmangraphics55',
    url: 'https://www.instagram.com/usmangraphics55?utm_source=qr&igsi=bWljeXZ6am01YzE=',
    icon: Instagram,
    bg: 'bg-gradient-to-tr from-amber-500 via-pink-600 to-purple-600',
  },
  {
    name: 'Facebook',
    label: 'Facebook Profile',
    url: 'https://www.facebook.com/share/1KvvMW3evt/',
    icon: Facebook,
    bg: 'bg-blue-600',
  },
  {
    name: 'TikTok',
    label: 'TikTok: @usmangraphics23',
    url: 'https://www.tiktok.com/@usmangraphics23?_r=1&_d=f53l00hm6jcml5&sec_uid=MS4wLjABAAAAJ5oD_2GjZ_BL5wmL5FLQzIQvG_8GZyV9NESFropGAap8_00Q0UGngz3SCPslwU3F&share_author_id=7673850476114347030&sharer_language=en&source=h5_m&u_code=f53l1m48fcebe9&timestamp=1787914902&user_id=7673850476114347030&sec_user_id=MS4wLjABAAAAJ5oD_2GjZ_BL5wmL5FLQzIQvG_8GZyV9NESFropGAap8_00Q0UGngz3SCPslwU3F&item_author_type=1&utm_source=whatsapp_business&utm_campaign=client_share&utm_medium=android&share_iid=7678351555007809302&share_link_id=ea0cfc79-5d9b-42d1-a970-591cbc9f729f&share_app_id=1233&ugbiz_name=ACCOUNT&ug_btm=b8727%2Cb7360&social_share_type=5&enable_checksum=1',
    icon: Globe,
    isTikTok: true,
    bg: 'bg-black',
  },
  {
    name: 'WhatsApp',
    label: 'WhatsApp: 0343-5402784',
    url: 'https://wa.me/923435402784?text=Hi%20Usman%20Graphics,%20I%20want%20to%20discuss%20a%20graphic%20design%20project.',
    icon: MessageSquare,
    isWhatsApp: true,
    bg: 'bg-[#25D366]',
  },
  {
    name: 'Call',
    label: 'Direct Call: 0304-6497944',
    url: 'tel:03046497944',
    icon: Phone,
    bg: 'bg-amber-600',
  }
];

interface SocialLinksProps {
  className?: string;
}

export const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {SOCIAL_ACCOUNTS.map((acc, index) => {
        const IconComponent = acc.icon;
        return (
          <a
            key={index}
            href={acc.url}
            target={acc.url.startsWith('tel:') ? '_self' : '_blank'}
            rel={acc.url.startsWith('tel:') ? '' : 'noopener noreferrer'}
            title={acc.label}
            className={`w-9 h-9 rounded-full ${acc.bg} text-white flex items-center justify-center shadow-md transition-all duration-300 hover:scale-110 hover:shadow-lg hover:ring-2 hover:ring-[#F9CA31] cursor-pointer`}
          >
            {acc.isTikTok ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            ) : acc.isWhatsApp ? (
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            ) : (
              <IconComponent className="w-4 h-4" />
            )}
          </a>
        );
      })}
    </div>
  );
};

