import { useState } from 'react';


const projects = {
  'project-one': {
    name: 'Project One',
    description: 'A cool project I built.',
    link: 'https://github.com/yourusername/project-one',
  },
  'project-two': {
    name: 'Project Two',
    description: 'Another cool project.',
    link: 'https://github.com/yourusername/project-two',
  },
  'project-three': {
    name: 'Project Three',
    description: 'Yet another cool project.',
    link: 'https://github.com/yourusername/project-three',
  },
};

type Line = { type: 'input' | 'output' | 'error'; text: string };

type Props = {
  onNavigate: (page: string) => void;
  initialCwd?: string
};

export default function Terminal({ onNavigate , initialCwd ='~'}: Props) {
  const [input, setInput] = useState('');
  const [lines, setLines] = useState<Line[]>([
    { type: 'output', text: 'Welcome! Type "ls" to navigate the webiste.' },
    { type: 'output', text: 'Use "cd <Path>" to view a pages and projects.' },
    {type: 'output', text: 'Type "help" for all available commands.'  },
  ]);
  const [cwd, setCwd] = useState(initialCwd);

  const handleCommand = (cmd: string) => {
    const newLines: Line[] = [...lines, { type: 'input', text: `${cwd} $ ${cmd}` }];
    const parts = cmd.trim().split(' ');
    const command = parts[0];
    const arg = parts[1];

    if (command === 'ls') {
      if (cwd === '~') {
        newLines.push({ type: 'output', text: 'projects/' });
        newLines.push({ type: 'output', text: 'About/'});
        newLines.push({ type: 'output', text: 'Resume/'});
        newLines.push({ type: 'output', text: 'LossVisual/'});
      } else if (cwd === '~/projects') {
        Object.keys(projects).forEach(p => newLines.push({ type: 'output', text: p }));
      } else {
        const project = projects[cwd.replace('~/projects/', '') as keyof typeof projects];
        if (project) {
          newLines.push({ type: 'output', text: `name: ${project.name}` });
          newLines.push({ type: 'output', text: `description: ${project.description}` });
          newLines.push({ type: 'output', text: `link: ${project.link}` });
        }
      }
    } else if (command === 'cd') {
      if (!arg || arg === '~') {
        setCwd('~');
        newLines.push({ type: 'output', text: '' });
      } else if (arg === 'projects' && cwd === '~') {
        setCwd('~/projects');
        newLines.push({ type: 'output', text: '' });
      } else if (cwd === '~/projects' && projects[arg as keyof typeof projects]) {
        setCwd(`~/projects/${arg}`);
        newLines.push({ type: 'output', text: `Entered ${arg}. Type "ls" to see details.` });
      } else if (arg === 'About' && cwd === '~') {
        onNavigate('about');
        setCwd('~/About');
      } else if(arg ==='Resume' && cwd ==='~' || cwd==='~/About'){
        onNavigate('resume')
        setCwd('~/Resume')
    } else if (arg ==='LossVisual' && cwd ==='~'){
        onNavigate('LossVisualisation')
        setCwd('~/LossVisual')
    } else if (arg === '..') {
        const parts = cwd.split('/');
        parts.pop();
        setCwd(parts.join('/') || '~');
        newLines.push({ type: 'output', text: '' });
      } else {
        newLines.push({ type: 'error', text: `cd: no such directory: ${arg}` });
      }
    } else if (command === 'clear') {
      setLines([]);
      setInput('');
      return;
    } else if (command === 'cd..')
    {
        onNavigate('home')
        setCwd('~')
        newLines.push({type: 'output', text: ''})
    }  else if (command === 'hello' || command === 'hi') {
  newLines.push({ type: 'output', text: 'Hey there! 👋' });

    } else if (command === 'whoami') {
    newLines.push({ type: 'output', text: 'ella@portfolio' });
    newLines.push({ type: 'output', text: 'Computer Scientist. AI Researcher. Hackathon Organiser.' });

    } else if (command === 'date') {
    newLines.push({ type: 'output', text: new Date().toDateString() });

    } else if (command === 'sudo') {
    newLines.push({ type: 'error', text: 'Nice try 😏' });

    } else if (command === 'rm' && arg === '-rf') {
    newLines.push({ type: 'error', text: 'Absolutely not. 💀' });

    } else if (command === 'coffee' || command === 'tea') {
    newLines.push({ type: 'output', text: '☕ Brewing...' });
    newLines.push({ type: 'output', text: 'Error: out of coffee. Please refill and try again.' });

    } else if (command === 'hack') {
    newLines.push({ type: 'output', text: 'Initialising hack sequence...' });
    newLines.push({ type: 'output', text: '> accessing mainframe...' });
    newLines.push({ type: 'output', text: '> just kidding 😄' });

    } else if (command === 'help') {
    newLines.push({ type: 'output', text: 'Available commands:' });
    newLines.push({ type: 'output', text: '  ls          — list directories' });
    newLines.push({ type: 'output', text: '  cd <dir>    — navigate to directory' });
    newLines.push({ type: 'output', text: '  cd ..       — go back' });
    newLines.push({ type: 'output', text: '  clear       — clear terminal' });
    newLines.push({ type: 'output', text: '  whoami      — who are you?' });
    newLines.push({ type: 'output', text: '  sudo        — don\'t even try it' });
    newLines.push({ type: 'output', text: '  coffee      — essential' });
    }
    else {
      newLines.push({ type: 'error', text: `command not found: ${command}` });
    }

    setLines(newLines);
    setInput('');
  };

  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dot red" />
        <span className="terminal__dot yellow" />
        <span className="terminal__dot green" />
        <span className="terminal__title">ella@Terminal</span>
      </div>
      <div className="terminal__body">
        {lines.map((line, i) => (
          <div key={i} className={`terminal__line terminal__line--${line.type}`}>
            {line.text}
          </div>
        ))}
        <div className="terminal__input-row">
          <span className="terminal__prompt">{cwd} $&nbsp;</span>
          <input
            className="terminal__input"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleCommand(input)}
            autoFocus
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}