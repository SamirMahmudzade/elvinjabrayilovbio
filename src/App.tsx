import React, { useState } from 'react';
import {
  SpotifyLogo,
  YoutubeLogo,
  InstagramLogo,
  TiktokLogo,
  ArrowUpRight,
  Play,
  X,
  ShareNetwork,
  Check,
  Disc,
  SpeakerHigh,
  EnvelopeSimple,
  FilmSlate
} from '@phosphor-icons/react';

interface VideoItem {
  id: string;
  title: string;
  category: string;
  duration: string;
  youtubeId: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: '1',
    title: 'Sıfırdan Başladım',
    category: 'Rəsmi klip',
    duration: '2:09',
    youtubeId: 'WRVkQYHn96s',
  },
  {
    id: '2',
    title: 'Dərin',
    category: 'Rəsmi klip',
    duration: '3:09',
    youtubeId: 'OSbkqWwDqWY',
  },
  {
    id: '3',
    title: 'Tunel',
    category: 'Rəsmi klip',
    duration: '2:53',
    youtubeId: 'u6pS7r7xkh0',
  },
  {
    id: '4',
    title: 'Doğrular',
    category: 'Rəsmi klip',
    duration: '3:21',
    youtubeId: 'VR-IdTanomI',
  },
];

const LINKS = [
  {
    name: 'Spotify da dinlə',
    subtitle: 'Rəsmi artist profili və ən son treklər',
    url: 'https://open.spotify.com/artist/4SnYoDI05bWKx0MgOW1cmX',
    icon: SpotifyLogo,
    badge: 'Dinlə',
    primary: true,
  },
  {
    name: 'YouTube kanalı',
    subtitle: 'Rəsmi musiqi videoları və premyeralar',
    url: 'https://www.youtube.com/@ElvinJabrayilovOfficial',
    icon: YoutubeLogo,
    badge: 'İzlə',
    primary: false,
  },
  {
    name: 'Instagram',
    subtitle: 'Gündəlik studiya anları və yeniliklər',
    url: 'https://www.instagram.com/elvinjabrayilovofficial',
    icon: InstagramLogo,
    badge: 'İzlə',
    primary: false,
  },
  {
    name: 'TikTok',
    subtitle: 'Canlı akustik parçalar və qısa videolar',
    url: 'https://www.tiktok.com/@elvinjabrayilovofficial',
    icon: TiktokLogo,
    badge: 'İzlə',
    primary: false,
  },
];

