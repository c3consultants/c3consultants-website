'use client';

import { FaYoutube } from 'react-icons/fa';

const YouTubeVideos = () => {
  // Helper function to extract video ID from various YouTube URL formats
  const getYouTubeEmbedUrl = (url) => {
    let videoId = '';
    
    if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com/watch')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1].split('?')[0];
    }
    
    return `https://www.youtube.com/embed/${videoId}`;
  };

  // Featured 4 videos from your YouTube channel
  const videos = [
    {
      id: 1,
      url: 'https://youtu.be/XML3JJzZbIU?si=UEgenK1fjNLHt0XJ',
    },
    {
      id: 2,
      url: 'https://youtu.be/eJ9HGRrILpg?si=Fm8OrT4pDeaUKqTK',
    },
    {
      id: 3,
      url: 'https://youtu.be/uh_NqXnwb5I?si=iEm4dQM2py4GuAUP',
    },
    {
      id: 4,
      url: 'https://youtu.be/JCrMNpmfPwY?si=4I11F72s2WdpV0WR',
    },
  ];

  return (
    <section className="pt-8  bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Section Header - Compact */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mb-3 shadow-lg">
            <FaYoutube className="w-6 h-6 text-white" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 mb-3">
            Watch Our <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">Expert Sessions</span>
          </h2>
          
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Expert guidance on career planning, competitive exams, and success strategies
          </p>
        </div>

        {/* Videos Grid - 4 Videos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Video Container */}
              <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                <iframe
                  src={getYouTubeEmbedUrl(video.url)}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideos;
