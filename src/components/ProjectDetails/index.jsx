import React from 'react';
import { Modal, Button } from '@mui/material';
import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import './styles.css';

const index = ({ openModal, setOpenModal }) => {
   const project = openModal?.project;

  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false, project: null })}>
      <div className="projectsDetails-container">
        <div className="projectsDetails-wrapper">
          <CloseRounded
            className="projectsDetails-close-icon"
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <div className="projectsDetails-project-image" src={project?.image} />
          <div className="projectsDetails-title">{project?.title}</div>
          <div className="projectsDetails-date">{project.date}</div>
          <div className="projectsDetails-tags">
            {project?.tags.map((tag, index) => (
              <div className="projectsDetails-tag"  key={index}>{tag}</div>
            ))}
          </div>
          <div className="projectsDetails-description">{project?.description}</div>
          {project.member && (
            <>
              <div className="projectsDetails-label">Members</div>
              <div className="projectsDetails-members">
                {project?.member.map((member, index) => (
                  <div className="projectsDetails-member" key={index}>
                    <div className="projectsDetails-member-image" src={member.img} />
                    <div className="projectsDetails-member-name">{member.name}</div>
                    <a href={member.github} target="new">
                      <GitHub className="projectsDetails-member-icon" />
                    </a>
                    <a href={member.linkedin} target="new">
                      <LinkedIn className="projectsDetails-member-icon" />
                    </a>
                  </div>
                ))}
              </div>
            </>
          )}
          <div className="projectsDetails-button-group">
            <Button className=" projectsDetails-button button dull" href={project?.github} target="new">
              View Code
            </Button>
            <Button className="projectsDetails-button" href={project?.webapp} target="new">
              View Live App
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default index;