export default function App() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [copied, setCopied] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleShare = async () => {
    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] font-sans antialiased flex flex-col items-center justify-between px-4 py-8 sm:py-12 selection:bg-[#272727] selection:text-[#FFFFFF]">
      
      {/* Top Bar with Share */}
      <div className="w-full max-w-md flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FFFFFF] animate-pulse" />
          <span className="font-mono text-xs tracking-widest text-[#9B9B9B] uppercase">
            Rəsmi Artist Portalı
          </span>
        </div>
        <button
          onClick={handleShare}
          aria-label="Səhifəni paylaş"
          className="flex items-center gap-1.5 text-xs font-mono py-1 px-3 rounded-full border border-[#272727] bg-[#181818] text-[#9B9B9B] hover:text-[#FFFFFF] hover:bg-[#272727] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
        >
          {copied ? <Check size={14} weight="bold" /> : <ShareNetwork size={14} />}
          <span>{copied ? 'Kopyalandı' : 'Paylaş'}</span>
        </button>
      </div>

      {/* Main Biolink Container */}
      <main className="w-full max-w-md flex flex-col items-center text-center">
        
        {/* Profile Avatar Card */}
        <div className="relative mb-4 group">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 border-2 border-[#272727] bg-[#181818] shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:border-[#FFFFFF]">
            <img
              src="/elvin.jpg"
              alt="Elvin Cəbrayılov"
              className="w-full h-full object-cover rounded-full filter grayscale contrast-125 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
            />
          </div>
          <span className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-[#181818] border-2 border-[#000000] flex items-center justify-center text-[#FFFFFF]">
            <Disc size={12} className={isPlayingAudio ? 'animate-spin' : ''} />
          </span>
        </div>

        {/* Artist Name & Tag */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-[#FFFFFF] to-[#9B9B9B] bg-clip-text text-transparent mb-1">
          Elvin Cəbrayılov
        </h1>
        <p className="font-mono text-xs uppercase tracking-widest text-[#9B9B9B] mb-2">
          a.k.a Elviss
        </p>
        <p className="text-sm text-[#FFFFFF] font-medium mb-1">
          Azərbaycanlı hip hop rep sənətçisi
        </p>
        <p className="text-xs text-[#9B9B9B] font-mono mb-6">
          Hip-Hop Rap və R&B. Melodic Drama Ustası
        </p>

        {/* Quick Social Icon Links */}
        <div className="flex items-center gap-2 mb-8">
          <a
            href="https://open.spotify.com/artist/4SnYoDI05bWKx0MgOW1cmX"
            target="_blank"
            rel="noreferrer"
            aria-label="Spotify"
            className="w-10 h-10 rounded-full border border-[#272727] bg-[#181818] flex items-center justify-center text-[#9B9B9B] hover:text-[#FFFFFF] hover:bg-[#272727] hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
          >
            <SpotifyLogo size={20} weight="fill" />
          </a>
          <a
            href="https://www.youtube.com/@ElvinJabrayilovOfficial"
            target="_blank"
            rel="noreferrer"
            aria-label="YouTube"
            className="w-10 h-10 rounded-full border border-[#272727] bg-[#181818] flex items-center justify-center text-[#9B9B9B] hover:text-[#FFFFFF] hover:bg-[#272727] hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
          >
            <YoutubeLogo size={20} weight="fill" />
          </a>
          <a
            href="https://www.instagram.com/elvinjabrayilovofficial"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-[#272727] bg-[#181818] flex items-center justify-center text-[#9B9B9B] hover:text-[#FFFFFF] hover:bg-[#272727] hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
          >
            <InstagramLogo size={20} weight="fill" />
          </a>
          <a
            href="https://www.tiktok.com/@elvinjabrayilovofficial"
            target="_blank"
            rel="noreferrer"
            aria-label="TikTok"
            className="w-10 h-10 rounded-full border border-[#272727] bg-[#181818] flex items-center justify-center text-[#9B9B9B] hover:text-[#FFFFFF] hover:bg-[#272727] hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
          >
            <TiktokLogo size={20} weight="fill" />
          </a>
        </div>

        {/* Interactive Audio Player Preview Pill */}
        <div className="w-full rounded-2xl border border-[#272727] bg-[#181818] p-3 mb-6 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              aria-label={isPlayingAudio ? 'Mahnını dayandır' : 'Mahnını dinlə'}
              className="w-9 h-9 rounded-full bg-[#FFFFFF] text-[#000000] flex items-center justify-center hover:bg-[#FFFFFF]/90 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95 flex-shrink-0"
            >
              {isPlayingAudio ? <Disc size={18} className="animate-spin" /> : <Play size={16} weight="fill" className="ml-0.5" />}
            </button>
            <div className="overflow-hidden">
              <p className="text-xs font-semibold text-[#FFFFFF] truncate">Sıfırdan Başladım</p>
              <p className="text-[11px] text-[#9B9B9B] font-mono">Ən son sinql • 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-1 pr-2">
            {[40, 80, 50, 100, 60, 90, 40].map((h, i) => (
              <span
                key={i}
                style={{ height: isPlayingAudio ? `${h}%` : '25%' }}
                className="w-1 h-5 bg-[#FFFFFF] rounded-full transition-all duration-300"
              />
            ))}
            <SpeakerHigh size={14} className="text-[#9B9B9B] ml-1" />
          </div>
        </div>

        {/* Primary Biolink Cards */}
        <div className="w-full space-y-3 mb-8">
          {LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className={`w-full p-4 rounded-2xl border flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.98] ${
                  link.primary
                    ? 'border-[#FFFFFF] bg-[#FFFFFF] text-[#000000] hover:bg-[#FFFFFF]/95 shadow-lg'
                    : 'border-[#272727] bg-[#181818] text-[#FFFFFF] hover:border-[#313131] hover:bg-[#1F1F1F]'
                }`}
              >
                <div className="flex items-center gap-3 text-left">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      link.primary ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-[#272727] text-[#FFFFFF]'
                    }`}
                  >
                    <Icon size={22} weight="fill" />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold ${link.primary ? 'text-[#000000]' : 'text-[#FFFFFF]'}`}>
                      {link.name}
                    </p>
                    <p className={`text-xs ${link.primary ? 'text-[#313131]' : 'text-[#9B9B9B]'}`}>
                      {link.subtitle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span
                    className={`font-mono text-xs font-semibold px-2 py-0.5 rounded-full ${
                      link.primary ? 'bg-[#000000]/10 text-[#000000]' : 'bg-[#272727] text-[#9B9B9B]'
                    }`}
                  >
                    {link.badge}
                  </span>
                  <ArrowUpRight size={16} weight="bold" className={link.primary ? 'text-[#000000]' : 'text-[#9B9B9B]'} />
                </div>
              </a>
            );
          })}
        </div>

        {/* Advised YouTube Music Videos Section */}
        <div className="w-full text-left mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FilmSlate size={16} className="text-[#FFFFFF]" />
              <h2 className="text-sm font-semibold text-[#FFFFFF]">Musiqi Videoları</h2>
            </div>
            <a
              href="https://www.youtube.com/@ElvinJabrayilovOfficial"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-[#9B9B9B] hover:text-[#FFFFFF] transition-colors"
            >
              Hamısına bax →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {VIDEOS.map((video) => (
              <div
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group cursor-pointer rounded-2xl border border-[#272727] bg-[#181818] p-2.5 hover:border-[#313131] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden bg-[#131209] mb-2 border border-[#272727]">
                  <img
                    src={`https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  />
                  <div className="absolute inset-0 bg-[#000000]/50 group-hover:bg-[#000000]/30 transition-colors flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-[#FFFFFF] text-[#000000] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play size={14} weight="fill" className="ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-[#000000]/80 font-mono text-[10px] text-[#FFFFFF]">
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-xs font-semibold text-[#FFFFFF] truncate group-hover:text-[#9B9B9B] transition-colors">
                  {video.title}
                </h3>
                <p className="text-[10px] font-mono text-[#9B9B9B]">
                  {video.category}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact / Booking Card */}
        <div className="w-full rounded-2xl border border-[#272727] bg-[#181818] p-4 text-left flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#272727] flex items-center justify-center text-[#FFFFFF] flex-shrink-0">
              <EnvelopeSimple size={18} />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#FFFFFF]">Konsert və əməkdaşlıq</p>
              <p className="text-[11px] text-[#9B9B9B] font-mono">Menecment ilə birbaşa əlaqə</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/elvinjabrayilovofficial"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold py-1.5 px-3 rounded-full border border-[#272727] bg-[#272727] text-[#FFFFFF] hover:bg-[#FFFFFF] hover:text-[#000000] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
          >
            Yazın
          </a>
        </div>

      </main>

      {/* Footer */}
      <footer className="w-full max-w-md pt-6 border-t border-[#272727] text-center font-mono text-[11px] text-[#9B9B9B]">
        <p>© 2026 Elvin Cəbrayılov (Elviss)</p>
        <p className="mt-1">Bakı • Rəsmi artist səhifəsi</p>
      </footer>

      {/* Interactive YouTube Video Player Modal */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-3xl bg-black/90"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-[#272727] bg-[#181818] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 border-b border-[#272727] flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-[#FFFFFF]">{activeVideo.title}</h4>
                <p className="text-[10px] font-mono text-[#9B9B9B]">{activeVideo.category} • {activeVideo.duration}</p>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                aria-label="Bağla"
                className="w-8 h-8 rounded-full bg-[#272727] text-[#FFFFFF] flex items-center justify-center hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
              >
                <X size={16} weight="bold" />
              </button>
            </div>
            <div className="relative aspect-video w-full bg-[#000000]">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
