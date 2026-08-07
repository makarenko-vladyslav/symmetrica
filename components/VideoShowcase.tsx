
"use client";

export default function VideoShowcase() {
  return (
    <section className="py-20 sm:py-24 bg-[hsl(212_48%_9%)] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[hsl(185_85%_45%)] block mb-3">
            Відеоекскурсія та атмосфера
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            Подивіться, як працює Symmetrica
          </h2>
          <p className="text-sm sm:text-base text-white/70 font-body">
            Найвищі стандарти стерильності, сучасні операційні та турботливий сервіс для кожного пацієнта.
          </p>
        </div>

        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/15 relative bg-black">
          <video
            controls
            poster="https://images.pexels.com/videos/4490282/pexels-photo-4490282.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
            className="w-full h-[420px] object-cover"
          >
            <source
              src="https://videos.pexels.com/video-files/4490282/4490282-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
  );
}
