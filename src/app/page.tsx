'use client';
import React, { useEffect } from 'react';
import { HeroSection } from '@/src/components/hero-section';
import { ServicesSection } from '@/src/components/services-section';
import { LatestPostsSection } from '@/src/components/latest-posts-section';
import { CtaSection } from '@/src/components/cta-section';
import { Header } from '@/src/components/header';
import { Footer } from '@/src/components/footer';
import ScrollIndicator from '@/src/components/scroll-indicator';
import BackgroundSlideshow from '@/src/components/background-slideshow';

export default function Home() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const prev = document.body.style.overflow;
        // Hide body scrollbar while home is mounted so the inner main handles scrolling
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = prev || '';
        };
    }, []);
    return (
        <div className="min-h-screen overflow-hidden relative">
            <BackgroundSlideshow images={['/bg-user.jpg']} />
            <Header />
            <main
                className="overflow-y-auto snap-y snap-mandatory scroll-smooth hide-scrollbar"
                style={{ height: 'calc(100vh - 80px)' }}
            >
                <section
                    id="hero"
                    data-scroll="hero"
                    data-scroll-title="홈"
                    className="snap-start flex items-center justify-center"
                    style={{ height: 'calc(100vh - 80px)' }}
                >
                    <HeroSection />
                </section>

                <section
                    id="services"
                    data-scroll="services"
                    data-scroll-title="서비스"
                    className="snap-start flex items-center justify-center"
                    style={{ height: 'calc(100vh - 80px)' }}
                >
                    <ServicesSection />
                </section>

                <section
                    id="latest-posts"
                    data-scroll="latest-posts"
                    data-scroll-title="최신글"
                    className="snap-start flex items-center justify-center"
                    style={{ height: 'calc(100vh - 80px)' }}
                >
                    <LatestPostsSection />
                </section>

                <section
                    id="cta"
                    data-scroll="cta"
                    data-scroll-title="가입하기"
                    className="snap-start flex flex-col items-center"
                    style={{ height: 'calc(100vh - 80px)' }}
                >
                    <div className="w-full flex items-center justify-center mt-auto mb-auto">
                        <CtaSection />
                    </div>

                    <div className="w-full mt-auto">
                        <Footer />
                    </div>
                </section>
            </main>

            <ScrollIndicator />
        </div>
    );
}
