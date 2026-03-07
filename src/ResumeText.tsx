export default function ResumeText() {
  return (
    <div className="about-page">
      <div className="resume-content">

        {/* Header */}
        <div className="resume-header">
          <h1>Ella Bennison</h1>
          <div className="resume-links">
            <span>📧 ellaabennison@gmail.com</span>
            <span>🔗 linkedin.com/in/ella-bennison-7bab61254</span>
            <span>💻 github.com/EllaCompSci</span>
          </div>
          <p className="resume-summary">
            Final-year BSc Computer Science with Artificial Intelligence student at the University of Sussex (expected First-Class). Strong foundation in software development, machine learning, and computational modelling, with experience building scientific and machine learning systems in Julia and Python.
          </p>
        </div>

        {/* Current Position */}
        <div className="resume-section">
          <h2>Current Position</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Lab Demonstrator</h3>
              <span className="resume-date">Sep 2025 – Present</span>
            </div>
            <p className="resume-institution">University of Sussex, Brighton</p>
            <ul>
              <li>Teaching modules: Introduction to Data Science, Acquired Intelligence and Adaptive Behaviour, Applied Machine Learning</li>
              <li>Deliver in-person lab support for second-year students</li>
              <li>Assist with debugging, conceptual clarification, and implementation guidance</li>
              <li>Work closely with module convenors and doctoral researchers to deliver module content</li>
            </ul>
          </div>
        </div>

        {/* Projects & Research */}
        <div className="resume-section">
          <h2>Projects & Research</h2>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Junior Research Associates</h3>
              <span className="resume-date">Jun 2025 – Oct 2025</span>
            </div>
            <p className="resume-institution">University of Sussex</p>
            <ul>
              <li>Developed modular neuron models using systems of ordinary differential equations in Julia</li>
              <li>Implemented Leaky Integrate-and-Fire (LIF) models within a symbolic framework using ModelingToolkit.jl</li>
              <li>Benchmarked simulation and compile times against NEST, demonstrating improved efficiency</li>
              <li>Designed experiments comparing component-based neuron models within heterogeneous networks</li>
              <li>Presented findings at the Junior Research Associates Poster Exhibition</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h3>Final Year Project</h3>
              <span className="resume-date">Oct 2025 – Present</span>
            </div>
            <p className="resume-institution">University of Sussex</p>
            <ul>
              <li>Implementing surrogate gradient descent and backpropagation through time to train LIF neuron models</li>
              <li>Evaluating training performance and computational efficiency against established platforms (e.g., SNNTorch)</li>
              <li>Exploring biologically grounded training methods for Hodgkin–Huxley neuron models, with aim of contributing toward publication</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="resume-section">
          <h2>Education</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>BSc Computer Science with Artificial Intelligence</h3>
              <span className="resume-date">Sep 2022 – Present</span>
            </div>
            <p className="resume-institution">University of Sussex, Brighton</p>
            <ul>
              <li>AI: Natural language engineering, Neural networks, Genetic algorithms and reinforcement learning</li>
              <li>Neuroscience: Decision processes in human cognition, Structure and function of the human brain, Neurons, brains, behaviour and minds</li>
            </ul>
          </div>
        </div>

        {/* Outreach */}
        <div className="resume-section">
          <h2>Outreach & Leadership</h2>
          <div className="resume-item">
            <div className="resume-item-header">
              <h3>HackSussex</h3>
              <span className="resume-date">Feb 2024 – Oct 2025</span>
            </div>
            <p className="resume-institution">Brighton, Sussex</p>
            <ul>
              <li>Co-organised university hackathons and game jams</li>
              <li>Led sponsor communications and external partnerships</li>
              <li>Contributed to live-streamed technical events reaching over 1M online viewers</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}