
"use client";
import { useState, useEffect, useMemo, FC, useRef } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";

type Video = {
    id: number;
    src: string;
    thumbnail: string;
};

type Tab = {
    id: number;
    title: string;
    description: string;
    videos: Video[];
};

const tabs: Tab[] = [
    {
        id: 1,
        title: "Passenger vehicles",
        description: "Revving up innovation from interior to exterior.",
        videos: [
            { id: 1, src: "/assets/videos/passenger/clip-1.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-1.png" },
            { id: 2, src: "/assets/videos/passenger/clip-2.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-2.png" },
            { id: 3, src: "/assets/videos/passenger/clip-3.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-3.svg" },
            { id: 4, src: "/assets/videos/passenger/clip-4.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-4.png" },
            { id: 5, src: "/assets/videos/passenger/clip-5.mp4", thumbnail: "/assets/thumbnails/passenger/thumb-5.png" },
        ],
    },
    {
        id: 2,
        title: "Commercial vehicles",
        description: "Advancing engineering for heavy-duty vehicles.",
        videos: [
            { id: 1, src: "/assets/videos/commercial/clip-1.mp4", thumbnail: "/assets/thumbnails/commercial/thumb-1.svg" },
            { id: 2, src: "/assets/videos/commercial/clip-2.mp4", thumbnail: "/assets/thumbnails/commercial/thumb-2.svg" },
            { id: 3, src: "/assets/videos/commercial/clip-3.mp4", thumbnail: "/assets/thumbnails/commercial/thumb-3.svg" },
        ],
    },
];

const AnimatedSection: FC = () => {
    const [activeTab, setActiveTab] = useState<number>(1);
    const [activeVideo, setActiveVideo] = useState<string>(tabs[0].videos[0].src);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [progress, setProgress] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [animateOnce, setAnimateOnce] = useState<boolean>(true);


    const videoRef = useRef<HTMLVideoElement | null>(null);
    const currentTab = useMemo(() => tabs.find(tab => tab.id === activeTab), [activeTab]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 1350) {
                setActiveTab(2);
                setActiveVideo(tabs[1].videos[0].src);
            } else {
                setActiveTab(1);
                setActiveVideo(tabs[0].videos[0].src);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const updateProgress = () => {
            if (videoRef.current) {
                const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
                setProgress(percentage || 0);
            }
        };
        
        if (videoRef.current) {
          // Ensure video is reset and loads before playing
          const handleLoadedData = () => {
            if (isPlaying) {
              videoRef.current?.play();
            }
        };   
        
        videoRef.current.addEventListener("loadedData", handleLoadedData);
        
        return () => {
          videoRef.current?.removeEventListener("loadedData", handleLoadedData);
        };
      }
    }, [activeVideo]);  // Trigger only when video changes

    // Handle video play/pause
    const togglePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play().catch(error => {
                    console.error("Play request interrupted:", error);
                });
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="w-full lg:h-[600px] py-10 bg-black text-white flex items-center justify-center">
            <div className="container mx-auto lg:px-40 px-5">
                <div className="grid lg:grid-cols-3 grid-cols-1 items-center lg:items-start lg:justify-between">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}  // Ensures animation runs only once
                        className="w-full flex flex-col"
                    >
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    setActiveVideo(tab.videos[0].src);
                                    setAnimateOnce(true); // Reset animation on tab switch
                                }}
                                className={`text-left px-4 py-4 pl-8 lg:pl-16 lg:py-10 border-l-4 transition-all ${activeTab === tab.id ? "border-white text-white" : "border-gray-600 text-gray-500"}`}
                            >
                                <h3 className="text-3xl lg:text-3xl font-semibold">{tab.title}</h3>
                                <p className="text-md lg:text-lg mt-1 lg:mt-3 w-full lg:w-[70%]">{tab.description}</p>
                            </button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="w-full col-span-2 flex flex-col items-center"
                    >
                     <div className="relative">
                        <video
                            ref={videoRef}
                            src={activeVideo}
                            className="rounded-lg w-[800px] h-[250px] lg:h-[350px]"
                            autoPlay
                            loop
                            onLoadedData={() => setIsLoading(false)}
                        />
                        {/* Play/Pause button with circular Animation */}
                        <button
                            onClick={togglePlayPause}
                            className="absolute right-[-80px] w-16 h-16 flex items-center justify-center rounded-full bg-black border-2 border-white"
                          >
                             {isLoading ? (
                                <div
                                   className={`h-8 w-8 border-4 border-white border-t-transparent rounded-full ${
                                        animateOnce ? "animate-spin-once" : "" }`}
                                        onAnimationEnd={() => setAnimateOnce(false)}
                                ></div>
                            ) : isPlaying ? (
                                <Pause size={30} color="white" />
                            ) : (
                                <Play size={30} color="white" />
                            )}
                        </button>
                      </div>

                        <div className="mt-4 flex space-x-4">
                            {currentTab?.videos.map((video) => (
                                <button
                                    key={video.id}
                                    onClick={() => setActiveVideo(video.src)}
                                    className={`flex flex-col font-light items-center justify-center transition-opacity duration-300 hover:opacity-100 cursor-pointer ${activeVideo === video.src ? "opacity-1" : "opacity-50"}`}
                                >
                                    <img
                                        src={video.thumbnail}
                                        alt="Thumbnail"
                                        className={`w-16 h-16 ${activeVideo === video.src ? "border-white" : "border-gray-500"}`}
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AnimatedSection;
