import React from 'react';

type Member = { name: string; role: string; avatar: string; bio: string };

export default function Team() {
  const members: Member[] = [
    { name: 'Alex Morgan', role: 'Founder & CEO', avatar: 'A', bio: 'Vision-driven leader with a passion for design and scalable systems.' },
    { name: 'Taylor Kim', role: 'CTO', avatar: 'T', bio: 'Architects cloud-native platforms and ML-driven experiences.' },
    { name: 'Jordan Lee', role: 'Lead Designer', avatar: 'J', bio: 'Crafts intuitive interfaces with accessibility-first principles.' },
    { name: 'Riley Chen', role: 'Product Manager', avatar: 'R', bio: 'Aligns customer needs with product strategy and delivery.' },
  ];

  return React.createElement(
    'section',
    { id: 'team', className: 'relative overflow-hidden py-24 lg:py-32 bg-gradient-to-b from-background via-accent/20 to-background' },
    React.createElement('div', { className: 'aurora-layer' },
      React.createElement('div', { className: 'aurora-blob aurora-blob--1' }),
      React.createElement('div', { className: 'aurora-blob aurora-blob--2' }),
      React.createElement('div', { className: 'aurora-blob aurora-blob--3' }),
    ),
    React.createElement('div', { className: 'glow-ring' }),
    React.createElement(
      'div',
      { className: 'relative z-10 container mx-auto px-4 lg:px-8' },
      React.createElement(
        'div',
        { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-4xl lg:text-5xl font-bold mb-6' },
          'Meet the ',
          React.createElement('span', { className: 'text-gradient-brand' }, 'Team'),
        ),
        React.createElement('p', { className: 'text-lg text-muted-foreground max-w-2xl mx-auto' },
          'A small, multidisciplinary group turning ideas into exceptional products.',
        ),
      ),
      React.createElement(
        'div',
        { className: 'grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto' },
        members.map((member) => (
          React.createElement(
            'div',
            { key: member.name, className: 'p-6 rounded-2xl glass-card neo-card hover:neo-card-inset transition-smooth' },
            React.createElement('div', { className: 'w-20 h-20 rounded-full bg-gradient-card flex items-center justify-center text-2xl font-bold text-gradient-cta mx-auto mb-4' }, member.avatar),
            React.createElement('h3', { className: 'text-xl font-semibold text-center' }, member.name),
            React.createElement('p', { className: 'text-primary/80 text-center text-sm mb-2' }, member.role),
            React.createElement('p', { className: 'text-sm text-muted-foreground text-center mb-4' }, member.bio),
            React.createElement(
              'div',
              { className: 'flex items-center justify-center gap-4' },
              React.createElement('a', { href: '#', 'aria-label': 'LinkedIn', className: 'p-2 rounded-md hover:bg-accent/40 transition-smooth' }, 'LI'),
              React.createElement('a', { href: '#', 'aria-label': 'GitHub', className: 'p-2 rounded-md hover:bg-accent/40 transition-smooth' }, 'GH'),
            ),
          )
        )),
      ),
    ),
  );
}


