import React from 'react';
import {
  SiPython, SiJavascript, SiReact, SiFlask, SiHtml5, SiCss3, SiTailwindcss, SiD3Dotjs,
  SiNextdotjs, SiC, SiRaspberrypi, SiOpenai, SiTypescript
} from 'react-icons/si';

const techIcons = {
  'Python': SiPython,
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'NextJS': SiNextdotjs,
  'Flask': SiFlask,
  'HTML': SiHtml5,
  'CSS': SiCss3,
  'Tailwind CSS': SiTailwindcss,
  'C': SiC,
  'Raspberry Pi': SiRaspberrypi,
  'OpenAI API': SiOpenai,
  'D3.js': SiD3Dotjs
};

export const renderTextWithTechChips = (text, isDark, chipSize = 'text-xs') => {
  const techKeywords = Object.keys(techIcons);
  const escapedTechs = techKeywords.map(t => {
    const escaped = t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return `\\b${escaped}\\b`;
  });
  const techRegex = new RegExp(`(${escapedTechs.join('|')})`, 'gi');

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = techRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    const tech = techKeywords.find(t => t.toLowerCase() === match[1].toLowerCase());
    const Icon = techIcons[tech];
    parts.push(
      <span key={`${tech}-${match.index}`} className={`inline-flex items-center gap-1 px-2 py-0.5 rounded ${chipSize} text-slate-700 font-normal mx-1`} style={{
        color: isDark ? 'rgb(248, 250, 252)' : '#3A2456b3',
        background: 'var(--surface)',
        border: isDark ? '1.5px solid #cbd5e1' : '1.5px solid #3A2456b3',
      }}>
        <Icon size={12} style={{ flexShrink: 0 }} />
        <span>{tech}</span>
      </span>
    );

    lastIndex = techRegex.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};
