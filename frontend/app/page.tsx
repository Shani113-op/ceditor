"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import {
  CheckCircle2, Play, ArrowRight, XCircle,
  Smartphone, Monitor, Zap, Users, ShieldCheck,
  Star, MessageSquare, Layers, Scissors, Award,
  TrendingUp, Clock, DollarSign, Video, Sparkles,
  Globe, Lock, FileVideo, BarChart3, CheckCircle
} from 'lucide-react';

export default function LandingPage() {
  const [activeTab, setActiveTab] = useState('Reels');
  const [sliderPosition, setSliderPosition] = useState(50);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-slate-950 text-white min-h-screen selection:bg-indigo-500/30 relative overflow-hidden">

      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Cursor Glow Effect */}
      <div
        className="fixed w-[600px] h-[600px] pointer-events-none z-50 transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.03) 0%, transparent 70%)',
        }}
      />

      {/* 2. HERO SECTION - Enhanced */}
      <section className="pt-40 pb-32 px-6 relative">
        <motion.div style={{ opacity, scale }} className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 px-4 py-2 rounded-full text-indigo-400 text-xs font-bold mb-8 backdrop-blur-sm"
          >
            <Sparkles size={14} className="animate-pulse" />
            <span>TRUSTED BY 500+ TOP CREATORS</span>
            <TrendingUp size={14} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tight mb-6"
          >
            <span className="bg-gradient-to-b from-white via-white to-slate-400 bg-clip-text text-transparent">
              Stop Editing.
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Start Creating.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            The dedicated marketplace connecting world-class video editors with YouTubers, Podcasters, and Brands.
            <span className="text-white font-semibold"> Get your time back and scale your views.</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black hover:bg-slate-100 px-10 py-5 rounded-full font-bold flex items-center justify-center gap-3 transition shadow-2xl group text-lg"
            >
              Hire an Editor
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: 'rgb(99, 102, 241)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-900/50 border-2 border-white/10 hover:bg-slate-800/50 px-10 py-5 rounded-full font-bold transition backdrop-blur-sm text-lg"
            >
              Work as an Editor
            </motion.button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { icon: Video, value: '10K+', label: 'Videos Delivered' },
              { icon: Users, value: '500+', label: 'Active Creators' },
              { icon: Award, value: '4.9/5', label: 'Average Rating' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm"
              >
                <stat.icon className="mx-auto mb-2 text-indigo-400" size={24} />
                <div className="text-3xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* 3. PAIN VS SOLUTION - Enhanced */}
      <section className="py-32 px-6 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black mb-4"
            >
              Why EditFlow?
            </motion.h2>
            <p className="text-slate-400 text-lg">The difference is night and day</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-red-500/5 to-red-500/10 border border-red-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-red-400 font-bold mb-8 flex items-center gap-3 text-xl">
                <XCircle size={24} /> The Old Way (DMs)
              </h3>
              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">❌</span>
                  <span className="group-hover/item:text-white transition">Lost messages in messy Discord/Twitter threads</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">❌</span>
                  <span className="group-hover/item:text-white transition">Expired WeTransfer links and missing assets</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">❌</span>
                  <span className="group-hover/item:text-white transition">Ghosting and payment uncertainty</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">❌</span>
                  <span className="group-hover/item:text-white transition">No quality guarantees or refund protection</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-3xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-emerald-400 font-bold mb-8 flex items-center gap-3 text-xl">
                <CheckCircle2 size={24} /> The EditFlow Way
              </h3>
              <ul className="space-y-5 text-slate-300">
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">✅</span>
                  <span className="group-hover/item:text-white transition">Centralized dashboard for all active projects</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">✅</span>
                  <span className="group-hover/item:text-white transition">Native asset management & permanent cloud links</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">✅</span>
                  <span className="group-hover/item:text-white transition">Secure milestone payments with escrow protection</span>
                </li>
                <li className="flex items-start gap-4 group/item">
                  <span className="text-2xl">✅</span>
                  <span className="group-hover/item:text-white transition">Verified editors with portfolio and reviews</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. NICHE SHOWCASE (TABS) - Enhanced */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl font-black mb-6"
            >
              Master Every Format
            </motion.h2>
            <p className="text-slate-400 text-lg mb-10">Specialized editors for every content type</p>

            <div className="flex flex-wrap justify-center gap-3">
              {['Reels', 'YouTube', 'Gaming', 'Podcast', 'TikTok', 'Ads'].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === tab
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 shadow-lg shadow-indigo-500/50'
                    : 'bg-slate-800/50 hover:bg-slate-700/50 border border-white/10'
                    }`}
                >
                  {tab}
                </motion.button>
              ))}
            </div>
          </div>

          <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotateY: 10 }}
                transition={{ duration: 0.5 }}
                className="text-center p-12 relative z-10"
              >
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="bg-gradient-to-br from-slate-700 to-slate-800 w-28 h-28 rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl border border-white/10"
                >
                  {activeTab === 'Reels' || activeTab === 'TikTok' ? (
                    <Smartphone className="text-indigo-400" size={40} />
                  ) : (
                    <Monitor className="text-indigo-400" size={40} />
                  )}
                </motion.div>
                <h4 className="text-3xl font-black mb-3 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                  {activeTab} Specialist View
                </h4>
                <p className="text-slate-400 max-w-md mx-auto text-lg">
                  Connect with expert editors who specialize in {activeTab} content creation and optimization.
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* 5. BEFORE & AFTER SLIDER - Enhanced */}
      <section className="py-32 px-6 bg-gradient-to-b from-indigo-600/5 to-purple-600/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e512_1px,transparent_1px),linear-gradient(to_bottom,#4f46e512_1px,transparent_1px)] bg-[size:64px_64px]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center relative z-10"
        >
          <h2 className="text-5xl font-black mb-6">See the Magic in Action</h2>
          <p className="text-slate-400 text-lg mb-16">From raw footage to viral content</p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              setSliderPosition(x);
            }}
          >
            <div className="flex relative h-96">
              <div
                className="absolute inset-0 bg-slate-800 flex items-center justify-center"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <div className="text-center p-8">
                  <div className="text-slate-500 font-black text-xl mb-4 italic">RAW FOOTAGE</div>
                  <div className="w-64 h-40 bg-slate-700/50 rounded-xl border-2 border-dashed border-slate-600"></div>
                </div>
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center"
                style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
              >
                <div className="text-center p-8">
                  <div className="text-white font-black text-xl mb-4 tracking-widest flex items-center justify-center gap-2">
                    <Sparkles size={20} /> EDITED PRO
                  </div>
                  <div className="w-64 h-40 bg-white/20 rounded-xl border-2 border-white/30 backdrop-blur-sm shadow-2xl"></div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute top-0 bottom-0 w-1 bg-white flex items-center justify-center cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-white text-indigo-600 p-3 rounded-full shadow-2xl border-4 border-slate-950">
                <Zap size={20} fill="currentColor" />
              </div>
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 mt-8 text-sm"
          >
            Drag the slider to see the transformation ✨
          </motion.p>
        </motion.div>
      </section>

      {/* 6. TWO-SIDED FEATURE GRID - Enhanced */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-full text-indigo-400 font-bold text-sm mb-6">
              <Users size={16} /> FOR CREATORS
            </div>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Scale your<br />production.
            </h2>
            <p className="text-slate-400 text-lg mb-10">Everything you need to manage video projects at scale</p>

            <div className="space-y-6">
              {[
                { icon: Users, title: 'Niche Matching', desc: 'Find editors who speak your visual language and understand your niche.', color: 'indigo' },
                { icon: Layers, title: 'Version Control', desc: 'Toggle between Draft 1 and Final with ease. Track all revisions.', color: 'indigo' },
                { icon: Clock, title: 'Fast Turnaround', desc: 'Get your content edited in 24-48 hours with priority support.', color: 'indigo' },
                { icon: BarChart3, title: 'Analytics Dashboard', desc: 'Track project progress, editor performance, and ROI metrics.', color: 'indigo' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex gap-5 group cursor-pointer"
                >
                  <div className="bg-indigo-600/20 p-4 rounded-2xl h-fit group-hover:bg-indigo-600/30 transition-all shadow-lg group-hover:shadow-indigo-500/30">
                    <feature.icon size={28} className="text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-2 group-hover:text-indigo-400 transition">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 font-bold text-sm mb-6">
              <Award size={16} /> FOR EDITORS
            </div>
            <h2 className="text-5xl font-black mb-6 leading-tight">
              Get paid for<br />your craft.
            </h2>
            <p className="text-slate-400 text-lg mb-10">Build a thriving freelance business with our platform</p>

            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: 'Secure Milestones', desc: 'Work with confidence knowing payment is held in escrow until delivery.', color: 'emerald' },
                { icon: Star, title: 'Portfolio Hub', desc: 'Showcase your best reels to high-paying clients with social proof.', color: 'emerald' },
                { icon: DollarSign, title: 'Premium Rates', desc: 'Earn $200-$1000+ per project based on your expertise and niche.', color: 'emerald' },
                { icon: Globe, title: 'Global Clients', desc: 'Work with creators worldwide from the comfort of your home studio.', color: 'emerald' }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: -10 }}
                  className="flex gap-5 group cursor-pointer"
                >
                  <div className="bg-emerald-600/20 p-4 rounded-2xl h-fit group-hover:bg-emerald-600/30 transition-all shadow-lg group-hover:shadow-emerald-500/30">
                    <feature.icon size={28} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-black text-lg mb-2 group-hover:text-emerald-400 transition">{feature.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. HOW IT WORKS - Enhanced */}
      <section className="py-32 px-6 bg-slate-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.1),transparent_50%)]"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto relative z-10"
        >
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4">From Brief to Blockbuster</h2>
            <p className="text-slate-400 text-lg">Your journey to professional video content in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* Connection Lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

            {[
              { step: '01', icon: FileVideo, title: 'Post Project', desc: 'Define your style, budget, deadline, and upload reference videos.' },
              { step: '02', icon: Users, title: 'Pick Editor', desc: 'Review custom proposals, portfolios, and verified creator reviews.' },
              { step: '03', icon: MessageSquare, title: 'Review Drafts', desc: 'Give frame-accurate feedback with our in-platform annotation tools.' },
              { step: '04', icon: Sparkles, title: 'Go Viral', desc: 'Download high-res 4K assets and publish to your channels instantly.' }
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-sm group hover:border-indigo-500/50 transition-all"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center font-black text-lg shadow-lg group-hover:scale-110 transition-transform">
                  {item.step}
                </div>

                <div className="mt-6 mb-6">
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-indigo-500/20 transition-all">
                    <item.icon className="text-indigo-400" size={32} />
                  </div>
                </div>

                <h4 className="text-xl font-black mb-3 text-center">{item.title}</h4>
                <p className="text-slate-400 text-sm text-center leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* 8. TOP TALENT CAROUSEL - Enhanced */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-5xl font-black mb-2">Featured Editors</h2>
              <p className="text-slate-400 text-lg">Handpicked professionals ready to elevate your content</p>
            </div>
            <motion.button
              whileHover={{ x: 5 }}
              className="text-indigo-400 font-bold flex items-center gap-2 hover:text-indigo-300 transition group"
            >
              View All
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </motion.button>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide">
            {[
              { name: 'Alex Rivers', niche: 'Retention Pro', price: '$400', rating: 4.9, reviews: 127, avatar: '🎬' },
              { name: 'Sarah Jenks', niche: 'Podcast King', price: '$250', rating: 5.0, reviews: 89, avatar: '🎙️' },
              { name: 'Motion Guru', niche: '2D Animator', price: '$600', rating: 4.8, reviews: 156, avatar: '✨' },
              { name: 'Vlog Master', niche: 'Storytelling', price: '$350', rating: 4.9, reviews: 203, avatar: '📹' },
              { name: 'Color King', niche: 'Color Grading', price: '$450', rating: 5.0, reviews: 94, avatar: '🎨' }
            ].map((editor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="min-w-[320px] bg-gradient-to-br from-slate-900 to-slate-800 p-8 rounded-3xl border border-white/10 group hover:border-indigo-500/50 transition-all cursor-pointer shadow-xl"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl mb-6 group-hover:scale-110 transition-transform flex items-center justify-center text-4xl shadow-lg">
                  {editor.avatar}
                </div>
                <h4 className="font-black text-xl mb-1">{editor.name}</h4>
                <p className="text-indigo-400 text-sm font-semibold mb-4">{editor.niche}</p>

                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star size={16} fill="currentColor" />
                    <span className="font-bold">{editor.rating}</span>
                  </div>
                  <span className="text-slate-500 text-sm">({editor.reviews} reviews)</span>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <div className="text-sm text-slate-400">Starting at</div>
                    <div className="text-2xl font-black">{editor.price}</div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-indigo-600 hover:bg-indigo-500 w-12 h-12 rounded-full flex items-center justify-center transition"
                  >
                    <ArrowRight size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - NEW */}
      <section className="py-32 px-6 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black mb-4">Loved by Creators</h2>
            <p className="text-slate-400 text-lg">See what our community has to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Jake Martinez', role: 'Gaming YouTuber • 2.3M Subs', quote: 'EditFlow helped me scale from 1 video/week to 5. Game changer for my channel growth!', avatar: '🎮' },
              { name: 'Emma Chen', role: 'Lifestyle Vlogger • 890K Subs', quote: 'The quality is insane. My editor gets my aesthetic perfectly. Worth every penny.', avatar: '✨' },
              { name: 'Marcus Johnson', role: 'Business Coach • 1.1M Subs', quote: 'I got 150 hours back per month. Now I focus on what I do best - creating content ideas.', avatar: '💼' }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-8 bg-slate-900/50 rounded-3xl border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex gap-1 mt-6 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ ACCORDION - Enhanced */}
      <section className="py-32 px-6 bg-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-4">Questions? We got you.</h2>
            <p className="text-slate-400 text-lg">Everything you need to know about EditFlow</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'Who owns the copyright?', a: 'You do. All rights transfer to the creator upon final payment. You have full commercial rights to use the content however you wish.' },
              { q: 'How do I send 50GB of files?', a: 'Our platform integrates seamlessly with Google Drive, Dropbox, and Frame.io for smooth transfers of large video files.' },
              { q: 'What if I need more revisions?', a: 'Project briefs specify revision counts (typically 2-3), but you can always purchase additional revisions at discounted rates.' },
              { q: 'How fast can I get my video edited?', a: 'Standard turnaround is 48-72 hours. Rush delivery (24 hours) available for an additional 30% fee.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and crypto. Payments are held in secure escrow until project completion.' },
              { q: 'Can I work with the same editor long-term?', a: 'Absolutely! Many creators build ongoing partnerships. You can set up monthly retainers for consistent collaboration.' }
            ].map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-gradient-to-r from-slate-800/30 to-slate-900/30 rounded-2xl border border-white/10 backdrop-blur-sm group cursor-pointer"
              >
                <h4 className="font-black text-lg mb-3 flex justify-between items-center group-hover:text-indigo-400 transition">
                  {faq.q}
                  <motion.span
                    className="text-slate-500 text-2xl"
                    whileHover={{ rotate: 45 }}
                  >
                    +
                  </motion.span>
                </h4>
                <p className="text-slate-400 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges - NEW */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Lock, title: 'Secure Payments', desc: 'Bank-level encryption' },
              { icon: ShieldCheck, title: 'Verified Editors', desc: 'Background checked' },
              { icon: Clock, title: '24/7 Support', desc: 'Always here to help' },
              { icon: Award, title: 'Quality Guaranteed', desc: '100% satisfaction' }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <badge.icon className="text-indigo-400" size={28} />
                </div>
                <div className="font-bold mb-1">{badge.title}</div>
                <div className="text-sm text-slate-400">{badge.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. FINAL CALL TO ACTION - Enhanced */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-[4rem] p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]"></div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-3xl backdrop-blur-sm"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              Your next viral video<br />starts here.
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of creators who've scaled their content production with EditFlow
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-indigo-600 hover:bg-slate-100 px-12 py-6 rounded-full font-black text-lg relative z-10 transition shadow-2xl group"
              >
                Create Your Free Account
                <ArrowRight className="inline ml-2 group-hover:translate-x-1 transition" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-12 py-6 rounded-full font-black text-lg transition"
              >
                Browse Editors
              </motion.button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Free to browse</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>24/7 support</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}