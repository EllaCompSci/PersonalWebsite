export default function AboutText() {
  const image_path = '../PFP.jpg'
  return (
    <div className="about-page">
      <div className="about-content">
        <img className='PFP' src={image_path} />
        <div className="typewriter">
          <h1>Hi, I'm Ella 👋</h1>
          <h3>Pronouns: She/Her</h3>
          <p>
            I'm a final-year Computer Science with AI student at the University of Sussex, 
            expected to graduate with a First-Class degree. I have a strong foundation in 
            software development, machine learning, and computational modelling, with hands-on 
            experience building scientific systems in Julia and Python.
          </p>
          <p>
            My research focuses on spiking neural networks — I've implemented neuron models 
            using ordinary differential equations, benchmarked simulation performance against 
            established platforms, and presented findings at the Junior Research Associates 
            Poster Exhibition.
          </p>
          <p>
            Outside of research, I work as a Lab Demonstrator at Sussex, supporting 
            second-year students across Data Science, Applied Machine Learning, and Adaptive 
            Behaviour modules. I also co-organised university hackathons through HackSussex, 
            leading sponsor communications and contributing to live-streamed events reaching 
            over 1 million online viewers.
          </p>
          <p>
            I'm passionate about applying analytical and programming skills to build 
            scalable, high-impact software — and I'm always looking for the next interesting 
            problem to solve.
          </p>
          <div className="skills">
            <h2>Skills & Tech Stack</h2>
            <div className="skills-grid">
                <div className="skill-category">
                <h3>Languages</h3>
                <div className="skill-tags">
                    <span>Python</span>
                    <span>Julia</span>
                    <span>TypeScript</span>
                    <span>JavaScript</span>
                    <span>Java</span>
                    <span>C</span>
                </div>
                </div>
                <div className="skill-category">
                <h3>Frameworks & Libraries</h3>
                <div className="skill-tags">
                    <span>React</span>
                    <span>PyTorch</span>
                    <span>scikit-learn</span>
                    <span>ModelingToolkit.jl</span>
                    <span>SNNTorch</span>
                </div>
                </div>
                <div className="skill-category">
                <h3>Areas</h3>
                <div className="skill-tags">
                    <span>Machine Learning</span>
                    <span>Spiking Neural Networks</span>
                    <span>Computational Modelling</span>
                    <span>Data Science</span>
                    <span>NLP</span>
                </div>
                </div>
            </div>
            </div>
            <div className="video-section">
            <h2>Featured</h2>
            <p className="video-description">
                I was part of the HackSussex live-streamed event, one of the university hackathons I co-organised. 
                The stream reached over 1 million online viewers, covering the event from sponsor communications 
                to live technical demonstrations. It was a fantastic experience bringing together students, 
                sponsors, and the wider tech community.
            </p>
            <div className="video-wrapper">
                <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VixYfv0UEyE"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                />
            </div>
            </div>
        </div>
      </div>
    </div>
  );
}