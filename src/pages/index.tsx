import Head from 'next/head';
import { useState } from 'react';
import KanbanBoard from '@/components/kanban/KanbanBoard';
import RichTextEditor from '@/components/editor/RichTextEditor';
import TagManager from '@/components/tags/TagManager';

export default function Home()  {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-teal-700">
      <Head>
        <title>Ideascape - Preserve Your Original Thinking</title>
        <meta name="description" content="A modern idea management application that preserves original thinking" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Ideascape
        </h1>
        <p className="text-xl text-white text-center mb-12">
          Preserve your original thinking in the age of AI
        </p>
        
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold text-white mb-4">Coming Soon</h2>
          <p className="text-white mb-4">
            We're building a modern idea management system that helps you maintain your original thinking.
          </p>
        </div>
          return (
        <div className="p-4 max-w-7xl mx-auto">
          <h1 className="text-3xl font-semibold mb-4 text-center">Ideascape</h1>
          <div className="mb-6">
            <RichTextEditor value={content} onChange={setContent} />
         </div>
         <KanbanBoard />
        </div>
        // Inside your Home component return:
        <>
          <KanbanBoard />
          <TagManager />
        </>
       </main>
    </div>
  );
}
