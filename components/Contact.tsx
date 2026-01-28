"use client";

import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';
import FloatingShape from './FloatingShape';
import Reveal from './Reveal';

export interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
    return (
        <section id="contact" className="bg-loly-light-green py-32 px-6 border-t-2 border-black relative overflow-hidden flex flex-col items-center justify-center">

            <FloatingShape type="circle" color="bg-loly-green" className="w-24 h-24 top-20 left-10 opacity-80 animate-float" />
            <FloatingShape type="circle" color="bg-loly-yellow" className="w-12 h-12 bottom-20 right-20 animate-float-delayed" delay />
            <FloatingShape type="donut" color="border-loly-pink" className="w-16 h-16 bottom-10 left-[20%] rotate-12 bg-white animate-spin-slow" />


            <div className="max-w-4xl mx-auto text-center relative z-10">
                <Reveal animation="pop">
                    <h2 className="text-6xl md:text-9xl font-black uppercase text-transparent mb-2 relative hover:scale-105 transition-transform duration-500 cursor-default">
                        <span className="absolute inset-0 text-black/10 blur-[2px] translate-y-2 translate-x-2 select-none" aria-hidden="true">LET'S CHAT</span>
                        <span className="text-outline text-black/5 relative z-10 select-none">LET'S CHAT</span>
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <h2 className="text-5xl md:text-7xl font-bold text-black uppercase tracking-tight">Got a wild idea?</h2>
                        </div>
                    </h2>
                </Reveal>

                <div className="mt-12 space-y-6">
                    <Reveal delay={200}>
                        <p className="text-xl md:text-2xl text-gray-700 font-medium max-w-2xl mx-auto">
                            A memecoin that needs branding? A degen project that deserves attention?
                        </p>
                    </Reveal>
                    <Reveal delay={300}>
                        <p className="text-2xl font-black text-black">
                            We're all ears. No pitch decks required.
                        </p>
                    </Reveal>
                </div>

                <div className="mt-12">
                    <Reveal delay={400} animation="pop">
                        <button
                            onClick={() => window.location.href = 'mailto:hello@lolypop.agency?subject=Let\'s Build Something Wild'}
                            aria-label="Send us an email to start a conversation"
                            className="bg-black text-white text-xl font-bold py-5 px-12 rounded-full border-2 border-white shadow-neo-lg hover:shadow-neo hover:translate-x-[4px] hover:translate-y-[4px] active:shadow-neo-active active:translate-x-[8px] active:translate-y-[8px] transition-all flex items-center gap-3 mx-auto group"
                        >
                            <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            HIT US UP
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                        </button>
                    </Reveal>
                    <Reveal delay={600}>
                        <p className="mt-6 font-mono text-xs text-green-700 tracking-wider">
                            Response time: faster than your token can pump 🚀
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;