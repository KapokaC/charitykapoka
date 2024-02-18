import React from 'react';
import { Card as BootstrapCard, Image } from 'react-bootstrap';
import './cards.css';

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <BootstrapCard
      onClick={() => setOpenModal({ state: true, project: project })}
      className="project-card"
    >
      <Image src={project.image}  className='img-card' key={project.id}/>
      <div className="card-tags">
        {project.tags?.map((tag, index) => (
          <span className="card-tag" key={index}>{tag}</span>
        ))}
      </div>
      <div className="details">
        <h4 className="card-title">{project.title}</h4>
        <p className="card-date">{project.date}</p>
        <p className="card-description">{project.description}</p>
      </div>
      <div className="card-members">
        {project.member?.map((member, index) => (
          <Image className="card-avatar" src={member.img} roundedCircle key={index}/>
        ))}
      </div>
      {/* <Button className="view-button">View Project</Button> */}
    </BootstrapCard>
    );
}

export default ProjectCards